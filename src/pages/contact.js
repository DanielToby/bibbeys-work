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
              name="contact-me"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <label>
                Name
                <input name="name" placeholder="Name" type="text" id="name" />
              </label>
              <label>
                Email
                <input
                  name="email"
                  placeholder="Email"
                  type="email"
                  id="email"
                ></input>
              </label>
              <label>
                Message Body
                <textarea
                  placeholder="Message"
                  style={{ width: "100%", height: "200px" }}
                  name="message"
                  id="message"
                />
              </label>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default ContactPage
