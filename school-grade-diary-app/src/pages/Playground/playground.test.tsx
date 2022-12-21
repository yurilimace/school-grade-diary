import { findByText, render, screen } from "@testing-library/react";
import { Playground } from "./playground";
test("should render playground page correctly", async () => {
  render(<Playground />);
  const playgroundText = await screen.findByText("Playground Page");
  expect(playgroundText).toBeInTheDocument();
});
