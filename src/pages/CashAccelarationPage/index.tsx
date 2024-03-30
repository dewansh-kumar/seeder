import Text from '../../components/atoms/Typography'
import HomeTemplate from '../../components/templates/HomeTemplate'
import theme from '../../themes'
import { Box, Button, Stack } from '@mui/material'
import CardData from '../../components/molecules/CardData'
import CardMolecule from '../../components/molecules/NewCashCardKick'
import Avtar from '../../components/atoms/Avtar'
import dropdown from '../../../public/assests/icons/DropDown.svg'
import DataTable from '../../components/organisms/DataTable'
import Icons from '../../components/atoms/Icons'
import InfoIcon from '../../../public/assests/icons/info-circle.svg'
import RefreshIcon from '../../../public/assests/icons/RefreshIcon.svg'
import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import {
  ColumnDefinationCashKicks,
  ColumnDefinationContracts,
} from './constants'
import Api from '../../Services/Api'

import Avatar from '../../../public/assests/icons/Avtar.svg'
import { useLocation, useNavigate } from 'react-router-dom'

type Contract = {
  id: number
  name: string
  status: string
  perPayment: number
  totalFinanced: string
  totalAvailable: number
}

type ContractsData = Contract[]

type CashKick = {
  id: number
  name: string
  status: string
  maturity: string
  totalReceived: number
  totalFinanced: number
}

type CashKickData = CashKick[]
interface FooterProps {
  columnDefination: { key: string; label: string }[]
  handlePaymentClick: () => void
  handleContractClick: () => void
  active: string
  data: ContractsData | CashKickData
}

const StyledButton = styled(Button)(({ active }: { active?: string }) => ({
  backgroundColor:
    active === 'ok'
      ? theme.palette.primary.primaryAlphaPurple600
      : theme.palette.background.backgroundElevation1,
  border: `1px solid ${
    active
      ? theme.palette.primary.primaryAlphaPurple400
      : theme.palette.border.borderHighEmp
  }`,

  color: active
    ? theme.palette.primary.primaryAlphaPurple400
    : theme.palette.primary.primaryTextMidEmp,

  width: '185px',
  height: '43px',
  paddingTop: 12,
  paddingLeft: 24,
  paddingBottom: 12,
  paddingRight: 24,
  textTransform: 'none',
  borderRadius: '12px',
  cursor: 'pointer',
  textAlign: 'center',
}))

const Header = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '32px',
        }}
      >
        <Stack
          direction="column"
          spacing={2}
          sx={{ marginTop: '40px' }}
          data-testid="cash-acceleration-page"
        >
          <Text
            variant="title"
            textBody="Cash Accelaration"
            sx={{ color: theme.palette.primary.primaryWhite }}
          />
          <Text
            variant="heading2"
            textBody="Place to create new cash kicks to run your business"
            sx={{ color: theme.palette.primary.primaryTextLowEmp }}
          />
        </Stack>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '11px',
          }}
        >
          <Avtar src={Avatar} width="32" height="32" alt="profile" />
          <Icons src={dropdown} alt="dropdown" />
        </Box>
      </Box>
    </>
  )
}

const Footer: React.FC<FooterProps> = ({
  columnDefination,
  data,
  handleContractClick,
  handlePaymentClick,
  active,
}) => {
  return (
    <DataTable
      tableHead={
        <Stack direction="column">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 95,
              paddingTop: '32px',
            }}
          >
            <Stack direction="row" gap={2} alignItems="center">
              <Text
                textBody="Cash Accelaration"
                sx={{ color: theme.palette.primary.primaryWhite }}
                variant="heading1"
              />
              <Icons src={InfoIcon} alt="Info Icon" />
            </Stack>
            <Stack
              direction="row"
              gap={2}
              alignItems="center"
              sx={{ cursor: 'pointer' }}
            >
              <Icons src={RefreshIcon} alt="Refresh Icon" />
              <Text
                textBody="sync now"
                sx={{ color: theme.palette.primary.primaryAlphaPurple400 }}
                variant="body1"
              />
            </Stack>
          </Box>

          <Stack
            direction="row"
            gap={2}
            sx={{ marginTop: '20px', marginBottom: '20px' }}
          >
            <StyledButton
              variant="contained"
              onClick={handleContractClick}
              active={active === 'contracts' ? 'ok' : ''}
              data-testid="my-contracts-button"
            >
              My Contracts
            </StyledButton>
            <StyledButton
              variant="contained"
              onClick={handlePaymentClick}
              active={active === 'cashkicks' ? 'ok' : ''}
              data-testid="my-cashkicks-button"
            >
              My Cashkicks
            </StyledButton>
          </Stack>
        </Stack>
      }
      data={data}
      ColumnDefinations={columnDefination}
      hasSelect={false}
      width="300"
      height="fit-content"
    />
  )
}

const Content = () => {
  const navigate = useNavigate()
  return (
    <>
      <Stack direction="row" spacing="20px">
        <CardData />
        <CardMolecule
          handleOnClick={() => navigate('/newCashKick')}
          availableCash={800000}
          width="40%"
          height="247px"
        />
      </Stack>
    </>
  )
}

export const CashAccelarationPage = () => {
  const location = useLocation()
  const [state, setState] = React.useState(location.state ?? 'contracts')
  const [contractsdata, setContractsData] = React.useState([])
  const [active, setActive] = React.useState(state)

  const [cashkickdata, setCashKickData] = React.useState([])
  useEffect(() => {
    Api.get(`/${state}`)
      .then((response) => {
        state === 'contracts'
          ? setContractsData(response.data)
          : setCashKickData(response.data)
      })
      .catch((error) => {
        throw error
      })
  }, [state])

  const handleContractClick = () => {
    setState('contracts')
    setActive('contracts')
  }

  const handlePaymentClick = () => {
    setState('cashkicks')
    setActive('cashkicks')
  }

  return (
    <HomeTemplate
      header={<Header />}
      body={<Content />}
      footer={
        <Footer
          columnDefination={
            state === 'contracts'
              ? ColumnDefinationContracts
              : ColumnDefinationCashKicks
          }
          data={state === 'contracts' ? contractsdata : cashkickdata}
          handleContractClick={handleContractClick}
          handlePaymentClick={handlePaymentClick}
          active={active}
        />
      }
    />
  )
}
