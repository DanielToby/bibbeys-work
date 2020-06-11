import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          url
        }
      }
    }
  `)
  return (
    <Helmet title={`${title} | ${data.site.siteMetadata.title}`}>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta property="og:title" content={data.site.siteMetadata.url} />
      <meta charSet="utf-8" />
      <html lang="en" />
    </Helmet>
  )
}

export default Head
