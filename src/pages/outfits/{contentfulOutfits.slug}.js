import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../../layouts/index'
import { rhythm } from "../../utils/typography"
import '../productPage.css'

const OutfitPage = ({data}) => {
  const { title, gotSleeves: shirt, count: pants } = data.outfit
  const shirtImage = getImage(shirt.image)
  const pantsImage = getImage(pants.image)

  return (
    <Layout>
      <h1 style={{ 
        textAlign: 'center',
        marginBottom: rhythm(1 / 2) 
      }}>{title}</h1>
      <br style={{ marginTop: rhythm(1) }} />

      <div className='dual-images'>
        <Link to={shirt.gatsbyPath}>
          <div className='image-wrapper'>
            {shirtImage && (
              <GatsbyImage
              style={{ marginBottom: rhythm(1) }}
              alt={shirt.title}
              image={shirtImage}
              />
              )}
          </div>
        </Link>
        <Link to={pants.gatsbyPath}>
          <div className='image-wrapper'>
            {pantsImage && (
              <GatsbyImage
              style={{ marginBottom: rhythm(1) }}
              alt={pants.title}
              image={pantsImage}
              />
              )}
          </div>
        </Link>
      </div>
      <br style={{ marginTop: rhythm(1) }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($slug: String!) {
    outfit: contentfulOutfit(slug: {eq: $slug}) {
      id
      title
      gotSleeves {
        title
        gatsbyPath(filePath: "/shirts/{contentfulShirts.id}")
        image {
          gatsbyImageData(
            layout: CONSTRAINED,
            placeholder: BLURRED, 
            width: 200
          )
        }
      }
      count {
        title
        gatsbyPath(filePath: "/pants/{contentfulPants.id}")
        image {
          gatsbyImageData(
            layout: CONSTRAINED,
            placeholder: BLURRED, 
            width: 200
          )
        }
      }
    }
  }
`

export default OutfitPage