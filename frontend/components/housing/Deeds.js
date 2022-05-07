import React, {useState} from "react";
import MapDeanwoodDeeds from "../maps/MapDeanwoodDeeds";
import PropTypes from "prop-types";


export const DeanwoodDeeds = ({tables, coordinates}) => {
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
        <h2 className="p-0">
            Deanwood Lots: value by year
        </h2>
        <div className="carousel">
            <div className="p-lg-3 p-sm-2 container">
                <div className="p-0 row">
                    <div className="p-0 col-6">
                        <h5 className="tab-header">
                            {title}
                        </h5>
                        <MapDeanwoodDeeds selectMarker={selectMarker}
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
    coordinates: PropTypes.object
};


export default DeanwoodDeeds;
