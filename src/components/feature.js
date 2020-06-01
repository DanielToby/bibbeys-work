import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import featureStyles from "./feature.module.scss"

const Feature = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulFeatureVideo {
        featureGif {
          title
          file {
            url
          }
        }
      }
    }
  `)
  const feature = `${data.contentfulFeatureVideo.featureGif.file.url}`
  return (
    <img className={featureStyles.responsive} src={feature} alt="feature" />
  )
}

export default Feature
