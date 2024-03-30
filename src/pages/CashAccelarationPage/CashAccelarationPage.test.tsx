import { render, screen, fireEvent } from '@testing-library/react'
import { CashAccelarationPage } from '.'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'

describe('Cash Accelaration Page Test', () => {
  test('Cash Accelaration Page rendered', async () => {
    render(
      <BrowserRouter>
        {' '}
        <CashAccelarationPage />
      </BrowserRouter>
    )
    const element = await screen.findByTestId('cash-acceleration-page')
    expect(element).toBeInTheDocument()
  })

  test('Clicking "My Contracts" button  activates the button', async () => {
    render(
      <BrowserRouter>
        {' '}
        <CashAccelarationPage />
      </BrowserRouter>
    )
    const myContractsButton = screen.getByTestId('my-contracts-button')
    fireEvent.click(myContractsButton)
    expect(myContractsButton).toBeInTheDocument()
  })

  test('Clicking "My Cashkicks" button  activates the button', async () => {
    render(
      <BrowserRouter>
        {' '}
        <CashAccelarationPage />
      </BrowserRouter>
    )
    const myCashkicksButton = screen.getByTestId('my-cashkicks-button')
    fireEvent.click(myCashkicksButton)
    expect(myCashkicksButton).toBeInTheDocument()
  })
})
