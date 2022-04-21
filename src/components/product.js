import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'

import { rhythm } from '../utils/typography'
import './product.sass'

export const Product = ({ node, type }) => {
  return (
    <div>
      <Link
        style={{ color: `inherit`, textDecoration: `none` }}
        to={`${node.gatsbyPath}`}
      >
        <div className="product">
          <div style={{ marginRight: rhythm(1 / 2) }}>
            {node.image.gatsbyImageData && (
              <GatsbyImage
                style={{ margin: 0 }}
                image={node.image.gatsbyImageData}
              />
            )}
          </div>
          <div className='product-title'>{node.title}</div>
        </div>
      </Link>
    </div>
  )
}
