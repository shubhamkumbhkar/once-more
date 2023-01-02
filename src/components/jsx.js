import React from 'react'

export default function Jsx() {
  // return (
  //   <div>jsx</div>
  // )
  return React.createElement('div', {id: "divId", className: "divClassName"}, 
    React.createElement("h1", {id: "h1Id", className: "h1ClassName"}, "hello from jsx"))
}
