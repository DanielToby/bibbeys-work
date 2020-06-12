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
        <h1>Let's get in touch!</h1>
        <hr />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "60%" }}>
            <div style={{ height: "40px" }} />
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input name="name" placeholder="Name" type="text" />
              <div style={{ height: "10px" }} />
              <input name="email" placeholder="Email" type="email"></input>
              <div style={{ height: "10px" }} />
              <textarea
                placeholder="Message"
                style={{ width: "100%", height: "200px" }}
                name="message"
              ></textarea>
              <button>Send</button>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default ContactPage
