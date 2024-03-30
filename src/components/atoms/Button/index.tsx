import Button, { ButtonProps as MuiButtonProps } from '@mui/material/Button'
import React from 'react'

export interface ButtonPropsType extends MuiButtonProps {
  label: string
  style?: React.CSSProperties
  onClick?: () => void
}

const TextButton = ({ label, style, ...props }: ButtonPropsType) => {
  return (
    <>
      <Button sx={style} {...props}>
        {label}{' '}
      </Button>
    </>
  )
}

TextButton.defaultProps = {
  style: { textTransform: 'none' },
  disabled: false,
}
export default TextButton
