import React from "react";
import "./App.css";
import LineCharts from "./components/LineCharts";

function App() {
  return (
    <div className="App container">
      <div className="chart neu">
        <LineCharts />
      </div>
    </div>
  );
}

export default App;
