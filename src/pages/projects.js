import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

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
            body {
              json
            }
            publishedDate(formatString: "MMMM Do, YYYY")
            vimeoLink
          }
        }
      }
    }
  `)

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout page="video">
      <Head title="Projects" />
      <hr />
      <ol className={projectStyles.projects}>
        {data.allContentfulProject.edges.map(edge => {
          return (
            <li className={projectStyles.project}>
              <Link to={`/projects/${edge.node.slug}`}>
                <div className={projectStyles.details}>
                  <h2>{edge.node.title}</h2>
                  <h3>{edge.node.publishedDate}</h3>
                  <p>
                    {documentToReactComponents(edge.node.body.json, options)}
                  </p>
                  <div className={projectStyles.fadeout} />
                </div>
                <div className={projectStyles.container}>
                  <div className={projectStyles.vimeoWrapper}>
                    <iframe
                      title={edge.node.vimeoLink.substring(18, 27)}
                      src={`https://player.vimeo.com/video/${edge.node.vimeoLink.substring(
                        18,
                        27
                      )}`}
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                </div>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default ProjectsPage
