import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

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
        fluid(maxWidth: 1920) {
          ...GatsbyContentfulFluid
        }
      }
    }
  `)

  return (
    <body>
      <Header />
      <BackgroundImage
        className={layoutStyles.background}
        fluid={data.contentfulAsset.fluid}
      >
        {props.video && <Feature />}
        <div className={layoutStyles.container}>
          <div className={layoutStyles.content}>{props.children}</div>
        </div>
      </BackgroundImage>
      <Footer />
    </body>
  )
}

export default Layout
