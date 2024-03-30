import React from 'react'
import { render, screen } from '@testing-library/react'
import CardMolecule from '.'
import '@testing-library/jest-dom'
import { CardProps } from '.'

describe('CardMolecule', () => {
  const mockProps: CardProps = {
    availableCash: 1000,
    width: '100%',
    height: 'auto',
    handleOnClick: jest.fn(),
  }
  it('should call handleOnClick when button is clicked', () => {
    render(<CardMolecule {...mockProps} />)

    const button = screen.getByRole('button', { name: 'New Cash Kick' })
    button.click()

    expect(mockProps.handleOnClick).toHaveBeenCalled()
  })
})
