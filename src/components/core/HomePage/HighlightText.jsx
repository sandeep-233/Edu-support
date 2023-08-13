import React from 'react'

const HighlightText = ({text, color}) => {
  return (
    <span className={`font-bold text-transparent bg-clip-text ${color}`}>
      {" "}
      {text}
    </span>
  )
}

export default HighlightText
