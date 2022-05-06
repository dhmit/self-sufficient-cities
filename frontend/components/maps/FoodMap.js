import React from "react";
// import PropTypes from "prop-types";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import * as L from "leaflet";
import Legend from "./Legend";


const LeafIcon = L.Icon.extend({
    options: {}
});

const blueIcon = new LeafIcon({
        iconUrl:
            "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF"
    }),
    greenIcon = new LeafIcon({
        iconUrl:
            "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF"
    }),
    yellowIcon = new LeafIcon({
        iconUrl:
            "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=•|ffc800&chf=a,s,ee00FFFF"
    }),
    redIcon = new LeafIcon({
        iconUrl:
            "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|e85141&chf=a,s,ee00FFFF"
    }),
    purpleIcon = new LeafIcon({
        iconUrl:
            "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|a134eb&chf=a,s,ee00FFFF"
    });

function setMarkerColor(type) {
    if (!type) {
        return blueIcon;
    } else if (type === "grocery") {
        return purpleIcon;
    } else if (type === "convenience") {
        return greenIcon;
    } else if (type === "restaurant") {
        return yellowIcon;
    } else if (type === "liquor") {
        return redIcon;
    }
}

const MAIN_LOCATION = {
    coordinates: [38.9022, -76.9306637],
    name: "Deanwood Food Map Over Time",
    date: "Test date",
    info: "Test info"
};

function timeSlider(
    sliderName, sliderValue, defaultRange,
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
                        sliderValue,
                        "lower",
                        defaultRange,
                        inputChangeFunc,
                        sliderBlurFunc
                    )}
                </Grid>
                <Grid item xs>
                    <Slider
                        value={typeof sliderValue === "number" ? sliderValue: defaultRange[0]}
                        onChange={(e, v) => sliderChangeFunc(e, v)}
                        min={minValue}
                        max={maxValue}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                    />
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
            sliderValue: 1943,
            timeRange: [1943, 2022],
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


    setSliderValue = (newValue) => {
        this.setState({
            sliderValue: newValue
        });
    }

    handleSliderChange = (event, value) => {
        this.setSliderValue(value);
    }

    handleSliderInputChange = (event) => {
        this.setSliderValue(event.target.value === "" ? "" : Number(event.target.value));
    }

    handleSliderBlur = () => {
        // Used when slider changed by dragging after changing inputs
        // Needed if inputs are not bounded by the slider" maximum and minimum values
        if (value < this.state.timeRange[0]) {
            this.setSliderValue(this.state.timeRange[0]);
        } else if (value > this.state.timeRange[1]) {
            this.setSliderValue(this.state.timeRange[1]);
        }
    };

    render() {
        const validAddresses = this.state.markerData.filter((location) => (
            location.type && (location.coordinates && location.coordinates.length === 2 &&
                this.state.sliderValue >= location.openyear &&
                this.state.sliderValue <= location.closeyear &&
                location.openyear && location.closeyear
            )
        ));

        const markerObjects = validAddresses.map((location, i) => (
            <Marker key={i} position={location.coordinates} icon={setMarkerColor(location.type)}>
                <Popup>
                    {location.address}
                </Popup>
            </Marker>
        ));

        return (<>
            <h1>{this.state.mainLocation.name}</h1>
            <div className="main-element">
                <div id="map" className="pb-5">
                    <MapContainer
                        center={this.state.mainLocation.coordinates} zoom={14}
                        scrollWheelZoom={true}
                    >
                        <TileLayer
                            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                            url="http://stamen-tiles-a.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"
                        />
                        {markerObjects}
                        <Legend options={[
                            ["#a134eb", "Grocery"],
                            ["#2ecc71", "Convenience"],
                            ["#ffc800", "Restaurant"],
                            ["#e85141", "Liquor"]
                        ]}/>
                    </MapContainer>
                    {timeSlider(
                        "Select a year below to see all food locations that existed in that" +
                        " specific year.",
                        this.state.sliderValue,
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
