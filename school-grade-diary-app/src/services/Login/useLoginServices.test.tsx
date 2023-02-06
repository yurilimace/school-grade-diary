import React from "react";
import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { LoginForm } from "../../types/Login/login";
import { useLoginService } from "./useLoginServices";
import { QueryClient, QueryClientProvider } from "react-query";
import { CreateMockServer } from "../MockServer";
import { Server } from "miragejs/server";

describe("test useLoginService Hook", () => {
  let server: Server;
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={new QueryClient()}>
      {children}
    </QueryClientProvider>
  );

  beforeEach(() => {
    server = CreateMockServer();
  });

  afterEach(() => {
    server.shutdown();
  });

  it("form submit return a string token", async () => {
    const { result } = renderHook(() => useLoginService(), {
      wrapper: wrapper,
    });
    const LoginFormObject: LoginForm = {
      email: "teste@test.com",
      password: "Password",
    };

    const loginRequestResponseMock = "tokengerado";

    act(() => {
      result.current.mutate(LoginFormObject);
    });

    await waitFor(() => {
      expect(result.current.data?.token).toBe(loginRequestResponseMock);
      expect(result.current.isSuccess).toBe(true);
    });
  });
});
