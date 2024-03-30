import { TextChip } from '../../components/atoms/Chip'
import theme from '../../themes'

export const ColumnDefinationContracts = [
  {
    key: 'name',
    label: 'Name',
  },
  {
    key: 'status',
    label: 'Status',
    customRow: (row: { status: string | undefined }) => (
      <TextChip
        variant="filled"
        label={row.status}
        style={{
          backgroundColor: theme.palette.background.backgroundElevation2,

          width: '100px',
          height: '25px',
          borderRadius: '4px',
          paddingTop: '4px',
          paddingBottom: '4px',
          color: theme.palette.primary.primaryTextMidEmp,
        }}
      />
    ),
  },
  {
    key: 'perPayment',
    label: 'Per Payments',
  },
  {
    key: 'totalFinance',
    label: 'Total Finance',
    customRow: (row: { totalFinanced: string }) => (
      <>{row.totalFinanced === '-' ? '-' : row.totalFinanced}</>
    ),
  },
  {
    key: 'totalAvailable',
    label: 'Total Available',
  },
]

export const ColumnDefinationCashKicks = [
  {
    key: 'name',
    label: 'Name',
  },
  {
    key: 'status',
    label: 'Status',
    customRow: (row: { status: string | undefined }) => (
      <TextChip
        variant="filled"
        label={row.status}
        style={{
          backgroundColor: theme.palette.background.backgroundElevation2,

          width: '78px',
          height: '25px',
          borderRadius: '4px',
          color: theme.palette.primary.primaryTextMidEmp,
        }}
      />
    ),
  },
  {
    key: 'maturity',
    label: 'Maturity',
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
