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
      allContentfulAsset {
        edges {
          node {
            title
            fluid(maxWidth: 1920) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)

  const background = data.allContentfulAsset.edges.find(
    edge => edge.node.title === "background"
  )
  const contentBackground = data.allContentfulAsset.edges.find(
    edge => edge.node.title === "Content Background"
  )

  return (
    <body>
      <Header />
      <BackgroundImage
        className={layoutStyles.background}
        fluid={background.node.fluid}
      >
        {props.video && <Feature />}
        <div className={layoutStyles.container}>
          <BackgroundImage
            fluid={contentBackground.node.fluid}
            className={layoutStyles.content}
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
