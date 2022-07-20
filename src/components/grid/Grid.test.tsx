import { render, screen } from "@testing-library/react";
import React from "react";
import { Grid } from "./Grid";
import { generateMoles } from "../../utils/utils";

describe("Grid tests", () => {
  it("should render grid", () => {
    const griddata = generateMoles(3, 4);
    render(<Grid gridData={griddata} onMoleClick={() => {}} />);
    const grid = screen.getByLabelText("wam-grid");
    expect(grid).toBeInTheDocument();
  });
});
