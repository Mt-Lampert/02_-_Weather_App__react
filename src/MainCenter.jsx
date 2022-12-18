function getSVGfor(desc) {
  switch (desc) {
    case "cloudy":
      return "cloudy.svg";
      break;
    case "few clouds":
      return "sunny.svg";
      break;
    case "light snow":
      return "light_snow.svg";
      break;
    case "overcast":
      return "overcast.svg";
      break;
    case "rain":
      return "rain.svg";
      break;
    case "sunny":
      return "sunny.svg";
      break;

    default:
      return "EH?";
      break;
  }
}

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
      <p>{props.city}</p>
      <p>{props.temperature}</p>
    </div>
  );
}

export default MainCenter;
