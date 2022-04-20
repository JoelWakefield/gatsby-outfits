import React from "react"
import { Link } from "gatsby"
import * as PropTypes from "prop-types"

import { rhythm } from "../utils/typography"

const propTypes = {
  children: PropTypes.node.isRequired,
}

const DefaultLayout = ({ children }) => (
  <>
    <header
      style={{
        textAlign: "center",
        backgroundColor: '#556',
        padding: rhythm(1 / 2),
      }}
    >
      <Link style={{ textDecoration: `none` }} to="/">
        <h4 style={{ color: `#dde`, marginBottom: 0 }}>
          Store
        </h4>
      </Link>
    </header>
    <div
      style={{
        margin: `0 auto`,
        marginTop: rhythm(1.5),
        marginBottom: rhythm(1.5),
        maxWidth: 650,
        paddingLeft: rhythm(3 / 4),
        paddingRight: rhythm(3 / 4)
      }}
    >
      {children}
    </div>
  </>
)

DefaultLayout.propTypes = propTypes

export default DefaultLayout
