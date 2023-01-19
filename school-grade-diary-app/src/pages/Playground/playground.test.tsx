import { findByText, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Theme } from "../../theme/theme";
import { Playground } from "./playground";
test("should render playground page correctly", async () => {
  render(
    <ThemeProvider theme={Theme}>
      <Playground />
    </ThemeProvider>
  );
  const playgroundText = await screen.findByText("Playground Page");
  expect(playgroundText).toBeInTheDocument();
});
