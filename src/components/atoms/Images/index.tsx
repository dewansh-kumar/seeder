import { Box } from '@mui/material'

interface ImagesProps {
  src: string
  alt: string
  width?: string
  height?: string
}
const Images = (props: ImagesProps) => {
  return (
    <Box>
      <img
        src={`${props.src}`}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
    </Box>
  )
}
export default Images
