import React, { useState } from "react";
// import Video from "./Video";
import GeoChart from "./GeoChart";
import data from "./GeoChart.world.geo.json";
import "./App.css";

function App() {
  const [property, setProperty] = useState("pop_est");
  return (
    <React.Fragment>
      <h2>Select country to zoom in</h2>
      <GeoChart data={data} property={property} />
      <h2>Select country again to zoom out</h2>

    </React.Fragment>
  );
}

export default App;
