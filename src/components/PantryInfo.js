import React from "react";
import pantrySample from "../assets/pantry sample.png";
import "../styles.css"

export default function PantryInfo(props) {
    // if (!props.open) return null;
    return (
        <div className="infoContainer" >
            <div className="pantryTitle">
                <h3 className="pantryName">{props.name}</h3>

                <p className="pLessMargin"> {props.address}</p>
            </div>
            <div className="pantryImageContainer">
                <img
                    src={pantrySample}
                    className="samplePantryImage"
                    alt="pantry sample"
                />
            </div>
            <div className="textContainer">
                <p className="pLessMargin">Contact #: {props.contactNo} </p>
                <p className="pLessMargin">GCash #: {props.gCash} </p>
                <p className="pLessMargin">GCash Name: {props.gCashName} </p>
                <p className="pLessMargin">
                    Facebook: <br/><a href="#name" className="infoLink"> {props.faceBook}</a>{" "}
                </p>
            </div>
        </div>
    );
}

// const container = {
//     flexDirection: "column",
//     float: "right",
//     justifyContent: "center",
//     position: "absolute",
//     top: "100px",
//     right: "2vw",
//     margin: "0",
//     padding: "0",
// };
