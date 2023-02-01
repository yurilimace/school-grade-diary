import {
  fireEvent,
  render,
  RenderResult,
  screen,
} from "@testing-library/react";
import React from "react";
import { FieldError } from "react-hook-form";
import { PasswordInput } from "./PasswordInput";

describe("Password Input UI suite teste", () => {
  const RenderComponent = () => render(<PasswordInput />);

  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = RenderComponent();
  });

  it("should render correctly", () => {
    const passwordField = screen.getByRole("password-input");
    expect(passwordField).toBeInTheDocument();
    const showPasswordIcon = screen.getByTestId("show-password-icon");
    expect(showPasswordIcon).toBeInTheDocument();
  });

  it("should render input validation error", () => {
    const formErrorField: FieldError = {
      message: "Error Message",
      type: "value",
    };
    renderResult.rerender(
      <PasswordInput requiredField fieldError={formErrorField} />
    );
    const errorIcon = screen.getByTestId("input-field-error-icon");
    expect(errorIcon).toBeInTheDocument();
  });

  it("should hide type input characters", () => {
    const passwordField = screen.getByRole("password-input");
    expect(passwordField).toHaveAttribute("type", "password");
  });

  it("should show password after click on button", () => {
    const showPasswordButton = screen.getByTestId("show-password-icon");
    fireEvent.click(showPasswordButton);
    screen.debug();
    const passwordField = screen.getByRole("password-input");
    expect(passwordField).toHaveAttribute("type", "text");
  });
});
