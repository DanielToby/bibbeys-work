import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Header from "../components/header"
import Footer from "../components/footer"
import Feature from "../components/feature"
import ContentHeader from "../components/contentHeader"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  const data = useStaticQuery(graphql`
    query {
      contentfulBackgrounds {
        siteBackground {
          fluid(maxWidth: 1920) {
            ...GatsbyContentfulFluid
          }
        }
        contentBackground {
          fluid(maxWidth: 900) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  `)

  const siteBackground = data.contentfulBackgrounds.siteBackground.fluid
  const contentBackground = data.contentfulBackgrounds.contentBackground.fluid

  return (
    <body>
      <Header />
      <BackgroundImage
        className={layoutStyles.background}
        fluid={siteBackground}
        backgroundColor={`#658f9e`}
      >
        <div style={{ height: "80px" }} />
        {props.video ? <Feature /> : <div className={layoutStyles.spacer} />}
        <div className={layoutStyles.container}>
          {props.title && (
            <ContentHeader fluid={props.fluid} title={props.title} />
          )}
          <BackgroundImage
            fluid={contentBackground}
            className={layoutStyles.content}
            backgroundColor={`#fcfcfc`}
          >
            {props.children}
          </BackgroundImage>
        </div>
      </BackgroundImage>
      <Footer />
    </body>
  )
}

export default Layout
