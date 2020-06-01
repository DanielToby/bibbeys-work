import React, { useState } from "react"
import { Link } from "gatsby"
import Typist from "react-typist"
import HamburgerMenu from "react-hamburger-menu"
import Headroom from "react-headroom"

import Menu from "./menu"
import headerStyles from "./header.module.scss"

const Header = () => {
  const [open, setOpen] = useState()
  const [animateLogo, setAnimateLogo] = useState(true)
  const handleBurgerClick = () => {
    setOpen(!open)
  }

  return (
    <Headroom>
      <div className={headerStyles.header}>
        <div className={headerStyles.content}>
          {open ? (
            <Menu />
          ) : (
            <div>
              {animateLogo ? (
                <Typist
                  avgTypingDelay={100}
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
    </Headroom>
  )
}

export default Header
