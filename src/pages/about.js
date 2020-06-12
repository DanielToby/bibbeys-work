import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAboutMe {
        body {
          json
        }
        headshot {
          fixed(width: 200, height: 200) {
            ...GatsbyContentfulFixed
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
    <div>
      <Layout>
        <Head title="About" />
        <div style={{ textAlign: "center" }}>
          <Img
            style={{ borderRadius: "50%" }}
            fixed={data.contentfulAboutMe.headshot.fixed}
          />
          <h1>About Me</h1>
          <hr />
          <div style={{ height: "40px" }} />
          {documentToReactComponents(data.contentfulAboutMe.body.json, options)}
        </div>
      </Layout>
    </div>
  )
}

export default AboutPage
