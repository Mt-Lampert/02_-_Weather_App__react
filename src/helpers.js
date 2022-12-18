export function getSVGfor(desc) {
  switch (desc) {
    case "cloudy":
      return "cloudy.svg";
      break;
    case "few clouds":
    case "sunny":
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
    default:
      return "EH?";
      break;
  }
}
