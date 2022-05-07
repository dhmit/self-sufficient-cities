import React from "react";
import {info} from "./brightwood_deeds_info";
import Deeds from "./Deeds";

const tables = info.tables;
const coordinates = info.coordinates;

export const BrightwoodDeeds = () => {

    return (
        <Deeds position={[38.957139, -77.027071]} tables={tables} coordinates={coordinates}/>
    );
};

export default BrightwoodDeeds;
