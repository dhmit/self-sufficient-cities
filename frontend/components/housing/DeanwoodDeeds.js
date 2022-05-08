import React from "react";
import {info} from "./deanwood_deeds_info";
import Deeds from "./Deeds";

const tables = info.tables;
const coordinates = info.coordinates;

export const DeanwoodDeeds = () => {

    return (
        <Deeds position={[38.904046, -76.929446]} tables={tables} coordinates={coordinates}/>
    );
};

export default DeanwoodDeeds;
