/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "./logo.svg";
import "./App.css";
import init, { add } from "./methods/taquito";
import connectWallet from "./methods/connectWallet";
import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState(undefined);
  const getValue = async () => {
    const val = await init();
    console.log(val);
    setValue(val);
  };
  useEffect(() => {
    getValue();
  }, []);

  const updateVal = async () => {
    await add(28, 3);
    await getValue();
    console.log(`new value: ${value}`);
  };

  if (typeof value === "undefined") {
    return (
      <div className="App">
        {" "}
        <header className="App-header">
          <p>Loading....</p>
        </header>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Value: {value}</p>
        <a
          className="App-link"
          onClick={connectWallet}
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect Wallet
        </a>
        <a
          className="App-link"
          onClick={updateVal}
          target="_blank"
          rel="noopener noreferrer"
        >
          Add (28+3)
        </a>
      </header>
    </div>
  );
}

export default App;
