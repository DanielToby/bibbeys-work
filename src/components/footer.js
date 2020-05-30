import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faVimeo,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulContactInfo {
        email
        phoneNumber
        instagram
        vimeo
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <ul className={footerStyles.footerList}>
        <li className={footerStyles.footerListItem}>
          <a href={data.contentfulContactInfo.vimeo}>VIMEO</a>
        </li>
        <li className={footerStyles.footerListItem}>
          <a href={data.contentfulContactInfo.instagram}>INSTA</a>
        </li>
        <li className={footerStyles.footerListItem}>
          <a href={data.contentfulContactInfo.email}>EMAIL</a>
        </li>
      </ul>
      <ul className={footerStyles.footerIconList}>
        <li className={footerStyles.footerListItem}>
          <a href={data.contentfulContactInfo.vimeo}>
            <FontAwesomeIcon icon={faVimeo} size="2x" />
          </a>
        </li>
        <li className={footerStyles.footerListItem}>
          <a href={data.contentfulContactInfo.instagram}>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </li>
        <li className={footerStyles.footerListItem}>
          <a href={`mailto:${data.contentfulContactInfo.email}`}>
            <FontAwesomeIcon icon={faEnvelopeOpen} size="2x" />
          </a>
        </li>
      </ul>
      <p className={footerStyles.credit}>Daniel Toby © 2020</p>
      <a
        className={footerStyles.footerLink}
        href="https://github.com/DanielToby/bibbeys-work"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </footer>
  )
}

export default Footer
