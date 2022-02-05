import React, { useState } from 'react'
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import styled from 'styled-components'
import { apiClient } from '../libs/apiClient'
import Cookies from 'js-cookie'

export const SignIn: React.VFC = () => {
  const [passcode, setPasscode] = useState('')
  const onSubmit = async () => {
    const response = apiClient.post('sign_in', {
      json: {
        passcode
      }
    })
    const sessionId: string = await response.json()
    Cookies.set('session_id', sessionId)
    window.location.reload()
  }
  return (
    <Container>
      <Grid item>
        <Typography variant="h3">Blog Editor</Typography>
      </Grid>
      <Grid item>
        <TextField value={passcode} onChange={(event) => setPasscode(event.target.value)}/>
        <Button onClick={onSubmit}>Submit</Button>
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  > :last-child {
    margin-top: 32px;
  }
`