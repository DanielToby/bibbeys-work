import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import galleryStyles from "./gallery.module.scss"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPhotography {
        edges {
          node {
            description {
              json
            }
            photos {
              fluid(maxWidth: 300) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  return (
    <div>
      {data.allContentfulPhotography.edges.map(edge => {
        return (
          <div>
            <p className={galleryStyles.description}>
              {documentToReactComponents(edge.node.description.json, options)}
            </p>
            <div className={galleryStyles.row}>
              <div className={galleryStyles.column}>
                <Img fluid={edge.node.photos[0].fluid} />
                <Img fluid={edge.node.photos[1].fluid} />
              </div>
              <div className={galleryStyles.column}>
                <Img fluid={edge.node.photos[2].fluid} />
                <Img fluid={edge.node.photos[3].fluid} />
              </div>
              <div className={galleryStyles.column}>
                <Img fluid={edge.node.photos[4].fluid} />
                <Img fluid={edge.node.photos[5].fluid} />
              </div>
            </div>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default Gallery
