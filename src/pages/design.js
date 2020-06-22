import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import DesignGallery from "../components/designGallery"

const DesignPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulBackgrounds {
        designBackground {
          fluid(maxWidth: 900) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  `)

  return (
    <Layout
      fluid={data.contentfulBackgrounds.designBackground.fluid}
      title={"Design"}
    >
      <Head title="Design" />
      <hr />
      <DesignGallery />
    </Layout>
  )
}

export default DesignPage
