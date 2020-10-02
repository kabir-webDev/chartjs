import React from "react";
import "./App.css";
import LineCharts from "./components/LineCharts";

function App() {
  return (
    <div className="App container">
      <h1 style={{ color: " rgba(238, 86, 59, 0.856)" }}>
        কাবির সাহেবের রেজাল্ট কার্ভ
      </h1>
      <div className="neu">
        <LineCharts />
      </div>

      <h1 style={{ color: " rgba(238, 86, 59, 0.856)" }}>
        এই রেজাল্টে কি জব হবে!! 🥺
      </h1>
    </div>
  );
}

export default App;
