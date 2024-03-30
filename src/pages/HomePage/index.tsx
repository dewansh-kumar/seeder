import { Box, Paper, Stack, ThemeProvider, styled } from '@mui/material'
import theme from '../../themes'
import Text from '../../components/atoms/Typography'
import Avtar from '../../components/atoms/Avtar'
import Icons from '../../components/atoms/Icons'
import DropDown from '../../../public/assests/icons/DropDown.svg'
import Banner from '../../components/molecules/Banner'
import CardMolecule from '../../components/molecules/NewCashCardKick'
import DataTable from '../../components/organisms/DataTable'
import { ColumnDefinationContacts } from './constant'
import InfoIcon from '../../../public/assests/icons/info-circle.svg'
import { useEffect, useState } from 'react'
import HomeTemplate from '../../components/templates/HomeTemplate'
import Cheque from '../../../public/assests/images/Cheque.svg'
import Images from '../../components/atoms/Images'
import AvataSvg from '../../../public/assests/icons/Avtar.svg'
import { useNavigate } from 'react-router-dom'
import { getDate } from '../Dashboard/constant'

const StyledPaper = styled(Paper)({
  display: 'flex',
  alignItems: 'center',
  gap: '30px',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  padding: 10,
  background: theme.palette.background.backgroundElevation1,
  borderRadius: '12px',
})
const OuterStack = styled(Stack)({
  justifyContent: 'space-between',
})
const InnerStack = styled(Stack)({})
const AvatarStack = styled(Stack)({
  flexDirection: 'row',
  alignItems: 'center',
  gap: '2px',
})

const HomeBox = styled(Box)({
  width: '100vw',
  height: '100vh',
  margin: '0px !important',
  padding: '0px !important',
  overflowX: 'hidden',
  overflowY: 'hidden',
})

const HomeBodyStack = styled(Stack)({
  flexDirection: 'row',
  gap: '10px',
})

const AvatarWithIcon = () => {
  return (
    <AvatarStack>
      <Avtar src={AvataSvg} alt="Avatar pic" />
      <Icons src={DropDown} alt="dropDown svg" />
    </AvatarStack>
  )
}

export const HomeHeader = () => {
  const [greeting, setGreeting] = useState('afternoon')
  useEffect(() => {
    const d = new Date()
    const hours = d.getHours()
    if (hours < 12) setGreeting('morning')
    else if (hours >= 12 && hours <= 17) setGreeting('afternoon')
    else if (hours >= 17 && hours <= 24) setGreeting('evening')
  }, [])
  return (
    <OuterStack direction="row">
      <InnerStack>
        <Text
          textBody={`Good ${greeting} ✋`}
          variant="title"
          sx={{ color: theme.palette.primary.primaryTextHighEmp }}
        />
        <Text
          textBody={`${getDate()}`}
          variant="heading2"
          sx={{ color: theme.palette.primary.primaryTextLowEmp }}
        />
      </InnerStack>
      <AvatarWithIcon />
    </OuterStack>
  )
}

const HomeBody = () => {
  const navigate = useNavigate()
  return (
    <HomeBodyStack data-testid="home-page">
      <Banner />
      <CardMolecule
        availableCash={880000.0}
        width="100%"
        height="37vh"
        handleOnClick={() => {
          navigate('/newCashKick')
        }}
      />
    </HomeBodyStack>
  )
}

const HomeFooter = () => {
  return (
    <StyledPaper>
      <DataTable
        width="100%"
        height="auto"
        tableHead={
          <Stack direction="row" gap={2} alignItems="center">
            <Text
              textBody="Your Payment"
              sx={{ color: theme.palette.primary.primaryTextHighEmp }}
              variant="heading1"
            />
            <Icons src={InfoIcon} alt="Info Icon" />
          </Stack>
        }
        data={[]}
        ColumnDefinations={ColumnDefinationContacts}
      />

      <Images src={Cheque} alt="cheque image" />
    </StyledPaper>
  )
}

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomeBox>
        <HomeTemplate
          header={<HomeHeader />}
          body={<HomeBody />}
          footer={<HomeFooter />}
        />
      </HomeBox>
    </ThemeProvider>
  )
}

export default HomePage
