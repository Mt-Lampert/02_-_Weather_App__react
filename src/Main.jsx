import { useReducer, useRef } from "react";

import Footer from "./Footer";
import MainCenter from "./MainCenter";
import MainError from "./MainError";
import { mainState, rdReducer } from "./mainReducer";
import "./Main.scss";


function Main() {
  const [myState, dispatch] = useReducer(rdReducer, mainState);
  const suchfeld = useRef();

  function getData() {
    const city = suchfeld.current.value;
    fetch(
      encodeURI(
        `http://127.0.0.1:8090/api/collections/weather/records?filter=(place~"${city}")`
      )
    )
      .then((res) => {
        if (res.ok) return res.json();
        // implicit else
        throw new Error("404: Nothing found!");
      })
      .then((data) => {
        if (data.items.length === 0) throw new Error("404: Nothing found!");
        // implicit else
        dispatch({ type: "success", payload: data.items[0] });
      })
      .catch((error) => {
        dispatch({ type: "fail", payload: error.message });
      });
  }
  return (
    <div className="main" data-testid="main">
      <div className="heading container" data-testid="heading">
        <div className="columns search-field">
          <div className="column is-four-fifths">
            <input
              type="text"
              className="input"
              placeholder="Enter a city"
              ref={suchfeld}
            />
          </div>
          <div className="column">
            <button className="button is-info" onClick={getData}>
              Lookup
            </button>
          </div>
        </div>
        <div className="center">
          {myState.state === "success" && (
            <MainCenter
              place={myState.data.place}
              sky={myState.data.sky}
              temperature={myState.data.temperature}
            />
          )}
          {myState.state === "fail" && <MainError message={myState.error} />}
        </div>
      </div>
      {myState.state === "success" && (
        <Footer
          sky={myState.data.sky}
          airPressure={myState.data.air_pressure}
          humidity={myState.data.humidity}
          wind={myState.data.wind}
        />
      )}
    </div>
  );
}

export default Main;
