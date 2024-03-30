import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Text from '../../atoms/Typography'
import TextButton from '../../atoms/Button'
import theme from '../../../themes'
import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { useMemo } from 'react'
import SlideComponent from './sliderComponent'

export interface SummaryBoxProps {
  term: string
  height?: string
  modelType?: boolean
  width?: string
  totalSelectedAmount: number
  totalValue: number
  buttonLabel2?: string
  buttonLabel?: string
  handleOnClick2?: () => void
  handleResetClick?: () => void
  maxValue: number
  numberOfSelectedContracts: number
  onSilderChangeHandler?: (event: Event, newValue: number | number[]) => void
  handleNavigation?: () => void
  showBox?: boolean
}

const StyledCard = styled(Card)(
  ({ width, height }: { height: string; width: string }) => ({
    background: theme.palette.background.backgroundElevation1,
    borderRadius: '12px',
    width: width || '100%',
    justifyContent: 'space-between',
    height: height || 'auto',
  })
)
const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
})
const StyledTextButton = styled(TextButton)({
  background: theme.palette.primary.primaryAlphaPurple500,
  marginTop: '20px',
  textTransform: 'none',
  padding: '20px 20px',
})
const StyledStackHead = styled(Stack)({
  display: 'flex',
  alignItems: 'center',
})

const SummaryBox = ({
  term,
  height = 'auto',
  width = 'auto',
  totalValue,
  buttonLabel: buttonLabel = 'Review Your Credit',
  handleResetClick,
  buttonLabel2 = 'Submit Your Credit',
  maxValue,
  handleOnClick2,
  totalSelectedAmount,
  numberOfSelectedContracts,
  onSilderChangeHandler,
  handleNavigation,
  showBox = true,
}: SummaryBoxProps) => {
  const totalInterest = useMemo(() => {
    return (totalSelectedAmount * 12) / 100
  }, [totalSelectedAmount])

  const handleReset = () => {
    if (handleResetClick) {
      handleResetClick()
    }
  }

  return (
    <StyledCard width={width} height={height}>
      <StyledCardContent>
        <Stack
          sx={{
            marginTop: '10px',
            rowGap: '12px',
          }}
        >
          <StyledStackHead direction="row">
            <Text
              variant="heading1"
              textBody="Summary"
              sx={{
                color: theme.palette.primary.primaryTextHighEmp,
              }}
            />
            <InfoOutlinedIcon sx={{ color: '#727080', marginLeft: 1 }} />
          </StyledStackHead>
          <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
            <Text
              variant="body1"
              textBody="Term"
              sx={{
                color: theme.palette.primary.primaryTextLowEmp,
              }}
            />
            <Text
              variant="body1"
              textBody={term}
              sx={{
                color: theme.palette.primary.primaryTextHighEmp,
              }}
            />
          </Stack>

          <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
            <Text
              variant="body1"
              textBody="Selected contracts"
              sx={{
                color: theme.palette.primary.primaryTextLowEmp,
              }}
            />
            <Text
              variant="body1"
              textBody={String(numberOfSelectedContracts)}
              sx={{
                color: theme.palette.primary.primaryTextHighEmp,
              }}
            />
          </Stack>
          {showBox && (
            <SlideComponent
              maxValue={maxValue}
              paybackAmount={totalSelectedAmount}
              totalValue={totalValue}
              handleResetClick={handleReset}
              selectedValue={totalSelectedAmount}
              value={numberOfSelectedContracts}
              handleChnage={onSilderChangeHandler}
            />
          )}
          <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
            <Text
              variant="body1"
              textBody="Pay back amount"
              sx={{
                color: theme.palette.primary.primaryTextLowEmp,
              }}
            />
            <Text
              variant="body1"
              textBody={'$' + String(totalSelectedAmount)}
              sx={{
                color: theme.palette.primary.primaryTextHighEmp,
              }}
            />
          </Stack>

          <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
            <Text
              variant="body1"
              textBody="Rate %"
              sx={{
                color: theme.palette.primary.primaryTextLowEmp,
              }}
            />
            <Stack direction={'row'} sx={{ gap: '5px' }}>
              <Text
                variant="body1"
                textBody="(12.00%) "
                sx={{
                  color: theme.palette.primary.primaryTextLowEmp,
                }}
              />
              <Text
                variant="body1"
                textBody={`$${totalInterest.toFixed(2)}`}
                sx={{
                  color: theme.palette.primary.primaryTextHighEmp,
                }}
              />
            </Stack>
          </Stack>
        </Stack>
        <hr
          style={{
            width: '100%',
            color: theme.palette.primary.primaryTextHighEmp,
            marginTop: '10px',
            marginBottom: '10px',
          }}
        ></hr>
        <Stack direction="row" justifyContent="space-between">
          <Text
            variant="heading2"
            textBody="Total Payout"
            sx={{
              color: theme.palette.primary.primaryTextLowEmp,
            }}
          />
          <Text
            variant="heading1"
            textBody={`$${(totalSelectedAmount + totalInterest).toFixed(2)}`}
            sx={{
              color: theme.palette.primary.primaryTextHighEmp,
            }}
          />
        </Stack>
        {showBox ? (
          <StyledTextButton
            label={buttonLabel}
            variant="contained"
            disabled={totalSelectedAmount === 0}
            onClick={handleNavigation}
            style={{ opacity: totalSelectedAmount == 0 ? '0.5' : '1' }}
          />
        ) : (
          <StyledTextButton
            label={buttonLabel2}
            variant="contained"
            disabled={totalSelectedAmount === 0}
            onClick={handleOnClick2}
            style={{ opacity: totalSelectedAmount == 0 ? '0.5' : '1' }}
          />
        )}
      </StyledCardContent>
    </StyledCard>
  )
}
export default SummaryBox
