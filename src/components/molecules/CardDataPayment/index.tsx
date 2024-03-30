import { Box, Stack  } from '@mui/material'
import Paper from '@mui/material/Paper'
import Text from '../../atoms/Typography'
import cardDataPayment from '../../../../public/assests/icons/cardDataPayment.svg'
import infoCircle from '../../../../public/assests/icons/info-circle.svg'
import theme from '../../../themes/index'
import { TextChip } from '../../atoms/Chip'

interface CardDataPaymentProps {
  width?: string
  height?: string
  amount?: string
  label?: string
  duedate?: string
}

const CardPayment = ({
  label = 'Due - May 03, 2021',
  amount = '$14,204.55',
  duedate = 'Due in 30 day(s)'
  
}: CardDataPaymentProps) => {
  return (
   
      <Box sx={{ width: '335px' , height:'auto' , lineHeight: '26px' }}>
        <Paper
          elevation={3}
          sx={{
            bgcolor: theme.palette.background.backgroundElevation1, color: theme.palette.primary.primaryWhite, padding: '30px',
            borderRadius: '12px' 
          }}
        >
          <Stack alignItems="flex-end">
          <TextChip variant='filled' style={{ borderRadius: '4px',fontWeight: '600',
    backgroundColor: theme.palette.background.accent,
    color: theme.palette.background.backgroundElevation1}}  label="Due in 30 (day)s"/>
    </Stack>
    <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" gap={1.5}>
          <img src={cardDataPayment} alt="cardDataIcon" height={80} />
          <Stack direction="row" spacing={2}>
            <Text variant="body1" textBody={label} />
            <img src={infoCircle} alt="infoCircle" width={20} />
          </Stack>
          <Text variant="body1" textBody={amount} />
          </Stack>
        </Paper>
      </Box>   
  )
}

CardPayment.defaultProps = {
  amount: '$14,204.55',
  label: 'Due - May 03, 2021',
  duedate : 'Due in 30 day(s)'
}

export default CardPayment
