import React from 'react'
import { Light as SyntaxHighlighter } from "react-syntax-highlighter"
import { monokaiSublime } from "react-syntax-highlighter/dist/esm/styles/hljs"

interface HighlightProp {
  language: string,
  value: string
}

export const Highlight: React.FC<HighlightProp> = (props: HighlightProp) => {
  return (
    <>
      <SyntaxHighlighter language={props.language} style={monokaiSublime}>
        {props.value}
      </SyntaxHighlighter>
    </>
  )
}
