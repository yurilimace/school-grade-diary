import { findByText, render, screen } from "@testing-library/react";
import { Home } from "./Home";

describe("should render home page correctly", () => {
  it("should render correctly", async () => {
    render(<Home />);
    const text = await screen.findByText("Home page");

    expect(text).toBeInTheDocument();
  });
});
