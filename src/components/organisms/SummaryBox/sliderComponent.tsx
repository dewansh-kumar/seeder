import theme from '../../../themes'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import TextButton from '../../atoms/Button'
import Stack from '@mui/material/Stack'
import Text from '../../atoms/Typography'
import { Slide } from '../../atoms/Slider'

interface SlideProp {
  paybackAmount: number
  totalValue: number
  selectedValue: number | string
  handleResetClick?: () => void
  handleChnage?: (event: Event, newValue: number | number[]) => void
  maxValue: number
  value: number
}

const StyledResetButton = styled(TextButton)({
  backgroundColor: theme.palette.background.backgroundElevation2,
  color: theme.palette.primary.primaryTextMidEmp,
  height: '31px',
  width: '65px',
})
const StyledStack = styled(Stack)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})
const SlideComponent = ({
  selectedValue,
  totalValue,
  handleResetClick,
  maxValue,
  handleChnage,
  value,
}: SlideProp) => {
  return (
    <Box>
      <StyledStack direction="row">
        <Text
          variant="body1"
          textBody="Slide to autoselect"
          sx={{
            color: theme.palette.primary.primaryTextLowEmp,
          }}
        />
        <StyledResetButton
          variant="contained"
          label="Reset"
          size="small"
          onClick={handleResetClick}
        />
      </StyledStack>

      <Slide value={value} maxValue={maxValue} onSilderChange={handleChnage} />
      <Stack direction="row" sx={{ gap: '5px' }} alignItems="center">
        <Text
          variant="body1"
          textBody={'$' + String(selectedValue)}
          sx={{
            color: theme.palette.primary.primaryAlphaPurple400,
          }}
        />
        <Text
          variant="body1"
          textBody="selected of"
          sx={{
            color: theme.palette.primary.primaryTextLowEmp,
          }}
        />
        <Text
          variant="body1"
          textBody={'$' + String(totalValue)}
          sx={{
            color: theme.palette.primary.primaryTextHighEmp,
          }}
        />
      </Stack>
    </Box>
  )
}

export default SlideComponent
