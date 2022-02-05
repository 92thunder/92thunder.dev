import React from 'react'
import styled from 'styled-components'
import { Toolbar, AppBar, Typography, Grid, IconButton } from '@material-ui/core'
import { Edit } from '@material-ui/icons'
import { useHistory } from 'react-router'

export const Header: React.VFC = () => {
  const history = useHistory()
  const create = () => {
    history.push('/posts/new')
  }

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h6">Blog Editor</Typography>
          </Grid>
          <Grid item>
            <IconButton color="inherit" onClick={create}>
              <Edit />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </StyledAppBar>
  )
}

const StyledAppBar = styled(AppBar)`
`