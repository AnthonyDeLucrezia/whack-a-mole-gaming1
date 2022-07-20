import {render, screen, fireEvent} from '@testing-library/react'
import React from 'react';
import {Hammer} from "./Hammer"

describe('Hammer tests', () => {
    it('should render hammer', () => {
        render( <Hammer posX={100} posY={100} />)
        const hammer = screen.getByLabelText('wam-hammer')
        expect(hammer).toBeInTheDocument()
      });

      it('should render animated hammer', () => {
        render( <Hammer posX={100} posY={100} />)
        const hammer = screen.getByLabelText('wam-hammer')
        fireEvent.click(hammer)
        expect(hammer).toHaveClass("wham-hamer-animation")
      });

});