import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { CustomHelmet as Helmet } from '../../components/helmet'

import Layout from "../../layouts/index"
import { rhythm } from "../../utils/typography"
import '../productPage.css'

const PantsPage = ({ data }) => {
  const { title, tags, outfit: outfits } = data.contentfulPants
  const image = getImage(data.contentfulPants.image)

  return (
    <>
      <Helmet />

      <Layout>
        <h1 style={{ marginBottom: rhythm(1 / 2) }}>{title}</h1>
        <br style={{ marginTop: rhythm(1) }} />

        <div className='image-wrapper'>
          {image && (
            <GatsbyImage
            style={{ marginBottom: rhythm(1) }}
            alt={title}
            image={image}
            />
            )}
        </div>
        <br style={{ marginTop: rhythm(1) }} />

        <h2>Tags</h2>
          <ul>
            {tags && tags.map((tag, i) => (
              <li key={i}>
                {tag}
              </li>
            ))}
          </ul>
        <br style={{ marginTop: rhythm(1) }} />

        <h2>Outfits</h2>
          <ul>
            {outfits && outfits.map((outfit, i) => (
              <li key={i}>
                {outfit.title}
              </li>
            ))}
          </ul>
        <br style={{ marginTop: rhythm(1) }} />
      </Layout>
    </>
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