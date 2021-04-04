import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

export const CodeBlock: React.VFC<{value: string, language?: string}> =
  ({ language, value }) => {
    return (
      <SyntaxHighlighter language={language} style={vscDarkPlus}>
        {value || ''}
      </SyntaxHighlighter>
    )
  }