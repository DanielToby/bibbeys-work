import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import DesignGallery from "../components/designGallery"

const PhotographyPage = () => {
  return (
    <Layout page="design">
      <Head title="Design" />
      <hr />
      <DesignGallery />
    </Layout>
  )
}

export default PhotographyPage
