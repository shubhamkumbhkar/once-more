import React from 'react'

// const DesProps = ({name, lName}) => {
//   return (
//     <div><h1>{name} {lName}</h1></div>
//   )
// }

const DesProps = props => {
  const {name, lName} = props
  return (
    <div><h1>{name} {lName}</h1></div>
  )
}
export default DesProps