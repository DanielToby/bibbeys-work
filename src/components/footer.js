import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faVimeo,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeOpen, faPhone } from "@fortawesome/free-solid-svg-icons"

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
          <a href={`mailto:${data.contentfulContactInfo.email}`}>EMAIL</a>
        </li>
        <li className={footerStyles.footerListItem}>
          <a href={`tel:${data.contentfulContactInfo.phoneNumber}`}>PHONE</a>
        </li>
      </ul>
      <ul className={footerStyles.footerIconList}>
        <li className={footerStyles.footerListItem}>
          <a href={data.contentfulContactInfo.vimeo}>
            <FontAwesomeIcon icon={faVimeo} />
          </a>
        </li>
        <li className={footerStyles.footerListItem}>
          <a href={data.contentfulContactInfo.instagram}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li className={footerStyles.footerListItem}>
          <a href={`mailto:${data.contentfulContactInfo.email}`}>
            <FontAwesomeIcon icon={faEnvelopeOpen} />
          </a>
        </li>
        <li className={footerStyles.footerListItem}>
          <a href={`tel:${data.contentfulContactInfo.phoneNumber}`}>
            <FontAwesomeIcon icon={faPhone} />
          </a>
        </li>
      </ul>
      <a
        className={footerStyles.footerLink}
        href="https://github.com/DanielToby/bibbeys-work"
      >
        Daniel Toby © 2020 &nbsp;
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </footer>
  )
}

export default Footer
