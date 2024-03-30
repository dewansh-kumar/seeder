/* eslint-disable @typescript-eslint/no-empty-interface */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
import { createTheme, SxProps } from '@mui/material/styles'

export const defaultTheme = createTheme()

declare module '@mui/material/styles' {
  interface PaletteOptions {
    border: PaletteOptions['primary']
    icon: PaletteOptions['primary']
    greys: PaletteOptions['primary']
  }
  interface Palette {
    border: PaletteColor
    icon: PaletteColor
    greys: PaletteColor
  }
  interface Color {
    primaryWhite?: string
    primaryAlphaPurple600?: string
    primaryAlphaPurple500?: string
    primaryAlphaPurple400?: string
    primaryTextHighEmp?: string
    primaryTextMidEmp?: string
    primaryTextLowEmp?: string
    backgroundElevation0?: string
    backgroundElevation1?: string
    backgroundElevation2?: string
    borderHighEmp?: string
    borderLowEmp?: string
    iconHighEmp?: string
    iconLowEmp?: string
    accent?: string
  }
  interface PaletteColor extends Color {}
  interface SimplePaletteColorOptions extends Color {}
  interface TypeBackground extends Color {}

  interface TypographyVariants {
    title: SxProps
    haeing1: SxProps
  }
  interface TypographyVariantsOptions {
    title: SxProps
    heading1: SxProps
    heading2: SxProps
    body1: SxProps
    body2: SxProps
    caption: SxProps
    button: SxProps
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true
    heading1: true
    heading2: true
    body1: true
    body2: true
    caption: true
    button: true
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#393552',
      primaryWhite: '#E8E8E9',
      primaryAlphaPurple600: '#393552',
      primaryAlphaPurple500: '#6C5DD3',
      primaryAlphaPurple400: '#B4A9FF',
      primaryTextHighEmp: '#E8E7F0',
      primaryTextMidEmp: '#C9C8CC',
      primaryTextLowEmp: '#A5A5A6',
    },
    background: {
      backgroundElevation0: '#19181C',
      backgroundElevation1: '#201F24',
      backgroundElevation2: '#2D2D30',
      accent: '#E39AB2',
    },
    border: {
      main: '#413F4D',
      borderHighEmp: '#413F4D',
      borderLowEmp: '#28272B',
    },
    icon: {
      main: '#D4D2DE',
      iconHighEmp: '#Do4D2DE',
      iconLowEmp: '#727080',
    },
    greys: {
      main: '#262529',
      backgroundElevation1: '#262529',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            background: '#6C5DD3',
            color: '#E8E8E9',
          },
          borderRadius: '12px',
        },
      },
    },
  },
  typography: {
    fontFamily: ['Gilroy', 'sans-serif'].join(','),
    title: {
      fontFamily: 'Gilroy',
      fontSize: '36px',
      fontWeight: 'bold',
      fontStyle: 'normal',
    },
    heading1: {
      fontFamily: 'Gilroy',
      fontSize: '24px',
      fontWeight: 'bold',
      fontStyle: 'normal',
    },
    heading2: {
      fontFamily: 'Gilroy',
      fontSize: '18px',
      fontWeight: '500',
      fontStyle: 'normal',
    },
    body1: {
      fontFamily: 'Gilroy',
      fontSize: '16px',
      fontWeight: '500',
      fontStyle: 'normal',
    },
    body2: {
      fontFamily: 'Gilroy',
      fontSize: '14px',
      fontWeight: '600',
      fontStyle: 'normal',
    },
    caption: {
      fontFamily: 'Gilroy',
      fontSize: '12px',
      fontWeight: '500',
      fontStyle: 'normal',
    },
    button: {
      fontFamily: 'Gilroy',
      fontSize: '16px',
      fontWeight: '600',
      fontStyle: 'normal',
    },
  },
})

export default theme
