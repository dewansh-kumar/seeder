import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import InputFieldAndText from '.'

describe('inputField and text component test', () => {
  test('inputFieldAndText', () => {
    const placeholder = 'Ex: marketing expenses'
    const value = 'Dewansh Kumar'
    const onChangeFun = (event: React.ChangeEvent<HTMLInputElement>) => {}
    const name = 'userName'
    const type = 'text'
    const textBody = 'Cash kick name'

    render(
      <InputFieldAndText
        placeholder={placeholder}
        value={value}
        onChangeFun={onChangeFun}
        name={name}
        type={type}
        textBody={textBody}
      />
    )

    const test1 = screen.getByText('Cash kick name')
    expect(test1).toBeInTheDocument()

    const test2 = screen.getByPlaceholderText('Ex: marketing expenses')
    expect(test2).toBeInTheDocument()
  })
})
