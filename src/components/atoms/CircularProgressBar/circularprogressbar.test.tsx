import CircularProgressWithLabel from '.'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
describe('Circular Progress Bar', () => {
  test('testing MUI typography is present', () => {
    render(<CircularProgressWithLabel value={10} />)
    const { container } = render(<CircularProgressWithLabel value={10} />)
    expect(container.getElementsByClassName('MuiTypography-root').length).toBe(
      1
    )
  })
})
