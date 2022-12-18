import { useState, useRef } from "react";

import MainCenter from "./MainCenter";
import MainError from "./MainError";

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

        // implicit else
        throw new Error(`${res.status}: nothing found!`);
      })
      .then((data) => {
        // console.log("Query successful!")
        setMainstate("success");
        setMyData(data);
      })
      .catch((error) => {
        // console.log("Query failed!")
        setMainstate("fail");
        setMyError(error.message);
      });
  }
  return (
    <div data-testid="main">
      <div data-testid="heading">
        <input
          type="text"
          className="input"
          placeholder="Enter a city"
          ref={suchfeld}
        />
        <button className="button is-info" onClick={getData}>
          Lookup
        </button>

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
    </div>
  );
}

export default Main;
