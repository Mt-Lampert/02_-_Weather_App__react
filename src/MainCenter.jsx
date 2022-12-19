import { getSVGfor } from "./helpers";
import "./MainCenter.scss"

function MainCenter(props) {
  // Outline:
  // we need three props:
  //   - the name of the city
  //   - the weather condition
  //   - the temperature
  //
  // the weather condition has to be transformed into a svg file name.
  // this is the job of a helper function with a switch{}
  //

  return (
    <div className="center-section">
      <figure>
        <img src={"./" +getSVGfor(props.sky)} alt={props.sky + " weather Symbol"} />
      </figure>
      <p className="title">{props.place}</p>
      <p className="title">{props.temperature}&deg;</p>
    </div>
  );
}

export default MainCenter;
