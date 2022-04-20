import React, { useState, useRef } from 'react'

import { Chevron } from './chevron'
import './accordion.css'

export const Accordion = ({ title, children }) => {
  const [active, setActive] = useState("")
  const [height, setHeight] = useState("0px")
  const [rotate, setRotate] = useState("")

  const content = useRef(null)

  const toggleAccordion = () => {
    setActive(active === "" ? "active" : "")
    setHeight(active === "active" ? "0px" : `${content.current.scrollHeight}px`)
    setRotate(active === "active" ? "" : "rotate")
  }

  return (
    <div className='accordion-section'>
      <button className={`accordion ${active}`} onClick={toggleAccordion}>
        <p className='accordion-title'>{title}</p>
        <Chevron className={`accordion-icon ${rotate}`} width={10} fill={'#778'} />
      </button>
      <div 
        ref={content}
        style={{ maxHeight: `${height}` }}
        className='accordion-content'
      >
        <div className='accordion-text'>
          {children}
        </div>
      </div>
    </div>
  )
}
