import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"
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
    <div
      style={{ backgroundImage: background }}
      className={layoutStyles.background}
    >
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Header />
          {props.children}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
