import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import projectStyles from "./projects.module.scss"
import Head from "../components/head"

const IndexPage = () => {
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
    <Layout video={true}>
      <Head title="Home" />
      <ol className={projectStyles.projects}>
        {data.allContentfulProject.edges.map(edge => {
          return <div></div>
        })}
      </ol>
    </Layout>
  )
}

export default IndexPage
