import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ScrollIndicator } from "./components/scrollIndicator/ScrollIndicator";

function App() {
  return (
    <div className="App">
      <h2>Scrol Indicator project</h2>
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </div>
  );
}

export default App;
