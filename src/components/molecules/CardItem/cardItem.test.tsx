import CardItem from '.'
import Calender from '../../../../public/assests/icons/calendar.svg'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
describe('Card Item', () => {
  test('Component renders', () => {
    render(
      <CardItem
        iconSrc={Calender}
        subHeadingText="Term Cap"
        headingText="12 Months"
      />
    )
    const displayValue = screen.getByText('12 Months')
    expect(displayValue).toBeInTheDocument()
  })
})
