import React from "react";
import PropTypes from "prop-types";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import Dropdown from "react-bootstrap/Dropdown";
// AFTERNOON TEAM

const ADDRESS_DATA = [
    {
        name: "For rent: 2124 8th St",
        coordinates: [38.9183777,-77.0254307],
        year: 1915
    },
    {
        name: "For rent: 2124 11th St.",
        coordinates: [38.9187446,-77.0296913],
        year: 1915
    },
    {
        name: "For rent: 1139 6th St.",
        coordinates: [38.9053336,-77.0217962],
        year: 1915
    },
    {
        name: "For rent: 3108 Sherman Ave. N. W.",
        coordinates: [38.9290822,-77.0287721],
        year: 1913
    },
    {
        name: "For rent: 1005 Maryland Ave. S. W.",
        coordinates: [38.8844613,-77.0303063],
        year: 1913
    },
    {
        name: "For rent: 41 Patterson St. N. E.",
        coordinates: [38.9062153,-77.0099283],
        year: 1913
    },
    {
        name: "For rent: 1045 47th St.",
        coordinates: [38.9045554,-76.9366048],
        year: 1913
    },
    {
        name: "For rent: 2047 9th St. N. W.",
        coordinates: [38.9181871,-77.02582],
        year: 1913
    },
    {
        name: "For rent: 2654 15th St. N. W.",
        coordinates: [38.9245707,-77.0378564],
        year: 1913
    },
    {
        name: "For rent: 506 Fifth Street Northwest",
        coordinates: [38.8967959,-77.0215881],
        year: 1913
    },
    {
        name: "Pianoforte Lessons, Mrs. M. Harvey Clickscales: 1232 Linden Street Northeast",
        coordinates: [38.8997081,-76.991249],
        year: 1913
    },
    {
        name: "Land for Sale: Miss Elizabeth Shaw, 1613 Thirteenth Street Northwest",
        coordinates: [38.8688428,-76.9892379],
        year: 1913
    },
    {
        name: "The Washington Bee: 1109 Eye Street Northwest",
        coordinates: [38.9016879,-77.0293254],
        year: 1913
    },
    {
        name: "Dr. Geo. H. Richardson: 309 Eleventh St. N. E.",
        coordinates: [38.8938675,-76.993485],
        year: 1913
    },
    {
        name: "A.D. Powell, Dealer in Coal, Wood, and Ice: 1200 R Street N. W.",
        coordinates: [38.9126088,-77.0301461],
        year: 1913
    },
    {
        name: "Xanders Famous Cocktails: 909 7th St.",
        coordinates: [38.901508,-77.0236903],
        year: 1913
    },
    {
        name: "Elite Photo Studio: 1814 Fourteenth Street, N. W.",
        coordinates: [38.9146532,-77.0344107],
        year: 1913
    },
    {
        name: "For Rent, High Class Apartments; The Minerva: 1838 Fourth Street Northwest",
        coordinates: [38.9154674,-77.0197966],
        year: 1913
    },
    {
        name: "Shannon & Luchs, Renting Service: 713 Fourteenth St. N. W.",
        coordinates: [38.89867,-77.0337179],
        year: 1913
    }
];

const MAIN_LOCATION = {
    coordinates: [38.9051606, -77.0036513],
    name: "Deanwood neighborhood, Washington DC",
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

export class TimeControl extends React.Component{
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

    componentDidMount(){
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
        switch(this.state.active){

        case TimeControl.OFF:
            break;

        case TimeControl.Forward:
            let newLowest = currentLow + TimeControl.Forward;
            if (newLowest > currentHigh){
                newLowest = minLow;
            }
            this.props.change(newLowest, currentHigh);
            break;

        case TimeControl.Reverse:
            let newHighest = currentHigh + TimeControl.Reverse;
            if (newHighest < currentLow){
                newHighest = maxHigh;
            }
            this.props.change(currentLow, newHighest);
            break;

        default:
            throw new Error("Should not get up to this point");

        }
    }
    changeState = (change) => {
        switch(change){

        case TimeControl.Reverse:
            return () => this.setState({active:TimeControl.Reverse});

        case TimeControl.Forward:
            return () => this.setState({active:TimeControl.Forward});

        case TimeControl.OFF:
            return () => this.setState({active:TimeControl.OFF});

        default:
            throw new Error("Should not get to this point");
        }

    }
    render() {
        return (
            <div className="timeControl">
                <button onClick = {this.changeState(TimeControl.Reverse)}>Reverse</button>
                <button onClick = {this.changeState(TimeControl.OFF)}>Stop</button>
                <button onClick ={this.changeState(TimeControl.Forward)}>Forward</button>
            </div>
        );
    }
}

TimeControl.propTypes = {
    change: PropTypes.func,
    sliderState: PropTypes.array,
    defaultTime: PropTypes.array
};

export class MapDropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            selected: []
        };
    }

    toggleItemSelect = (event) => {
        // Implementation does not allow selecting items with the same name individually

        const value = event.target.innerText;
        const newSelected = this.state.selected;
        if (this.state.selected.includes(value)) {
            const valueIdx = newSelected.indexOf(value);
            newSelected.splice(valueIdx, 1);
            event.target.classList.remove("map-dropdown-item-selected");
            event.target.classList.add("map-dropdown-item");
        } else {
            newSelected.push(value);
            event.target.classList.remove("map-dropdown-item");
            event.target.classList.add("map-dropdown-item-selected");
        }
        this.setState({selected: newSelected});
        console.log(this.state.selected);
    }

    toggleDropdownItems = () => {
        this.setState({open: !this.state.open});
    }

    getDropdownItems() {
        if (!this.state.open) {
            return <></>;
        }
        const selected = "map-dropdown-item-selected";
        const normal = "map-dropdown-item";
        const dropdownItems = (
            this.props.items.map((location, i) => (
                <div
                    key={i}
                    className={
                        this.state.selected.includes(location.name) ? selected : normal
                    }
                    onClick={this.toggleItemSelect}
                >
                    {location.name}
                </div>
            ))
        );
        return (
            <div className="map-dropdown-scroll-bg">
                <div className="map-dropdown-scroll">
                    {dropdownItems}
                </div>
            </div>
        );
    }

    render() {
        const dropdownItems = this.getDropdownItems();
        return (
            <div className="map-dropdown">
                <Dropdown.Toggle
                    id="dropdown-autoclose-outside"
                    className="map-dropdown-toggle"
                    onClick={this.toggleDropdownItems}
                >
                    {this.props.name}
                </Dropdown.Toggle>
                {dropdownItems}
            </div>
        );
    }
}

MapDropdown.propTypes = {
    name: PropTypes.string,
    items: PropTypes.array
};

export default class MapMicro extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mainLocation: MAIN_LOCATION,
            markerData: ADDRESS_DATA,
            sliderState: [1900, 2022],
            timeRange: [1900, 2022],
            lastValid: [1900, 2022],
            names: ["Australia", "Canada", "USA", "Poland", "Spain", "France"]
        };
    }

    componentDidMount() {
        fetch("/api/get_address_data/")
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
            (location.year &&
            location.year >= this.state.lastValid[0] && location.year <= this.state.lastValid[1]) ||
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
                <div className="event-selector">
                    <h3 className="event-selector-title">Event Selector</h3>
                    <MapDropdown name="Addresses" items={ADDRESS_DATA}/>
                </div>
                <div id="map">
                    <MapContainer
                        center={this.state.mainLocation.coordinates} zoom={13}
                        scrollWheelZoom={true}
                    >
                        <TileLayer
                            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {markerObjects}
                    </MapContainer>
                    {timeSlider(
                        "Time Slider",
                        this.state.sliderState,
                        this.state.timeRange,
                        this.state.lastValid,
                        this.handleSliderChange,
                        this.handleSliderInputChange,
                        this.handleSliderBlur
                    )}
                    <TimeControl
                        sliderState={this.state.sliderState} change = {this.setSliderValue}
                        defaultTime = {this.state.timeRange}>
                    </TimeControl>
                </div>
            </div>
        </>);
    }
}
