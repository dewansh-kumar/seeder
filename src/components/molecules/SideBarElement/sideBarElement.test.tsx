import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SidebarElement from '.'
import HomeIcon from '../../../../public/assests/icons/HomeIcon.svg'

describe('Testing SideNavbarElement Molecules', () => {
  it('Check Properly rendering or not', () => {
    render(
      <SidebarElement icon={HomeIcon} name="Home" title="Home" active={false} />
    )
    const element = screen.findByAltText('Home')
    expect(element).toBeDefined()
  })
  it('Check Typography type is body 2', () => {
    render(<SidebarElement icon={HomeIcon} name="Home" title="Home" />)
    const element = screen.getByText('Home')
    expect(element).toBeDefined()
    expect(element.classList).toContain('MuiTypography-body2')
  })
  it('Chck Click is working or not', async () => {
    const fun = jest.fn()
    render(
      <SidebarElement
        icon={HomeIcon}
        name="Home"
        title="Home"
        onClick={fun}
        active={false}
      />
    )
    const element = document.getElementById('Home') as HTMLElement
    expect(element).toBeDefined()
    await userEvent.click(element)
    expect(fun).toBeCalled()
  })
})
