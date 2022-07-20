import { render, screen } from "@testing-library/react";
import React from "react";
import { InputText } from "./InputText";

const onInputChange = () => console.log("updated !");

describe("Input tests", () => {
  it("should render an input", () => {
    render(
      <InputText
        label="Enter somthing"
        id="input-id"
        onChange={onInputChange}
        key="btn-key"
        value={""}
      />
    );
    const emptyInput = screen.getByLabelText("Enter somthing");
    expect(emptyInput).toBeInTheDocument();
  });

  it("should render input with id : input-id", () => {
    render(
      <InputText
        label="Enter somthing"
        id="input-id"
        onChange={onInputChange}
        key="btn-key"
        value={""}
      />
    );
    const emptyInput = screen.getByLabelText("Enter somthing");
    expect(emptyInput).toHaveAttribute("id", "input-id");
  });

  it("should render input with value", () => {
    render(
      <InputText
        label="Enter somthing"
        id="input-id"
        onChange={onInputChange}
        key="btn-key"
        value={"value"}
      />
    );
    const input = screen.getByLabelText("Enter somthing");
    expect(input).toHaveValue("value");
  });
});
