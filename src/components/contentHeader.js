import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import contentHeaderStyles from "./contentHeader.module.scss"

const ContentHeader = props => {
  const data = useStaticQuery(graphql`
    query {
      contentfulBackgrounds {
        photoBackground {
          fluid(maxWidth: 900) {
            ...GatsbyContentfulFluid
          }
        }
        videoBackground {
          fluid(maxWidth: 900) {
            ...GatsbyContentfulFluid
          }
        }
        contactBackground {
          fluid(maxWidth: 900) {
            ...GatsbyContentfulFluid
          }
        }
        designBackground {
          fluid(maxWidth: 900) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  `)

  const photoBackground = data.contentfulBackgrounds.photoBackground.fluid
  const videoBackground = data.contentfulBackgrounds.videoBackground.fluid
  const contactBackground = data.contentfulBackgrounds.contactBackground.fluid
  const designBackground = data.contentfulBackgrounds.designBackground.fluid

  const source = page => {
    switch (page) {
      case "photo":
        return photoBackground
      case "video":
        return videoBackground
      case "contact":
        return contactBackground
      case "design":
        return designBackground
      default:
        return null
    }
  }

  const text = page => {
    switch (page) {
      case "photo":
        return "Photography"
      case "video":
        return "Videography"
      case "contact":
        return "Contact Me"
      case "design":
        return "Design"
      default:
        return "Shouldn't Be Here"
    }
  }

  return (
    <div className={contentHeaderStyles.container}>
      <Img className={contentHeaderStyles.header} fluid={source(props.page)} />
      <h1 className={contentHeaderStyles.title}>{text(props.page)}</h1>
    </div>
  )
}

export default ContentHeader
