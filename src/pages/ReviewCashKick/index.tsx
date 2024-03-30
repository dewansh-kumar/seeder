/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo, useState } from 'react'
import HomeTemplate from '../../components/templates/HomeTemplate/index'
import { Box, Stack } from '@mui/material'
import Text from '../../components/atoms/Typography/index'
import theme from '../../themes'
import DataTable from '../../components/organisms/DataTable'
import InfoIcon from '../../../public/assests/icons/info-circle.svg'
import Icons from '../../components/atoms/Icons'
import { ColumnDefinationContacts } from '../../components/organisms/DataTable/constant'
import { useLocation, useNavigate } from 'react-router-dom'
import SummaryBox from '../../components/organisms/SummaryBox'
import AvtarIcon from '../../components/molecules/AvatarIcon/index'
import TextButton from '../../components/atoms/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import AvtarSvg from '../../../public/assests/icons/Avtar.svg'
import ModalBox from '../../components/organisms/ModalBox'
import { v4 } from 'uuid'
import { faker } from '@faker-js/faker'
import { newCashKick, newPayments } from '../../Services/services'

const Body = () => {
  const location = useLocation()
  const totalAmount = useMemo(() => {
    let Amount = 0
    location.state?.forEach((ele: any) => {
      Amount += ele?.perPayment
    })
    return Amount
  }, [location.state])
  const [showModal, setShowModal] = useState(false)
  const [model2, setModel2] = useState(true)
  const [name, setName] = useState('')

  const handleClickReview = () => {
    setShowModal(true)
  }

  const handleCreateClick = async () => {
    const uniqueId = v4()
    const totalAmountWithTaxes = totalAmount + totalAmount * 0.12
    try {
      await newCashKick({
        id: uniqueId,
        name: name,
        status: 'Pending',
        maturity: faker.date.future(),
        totalFinanced: totalAmount,
        totalReceived: totalAmount * 120,
      })
      const partialAMount = (totalAmountWithTaxes / 12).toFixed(2)

      for (let i = 1; i <= 12; i++) {
        const date = new Date()
        date.setDate(date.getDate() + 30 * i)
        await newPayments({
          id: v4(),
          dueDate: date.toLocaleString(),
          status: 'Upcoming',
          expectedAmount: 0,
          outStanding: partialAMount,
        })
      }
      setName('')
      setModel2(false)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <Stack direction="row" justifyContent="space-between" gap={5}>
      <ModalBox
        setOpen={setShowModal}
        model2={model2}
        setModel2={setModel2}
        open={showModal}
        inputValue={name}
        handleCreateClick={handleCreateClick}
        setinputValue={setName}
      />
      <Box width="70%">
        <DataTable
          tableHead={
            <Stack direction="row" gap={2} alignItems="center">
              <Text
                textBody="My Payments"
                sx={{ color: 'white' }}
                variant="heading2"
              />
              <Icons src={InfoIcon} alt="Info Icon" />
            </Stack>
          }
          width="100%"
          height="content-fit"
          hasSelect={false}
          ColumnDefinations={ColumnDefinationContacts}
          data={location.state ?? []}
        />
      </Box>

      <Box width="30%">
        <SummaryBox
          term="12 months"
          showBox={false}
          height="auto"
          width="100%"
          handleOnClick2={handleClickReview}
          totalValue={totalAmount}
          totalSelectedAmount={totalAmount}
          maxValue={10}
          numberOfSelectedContracts={location.state?.length ?? 0}
        />
      </Box>
    </Stack>
  )
}

const Header = () => {
  const navigate = useNavigate()
  return (
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
            onClick={() => {
              navigate('/newCashKick')
            }}
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
        <AvtarIcon src={AvtarSvg} />
      </Stack>
    </Stack>
  )
}

const ReviewCashKick = () => {
  return <HomeTemplate header={<Header />} body={<Body />} footer={<></>} />
}

export default ReviewCashKick
