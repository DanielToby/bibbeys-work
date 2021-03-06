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
  const threeArrays = myArray => {
    var index = 0
    var arrayLength = myArray.length
    var tempArray = []
    var myChunk = []

    for (index = 0; index < arrayLength; index += 2) {
      myChunk = myArray.slice(index, index + 2)
      tempArray.push(myChunk)
    }
    return tempArray
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
              {threeArrays(edge.node.photos).map(chunk => {
                console.log(chunk)
                return (
                  <div className={galleryStyles.column}>
                    {chunk.map(photo => {
                      return <Img fluid={photo.fluid} />
                    })}
                  </div>
                )
              })}
            </div>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default Gallery
