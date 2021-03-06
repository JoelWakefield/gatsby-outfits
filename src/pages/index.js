import React from "react"
import * as PropTypes from "prop-types"
import { graphql } from "gatsby"

import { Product } from '../components/product'
import { Accordion } from '../components/accordion'
import { rhythm } from "../utils/typography"
import Layout from "../layouts"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class IndexPage extends React.Component {
  render() {
    const pants = this.props.data.pants.nodes
    const shirts = this.props.data.shirts.nodes

    return (
        <Layout>
          <div style={{ 
            marginBottom: rhythm(2),
            boxSizing: 'border-box',
            margin: '0',
            padding: '0'
          }}>
            <Accordion title="Shirts">
              {shirts.map((node) =>
                <Product key={node.id} node={node} type="shirts" />
              )}
            </Accordion>
            <Accordion title="Pants">
              {pants.map((node) => 
                <Product key={node.id} node={node} type="pants" />
              )}
            </Accordion>
          </div>
        </Layout>
    )
  }
}

IndexPage.propTypes = propTypes

export default IndexPage

export const pageQuery = graphql`
  query {
    shirts: allContentfulShirts {
      nodes {
        gotSleeves
        id
        title
        tags
        gatsbyPath(filePath: "/shirts/{contentfulShirts.id}")
        image {
          gatsbyImageData(
            layout: CONSTRAINED,
            placeholder: BLURRED, 
            width: 200
          )
        }
      }
    }
    pants: allContentfulPants {
      nodes {
        id
        title
        tags
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
