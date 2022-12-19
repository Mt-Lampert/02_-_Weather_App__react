import { getByAltText, render, screen } from "@testing-library/react";
import MainCenter from "./MainCenter";

describe("MainCenter", () => {
  beforeEach(() => {
    render(<MainCenter place="London, UK" sky="sunny" temperature="22,3" />);
  })

  it("has a weather image", () => {
    const image = screen.getByAltText(/sunny/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", expect.stringContaining("sunny.svg"));
  });

  it("has a city label", () => {
    const nameTag = screen.getByText("London, UK");
    expect(nameTag).toBeInTheDocument();
  });

  it("has a temperature label", () => {
    const tempTag = screen.getByText(/22,3/);
    expect(tempTag).toBeInTheDocument();
  });
});
