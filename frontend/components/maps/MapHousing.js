import React from "react";
import PropTypes from "prop-types";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";

const MAIN_LOCATION = {
    // coordinates: [38.9051606, -77.0036513],
    coordinates: [38.903760, -76.929470],
    name: "",
    date: "Test date",
    info: "Test info"
};

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
    sliderName, currentRange, defaultRange, lastValid,
    sliderChangeFunc, inputChangeFunc, sliderBlurFunc
) {
    const [minValue, maxValue] = defaultRange;
    return (
        <div className="time-slider" key={sliderName}>
            <Typography id="range-slider" className="mb-4" gutterBottom>
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

export class TimeControl extends React.Component {
    // Modify these to change the step of each increment
    static OFF = 0;
    static Reverse = -10;
    static Forward = 10;

    constructor(props) {
        // Props given to TimeControl from its parent (MapMicro):
        //      change: Function that changes MapMicro's sliderState which causes the slider to move
        //      sliderState: The current slider's values
        //      defaultTime: The default min and max possible range of of the slider
        super(props);
        // There are only 3 possible active states for TimeControl: OFF, Reverse, and Forward
        this.state = {
            active: TimeControl.OFF
        };
    }

    componentDidMount() {
        // Modify timeout to change how often increment is called
        this.time = setInterval(this.increment, 1000);
    };

    componentWillUnmount() {
        clearInterval(this.time);
    };

    increment = () => {
        const [currentLow, currentHigh] = this.props.sliderState;
        const [minLow, maxHigh] = this.props.defaultTime;
        // Code here must prevent crossing
        switch (this.state.active) {
            case TimeControl.OFF:
                break;

            case TimeControl.Forward:
                let newLowest = currentLow + TimeControl.Forward;
                if (newLowest > currentHigh) {
                    newLowest = minLow;
                }
                this.props.change(newLowest, currentHigh);
                break;

            case TimeControl.Reverse:
                let newHighest = currentHigh + TimeControl.Reverse;
                if (newHighest < currentLow) {
                    newHighest = maxHigh;
                }
                this.props.change(currentLow, newHighest);
                break;

            default:
                throw new Error("Should not get up to this point");

        }
    }
    changeState = (change) => {
        switch (change) {
            case TimeControl.Reverse:
                return () => this.setState({active: TimeControl.Reverse});

            case TimeControl.Forward:
                return () => this.setState({active: TimeControl.Forward});

            case TimeControl.OFF:
                return () => this.setState({active: TimeControl.OFF});

            default:
                throw new Error("Should not get to this point");
        }

    }

    render() {
        return (
            <div className="timeControl">
                <button onClick={this.changeState(TimeControl.Reverse)}>Reverse</button>
                <button onClick={this.changeState(TimeControl.OFF)}>Stop</button>
                <button onClick={this.changeState(TimeControl.Forward)}>Forward</button>
            </div>
        );
    }
}

TimeControl.propTypes = {
    change: PropTypes.func,
    sliderState: PropTypes.array,
    defaultTime: PropTypes.array
};


export default class MapHousing extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mainLocation: MAIN_LOCATION,
            markerData: [],
            sliderState: [1980, 2022],
            timeRange: [1980, 2022],
            lastValid: [1980, 2022]
        };
    }

    componentDidMount() {
        this.setState({markerData: this.props.addresses});
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
            <div id="map-housing" className="map pb-4">
                <MapContainer
                    center={this.state.mainLocation.coordinates} zoom={17}
                    scrollWheelZoom={false}>
                    <TileLayer
                        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                        url="http://stamen-tiles-a.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
                    />
                    {markerObjects}
                </MapContainer>
                {timeSlider(
                    "",
                    this.state.sliderState,
                    this.state.timeRange,
                    this.state.lastValid,
                    this.handleSliderChange,
                    this.handleSliderInputChange,
                    this.handleSliderBlur
                )}
            </div>
        </>);
    }
}

MapHousing.propTypes = {
    addresses: PropTypes.array
};
