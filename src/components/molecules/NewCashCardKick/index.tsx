import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Text from '../../atoms/Typography'
import TextButton from '../../atoms/Button'
import theme from '../../../themes'
import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'

const StyledCard = styled(Card)(
  ({ width, height }: { height: string; width: string }) => ({
    background: theme.palette.background.backgroundElevation1,
    borderRadius: '12px',
    width: width || '100%',
    height: height || 'auto',
  })
)

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
})

const StyledTextButton = styled(TextButton)({
  backgroundColor: theme.palette.primary.primaryAlphaPurple500,
  marginTop: '20px',
})

export interface CardProps {
  availableCash: number
  heading?: string
  subHeading?: string
  body?: string
  subBody?: string
  buttonLabel?: string
  width: string
  height: string
  handleOnClick?: () => void
}

const CardMolecule = ({
  availableCash,
  handleOnClick,
  heading = 'Launch a new',
  subHeading = 'Cash Kick',
  body = 'You have upto ',
  subBody = 'for a new cash advance',
  buttonLabel = 'New Cash Kick',
  width,
  height,
}: CardProps) => {
  return (
    <StyledCard width={width} height={height}>
      <StyledCardContent>
        <Text
          variant="heading1"
          textBody={heading}
          sx={{
            color: theme.palette.primary.primaryTextHighEmp,
          }}
        />
        <Text
          variant="heading1"
          textBody={subHeading}
          sx={{
            color: theme.palette.primary.primaryTextHighEmp,
          }}
        />

        <Stack direction="row" sx={{ marginTop: '10px', gap: '5px' }}>
          <Text
            variant="body1"
            textBody={body}
            sx={{
              color: theme.palette.primary.primaryTextLowEmp,
            }}
          />

          <Text
            variant="body1"
            textBody={`$${availableCash.toFixed(2)}`}
            sx={{
              color: theme.palette.primary.primaryTextMidEmp,
            }}
          />
          <Text
            variant="body1"
            textBody="available"
            sx={{
              color: theme.palette.primary.primaryTextLowEmp,
            }}
          />
        </Stack>
        <Text
          variant="body1"
          textBody={subBody}
          sx={{
            color: theme.palette.primary.primaryTextLowEmp,
          }}
        />

        <StyledTextButton
          label={buttonLabel}
          variant="contained"
          onClick={handleOnClick}
          sx={{ height: '59px', fontWeight: '350', marginTop: '40px' }}
        />
      </StyledCardContent>
    </StyledCard>
  )
}

export default CardMolecule
