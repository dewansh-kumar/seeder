import { TextChip } from '../../components/atoms/Chip'
import theme from '../../themes'

export const ColumnDefinationContacts = [
  {
    key: 'dueDate',
    label: 'Due Date',
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

          width: 'fit-content',
          height: '25px',
          borderRadius: '4px',
          color: theme.palette.primary.primaryTextMidEmp,
        }}
      />
    ),
  },
  {
    key: 'expectedAmount',
    label: 'Expected Amount',
  },
  {
    key: 'outStanding',
    label: 'Outstanding',
  },
]

export const getDate = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const d = new Date()
  const month = months[d.getMonth()]
  const day = d.getDate()
  const year = d.getFullYear()
  return `${month} ${day},${year} `
}

export const Data = []
