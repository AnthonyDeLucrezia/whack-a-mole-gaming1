import { render, screen } from "@testing-library/react";
import React from "react";
import { Name } from "./Name";

describe("Score tests", () => {
  it("should contains the correct name", () => {
    render(<Name playerName="Tony" />);
    const name = screen.getByText("Tony");
    expect(name).toBeInTheDocument();
  });
});
