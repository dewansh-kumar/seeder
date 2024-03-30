import { render, screen } from '@testing-library/react'
import Text from '.'
import '@testing-library/jest-dom/extend-expect'

describe('Text component', () => {
  it('renders with custom variant and text', () => {
    render(<Text variant="body2" textBody="Custom Text" />)
    const textElement = screen.getByText('Custom Text')
    expect(textElement).toBeInTheDocument()
    expect(textElement).toHaveTextContent('Custom Text')
    expect(textElement).toHaveClass('MuiTypography-root')
    expect(textElement).toHaveClass('MuiTypography-body2')
  })
})
