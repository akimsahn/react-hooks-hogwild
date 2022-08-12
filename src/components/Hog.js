import React,{useState} from "react"
import HogDetails from "./HogDetails"

function Hog({hog}) {
    const [showDetails, setShowDetails] = useState(false)
    
    function handleClick(){
        setShowDetails(!showDetails)
    }

    return (
        <div className="ui card eight wide column pigTile">
            <div className="image">
                <img src={hog.image} alt={hog.name} />
            </div>
            <div className="content">
                <h3 className="header">{hog.name}</h3>
            </div>
            <div className="extra content">
                {showDetails ? <HogDetails hog={hog} /> : null}
                <button className="ui button" onClick={handleClick}>{showDetails ? "Show Less" : "Show More"}</button>
            </div>
        </div>
    )
}

export default Hog