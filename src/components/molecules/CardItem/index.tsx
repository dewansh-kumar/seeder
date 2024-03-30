import { Stack, Box, styled } from '@mui/material'
import Text from '../../atoms/Typography'
import Icons from '../../atoms/Icons'
import theme from '../../../themes'

import InfoCircle from '../../../../public/assests/icons/info-circle.svg'
const IconBox = styled(Box)({
  display: 'flex',
  backgroundColor: '#262529',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  width: '33%',
  //height: '5%',
  borderRadius: '12px',
  border: '1px solid #28272B',
})

const TextWithIcon = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
})

interface CardItemProps {
  iconSrc: string
  headingText: string
  subHeadingText: string
}
const CardItem = (props: CardItemProps) => {
  return (
    <Stack spacing={0.5}>
      <IconBox>
        <Icons src={`${props.iconSrc}`} alt="Calender Icon" />
      </IconBox>
      <TextWithIcon>
        <Text
          textBody={props.subHeadingText}
          variant="body1"
          sx={{ color: theme.palette.primary.primaryTextMidEmp }}
        />
        <Icons src={InfoCircle} alt="Info Circle Icon" />
      </TextWithIcon>
      <Text
        textBody={props.headingText}
        variant="heading1"
        sx={{
          color: theme.palette.primary.primaryTextHighEmp,
          fontStyle: 'normal',
        }}
      />
    </Stack>
  )
}

export default CardItem
