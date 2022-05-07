import React from "react";
import {info} from "./deanwood_deeds_info";
import Deeds from "./Deeds";

const tables = info.tables;
const coordinates = info.coordinates;

export const DeanwoodDeeds = () => {

    return (
        <Deeds tables={tables} coordinates={coordinates}/>
    );
};

export default DeanwoodDeeds;
