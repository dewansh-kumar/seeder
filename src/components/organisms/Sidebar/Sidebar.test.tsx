import { screen, render } from '@testing-library/react'

import '@testing-library/jest-dom'
import Sidebar from '.'

import { BrowserRouter } from 'react-router-dom'

describe('Sidebar', () => {
  it('Sidebar test', () => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    )

    const text1 = screen.getByText('Seeder')
    expect(text1).toBeInTheDocument

    const text2 = screen.getByText('Home')
    expect(text2).toBeInTheDocument

    const text3 = screen.getByText('Cash Accleration')
    expect(text3).toBeInTheDocument
  })
})
