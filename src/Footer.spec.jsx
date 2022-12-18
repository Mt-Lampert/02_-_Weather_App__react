import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  beforeEach(() => {
    render(
      <Footer sky="overcast" air_pressure="1001" humidity="69%" wind="4" />
    );
  });
  it("has a sky-condition card", () => {
    const skySVG = screen.getByAltText("sky symbol")
    expect(skySVG).toHaveAttribute("src", expect.stringContaining("assets/overcast.svg"));
  });

  it("has a air pressure card", ()=>{
    const pressure = screen.getByAltText("air pressure symbol")
    expect(pressure).toHaveAttribute("src", expect.stringContaining("assets/barometer.svg"));
  });

  it("has a humidity condition card", () => {
    const humidity = screen.getByAltText("humidity symbol");
    expect(humidity).toHaveAttribute("src", expect.stringContaining("assets/humidity.svg"));
  });
  
  it("has a wind condition card", () => {
    const wind = screen.getByAltText("wind symbol");
    expect(wind).toHaveAttribute("src", expect.stringContaining("assets/wind.svg"));
  });
});
