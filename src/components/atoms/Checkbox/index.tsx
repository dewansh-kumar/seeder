import Checkbox from '@mui/material/Checkbox'
import theme from '../../../themes'
import { ThemeProvider } from '@mui/material'

export interface CheckboxLabelsProps {
  label: string
  required?: boolean
  disabled?: boolean
  defaultChecked?: boolean
}

const CheckboxLabels = ({ label, defaultChecked }: CheckboxLabelsProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Checkbox defaultChecked={defaultChecked} />
    </ThemeProvider>
  )
}

export default CheckboxLabels
