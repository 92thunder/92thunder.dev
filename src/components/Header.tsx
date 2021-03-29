import React from 'react'
import styled from 'styled-components'
import { Toolbar, AppBar, Typography } from '@material-ui/core'

export const Header: React.VFC = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          つくりおき
        </Typography>
      </Toolbar>
    </StyledAppBar>
  )
}

const StyledAppBar = styled(AppBar)`
`