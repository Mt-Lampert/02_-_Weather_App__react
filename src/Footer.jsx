import { getSVGfor } from "./helpers";
import FooterCard from "./FooterCard";
import "./Footer.scss";

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
    <div className="page-footer" data-testid="footer">
      <div className="columns is-centered">
        <FooterCard desc={props.sky} svg={getSVGfor(props.sky)} type="sky" />
        <FooterCard
          desc={props.airPressure}
          svg="barometer.svg"
          type="air pressure"
        />
        <FooterCard desc={props.humidity} svg="humidity.svg" type="humidity" />
        <FooterCard desc={props.wind} svg="wind.svg" type="wind" />
      </div>
    </div>
  );
}

export default Footer;
