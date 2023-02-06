import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Server } from "miragejs";
import { QueryClient, QueryClientProvider } from "react-query";

import { CreateMockServer } from "../../services/MockServer";
import { Login } from "./login";

describe("login screen tests", () => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={new QueryClient()}>
      {children}
    </QueryClientProvider>
  );
  const RenderComponent = () => render(<Login />, { wrapper: Wrapper });

  let server: Server;

  beforeEach(() => {
    server = CreateMockServer();
    RenderComponent();
  });

  afterEach(() => {
    server.shutdown();
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

  it("should render a loading button after submit login form", async () => {
    const emailInputField = screen.getByPlaceholderText("email");
    expect(emailInputField).toBeInTheDocument();
    const passwordField = screen.getByPlaceholderText("senha");
    expect(passwordField).toBeInTheDocument();
    const submitButton = screen.getByText("Login");
    expect(submitButton).toBeInTheDocument();
    fireEvent.change(emailInputField, { target: { value: "teste@test.com" } });
    fireEvent.change(passwordField, { target: { value: "Aaaaaaaaa" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      const loadingButton = screen.getByText("Logando ....");
      expect(loadingButton).toBeInTheDocument();
    });
  });
});
