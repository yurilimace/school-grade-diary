import { render, screen } from "@testing-library/react";
import { Login } from "./login";

describe("login screen tests", () => {
  const RenderComponent = () => render(<Login />);

  beforeEach(() => {
    RenderComponent();
  });

  it("should render correctly", () => {
    const getLoginScreenCardHeaderText = screen.getByText("Bem Vindo!");
    expect(getLoginScreenCardHeaderText).toBeInTheDocument();
  });

  it("should render form input fields", () => {
    const emailInputField = screen.getByPlaceholderText("email");
    expect(emailInputField).toBeInTheDocument();
    const passwordField = screen.getByPlaceholderText("senha");
    expect(passwordField).toBeInTheDocument();
  });
});
