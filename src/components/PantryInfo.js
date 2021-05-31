import React from "react";
import pantrySample from "../assets/pantry sample.png";

export default function PantryInfo(props) {
    return (
        <div style={container}>
            <div className="pantryTitle">
                <h3 className="pantryName">{props.name}</h3>

                <p className="pLessMargin"> {props.address}</p>
            </div>
            <div style={imageContainer}>
                <img
                    src={pantrySample}
                    style={{ height: "40vh", width: "30vw" }}
                    alt="pantry sample"
                />
            </div>
            <div style={textContainer}>
                <p className="pLessMargin">Contact #: {props.contactNo} </p>
                <p className="pLessMargin">GCash #: {props.gCash} </p>
                <p className="pLessMargin">GCash Name: {props.gCashName} </p>
                <p className="pLessMargin">
                    Facebook: <a href="#"> {props.faceBook}</a>{" "}
                </p>
            </div>
        </div>
    );
}

const container = {
    flexDirection: "column",
    float: "right",
    justifyContent: "center",
    position: "absolute",
    top: "100px",
    right: "50px",
    margin: "0",
    padding: "0",
};

const imageContainer = {
    padding: "0",
    backgroundSize: "cover",
    paddingTop: "62.5%",
    position: "sticky",
    top: "-250px",
    width: "100%",
};

const textContainer = {
    position: "relative",
};

const pLessMargin = {
    margin: "0",
    padding: "0",
    size: "100vw",
};
