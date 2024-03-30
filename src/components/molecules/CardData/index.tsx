import { Stack, styled, Box } from '@mui/system'
import CardItem from '../CardItem'
import Calender from '../../../../public/assests/icons/calendar.svg'
import Percentage from '../../../../public/assests/icons/percentage-square.svg'
import DocumentDownload from '../../../../public/assests/icons/document-download.svg'
import theme from '../../../themes'

interface CardDataProps {
  calenderHeading?: string
  downloadHeading?: string
  percentageHeading?: string
}
const StyledBox = styled(Box)({
  backgroundColor: theme.palette.background.backgroundElevation1,
  border: '1px solid #28272B',
  borderRadius: '12px',
})
const StyledStack = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '32px 42px',
})

const CardData = ({
  calenderHeading = '12 Months',
  downloadHeading = '$709.45K',
  percentageHeading = '12.00%',
}: CardDataProps) => {
  const CardDataUtil = [
    {
      id: 1,
      iconSrc: Calender,
      headingText: calenderHeading,
      subHeadingText: 'Term Cap',
    },
    {
      id: 2,
      iconSrc: DocumentDownload,
      headingText: downloadHeading,
      subHeadingText: 'Available Credit',
    },
    {
      id: 3,
      iconSrc: Percentage,
      headingText: percentageHeading,
      subHeadingText: 'Available Credit',
    },
  ]
  return (
    <StyledBox width="100%">
      <StyledStack>
        {CardDataUtil.map((CardDataItem) => {
          return (
            <CardItem
              key={CardDataItem.id}
              iconSrc={CardDataItem.iconSrc}
              headingText={CardDataItem.headingText}
              subHeadingText={CardDataItem.subHeadingText}
            />
          )
        })}
      </StyledStack>
    </StyledBox>
  )
}

export default CardData
