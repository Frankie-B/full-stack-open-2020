import React from 'react'

const Alert = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className={message.class}>
        {message.text}
      </div>
    )
  }

export default Alert