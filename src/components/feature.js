import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import featureStyles from "./feature.module.scss"

const Feature = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulFeatureVideo {
        vimeoLink
      }
    }
  `)

  const vimeoId = data.contentfulFeatureVideo.vimeoLink.substring(18, 27)
  const vimeoSrc = `https://player.vimeo.com/video/${vimeoId}?autoplay=1&loop=1`
  return (
    <div className={featureStyles.feature}>
      <div className={featureStyles.container}>
        <div className={featureStyles.vimeoWrapper}>
          <iframe
            title={vimeoId}
            src={vimeoSrc}
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  )
}

export default Feature
