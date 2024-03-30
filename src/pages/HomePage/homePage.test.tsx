import { render, screen } from '@testing-library/react'
import HomePage from '.'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
describe('Home Page Test', () => {
  test('Home page Rendered', async () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    )
    const element = await screen.findByTestId('home-page')
    expect(element).toBeInTheDocument()
  })
})
