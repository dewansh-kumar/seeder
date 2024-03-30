import { render, screen } from '@testing-library/react'
import CheckboxLabels from '.'

import '@testing-library/jest-dom'

test('testing the checkbox', () => {
  render(<CheckboxLabels label={''} />)

  const checkboxElement = screen.getByRole('checkbox')
  expect(checkboxElement).toBeInTheDocument()
})
