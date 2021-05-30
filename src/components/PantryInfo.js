import React from 'react'
import pantrySample from "../assets/pantry sample.png"

export default function PantryInfo(props) {
    return (
        <div style={container}>
            <div >
                <h3>{props.name}</h3>

                <p style={pLessMargin}> {props.address}</p>
            </div>
            <div >
                <img src={pantrySample} style={{height:"250px", width:"400px"}} alt="pantry sample"/>
            </div>
            <div >
                <p style={pLessMargin}>Contact #: {props.contactNo} </p>
                <p style={pLessMargin}>GCash #: {props.gCash} </p>
                <p style={pLessMargin}>GCash Name: {props.gCashName} </p>
                <p style={pLessMargin}>Facebook: <a href="#"> {props.faceBook}</a> </p>
            </div>
            
        </div>
    )
}

const container = {
    flexDirection: "column",
    float: "right",
    justifyContent: "center",
    position: "absolute",
    top: "100px",
    right: "50px",
    margin: "0",
    padding: "0"
}

const boxOne = {
    fontFamily: "Roboto",
    fontWeight: "600",
    flex:"1"
}

const boxTwo = {
    flex:"1"
}

const boxThree = {
    fontFamily: "Roboto",
    fontWeight: "400",
    flex:"1",
    margin: "0",
    padding: "0"
}

const pLessMargin = {
    margin: "0",
    padding: "0"
}