import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div>
      <img width={width} src='/blue-logo.png'/>
    </div>
  )
}

export default Logo