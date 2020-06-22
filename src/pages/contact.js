import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulBackgrounds {
        contactBackground {
          fluid(maxWidth: 900) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <Layout
        fluid={data.contentfulBackgrounds.contactBackground.fluid}
        title={"Contact Me"}
      >
        <Head title="Contact" />
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
              <input type="hidden" name="form-name" value="contact-me" />
              <label>
                Name
                <div style={{ height: "10px" }} />
                <input
                  name="name"
                  placeholder="Joe Schmoe"
                  type="text"
                  id="name"
                />
              </label>
              <div style={{ height: "10px" }} />
              <label>
                Email
                <div style={{ height: "10px" }} />
                <input
                  name="email"
                  placeholder="joe@schmoe.com"
                  type="email"
                  id="email"
                ></input>
              </label>
              <div style={{ height: "10px" }} />
              <label>
                Message Body
                <div style={{ height: "10px" }} />
                <textarea
                  placeholder="Dear Josh..."
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
