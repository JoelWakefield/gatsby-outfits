import React from 'react'
import { Helmet } from 'react-helmet'

export const CustomHelmet = () => {
  const description = `See the pants and shits of some amazing,
  custom outfits that my dad and I put together.
  `

  return (
    <Helmet htmlAttributes={{ lang: 'en' }}>
    <title>Outfits</title>
    <meta name='description' content={`${description}`} />
  </Helmet>
  )
}
