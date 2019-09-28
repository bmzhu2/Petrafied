import React from 'react'
import './nav.css'

const Nav = props => (
  <div className="navbar">
    <section className="nav-left">

    </section>
    <div className="nav-title" onClick={() => props.history.push("/")}>
      PETRAFIED
    </div>
    <section className="nav-right">

    </section>
  </div>
)

export default Nav