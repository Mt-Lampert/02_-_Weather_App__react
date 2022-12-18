import { getSVGfor } from "./helpers";
import FooterCard from "./FooterCard";

/*
type props = {
  air_pressure: number,
  humidity: number,
  sky: String,
  temperature: number,
  wind: number,
}
*/

function Footer(props) {
  return (
    <div data-testid="footer">
      <FooterCard desc={props.sky} svg={getSVGfor(props.sky)} type="sky" />
      <FooterCard desc={props.air_pressure} svg="barometer.svg" type="air pressure"/>
      <FooterCard desc={props.humidity} svg="humidity.svg" type="humidity"/>
      <FooterCard desc={props.wind} svg="wind.svg" type="wind"/>
    </div>
  );
}

export default Footer;
