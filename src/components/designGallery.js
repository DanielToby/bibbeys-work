import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import galleryStyles from "./gallery.module.scss"

const DesignGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulDesign {
        edges {
          node {
            designs {
              fluid(maxWidth: 300) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)
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
      {data.allContentfulDesign.edges.map(edge => {
        return (
          <div>
            <div className={galleryStyles.row}>
              {threeArrays(edge.node.designs).map(chunk => {
                console.log(chunk)
                return (
                  <div className={galleryStyles.column}>
                    {chunk.map(design => {
                      return <Img fluid={design.fluid} />
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

export default DesignGallery
