import React from 'react'
import { AppBar, Typography, IconButton, Button, Container, Stack, Box } from '@mui/material'
import { GitHub } from '@mui/icons-material'
import styled from '@emotion/styled'
import NextLink from 'next/link'

export const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg" sx={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Title variant="h1" fontWeight="bold" fontSize="1.5rem">
            <NextLink href="/">
              92thunder.dev
            </NextLink>
          </Title>
          <Box>
            <Button color="inherit" href="/about">
              ABOUT
            </Button>
            <IconButton color="inherit" href="https://github.com/92thunder/92thunder.dev" aria-label="Github Repository">
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