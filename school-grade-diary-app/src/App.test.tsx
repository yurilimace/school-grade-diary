import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

test("that jest is working", () => {
  expect(true).toBe(true);
});

test("render component correctly", async () => {
  render(<App />);

  const text = await screen.findByText(
    "Click on the Vite and React logos to learn more"
  );

  expect(text).toHaveTextContent(
    "Click on the Vite and React logos to learn more"
  );
});
