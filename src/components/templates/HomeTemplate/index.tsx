import React from 'react'
import { Grid, styled } from '@mui/material'
import Sidebar from '../../organisms/Sidebar'
import theme from '../../../themes'
interface DashBoardLayoutPropType {
  header: React.JSX.Element[] | React.JSX.Element
  body: React.JSX.Element[] | React.JSX.Element
  footer?: React.JSX.Element[] | React.JSX.Element
  bodySpace?: number
  footerSpace?: number
}

const StyledGrid = styled(Grid)({
  height: '100%',
  width: '100vw',
  backgroundColor: theme.palette.background.backgroundElevation0,
})

const HomeTemplate = ({
  header,
  body,
  footer,
  bodySpace = 4,
  footerSpace = 6,
}: DashBoardLayoutPropType) => {
  return (
    <div>
      <StyledGrid container gap={20}>
        <Grid item xs={1.2}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <Grid container direction="column" rowGap={2}>
            <Grid item xs={2}>
              {header}
            </Grid>
            <Grid item xs={bodySpace}>
              {body}
            </Grid>
            <Grid item xs={footerSpace}>
              {footer}
            </Grid>
          </Grid>
        </Grid>
      </StyledGrid>
    </div>
  )
}

export default HomeTemplate
