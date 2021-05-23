import React from 'react'
import pantrySample from "../assets/pantry sample.png"

export default function PantryInfo() {
    return (
        <div style={container}>
            <div style={boxOne}>
                <h3>Barangay Batong  </h3>
                <h3>Malake Community </h3>
                <h3>Pantry</h3>
                <p style={pLessMargin}> Barangay Batong Malake, Los Baños, Laguna</p>
            </div>
            <div style={boxTwo}>
                <img src={pantrySample} style={{height:"250px", width:"400px"}} alt="pantry sample"/>
            </div>
            <div style={boxThree}>
                <p style={pLessMargin}>Contact #: 0999 143 1432 </p>
                <p style={pLessMargin}>GCash #: 0999 143 1432 </p>
                <p style={pLessMargin}>GCash Name: Rodolfo Cresanto </p>
                <p style={pLessMargin}>Facebook: https://tinyurl.com/app </p>
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
