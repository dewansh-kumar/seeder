import { render } from '@testing-library/react'
import Banner from '../../../../public/assests/images/celebration.svg'

import Images from './index'
test('Image should render', () => {
  render(<Images src={Banner} alt="Banner" />)
  const displayedImage = document.querySelector('img') as HTMLImageElement
  expect(displayedImage.src).toContain(Banner)
})
