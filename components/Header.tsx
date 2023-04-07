import React from 'react'
import { AppBar, Typography, IconButton, Button, Container, Stack } from '@mui/material'
import { GitHub } from '@mui/icons-material'
import styled from '@emotion/styled'

export const Header: React.FC = () => {
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
    <AppBar position="static">
      <Container maxWidth="lg" sx={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}>
        <Stack direction="row" alignItems="center">
          <Title variant="h5" onClick={handleClickTitle}>
            92thunder.dev
          </Title>
          <Button color="inherit" onClick={handleClickAbout}>
            ABOUT
          </Button>
          <IconButton color="inherit" onClick={handleClickGithub}>
            <GitHub/>
          </IconButton>
        </Stack>
      </Container>
    </AppBar>
  )
}

const Title = styled(Typography)`
  flex: 1;
  cursor: pointer;
`