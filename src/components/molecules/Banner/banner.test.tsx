import Banner from '.'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Banner test', () => {
  test('Component renders', async () => {
    render(<Banner />)
    const displayedText = await screen.findByTestId('celebration-message')
    expect(displayedText).toBeInTheDocument()
  })
})
