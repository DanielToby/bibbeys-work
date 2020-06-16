import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Typist from "react-typist"
import HamburgerMenu from "react-hamburger-menu"
import Headroom from "react-headroom"

import Menu from "./menu"
import headerStyles from "./header.module.scss"

const Header = () => {
  const [animateLogo, setAnimateLogo] = useState(true)

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 600)
  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 600)
    setOpen(window.innerWidth > 600)
  }
  useEffect(() => {
    window.addEventListener("resize", updateMedia)
    return () => window.removeEventListener("resize", updateMedia)
  })

  const [open, setOpen] = useState(isDesktop)
  const handleBurgerClick = () => {
    setOpen(!open)
  }

  return (
    <Headroom>
      <div className={headerStyles.header}>
        <div className={headerStyles.content}>
          {animateLogo ? (
            <Typist
              avgTypingDelay={20}
              cursor={{
                show: false,
              }}
              onTypingDone={() => {
                setAnimateLogo(false)
              }}
            >
              <Link className={headerStyles.title} to="/">
                Josh Bibbey's Work.
              </Link>
            </Typist>
          ) : (
            <Link className={headerStyles.title} to="/">
              Josh Bibbey's Work.
            </Link>
          )}
        </div>
        <div className={headerStyles.burger}>
          <HamburgerMenu
            color="#f4f4f4"
            isOpen={open}
            menuClicked={handleBurgerClick}
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
    </Headroom>
  )
}

export default Header
