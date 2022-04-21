// import { createPages, graphql } from 'gatsby'

exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      outfits: allContentfulOutfit {
        nodes {
          slug
        }
      }
    }
  `)

  data.outfits.nodes.forEach(node => {
    const { slug } = node
    const templateUrl = `./src/pages/outfits/{contentfulOutfits.slug}.js`
    actions.createPage({
      path: `outfits/${slug}`,
      component: require.resolve(templateUrl),
      context: { slug: slug },
    })
  })
}