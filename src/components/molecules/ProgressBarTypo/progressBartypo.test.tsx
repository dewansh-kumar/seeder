import ProgressBar from '.'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
describe('Progress Bar', () => {
  test('testing default value of label', () => {
    render(
      <ProgressBar amount="$170,454.55" label="Outstanding amount" value={10} />
    )
    const displayValue = screen.getByText('Outstanding amount')
    expect(displayValue).toBeInTheDocument()
  })
  test('testing default  value of amount', () => {
    render(
      <ProgressBar amount="$170,454.55" label="Outstanding amount" value={10} />
    )
    const element = screen.getByText('$170,454.55')
    expect(element).toBeInTheDocument()
  })
})
