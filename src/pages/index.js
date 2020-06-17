import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Head from "../components/head"
import InstaFeed from "../components/instaFeed"
import Menu from "../components/menu"
import indexStyles from "./index.module.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAboutMe {
        missionStatement {
          json
        }
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
    <Layout video={true}>
      <Head title="Home" />
      <div className={indexStyles.textWrapper}>
        <Img
          style={{ borderRadius: "50%" }}
          fixed={data.contentfulAboutMe.headshot.fixed}
        />
        <h1>
          <span className={indexStyles.aboutHighlight}>About Me</span>
        </h1>

        {documentToReactComponents(data.contentfulAboutMe.body.json, options)}
        <hr />
        <div style={{ height: "40px" }} />
        <h1>
          <span className={indexStyles.missionHighlight}>
            Mission Statement
          </span>
        </h1>
        {documentToReactComponents(
          data.contentfulAboutMe.missionStatement.json,
          options
        )}
        <div style={{ height: "40px" }} />
        <hr />
        <div style={{ height: "40px" }} />
      </div>
      <InstaFeed />
      <Menu />
      <div style={{ height: "20px" }}></div>
    </Layout>
  )
}

export default IndexPage
