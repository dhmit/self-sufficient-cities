 import React from "react";
import PropTypes from "prop-types";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import Dropdown from "react-bootstrap/Dropdown";
import {MapDropdown} from "./MapMicro";
import {TimeControl} from "./MapMicro";


const MAIN_LOCATION = {
    coordinates: [38.9047963808, -76.934579595],
    name: "Food Map of Deanwood Neighborhood over Time",
    date: "Test date",
    info: "Test info"
};

function timeSlider(
    sliderName, currentRange, defaultRange, lastValid,
    sliderChangeFunc, inputChangeFunc, sliderBlurFunc
) {
    const [minValue, maxValue] = defaultRange;
    return (
        <div key={sliderName}>
            <Typography id="range-slider" gutterBottom>
                {sliderName}
            </Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    {sliderInput(
                        currentRange[0],
                        "lower",
                        defaultRange,
                        inputChangeFunc,
                        sliderBlurFunc
                    )}
                </Grid>
                <Grid item xs>
                    <Slider
                        value={typeof lastValid === "object" ? lastValid : defaultRange}
                        onChange={(e, v) => sliderChangeFunc(e, v)}
                        min={minValue}
                        max={maxValue}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                    />
                </Grid>
                <Grid item>
                    {sliderInput(
                        currentRange[1],
                        "upper",
                        defaultRange,
                        inputChangeFunc,
                        sliderBlurFunc
                    )}
                </Grid>
            </Grid>
        </div>
    );
}

function sliderInput(value, bound, defaultRange, inputChangeFunc, sliderBlurFunc) {
    const [minValue, maxValue] = defaultRange;

    return (
        <Input
            value={value}
            margin="dense"
            onChange={e => inputChangeFunc(e, bound)}
            onBlur={() => sliderBlurFunc()}
            inputProps={{
                "step": 1,
                "min": minValue,
                "max": maxValue,
                "type": "number",
                "aria-labelledby": "input-slider"
            }}
        />
    );
}

export default class FoodMap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mainLocation: MAIN_LOCATION,
            markerData: [],
            sliderState: [1900, 2022],
            timeRange: [1900, 2022],
            lastValid: [1900, 2022],
            names: ["Australia", "Canada", "USA", "Poland", "Spain", "France"]
        };
    }

    componentDidMount() {
        fetch("/api/get_food_addresses/")
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    markerData: [...this.state.markerData, ...data["address_data"]]
                });
            });
    };


    setSliderValue = (newLowerBound, newUpperBound) => {
        this.setState({
            sliderState: [newLowerBound, newUpperBound],
            lastValid: [newLowerBound, newUpperBound]
        });
    }

    handleSliderChange = (event, value) => {
        const [newLowerBound, newUpperBound] = value;
        this.setSliderValue(newLowerBound, newUpperBound);
    }

    handleSliderInputChange = (event, bound) => {
        const [currentLowerValue, currentUpperValue] = this.state.sliderState;
        const [minValue, maxValue] = this.state.timeRange;
        let newSliderState = this.state.sliderState;
        let newValidState = [...this.state.lastValid];
        const isLower = (bound === "lower");
        const isUpper = (bound === "upper");

        if (event.target.value === "") {
            this.setState({
                sliderState: [isLower ? "" : currentLowerValue, isUpper ? "" : currentUpperValue],
                lastValid: newValidState
            });
            return;
        }

        const newValue = Number(event.target.value);
        // Only valid bound inputs will affect the slider by changing the newValidState
        if (isLower) {
            if (newValue <= currentUpperValue && newValue >= minValue) {
                newValidState = [newValue, currentUpperValue];
            }
            newSliderState = [newValue, currentUpperValue];

        } else if (isUpper) {
            if (newValue >= currentLowerValue && newValue <= maxValue) {
                newValidState = [currentLowerValue, newValue];
            }
            newSliderState = [currentLowerValue, newValue];
        }

        this.setState({
            sliderState: newSliderState,
            lastValid: newValidState
        });
    };

    handleSliderBlur = () => {
        // Used when slider changed by dragging after changing inputs
        // Needed if inputs are not bounded by the slider" maximum and minimum values
        const [currentLowerValue, currentUpperValue] = this.state.sliderState;
        const [minValue, maxValue] = this.state.timeRange;
        const [lastLowerValid, lastUpperValid] = this.state.lastValid;
        if (currentLowerValue < minValue || currentLowerValue > lastUpperValid) {
            this.setSliderValue(lastLowerValid, currentUpperValue);
        } else if (currentUpperValue > maxValue || currentUpperValue < lastLowerValid) {
            this.setSliderValue(currentLowerValue, lastUpperValid);
        }
    };

    render() {
        const validAddresses = this.state.markerData.filter((location) => (
            (location.coordinates.length === 2 && location.year &&
                location.year >= this.state.lastValid[0] &&
                location.year <= this.state.lastValid[1]) ||
            (!location.year)
        ));

        const markerObjects = validAddresses.map((location, i) => (
            <Marker key={i} position={location.coordinates}>
                <Popup>
                    {location.address}
                </Popup>
            </Marker>
        ));

        return (<>
            <h1>{this.state.mainLocation.name}</h1>
            <div className="main-element">
                {/*if i want to get rid of event selector delete this*/}
                <div className="event-selector">
                    <h3 className="event-selector-title">Location List</h3>
                    <MapDropdown name="Addresses" items={this.state.markerData}/>
                </div>
                <div id="map" className={"pb-5"}>
                    <MapContainer
                        center={this.state.mainLocation.coordinates} zoom={13}
                        scrollWheelZoom={true}
                    >
                        <TileLayer
                            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                            url="http://stamen-tiles-a.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"
                        />
                        {markerObjects}
                    </MapContainer>
                    {timeSlider(
                        "Select a Time Range Below",
                        this.state.sliderState,
                        this.state.timeRange,
                        this.state.lastValid,
                        this.handleSliderChange,
                        this.handleSliderInputChange,
                        this.handleSliderBlur
                    )}
                    <TimeControl
                        sliderState={this.state.sliderState} change={this.setSliderValue}
                        defaultTime={this.state.timeRange}>
                    </TimeControl>
                </div>
            </div>
        </>);
    }
}
