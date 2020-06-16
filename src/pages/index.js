import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Head from "../components/head"
import InstaFeed from "../components/instaFeed"
import Menu from "../components/menu"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAboutMe {
        missionStatement {
          json
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
      <div style={{ textAlign: "center" }}>
        <h1>MY MISSION</h1>
        {documentToReactComponents(
          data.contentfulAboutMe.missionStatement.json,
          options
        )}
      </div>
      <InstaFeed />
      <Menu />
      <div style={{ height: "20px" }}></div>
    </Layout>
  )
}

export default IndexPage
