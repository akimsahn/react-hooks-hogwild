import React from "react"

function Filter() {
    return (
        <div className="filterWrapper">
            <div className="ui menu">
                <div className="ui item">
                    <label>Sort By:</label>
                </div>
                <div className="ui item">
                    <select
                        className="ui selection dropdown"
                        name="filter">
                        <option value="name">Name</option>
                        <option value="weight">Weight</option>
                    </select>
                </div>
                <div className="ui item">
                    <label>Show Greased Pigs Only:</label>
                </div>
                <div className="ui item">
                    <input
                        className="ui toggle checkbox"
                        type="checkbox"
                        checked=""
                    />
                </div>
            </div>
        </div>
    )
}

export default Filter