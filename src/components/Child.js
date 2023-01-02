import React from 'react'

const Child = (props) => {
  return (
    <div><button onClick={() => props.greet("para from child")}>daba</button></div>
  )
}

export default Child