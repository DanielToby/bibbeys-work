import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import Gallery from "../components/gallery"

const PhotographyPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulBackgrounds {
        photoBackground {
          fluid(maxWidth: 900) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  `)

  return (
    <Layout
      fluid={data.contentfulBackgrounds.photoBackground.fluid}
      title={"Photography"}
    >
      <Head title="Photography" />
      <hr />
      <Gallery />
    </Layout>
  )
}

export default PhotographyPage
