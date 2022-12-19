import { useState } from "react";
import "./App.css";
import Main from './Main';
import "./main.scss";

function App() {
  return (
    <div className="App">
      <section className="" data-testid="search-bar">
        <Main />
      </section>
    </div>
  );
}

export default App;
