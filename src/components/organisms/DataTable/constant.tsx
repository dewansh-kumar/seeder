/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from '@mui/material'
import Text from '../../atoms/Typography'

export const ColumnDefinationPayments = [
  {
    key: 'name',
    label: 'Name',
    customRow: (row: any) => <Text textBody={row.name} variant="body2" />,
  },
  {
    key: 'status',
    label: 'Status',
    customRow: (row: any) => (
      <Box
        sx={{
          backgroundColor: '#2D2D30',
          textAlign: 'center',
          width: '90px',
        }}
      >
        <Text textBody={row.status} variant="body2" />
      </Box>
    ),
  },
  {
    key: 'maturity',
    label: 'Maturity',
    customRow: (row: any) => new Date(row.maturity).toString(),
  },
  {
    key: 'totalReceived',
    label: 'Total Received',
  },
  {
    key: 'totalFinanced',
    label: 'Total Financed',
  },
]

export const ColumnDefinationContacts = [
  {
    key: 'name',
    label: 'Name',
  },
  {
    key: 'type',
    label: 'Type',
  },
  {
    key: 'perPayment',
    label: 'Per Payments',
  },
  {
    key: 'termLength',
    label: 'Term Length',
  },
  {
    key: 'paymentAmount',
    label: 'Payment Amount',
  },
]

export const data = [
  {
    id: 1,
    name: 'Joanna Koss',
    status: 'Pending',
    maturity: '2023-10-28T04:45:09.515Z',
    totalReceived: 23740,
    totalFinanced: 360,
  },
  {
    id: 2,
    name: 'Faye Gusikowski',
    status: 'Pending',
    maturity: '2023-06-26T17:03:32.552Z',
    totalReceived: 79244,
    totalFinanced: 251,
  },
  {
    id: 3,
    name: 'Elisa Effertz II',
    status: 'Pending',
    maturity: '2023-10-24T06:16:10.653Z',
    totalReceived: 50772,
    totalFinanced: 539,
  },
  {
    id: 4,
    name: 'Jeannie Paucek',
    status: 'Pending',
    maturity: '2023-07-21T23:49:08.877Z',
    totalReceived: 34644,
    totalFinanced: 410,
  },
  {
    id: 5,
    name: 'Brandy Ondricka Jr.',
    status: 'Pending',
    maturity: '2023-12-30T05:11:35.264Z',
    totalReceived: 55230,
    totalFinanced: 697,
  },
]
