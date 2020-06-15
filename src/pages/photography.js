import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import Gallery from "../components/gallery"

const PhotographyPage = () => {
  return (
    <Layout page="photo">
      <Head title="Photography" />
      <hr />
      <Gallery />
    </Layout>
  )
}

export default PhotographyPage
