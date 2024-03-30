import CardPayment from '.'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
describe('Card Data Payment', () => {
  test('testing default value of label', () => {
    render(<CardPayment amount="$14,204.55" label="Due - May 03, 2021" />)
    const displayValue = screen.getByText('Due - May 03, 2021')
    expect(displayValue).toBeInTheDocument()
  })
  test('testing default  value of amount', () => {
    render(<CardPayment amount="$14,204.55" label="Due - May 03, 2021" />)
    const element = screen.getByText('$14,204.55')
    expect(element).toBeInTheDocument()
  })
})
