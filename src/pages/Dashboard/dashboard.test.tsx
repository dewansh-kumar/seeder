import { render, screen } from '@testing-library/react'
import Dashboard from '.'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
describe('DashBoard Page Test', () => {
  test('Dashboard Page Rendered', async () => {
    render(
      <BrowserRouter>
        {' '}
        <Dashboard />{' '}
      </BrowserRouter>
    )
    const element = await screen.findByTestId('dashboard')
    expect(element).toBeInTheDocument()
  })
})
