import { render, screen } from "@testing-library/react";
// import { server } from "./mocks/server";
import userEvent from "@testing-library/user-event";
import Main from "./Main";

describe("Main", () => {
  beforeEach(() => {
    render(<Main />);
  });

  it("has a 'main' content container", () => {
    const main = screen.getByTestId("main");
    expect(main).toBeInTheDocument();
  });

  it("has a 'head container", () => {
    const heading = screen.getByTestId("heading");
    expect(heading).toBeInTheDocument();
  });

  it("has an input field", () => {
    const input = screen.getByPlaceholderText("Enter a city");
    expect(input).toBeInTheDocument();
  });

  it("has a search button", () => {
    const button = screen.getByRole("button", { name: "Lookup" });
    expect(button).toBeInTheDocument();
  });

  // to be successful, we have to find London
});

describe("Interaction", () => {
  describe("looking up a city", () => {
    it("gets a 'center' section", async () => {
      const user = userEvent.setup();
      render(<Main />);
      const input = await screen.findByPlaceholderText("Enter a city");
      expect(input).toBeInTheDocument();
      const button = await screen.findByRole("button", { name: "Lookup" });
      await user.type(input, "London");
      await user.click(button);
      const successHeader = await screen.findByText("London, UK");
      expect(successHeader).toBeInTheDocument;
      // screen.debug()
    });

    it.skip("has a weather symbol figure");

    it.skip("has a weather description");

    it.skip("has a footer section");
  });
  describe("finding no results", () => {
    it.skip("Has a 'center' section");

    it.skip("has an Error container");

    it.skip("has an error message");

    it.skip("has no footer section");
  });
});
