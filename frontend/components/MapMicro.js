import React from "react";
import {MapContainer, Marker, Popup, TileLayer, Polygon} from "react-leaflet";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
// AFTERNOON TEAM

const ADDRESS_DATA = [
    {
        name: 'For rent: 2124 8th St',
        coordinates: [38.9183777,-77.0254307],
        year: 1915,
    },
    {
        name: 'For rent: 2124 11th St.',
        coordinates: [38.9187446,-77.0296913],
        year: 1915,
    },
    {
        name: 'For rent: 1139 6th St.',
        coordinates: [38.9053336,-77.0217962],
        year: 1915,
    },
];

const MAIN_LOCATION = {
    coordinates: [38.9051606, -77.0036513],
    name: "Deanwood neighborhood, Washington DC",
    date: "Test date",
    info: "Test info"
};

// const TESTREGION = [
//     [38.8151606, -77.0036513],
//     [38.8941606, -77.0036513],
//     [38.8051606, -77.0136513],
//     [38.8051606, -77.0006513]
// ];

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


function timeSlider(
    sliderName, currentRange, defaultRange, sliderChangeFunc, inputChangeFunc, sliderBlurFunc
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
                        value={typeof currentRange === "object" ? currentRange : defaultRange}
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


export default class Map extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mainLocation: MAIN_LOCATION,
            markerData: ADDRESS_DATA,
            sliderState: [1900, 2022],
            timeRange: [1900, 2022],
            names: ["Australia", "Canada", "USA", "Poland", "Spain", "France"]
        };
    }

    setSliderValue(newLowerBound, newUpperBound) {
        this.setState({
            ...this.state,
            sliderState: [newLowerBound, newUpperBound]
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

        // Do nothing if the slider input is blank
        if (event.target.value === "") {
            return;
        }

        let newValue = Number(event.target.value);
        if (bound === "lower") {
            if (newValue > currentUpperValue) {
                newValue = currentUpperValue;
            } else if (newValue < minValue) {
                newValue = minValue;
            }
            newSliderState = [newValue, currentUpperValue];
        } else if (bound === "upper") {
            if (newValue < currentLowerValue) {
                newValue = currentLowerValue;
            } else if (newValue > maxValue) {
                newValue = maxValue;
            }
            newSliderState = [currentLowerValue, newValue];
        }

        this.setState({
            ...this.state,
            sliderState: newSliderState
        });
    };

    handleSliderBlur = () => {
        // Used when slider changed by dragging after changing inputs
        // Needed if inputs are not bounded by the slider's maximum and minimum values
        const [currentLowerValue, currentUpperValue] = this.state.sliderState;
        const [minValue, maxValue] = this.state.timeRange;
        if (currentLowerValue < minValue) {
            this.setSliderValue(minValue, currentUpperValue);
        } else if (currentUpperValue > maxValue) {
            this.setSliderValue(currentLowerValue, maxValue);
        }
    };

    render() {
        const currentMarkerObjects = this.state.markerData.filter((location) => (
            location.year===this.state.sliderState[0] || location.year===this.state.sliderState[1])
        );
        const markerObjects = currentMarkerObjects.map((location, i) => (
            <Marker key={i} position={location.coordinates}>
                <Popup>
                    {location.name}
                </Popup>
            </Marker>
        ));

        return (<>
            <h1>{this.state.mainLocation.name}</h1>
            <div className="main-element">
                <div className="event-selector">
                    <h3 className="event-selector-title">Event Selector</h3>
                    <DropdownMultiselect
                        className="event-selector-dropdown"
                        options={this.state.names}
                        name="countries"
                    />
                </div>
                <div id="map">
                    <MapContainer
                        center={this.state.mainLocation.coordinates} zoom={13} scrollWheelZoom={true}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {markerObjects}
                        {/*<Polygon*/}
                        {/*    eventHandlers={{click: () => {console.log("marker clicked");}}}*/}
                        {/*    pathOptions={{color: "purple"}}*/}
                        {/*    positions={TEST_REGION}*/}
                        {/*/>*/}
                    </MapContainer>
                    {timeSlider(
                        "Time Slider",
                        this.state.sliderState,
                        this.state.timeRange,
                        this.handleSliderChange,
                        this.handleSliderInputChange,
                        this.handleSliderBlur
                    )}
                </div>
            </div>
        </>);
    }
}
