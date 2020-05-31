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
      contentfulFeatureVideo {
        vimeoLink
      }
    }
  `)

  const background = `url(${data.contentfulAsset.file.url})`
  const vimeoId = data.contentfulFeatureVideo.vimeoLink.substring(18, 27)

  const vimeoSrc = `https://player.vimeo.com/video/${vimeoId}?autoplay=1&loop=1`

  return (
    <div className={layoutStyles.siteWrapper}>
      <Header />
      <div
        style={{ backgroundImage: background }}
        className={layoutStyles.background}
      >
        {console.log(vimeoId)}
        {console.log(vimeoSrc)}
        {props.video ? (
          <div className={layoutStyles.vimeoWrapper}>
            <iframe
              title={vimeoId}
              src={vimeoSrc}
              className={layoutStyles.iframe}
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
          </div>
        ) : null}
        <div className={layoutStyles.container}>
          <div className={layoutStyles.content}>{props.children}</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
