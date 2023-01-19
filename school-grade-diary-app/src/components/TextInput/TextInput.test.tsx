import { fireEvent, render } from "@testing-library/react";
import { TextInput } from "./TextInput";
describe("Test TextInputComponent", () => {
  const handleChangeMocked = jest.fn();
  const RenderComponent = () =>
    render(<TextInput label="teste" handleChange={handleChangeMocked} />);
  it("should render TextInput Correctly", () => {
    const { getByText } = RenderComponent();
    const labelText = getByText("teste");
    expect(labelText).toBeInTheDocument();
  });

  it("should call handleChange Function", () => {
    const { getByText, getByRole } = RenderComponent();
    const labelText = getByText("teste");
    expect(labelText).toBeInTheDocument();
    const inputField = getByRole("input");
    expect(inputField).toBeInTheDocument;
    fireEvent.click(inputField);
    fireEvent.change(inputField, { target: { value: "a" } });
    expect(handleChangeMocked).toBeCalled();
  });
});
