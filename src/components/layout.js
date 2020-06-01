import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"
import Feature from "../components/feature"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAsset(title: { eq: "background" }) {
        title
        file {
          url
        }
      }
    }
  `)

  const background = `url(${data.contentfulAsset.file.url})`

  return (
    <body>
      <Header />
      <div
        style={{ backgroundImage: background }}
        className={layoutStyles.background}
      >
        {props.video && <Feature />}
        <div className={layoutStyles.container}>
          <div className={layoutStyles.content}>{props.children}</div>
        </div>
      </div>
      <Footer />
    </body>
  )
}

export default Layout
