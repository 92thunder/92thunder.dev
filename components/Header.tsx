import React from 'react'
import { Box, Heading, Stack } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'

export const Header: React.FC = () => {
  return (
    <Box p="24px">
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        >
        <Heading
          as='h1'
          size="lg"
        >
          <Link href="/" sx={{ textDecoration: 'none' }} textDecoration="none">
            92thunder.dev
          </Link>
        </Heading>
        <Box>
          <Link color="inherit" fontWeight="500" href="/about" >
            About
          </Link>
        </Box>
      </Stack>
    </Box>
  )
}
