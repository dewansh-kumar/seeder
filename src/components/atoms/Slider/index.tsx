import React from 'react'
import { Slider } from '@mui/material'
import theme from '../../../themes'

export interface SliderProps {
  onChange?: (value: number) => string
  value: number
  maxValue: number
  onSilderChange?: (event: Event, newValue: number | number[]) => void
}
export const Slide = ({
  value,
  maxValue,
  onChange,
  onSilderChange,
}: SliderProps) => {
  return (
    <Slider
      value={value}
      defaultValue={0.0}
      getAriaValueText={onChange}
      max={maxValue}
      onChange={onSilderChange}
      step={1}
      sx={{
        width: 300,
        color: theme.palette.primary.primaryAlphaPurple500,
        '& .MuiSlider-thumb': {
          borderRadius: '8px',
        },
      }}
    />
  )
}
