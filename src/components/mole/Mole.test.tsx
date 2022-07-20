import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { Mole } from "./Mole";

describe("Mole tests", () => {
  it("should display mole and hide hole", () => {
    render(<Mole id={"test"} isHidden={false} onClick={() => {}} />);
    const mole = screen.getByLabelText("wam-mole");
    expect(mole).toBeInTheDocument();
    const hole = screen.queryByLabelText("wam-hole");
    expect(hole).toBeNull();
  });
  it("should not display mole and display hole", () => {
    render(<Mole id={"test"} isHidden={true} onClick={() => {}} />);
    const mole = screen.queryByLabelText("wam-mole");
    expect(mole).toBeNull();
    const hole = screen.getByLabelText("wam-hole");
    expect(hole).toBeInTheDocument();
  });
  it("should change visibilty", () => {
    render(<Mole id={"test"} onClick={() => {}} isHidden={false} />);
    const mole = screen.getByLabelText("wam-mole");
    fireEvent.click(mole);
    const hole = screen.getByLabelText("wam-hole");
    expect(hole).toBeInTheDocument();
  });
});
