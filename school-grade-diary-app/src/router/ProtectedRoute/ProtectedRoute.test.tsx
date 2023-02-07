import {
  act,
  render,
  RenderResult,
  screen,
  Screen,
  waitFor,
} from "@testing-library/react";
import { ReactNode } from "react";
import {
  BrowserRouter,
  createMemoryRouter,
  MemoryRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";

describe("Protected Route test suite", () => {
  const RenderComponent = () => {
    return render(
      <MemoryRouter
        initialEntries={["/protected-route", "/login"]}
        initialIndex={0}
      >
        <Routes>
          <Route
            path="/protected-route"
            element={
              <ProtectedRoute>
                <>
                  <span> Conteudo rota protegida </span>
                </>
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <div>
                <span> Conteudo login </span>
              </div>
            }
          />
        </Routes>
      </MemoryRouter>
    );
  };

  afterEach(() => {
    window.localStorage.clear();
  });

  it("should render protected route content", () => {
    window.localStorage.setItem("acessToken", "tokengerado");
    RenderComponent();
    const ProtectedRouteContent = screen.getByText("Conteudo rota protegida");
    expect(ProtectedRouteContent).toBeInTheDocument();
  });

  it("should redirect to login route", () => {
    RenderComponent();
    const LoginRouteTextContent = screen.getByText("Conteudo login");
    expect(LoginRouteTextContent).toBeInTheDocument();
  });
});
