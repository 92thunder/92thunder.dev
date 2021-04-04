import React from 'react'
import styled from 'styled-components'
import { Toolbar, AppBar, Typography, IconButton } from '@material-ui/core'
import { GitHub } from '@material-ui/icons'

export const Header: React.VFC = () => {
  const handleClickTitle = () => {
    window.location.href = '/'
  }
  const handleClickGithub = () => {
    window.location.href = 'https://github.com/92thunder/blog'
  }
  return (
    <StyledAppBar position="static">
      <Toolbar variant="dense">
        <Title variant="h6" onClick={handleClickTitle}>
          92thunder.dev
        </Title>
        <IconButton color="inherit" onClick={handleClickGithub}>
          <GitHub/>
        </IconButton>
      </Toolbar>
    </StyledAppBar>
  )
}

const StyledAppBar = styled(AppBar)`
`

const Title = styled(Typography)`
  flex: 1;
  cursor: pointer;
`