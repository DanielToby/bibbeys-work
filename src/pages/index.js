import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

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
    <Layout>
      <Head title="Projects" />
      <h1>Projects</h1>
      <ol className={projectStyles.projects}>
        {data.allContentfulProject.edges.map(edge => {
          return (
            <li className={projectStyles.project}>
              <Link to={`/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default IndexPage
