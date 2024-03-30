import Typography from '@mui/material/Typography'
import { SxProps } from '@mui/material/styles'

export interface TextProps {
  variant?:
    | 'title'
    | 'heading1'
    | 'heading2'
    | 'body2'
    | 'caption'
    | 'button'
    | 'body1'
  textBody: string
  sx?: SxProps
}

const Text = ({ variant, textBody, sx }: TextProps) => {
  return (
    <Typography variant={variant} sx={sx}>
      {textBody}
    </Typography>
  )
}

Text.defaultProps = {
  variant: 'title',
}

export default Text
