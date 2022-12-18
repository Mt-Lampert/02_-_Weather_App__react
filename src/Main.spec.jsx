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

    it("has elements with a weather symbol figure", async () => {
      const user = userEvent.setup();
      render(<Main />);
      const input = await screen.findByPlaceholderText("Enter a city");
      expect(input).toBeInTheDocument();
      const button = await screen.findByRole("button", { name: "Lookup" });
      await user.type(input, "London");
      await user.click(button);
      const svgs = await screen.findByAltText(/weather symbol/i);
      expect(svgs).toHaveAttribute(
        "src",
        expect.stringContaining("overcast.svg")
      );
    
      });

    it("has a weather description", async () => {
      const user = userEvent.setup();
      render(<Main />);
      const input = await screen.findByPlaceholderText("Enter a city");
      expect(input).toBeInTheDocument();
      const button = await screen.findByRole("button", { name: "Lookup" });
      await user.type(input, "London");
      await user.click(button);
      const temperature = await screen.findByText("1");
      expect(temperature).toBeInTheDocument();
    });

    it("has a footer section", async () => {
      const user = userEvent.setup();
      render(<Main />);
      const input = await screen.findByPlaceholderText("Enter a city");
      expect(input).toBeInTheDocument();
      const button = await screen.findByRole("button", { name: "Lookup" });
      await user.type(input, "London");
      await user.click(button);
      const footer = await screen.findByTestId("footer");
      expect(footer).toBeInTheDocument();
    });
  });

  describe("finding no results", () => {
    it("has an Error heading", async () => {
      const user = userEvent.setup();
      render(<Main />);
      const input = await screen.findByPlaceholderText("Enter a city");
      expect(input).toBeInTheDocument();
      const button = await screen.findByRole("button", { name: "Lookup" });
      await user.type(input, "Oslo");
      await user.click(button);
      const errorHeading = screen.getByRole("heading", { name: /Error/i });
      expect(errorHeading).toBeInTheDocument();
    });

    it("has an error message", async () => {
      const user = userEvent.setup();
      render(<Main />);
      const input = await screen.findByPlaceholderText("Enter a city");
      expect(input).toBeInTheDocument();
      const button = await screen.findByRole("button", { name: "Lookup" });
      await user.type(input, "Oslo");
      await user.click(button);
      const errorMsg = screen.getByText("404: Nothing found!");
      expect(errorMsg).toBeInTheDocument();
    });

    it("has no footer section", async () => {
      const user = userEvent.setup();
      render(<Main />);
      const input = await screen.findByPlaceholderText("Enter a city");
      expect(input).toBeInTheDocument();
      const button = await screen.findByRole("button", { name: "Lookup" });
      await user.type(input, "Oslo");
      await user.click(button);
      const noFooter =  screen.queryByTestId("footer")
      expect(noFooter).not.toBeInTheDocument();
      
    });
  });
});
