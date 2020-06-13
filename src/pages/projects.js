import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import projectStyles from "./projects.module.scss"
import Head from "../components/head"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            vimeoLink
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Projects" />
      <h1>Video Projects</h1>
      <hr />
      <ol className={projectStyles.projects}>
        {data.allContentfulProject.edges.map(edge => {
          return (
            <li className={projectStyles.project}>
              <Link to={`/projects/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <div className={projectStyles.container}>
                  <div className={projectStyles.vimeoWrapper}>
                    <iframe
                      title={edge.node.vimeoLink.substring(18, 27)}
                      src={`https://player.vimeo.com/video/${edge.node.vimeoLink.substring(
                        18,
                        27
                      )}`}
                      frameborder="0"
                      allowfullscreen
                    />
                  </div>
                </div>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default ProjectsPage
