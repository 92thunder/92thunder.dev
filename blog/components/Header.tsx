import React from 'react'
import { Toolbar, AppBar, Typography, IconButton, Button } from '@mui/material'
import { GitHub } from '@mui/icons-material'
import styled from '@emotion/styled'

export const Header: React.VFC = () => {
  const handleClickTitle = () => {
    window.location.href = '/'
  }
  const handleClickAbout = () => {
    window.location.href = '/about'
  }
  const handleClickGithub = () => {
    window.location.href = 'https://github.com/92thunder/92thunder.dev'
  }
  return (
    <StyledAppBar position="static">
      <Toolbar variant="dense">
        <Title variant="h6" onClick={handleClickTitle}>
          92thunder.dev
        </Title>
        <Button color="inherit" onClick={handleClickAbout}>
          ABOUT
        </Button>
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