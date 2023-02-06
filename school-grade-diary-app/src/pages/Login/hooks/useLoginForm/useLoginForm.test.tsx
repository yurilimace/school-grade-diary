import React from "react";
import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
} from "@testing-library/react";
import { Login } from "../../login";

import { useLoginForm } from "./useLoginForm";
import { QueryClient, QueryClientProvider } from "react-query";
describe("test suite from useLoginForm hook", () => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={new QueryClient()}>
      {children}
    </QueryClientProvider>
  );
  it("should call on submit form", async () => {
    const { result } = renderHook(() => useLoginForm(), { wrapper: Wrapper });
    const submitCalled = jest.spyOn(result.current, "submitForm");

    await act(() => {
      result.current.submitForm();
    });

    expect(submitCalled).toBeCalled();
  });
});
