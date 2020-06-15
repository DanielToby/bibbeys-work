import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import instaFeedStyles from "./instaFeed.module.scss"

const InstaFeed = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode {
        edges {
          node {
            id
            localFile {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
        }
      }
      contentfulContactInfo {
        instagram
      }
    }
  `)
  return (
    <div>
      <div className={instaFeedStyles.row}>
        <div className={instaFeedStyles.column}>
          <Img
            fluid={
              data.allInstaNode.edges[0].node.localFile.childImageSharp.fluid
            }
          />
          <Img
            fluid={
              data.allInstaNode.edges[1].node.localFile.childImageSharp.fluid
            }
          />
          <Img
            fluid={
              data.allInstaNode.edges[2].node.localFile.childImageSharp.fluid
            }
          />
          <Img
            fluid={
              data.allInstaNode.edges[3].node.localFile.childImageSharp.fluid
            }
          />
          <Img
            fluid={
              data.allInstaNode.edges[4].node.localFile.childImageSharp.fluid
            }
          />
          <Img
            fluid={
              data.allInstaNode.edges[5].node.localFile.childImageSharp.fluid
            }
          />
        </div>
        <div className={instaFeedStyles.column}>
          <Img
            fluid={
              data.allInstaNode.edges[6].node.localFile.childImageSharp.fluid
            }
          />
          <Img
            fluid={
              data.allInstaNode.edges[7].node.localFile.childImageSharp.fluid
            }
          />
          <Img
            fluid={
              data.allInstaNode.edges[8].node.localFile.childImageSharp.fluid
            }
          />
          <Img
            fluid={
              data.allInstaNode.edges[9].node.localFile.childImageSharp.fluid
            }
          />
          <Img
            fluid={
              data.allInstaNode.edges[10].node.localFile.childImageSharp.fluid
            }
          />
          <Img
            fluid={
              data.allInstaNode.edges[11].node.localFile.childImageSharp.fluid
            }
          />
        </div>
        <div className={instaFeedStyles.column}>
          <Img
            fluid={
              data.allInstaNode.edges[12].node.localFile.childImageSharp.fluid
            }
          />
          <Img
            fluid={
              data.allInstaNode.edges[13].node.localFile.childImageSharp.fluid
            }
          />
          <Img
            fluid={
              data.allInstaNode.edges[14].node.localFile.childImageSharp.fluid
            }
          />
          <Img
            fluid={
              data.allInstaNode.edges[15].node.localFile.childImageSharp.fluid
            }
          />
          <Img
            fluid={
              data.allInstaNode.edges[16].node.localFile.childImageSharp.fluid
            }
          />
          <Img
            fluid={
              data.allInstaNode.edges[17].node.localFile.childImageSharp.fluid
            }
          />
        </div>
      </div>
      <div className={instaFeedStyles.note}>
        <i>Images sourced from my Instagram -&nbsp;</i>
        <a href={data.contentfulContactInfo.instagram} aria-label="instagram">
          <i>see more</i>
        </a>
      </div>
      <div style={{ height: "20px" }} />
      <hr />
      <div style={{ height: "20px" }} />
    </div>
  )
}

export default InstaFeed
