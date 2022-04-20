import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from "../../layouts/index"
import { rhythm } from "../../utils/typography"
import '../productPage.css'

const PantsPage = ({ data }) => {
  const { title, tags, image, outfit: outfits } = data.contentfulPants
  console.log(data.contentfulPants)
  return (
    <Layout>
      <h1 style={{ marginBottom: rhythm(1 / 2) }}>{title}</h1>
      <br style={{ marginTop: rhythm(1) }} />

      <div className='image-wrapper'>
        {image && (
          <GatsbyImage
            style={{ marginBottom: rhythm(1) }}
            image={image.gatsbyImageData}
          />
        )}
      </div>
      <br style={{ marginTop: rhythm(1) }} />

      <h3>Tags</h3>
        <ul>
          {tags.map((tag, i) => (
            <li key={i}>
              {tag}
            </li>
          ))}
        </ul>
      <br style={{ marginTop: rhythm(1) }} />

      <h3>Outfits</h3>
        <ul>
          {outfits && outfits.map((outfit, i) => (
            <li key={i}>
              {outfit.title}
            </li>
          ))}
        </ul>
      <br style={{ marginTop: rhythm(1) }} />
    </Layout>
  )
}

export default PantsPage

export const pageQuery = graphql`
  query ($id: String) {
    contentfulPants(id: {eq: $id}) {
      title
      tags
      outfit {
        title
        id
      }
      id
      image {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`