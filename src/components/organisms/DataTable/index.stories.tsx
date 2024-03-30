/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta, StoryObj } from '@storybook/react'
import Data from '../../../Data/data.json'
import DataTable from '.'
import Text from '../../atoms/Typography'
import { Stack } from '@mui/material'
import InfoIcon from '../../../../public/assests/icons/info-circle.svg'
import Icons from '../../atoms/Icons'
import { useState } from 'react'
import { ColumnDefinationContacts, ColumnDefinationPayments } from './constant'

const meta: Meta<typeof DataTable> = {
  title: 'organisms/DataTable',
  component: DataTable,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof DataTable>

export const Payments: Story = {
  args: {
    tableHead: (
      <Stack direction="row" gap={2} alignItems="center">
        <Text
          textBody="My Payments"
          sx={{ color: 'white' }}
          variant="heading2"
        />
        <Icons src={InfoIcon} alt="Info Icon" />
      </Stack>
    ),
    hasSelect: false,
    ColumnDefinations: ColumnDefinationPayments,
    data: Data.payments,
  },
}

export const Contracts: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([])
    return (
      <DataTable
        selected={selected}
        setSelected={setSelected}
        tableHead={
          <Stack direction="row" gap={2} alignItems="center">
            <Text
              textBody="Your Contracts"
              sx={{ color: 'white' }}
              variant="heading2"
            />
            <Icons src={InfoIcon} alt="Info Icon" />
          </Stack>
        }
        data={Data.contracts}
        ColumnDefinations={ColumnDefinationContacts}
        hasSelect={true}
      />
    )
  },
}

export default meta
