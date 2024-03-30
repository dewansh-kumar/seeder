import { Stack } from '@mui/material'
import HomeTemplate from '../../components/templates/HomeTemplate'
import CardDataPayment from '../../components/molecules/CardDataPayment/index'
import ProgressBar from '../../components/molecules/ProgressBarTypo/index'
import Icons from '../../components/atoms/Icons'
import Text from '../../components/atoms/Typography'
import theme from '../../themes'
import InfoIcon from '../../../public/assests/icons/info-circle.svg'
import DataTable from '../../components/organisms/DataTable'
import { ColumnDefinationContacts } from './constant'
import CardMolecule from '../../components/molecules/NewCashCardKick/index'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../../Services/Api'
import { HomeHeader } from '../HomePage'

const HomeBody = () => {
  const navigation = useNavigate()
  return (
    <>
      <Stack
        direction="row"
        gap={2}
        marginLeft={3}
        width="100%"
        height="auto"
        data-testid="dashboard"
      >
        <CardDataPayment />
        <ProgressBar value={30} />
        <CardMolecule
          availableCash={170454.55}
          width="335px"
          height="245px"
          handleOnClick={() => navigation('/newCashKick')}
        />
      </Stack>
    </>
  )
}

const HomeFooter = ({ data }: any) => {
  return (
    <Stack marginLeft={3} marginRight={3}>
      <DataTable
        width="93%"
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
        data={data ? data : []}
        ColumnDefinations={ColumnDefinationContacts}
      />
    </Stack>
  )
}

const Dashboard = () => {
  const [data, setData] = useState()
  useEffect(() => {
    API.get(`/payments`)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        throw error
      })
  }, [])

  return (
    <>
      <HomeTemplate
        header={<HomeHeader />}
        body={<HomeBody />}
        footer={<HomeFooter data={data} />}
      />
    </>
  )
}

export default Dashboard
