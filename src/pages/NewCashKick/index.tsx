/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Box, Stack } from '@mui/material'
import Text from '../../components/atoms/Typography'
import theme from '../../themes'
import HomeTemplate from '../../components/templates/HomeTemplate'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useCallback, useEffect, useMemo, useState } from 'react'
import AvtarSvg from '../../../public/assests/icons/Avtar.svg'
import DataTable from '../../components/organisms/DataTable'
import Icons from '../../components/atoms/Icons'
import InfoIcon from '../../../public/assests/icons/info-circle.svg'
import { ColumnDefinationContacts } from '../../components/organisms/DataTable/constant'
import SummaryBox from '../../components/organisms/SummaryBox'
import { getAllContracts } from '../../Services/services'
import AvtarIcon from '../../components/molecules/AvatarIcon'
import TextButton from '../../components/atoms/Button'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (
    <Box>
      <Stack
        marginTop="2.2rem"
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Stack gap={2}>
          <Stack>
            <Text
              textBody="New cash kick"
              variant="title"
              sx={{ color: theme.palette.primary.primaryTextHighEmp }}
            />
            <Text
              textBody="Let’s setup a new cash kick to power your Saas"
              variant="heading2"
              sx={{ color: theme.palette.primary.primaryTextLowEmp }}
            />
          </Stack>
          <Stack
            alignItems="center"
            justifyContent="flex-start"
            direction="row"
            gap={1}
          >
            <TextButton
              onClick={() => navigate('/')}
              style={{
                backgroundColor: theme.palette.background.backgroundElevation1,
                color: theme.palette.primary.primaryTextHighEmp,
                padding: '10px',
                textTransform: 'none',
              }}
              startIcon={
                <ArrowBackIcon
                  sx={{
                    color: theme.palette.primary.primaryTextHighEmp,
                    fontSize: '17px',
                  }}
                />
              }
              label="Back"
            />
          </Stack>
        </Stack>
        <Stack>
          <AvtarIcon src={AvtarSvg} alt="My Photo" />
        </Stack>
      </Stack>
    </Box>
  )
}
const Body = () => {
  const [selected, setSelected] = useState<string[]>([])
  const [data, setData] = useState<Array<any>>([])
  const navigate = useNavigate()
  const getAllData = useCallback(() => {
    getAllContracts()
      .then((data) => {
        setData(data)
      })
      .catch((err) => {
        setData([])
        console.log(err)
      })
  }, [])
  const totalSelectedAmount = useMemo(() => {
    let Amount = 0
    data.forEach((ele) => {
      if (selected.indexOf(ele.id) !== -1) {
        Amount += ele.perPayment
      }
    })
    return Amount
  }, [selected, data])
  const totalAmount = useMemo(() => {
    let Amount = 0
    data.forEach((ele) => {
      Amount += ele.perPayment
    })
    return Amount
  }, [data])
  const onSilderChangeHandler = (
    _event: Event,
    newValue: number | number[]
  ) => {
    setSelected(data.slice(0, newValue as number).map((ele) => ele.id))
  }
  const handleReset = () => {
    setSelected([])
  }

  useEffect(() => {
    getAllData()
  }, [getAllData])

  const handleNavgateHandler = () => {
    const filterData = data.filter((ele) => selected.indexOf(ele.id) !== -1)
    navigate('/reviewPage', { state: filterData })
  }

  return (
    <Stack direction="row" gap={3} justifyContent="space-between">
      <DataTable
        selected={selected}
        setSelected={setSelected}
        height="fit-content"
        width="70%"
        tableHead={
          <Stack direction="row" gap={2} alignItems="center">
            <Text
              textBody="Your Contracts"
              sx={{ color: theme.palette.primary.primaryTextHighEmp }}
              variant="heading2"
            />
            <Icons src={InfoIcon} alt="Info Icon" />
          </Stack>
        }
        data={data}
        ColumnDefinations={ColumnDefinationContacts}
        hasSelect={true}
      />
      <SummaryBox
        term="12 Mounth"
        maxValue={data.length}
        totalSelectedAmount={totalSelectedAmount}
        totalValue={totalAmount}
        handleNavigation={handleNavgateHandler}
        handleResetClick={handleReset}
        width="340px"
        height="fit-content"
        numberOfSelectedContracts={selected.length}
        onSilderChangeHandler={onSilderChangeHandler}
      />
    </Stack>
  )
}

const NewCashKickPage = () => {
  return (
    <HomeTemplate
      header={<Header />}
      body={<Body />}
      bodySpace={10}
      footerSpace={0}
    />
  )
}

export default NewCashKickPage
