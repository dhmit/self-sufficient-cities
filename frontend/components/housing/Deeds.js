import React, {useState} from "react";
import MapMarkers from "../maps/MapMarkers";
import PropTypes from "prop-types";


export const DeanwoodDeeds = ({tables, coordinates, position}) => {
    const [lotNum, setLotNum] = useState(0);
    const lots = Object.keys(tables);

    const fixTitle = (name) => {
        return name.replaceAll("_", " ").toUpperCase();
    };
    const [table, setTable] = useState(tables[lots[0]]);
    const [title, setTitle] = useState(fixTitle(Object.keys(coordinates)[0]));
    const selectMarker = (obj) => {
        let selected = lots.filter((val) => {
            return (coordinates[val][0] === obj.latlng.lat &&
                coordinates[val][1] === obj.latlng.lng);
        });
        selected = selected[0];
        setTable(tables[selected]);
        setTitle(fixTitle(selected));
        setLotNum(lots.indexOf(selected));
    };


    return (<>
        <div className="carousel">
            <div className="p-lg-3 p-sm-2 container">
                <div className="p-0 row">
                    <div className="p-0 col-6">
                        <h5 className="tab-header">
                            {title}
                        </h5>
                        <MapMarkers position={position}
                                    zoom={17}
                                    selectMarker={selectMarker}
                                    markers={Object.values(coordinates)}
                                    selected={coordinates[lots[lotNum]]}/>
                    </div>
                    <div className="pl-2 col-6 table-container">
                        {table}
                    </div>
                </div>
            </div>
        </div>
    </>);
};

DeanwoodDeeds.propTypes = {
    tables: PropTypes.object,
    coordinates: PropTypes.object,
    position: PropTypes.array
};


export default DeanwoodDeeds;
