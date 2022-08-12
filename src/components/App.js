import React from "react";
import Nav from "./Nav";
import Filter from "./Filter"
import HogList from "./HogList"

import hogs from "../porkers_data";
// greased: false
// highest medal achieved: "bronze"
// image: "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/babe.jpg"
// name: "Babe"
// specialty: "Being incredibly cute"
// weight: 2

function App() {
	return (
		<div className="App">
			<Nav />
			<Filter />
			<HogList hogs={hogs} />
		</div>
	);
}

export default App;
