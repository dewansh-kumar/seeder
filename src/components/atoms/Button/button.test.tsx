import { render, fireEvent } from '@testing-library/react'
import TextButton from '.'
import '@testing-library/jest-dom/extend-expect'

describe('TextButton', () => {
  it('should render the label text', () => {
    const { getByText } = render(<TextButton label="Click me" />)
    const labelElement = getByText('Click me')
    expect(labelElement).toBeInTheDocument()
  })

  it('should call the onClick function when clicked', () => {
    const onClick = jest.fn()
    const { getByRole } = render(
      <TextButton label="Click me" onClick={onClick} />
    )
    const buttonElement = getByRole('button')
    fireEvent.click(buttonElement)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should apply the specified style', () => {
    const style = { color: 'red' }
    const { getByRole } = render(<TextButton label="Click me" style={style} />)
    const buttonElement = getByRole('button')
    expect(buttonElement).toHaveStyle('color: red;')
  })

  it('should be disabled when the "disabled" prop is true', () => {
    const { getByRole } = render(<TextButton label="Click me" disabled />)
    const buttonElement = getByRole('button')
    expect(buttonElement).toBeDisabled()
  })
})
