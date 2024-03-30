import { render } from '@testing-library/react'
import SeederLogo from '../../../../public/assests/icons/SeederLogo.svg'
import Icons from './index'

describe('Icon Test', () => {
  test('Icon should render', () => {
    render(<Icons src={SeederLogo} alt="Logo" />)
    const displayedImage = document.querySelector('img') as HTMLImageElement
    expect(displayedImage.src).toContain(SeederLogo)
  })
  test('Icon should have alt', async () => {
    render(<Icons src={SeederLogo} alt="Logo" />)

    const displayedImage = document.querySelector('img') as HTMLImageElement
    expect(displayedImage.alt).toContain('Logo')
  })
})
