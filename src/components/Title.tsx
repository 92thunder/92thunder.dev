import React from 'react'
import { Typography, Grid, Box } from '@material-ui/core'

export const Title: React.VFC = () => {
  return (
    <Box m={2}>
      <Grid container alignItems="center" justify="center">
        <Grid item>
          <Typography variant="h3">
            つくりおき
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}