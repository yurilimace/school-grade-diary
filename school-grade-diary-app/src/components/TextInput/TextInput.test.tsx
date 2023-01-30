import { fireEvent, render, screen } from "@testing-library/react";
import { FieldError } from "react-hook-form";
import { TextInput } from "./TextInput";
describe("Test TextInputComponent", () => {
  const handleChangeMocked = jest.fn();
  const RenderComponent = () =>
    render(<TextInput label="teste" handleChange={handleChangeMocked} />);

  it("should render TextInput Correctly", () => {
    RenderComponent();
    const labelText = screen.getByText("teste");
    expect(labelText).toBeInTheDocument();
  });

  it("should call handleChange Function", () => {
    RenderComponent();
    const labelText = screen.getByText("teste");
    expect(labelText).toBeInTheDocument();
    const inputField = screen.getByRole("input");
    expect(inputField).toBeInTheDocument;
    fireEvent.click(inputField);
    fireEvent.change(inputField, { target: { value: "a" } });
    expect(handleChangeMocked).toBeCalled();
  });

  it("should render input as required field on label", () => {
    const { rerender } = RenderComponent();
    rerender(
      <TextInput
        label="teste"
        handleChange={handleChangeMocked}
        requiredField
      />
    );
    const requiredLabelSymbol = screen.getByText("*");
    expect(requiredLabelSymbol).toBeInTheDocument();
  });
  it("should render required field error message", () => {
    const { rerender } = RenderComponent();
    const formErrorField: FieldError = {
      message: "Error Message",
      type: "value",
    };
    rerender(
      <TextInput
        label="teste"
        handleChange={handleChangeMocked}
        requiredField
        fieldError={formErrorField}
      />
    );
    const displayedErrorMessage = screen.getByText("Error Message");
    expect(displayedErrorMessage).toBeInTheDocument();
  });
});
