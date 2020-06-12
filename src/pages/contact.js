import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulContactInfo {
        email
      }
    }
  `)

  return (
    <div>
      <Layout>
        <Head title="Contact" />
        <h1>Contact me</h1>
        <hr />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <div style={{ height: "40px" }} />
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input name="name" placeholder="Your Name" type="text" />
              <button>Send</button>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default ContactPage
