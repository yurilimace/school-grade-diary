import { renderHook } from "@testing-library/react";
import { useAuth } from "./useAuth";

describe("useAuth test suite", () => {
  it("should return localstorage token field", () => {
    window.localStorage.setItem("acessToken", "tokengerado");
    const { result } = renderHook(() => useAuth());
    expect(result.current.userToken).toBe("tokengerado");
  });

  it("should return null when localstorage doesnt have a token key", () => {
    window.localStorage.clear();
    const { result } = renderHook(() => useAuth());
    expect(result.current.userToken).toBe(null);
  });
});
