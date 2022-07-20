import { render, screen, fireEvent} from '@testing-library/react'
import React from 'react';
import {List} from "./List"

const items= [];

for (let cpt = 0; cpt < 10; cpt++) {
  items.push({
    primaryText: `player-${1}`,
    secondaryText: `${cpt * 15}`,
  });
}

describe('List tests', () => {
  it('should display list', () => {
  render(<List items={items} />);
      const list = screen.getByLabelText("wam-list");
      expect(list).toBeInTheDocument();
  });
});