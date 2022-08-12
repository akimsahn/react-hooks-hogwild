import React from "react"
import Hog from "./Hog"

function HogList({hogs}) {

    return (
        <div className="ui three stackable cards">
            {hogs.map(hog => <Hog key={hog.name} hog={hog} />)}
        </div>
    )
}

export default HogList