import { useState, useRef } from "react";

import Footer from "./Footer";
import MainCenter from "./MainCenter";
import MainError from "./MainError";
import "./Main.scss"

const mainStates = ["idle", "loading", "success", "fail"];

function Main() {
  const [mainstate, setMainstate] = useState(mainStates[0]);
  const [myData, setMyData] = useState({});
  const [myError, setMyError] = useState("");

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

        // console.log("res seems defined")
        throw new Error(`${res.status}: Nothing found!`);
      })
      .then((data) => {
        // console.log("Query successful!")
        if(data.items.length === 0)
          throw new Error(`${res.status}: Nothing found!`);

        setMainstate("success");
        setMyData(data.items[0]);
      })
      .catch((error) => {
        // console.log("Query failed!")
        setMainstate("fail");
        setMyError(error.message);
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
          {mainstate === "success" && (
            <MainCenter
              place={myData.place}
              sky={myData.sky}
              temperature={myData.temperature}
            />
          )}
          {mainstate === "fail" && <MainError message={myError} />}
        </div>
      </div>
      {mainstate === "success" && (
          <Footer
            sky={myData.sky}
            airPressure={myData.air_pressure}
            humidity={myData.humidity}
            wind={myData.wind}
          />
        )}
    </div>
  );
}

export default Main;
