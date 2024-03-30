import { Box, CircularProgress, Stack } from '@mui/material'
import Paper from '@mui/material/Paper'
import Text from '../../atoms/Typography'
import CircularProgressWithLabel from '../../atoms/CircularProgressBar/index'
import InfoCircle from '../../../../public/assests/icons/info-circle.svg'
import theme from '../../../themes/index'

interface ProgressBarProps {
  width?: string
  height?: string
  amount?: string
  label?: string
  value?: number
}

const ProgressBar = ({
  label = 'Outstanding amount',
  amount = '0',
  value = 0,
  width,
  height,
}: ProgressBarProps) => {
  return (
    <>
      <Box sx={{ width:'335px', height, lineHeight: '30px' }}>
        <Paper
          elevation={3}
          sx={{
            bgcolor: theme.palette.background.backgroundElevation1,
            color: theme.palette.primary.primaryTextMidEmp,
            padding: '30px',
            borderRadius: '12px',
            height: '185px'
          }}
        >
          <Stack direction="column"  >
          <Box sx={{height:'98px ' , marginTop:'30px'}}>
            <CircularProgress
              className="top-circle"
              variant="determinate"
              value={100}
              size={80}
              thickness={6}
            />
            <Box sx={{ position: 'relative', bottom: '91px', left: '2px'  }}>
              <CircularProgressWithLabel
                className="bottom-circle"
                variant="determinate"
                value={value}
                size={80}
                thickness={7}
              />
            </Box>
          </Box>
          <Stack direction="column" gap={1}>
            <Stack direction="row"    gap={2}>
            <Text variant="body1" textBody={label} />
            <img src={InfoCircle} alt="infoCircle" width={20} />
          </Stack>
          
          <Text variant="heading2" textBody={amount} />
          </Stack>
          </Stack>
        </Paper>
      </Box>
    </>
  )
}

ProgressBar.defaultProps = {
  amount: '$170,454.55',
  label: 'Outstanding amount',
  width: '250px',
  height: 'auto',
}

export default ProgressBar