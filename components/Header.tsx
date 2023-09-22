import React from 'react'
import { AppBar, Typography, IconButton, Button, Container, Stack, Box } from '@mui/material'
import { GitHub } from '@mui/icons-material'
import styled from '@emotion/styled'
import NextLink from 'next/link'

export const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg" sx={{ paddingBottom: "0.5rem", paddingTop: "0.5rem" }}>
        <Stack alignItems="center" direction="row" justifyContent="space-between">
          <Title fontSize="1.5rem" fontWeight="bold" variant="h1">
            <NextLink href="/">
              92thunder.dev
            </NextLink>
          </Title>
          <Box>
            <Button color="inherit" href="/about">
              ABOUT
            </Button>
            <IconButton aria-label="Github Repository" color="inherit" href="https://github.com/92thunder/92thunder.dev">
              <GitHub/>
            </IconButton>
          </Box>
        </Stack>
      </Container>
    </AppBar>
  )
}

const Title = styled(Typography)`
  a {
    text-decoration: none;
    color: inherit;
    vertical-align: middle
  }
`
