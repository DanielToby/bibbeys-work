import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Typist from "react-typist"
import HamburgerMenu from "react-hamburger-menu"

import Menu from "./menu"
import headerStyles from "./header.module.scss"

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" && window.innerWidth > 600
  )
  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 600)
    setOpen(window.innerWidth > 600)
  }
  useEffect(() => {
    window.addEventListener("resize", updateMedia)
    return () => window.removeEventListener("resize", updateMedia)
  })

  const [open, setOpen] = useState(isDesktop)

  return (
    <div className={headerStyles.wrapper}>
      <div className={headerStyles.header}>
        <div className={headerStyles.content}>
          <Typist
            avgTypingDelay={30}
            cursor={{
              show: false,
            }}
          >
            <Link className={headerStyles.title} to="/">
              Josh Bibbey's Work.
            </Link>
          </Typist>
        </div>
        <div className={headerStyles.burger}>
          <HamburgerMenu
            color="#f4f4f4"
            isOpen={open}
            menuClicked={() => {
              setOpen(!open)
            }}
          />
        </div>
      </div>

      {open ? (
        <div
          style={{ display: "block" }}
          className={headerStyles.menuContainer}
        >
          <hr className={headerStyles.separator} />
          <Menu />
        </div>
      ) : (
        <div style={{ display: "none" }} className={headerStyles.menuContainer}>
          <hr className={headerStyles.separator} />
          <Menu />
        </div>
      )}
    </div>
  )
}

export default Header
