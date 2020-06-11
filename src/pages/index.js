import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import InstaFeed from "../components/instaFeed"

const IndexPage = () => {
  return (
    <Layout video={true}>
      <Head title="Home" />
      <InstaFeed />
    </Layout>
  )
}

export default IndexPage
