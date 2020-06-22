import React from "react"
import Img from "gatsby-image"

import contentHeaderStyles from "./contentHeader.module.scss"

const ContentHeader = props => {
  return (
    <div className={contentHeaderStyles.container}>
      <Img className={contentHeaderStyles.header} fluid={props.fluid} />
      <h1 className={contentHeaderStyles.title}>{props.title}</h1>
    </div>
  )
}

export default ContentHeader
