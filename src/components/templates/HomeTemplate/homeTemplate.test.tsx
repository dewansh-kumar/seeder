import { render, screen } from '@testing-library/react'
import HomeTemplate from '.'
import Text from '../../atoms/Typography'
import { BrowserRouter } from 'react-router-dom'

describe('Testing home template', () => {
  it('Check Properly rendering or not', async () => {
    render(
      <BrowserRouter>
        <HomeTemplate
          header={<Text textBody="Header" />}
          body={<Text textBody="Body" />}
          footer={<Text textBody="Footer" />}
        />
      </BrowserRouter>
    )
    const body = await screen.findByText('Body')
    expect(body).toBeDefined()
    const header = await screen.findByText('Header')
    expect(header).toBeDefined()
    const footer = await screen.findByText('Footer')
    expect(footer).toBeDefined()
  })
})
