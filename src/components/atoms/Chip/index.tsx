import { Chip, ChipProps } from '@mui/material'

interface TextChipProps extends ChipProps {
  label?: string
  style?: React.CSSProperties
  onClick?: () => void
}
export const TextChip = ({ label, style, ...props }: TextChipProps) => {
  return (
    <>
      <Chip sx={style} {...props} label={label}></Chip>
    </>
  )
}
