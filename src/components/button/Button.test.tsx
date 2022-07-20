import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { Button } from "./Button";

const onClick = () => console.log("clicked !");

describe("Button tests", () => {
  it("should render a disabled button", () => {
    render(<Button label={"label test"} onClick={onClick} disabled />);
    const buttonDisabled = screen.getByRole("button");
    expect(buttonDisabled).toBeDisabled();
  });

  it("should render a enabled button", () => {
    render(<Button label="label test" onClick={onClick} />);
    const buttonEnabled = screen.getByRole("button");
    expect(buttonEnabled).toBeEnabled();
  });

  it("should render a button with label : label test", () => {
    render(<Button label="label test" onClick={onClick} />);
    const buttonLabel = screen.getByRole("button");
    expect(buttonLabel).toHaveTextContent("label test");
  });

  it("should click on the button", () => {
    const handleClick = jest.fn();
    render(<Button label="click me" onClick={handleClick} />);
    fireEvent.click(screen.getByText(/click me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
