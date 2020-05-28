import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const PhotographyPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Photography" />
      <h1>Photography</h1>
    </Layout>
  )
}

export default PhotographyPage
