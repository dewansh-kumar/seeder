import { Avatar as AvtarComponent } from '@mui/material'
import React from 'react'

interface AvtarProps {
  src?: string
  alt: string
  width?: string
  height?: string
}

const Avtar = ({ height, width, ...props }: AvtarProps) => {
  return (
    <AvtarComponent
      style={{ borderRadius: '12px' }}
      variant="circular"
      {...props}
      sx={{ height, width }}
    />
  )
}
Avtar.defaultProps = {
  height: '34px',
  width: '34px',
}
export default Avtar
