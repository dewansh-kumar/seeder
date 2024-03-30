import React, { useState } from 'react'
import { Stack, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import Icons from '../../atoms/Icons'
import Text from '../../atoms/Typography'
import theme from '../../../themes'
import SidebarElement from '../../molecules/SideBarElement'
import HomeIcon from '../../../../public/assests/icons/HomeIcon.svg'
import CashAcclerationIcon from '../../../../public/assests/icons/CashAccleration.svg'
import FlashIcon from '../../../../public/assests/icons/FlashIcon.svg'
import LogoIcon from '../../../../public/assests/icons/SeederLogo.svg'
import { useNavigate } from 'react-router-dom'

const sidebarElementText: {
  id: number
  text: string
  icon: string
  name: string
  dest: string
}[] = [
  {
    id: 0,
    text: 'Home',
    icon: HomeIcon,
    name: 'home icon',
    dest: '/',
  },
  {
    id: 1,
    text: 'Cash Accleration',
    icon: CashAcclerationIcon,
    name: 'cashAccleration icon',
    dest: '/cashAcceleration',
  },
]
const Sidebar = () => {
  const [activeElement, setActiveElement] = useState('Home')
  const navigate = useNavigate()
  const SidebarContainer = styled(Stack)({
    backgroundColor: theme.palette.background.backgroundElevation1,
    padding: '40px 20px',
    height: 'calc(100vh - 80px)',
    gap: '40px',
    overflow: 'hidden',
    width: '250px',
  })

  const HeadContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10px',
    height: '10%',
  })

  const BodyContainer = styled(Box)({
    height: '80%',
    gap: '4px',
  })

  const FooterContainer = styled(Box)({
    height: '10%',
  })

  return (
    <SidebarContainer>
      <HeadContainer>
        <Icons src={LogoIcon} alt="logo icon" width="29.9px" height="28px" />
        <Text
          variant="title"
          textBody="Seeder"
          sx={{
            color: theme.palette.primary.primaryTextHighEmp,
            fontSize: '24px',
          }}
        />
      </HeadContainer>
      <BodyContainer>
        {sidebarElementText.map((item) => {
          return (
            <SidebarElement
              key={item.id}
              active={activeElement === item.text ? false : true}
              title={item.text}
              icon={item.icon}
              name={item.name}
              onClick={() => {
                setActiveElement(item.text)
                navigate(item.dest)
              }}
            />
          )
        })}
      </BodyContainer>
      <FooterContainer>
        <SidebarElement
          active={activeElement === 'Watch how to' ? false : true}
          title="Watch how to"
          icon={FlashIcon}
          name="flash icon"
          onClick={() => {
            setActiveElement('Watch how to')
          }}
        />
      </FooterContainer>
    </SidebarContainer>
  )
}

export default Sidebar
