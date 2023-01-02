import React from 'react'

const Map = () => {
  const names = ['michael', 'dwight', 'jim']
  return (
    <div>{names.map(name => <h1>{name}</h1>)}</div>
  )
}

export default Map