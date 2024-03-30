import { Box } from '@mui/material'

interface IconProps {
  src: string
  alt: string
  width?: string
  height?: string
  clickHandler?: () => void
}
const Icons = (props: IconProps) => {
  return (
    <Box onClick={props.clickHandler}>
      <img
        src={`${props.src}`}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
    </Box>
  )
}

export default Icons
