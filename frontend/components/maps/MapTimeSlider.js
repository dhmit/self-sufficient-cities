import React from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import Legend from "./Legend";
import * as PropTypes from "prop-types";


function timeSlider(sliderName, sliderValue, defaultRange,
                    sliderChangeFunc, inputChangeFunc, sliderBlurFunc) {
    const [minValue, maxValue] = defaultRange;
    return (
        <div className="time-slider" key={sliderName}>
            <Typography id="range-slider" gutterBottom>{sliderName}</Typography>
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
                        value={typeof sliderValue === "number" ? sliderValue : defaultRange[0]}
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

export default class MapTimeSlider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sliderValue: this.props.timeRange[0]
        };
    }

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
        if (value < this.props.timeRange[0]) {
            this.setSliderValue(this.props.timeRange[0]);
        } else if (value > this.props.timeRange[1]) {
            this.setSliderValue(this.props.timeRange[1]);
        }
    };

    render() {
        const validAddresses = this.props.data.length ? this.props.data.filter((location) => (
            location.coordinates && location.coordinates.length === 2 &&
            this.state.sliderValue >= location.openyear &&
            this.state.sliderValue <= location.closeyear &&
            location.openyear && location.closeyear
        )) : [];

        const markerObjects = validAddresses.map((location, i) => (
            <Marker key={i} position={location.coordinates}
                    icon={this.props.setMarkerColor(location.type)}>
                <Popup>
                    {location.address}
                </Popup>
            </Marker>
        ));

        return (<>
            <h1>{this.props.mainLocation.name}</h1>
            <div className="main-element">
                <div className="map mb-3">
                    <MapContainer
                        center={this.props.mainLocation.coordinates}
                        zoom={this.props.zoom ? this.props.zoom : 14}
                        scrollWheelZoom={false}>
                        <TileLayer
                            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                            url="http://stamen-tiles-a.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"/>
                        {markerObjects}
                        {this.props.legend.length ? <Legend options={this.props.legend}/> : <></>}
                    </MapContainer>
                    {timeSlider(
                        "Select a year below to see all food locations that existed in that" +
                        " specific year.",
                        this.state.sliderValue,
                        this.props.timeRange,
                        this.handleSliderChange,
                        this.handleSliderInputChange,
                        this.handleSliderBlur
                    )}
                </div>
            </div>
        </>);
    }
}

MapTimeSlider.propTypes = {
    mainLocation: PropTypes.object,
    data: PropTypes.array,
    setMarkerColor: PropTypes.func,
    legend: PropTypes.array,
    timeRange: PropTypes.array,
    zoom: PropTypes.number
};

