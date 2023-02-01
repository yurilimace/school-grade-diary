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
describe("test suite from useLoginForm hook", () => {
  it("should call on submit form", async () => {
    const { result } = renderHook(() => useLoginForm());
    const submitCalled = jest.spyOn(result.current, "submitForm");

    await act(() => {
      result.current.submitForm();
    });

    expect(submitCalled).toBeCalled();
  });
});
