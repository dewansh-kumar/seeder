import { screen, render } from '@testing-library/react'

import '@testing-library/jest-dom'
import ReviewCashKick from '.'
import { BrowserRouter } from 'react-router-dom'

describe('ReviewCashKick', () => {
  it('ReviewCashKick test', () => {
    render(
      <BrowserRouter>
        <ReviewCashKick />
      </BrowserRouter>
    )

    const text1 = screen.getByText('New cash kick')
    expect(text1).toBeInTheDocument

    const text2 = screen.getByText('Summary')
    expect(text2).toBeInTheDocument

    const text3 = screen.getByText('My Payments')
    expect(text3).toBeInTheDocument
  })
})
