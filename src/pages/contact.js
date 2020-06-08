import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulContactInfo {
        email
        phoneNumber
        instagram
        vimeo
      }
    }
  `)

  return (
    <div>
      <Layout>
        <Head title="Contact" />
        <h1>Contact me</h1>
        <hr />
        <p>
          <strong>Email: </strong>
          {data.contentfulContactInfo.email}
        </p>
        <p>
          <strong>Phone Number: </strong>
          {data.contentfulContactInfo.phoneNumber}
        </p>
        <p>
          <strong>Instagram: </strong>{" "}
          <a href={data.contentfulContactInfo.instagram}>Josh_Bibbey</a>
        </p>
        <p>
          <strong>Vimeo: </strong>{" "}
          <a href={data.contentfulContactInfo.vimeo}>Josh Bibbey</a>
        </p>
      </Layout>
    </div>
  )
}

export default ContactPage
