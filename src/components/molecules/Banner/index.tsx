import Text from '../../atoms/Typography'
import { Box, Stack, ThemeProvider, styled } from '@mui/material'
import BannerImage from '../../../../public/assests/images/celebration.svg'
import TextButton from '../../atoms/Button'
import theme from '../../../themes'
export interface BannerProps {
  clickHandler?: () => void
}
const StyledBox = styled(Box)({
  backgroundImage: `url(${BannerImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  // backgroundPosition: 'center',
  borderRadius: '12px',
  width: '100%',
 // minHeight: '30vh',
  height: 'auto',
  minWidth: '50vw',
  display: 'flex',
  alignItems: 'center',
})

const StyledTextBox = styled(Box)({
  gap: '12px',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  width: '60%',
})
const StyledButton = styled(TextButton)({
  color: 'white',
  padding: '20px 40px',
  border: `1px solid ${theme.palette.primary.primaryWhite}`,
  width: '40%',
  height: '59px',
  fontSize: '16px',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
})
const StyledStack = styled(Stack)({
  gap: '20px',
  flexWrap: 'wrap',
  marginLeft: '32px',
  marginTop: '32px',
  marginBottom: '32px',
})
const Banner = (props: BannerProps) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledBox>
        <StyledStack>
          <StyledTextBox data-testid="celebration-message">
            <Text
              textBody="Congratulations you are ready to start!"
              variant="heading1"
              sx={{
                color: 'white',
              }}
            />
            <Text
              textBody="You are approved for funding. We are ready to advance you upto $8.8M"
              variant="body1"
              sx={{
                color: 'white',
              }}
            />
          </StyledTextBox>
          <StyledButton
            label="Learn More"
            variant="outlined"
            onClick={props.clickHandler}
          />
        </StyledStack>
      </StyledBox>
    </ThemeProvider>
  )
}

export default Banner
