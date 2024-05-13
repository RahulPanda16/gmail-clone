import React from 'react'
import "./Section.css"

function Section({Icon, color, title, selected}) {
  return (
    <div style={{
        borderBottom:`3px solid ${color}`,
        color:`${selected && color}`
    }} className={`section ${selected && "section--selected"}`}>
        <Icon />
        <h4>{title}</h4>
    </div>
  )
}

export default Section