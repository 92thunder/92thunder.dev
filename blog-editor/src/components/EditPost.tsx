import React, { ChangeEvent, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useHistory, useParams } from 'react-router-dom'
import { useAsync, useDebounce } from 'react-use'
import remarkGfm from 'remark-gfm'
import styled from 'styled-components'
import { createPostRepository } from '../repositories/PostRepository'
import { createPost } from '../domain/reducers/createPost'
import { Grid, IconButton, Switch, TextField } from '@material-ui/core'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { Delete } from '@material-ui/icons'
import { CodeBlock } from './CodeBlock'

export const EditPost: React.VFC = () => {
  const { postId } =  useParams<{postId: string}>()

  const postRepository = createPostRepository()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [published, setPublished] = useState(false)
  const [date, setDate] = useState<Date | null>(new Date())
  const state = useAsync(async () => {
    const post = await postRepository.find(postId)
    if (!post) {
      const post = createPost()
      setTitle(post.title)
      setBody(post.body)
      setDate(post.published_at)
      setPublished(post.published)
      history.push(`/posts/${post.id}`)
      return post
    } else {
      setTitle(post.title)
      setBody(post.body)
      setDate(post.published_at)
      setPublished(post.published)
      return post
    }
  }, [])

  const onChangeTitle = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(event.target.value)
  }
  const onChangeBody = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value)
  }
  useDebounce(() => {
    if (!state.loading && state.value) {
      postRepository.save({
        ...state.value,
        id: state.value.id,
        title: title,
        body: body,
        published_at: date || state.value.published_at,
        published: published ?? state.value.published
      })
    }
  }, 3000, [body, title, date, published])

  const handleDateChange = (date: Date | null) => {
    setDate(date)
  }

  const history = useHistory()
  const handleDelete = () => {
    if (state.value) {
      const result = window.confirm('delete?')
      if (result) {
        postRepository.delete(state.value)
        history.push('/')
      }
    }
  }
  return (
    state.value ? (
      <Container>
        <Grid container direction="column">
          <Grid container item alignItems="center">
            <StyledTextField value={title} onChange={onChangeTitle} fullWidth />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <StyledDatePicker
                disableToolbar
                variant="inline"
                format="yyyy/MM/dd"
                value={date} 
                onChange={handleDateChange}
              />
            </MuiPickersUtilsProvider>
            <IconButton size="small" onClick={handleDelete}>
              <Delete />
            </IconButton>
            <Switch checked={published} onChange={(_, checked) => setPublished(checked)} color="primary" />
          </Grid>
          <EditBody>
            <StyledTextarea value={body} onChange={onChangeBody} />
            <div>
              <StyledReactMarkdown
                source={body}
                plugins={[remarkGfm]}
                skipHtml={false}
                renderers={{
                  code: CodeBlock
                }}
              />
            </div>
          </EditBody>
        </Grid>
      </Container>
    )
      : null
  )
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`

const StyledTextField = styled(TextField)`
  flex: 1;
`

const StyledDatePicker = styled(KeyboardDatePicker)`
  width: 136px;
`

const EditBody = styled.div`
  min-height: 0px;
  display: flex;
  flex: 1;
  color: white;
  border-top: 1px solid white;
  > * {
    width: 50%;
    height: 100%;
    overflow-y: auto;
  }
`

const StyledTextarea = styled.textarea`
  resize: none;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1.5;
  background: #666;
  color: white;
  border-right: 1px solid white;
  word-break: break-all;
`
const StyledReactMarkdown = styled(ReactMarkdown)`
  padding: 0 8px;
`