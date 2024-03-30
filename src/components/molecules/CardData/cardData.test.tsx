import CardData from '.'
import { render } from '@testing-library/react'
import Calender from '../../../../public/assests/icons/calendar.svg'
import '@testing-library/jest-dom'
describe('Card data', () => {
  test('Component renders', () => {
    render(<CardData />)
    const displayedImage = document.querySelector('img') as HTMLImageElement
    expect(displayedImage.src).toContain(Calender)
  })
})
