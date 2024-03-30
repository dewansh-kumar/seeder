/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react'
import MockAdapter from 'axios-mock-adapter'
import Data from '../../Data/data.json'
import NewCashKickPage from '.'
import Api, { url } from '../../Services/Api'
import { BrowserRouter } from 'react-router-dom'

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}))

describe('Testing new CashKick page', () => {
  let mock: any
  beforeEach(() => {
    mock = new MockAdapter(Api)
    mock
      .onGet(`${url}/contracts?_sort=perPayment&_order=asc`)
      .reply(200, Data.contracts)
  })

  afterEach(() => {
    mock.reset()
  })

  it('Check header properly rendering or not', async () => {
    render(
      <BrowserRouter>
        <NewCashKickPage />
      </BrowserRouter>
    )
    await screen.findByText('New cash kick')
    await screen.findByText('Let’s setup a new cash kick to power your Saas')
  })
  it('Check body properly rendering or not', async () => {
    render(<NewCashKickPage />)
    await screen.findByText('Your Contracts')
    await screen.findByAltText('Info Icon')
  })
})
