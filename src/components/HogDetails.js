import React from "react"

function HogDetails({hog}) {
    return (
        <div className="normalText">
            <ul>
                <li>Speciality: {hog.specialty}</li>
                <li>Highest Medal Achieved: {hog['highest medal achieved']}</li>
                <li>Greased: {hog.greased ? 'Yes' : 'No'}</li>
                <li>Weight: {hog.weight}</li>
            </ul>
        </div>
    )
}

export default HogDetails