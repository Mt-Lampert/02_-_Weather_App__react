import { getSVGfor } from "./helpers";

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
    <div>
      <figure>
        <img src={"./assets/" +getSVGfor(props.sky)} alt={props.sky + " weather Symbol"} />
      </figure>
      <p>{props.place}</p>
      <p>{props.temperature}</p>
    </div>
  );
}

export default MainCenter;
