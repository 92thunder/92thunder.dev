import React from 'react'
import styled from 'styled-components'
import { Toolbar, AppBar, Typography } from '@material-ui/core'

export const Header: React.VFC = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6">
          92thunder.dev
        </Typography>
      </Toolbar>
    </StyledAppBar>
  )
}

const StyledAppBar = styled(AppBar)`
`