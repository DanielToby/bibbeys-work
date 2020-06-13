import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
      vimeoLink
    }
  }
`

const Project = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }

  const vimeoId = props.data.contentfulProject.vimeoLink.substring(18, 27)
  const vimeoSrc = `https://player.vimeo.com/video/${vimeoId}?autoplay=1&loop=1`

  return (
    <Layout>
      <Head title={props.data.contentfulProject.title} />
      <h1>{props.data.contentfulProject.title}</h1>
      <p>{props.data.contentfulProject.publishedDate}</p>
      {documentToReactComponents(
        props.data.contentfulProject.body.json,
        options
      )}
      <div style={{ margin: "auto", width: "80%", padding: "10px" }}>
        <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
          <iframe
            title={vimeoId}
            src={vimeoSrc}
            frameborder="0"
            allowfullscreen
          />
        </div>
      </div>
    </Layout>
  )
}

export default Project
