import {render, screen} from '@testing-library/react'
import React from 'react';
import {Score} from "./Score"

describe('Score tests', () => {
  it('should contains the correct score', () => {
  render(<Score scorePoints={99999} />);
      const score = screen.getByText("99999");
      expect(score).toBeInTheDocument();
  });
});