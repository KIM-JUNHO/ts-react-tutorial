import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greetings from "./Greetings";

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greetings name="prpr48" onClick={onClick} />
      </header>
    </div>
  );
};

export default App;
