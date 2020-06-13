import React from "react"
import { Link } from "gatsby"

import menuStyles from "./menu.module.scss"

const Menu = () => {
  return (
    <div className={menuStyles.menu}>
      <nav>
        <ul className={menuStyles.navList}>
          <li>
            <Link
              className={menuStyles.navItem}
              activeClassName={menuStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={menuStyles.navItem}
              activeClassName={menuStyles.activeNavItem}
              to="/projects"
            >
              Videos
            </Link>
          </li>
          <li>
            <Link
              className={menuStyles.navItem}
              activeClassName={menuStyles.activeNavItem}
              to="/photography"
            >
              Photos
            </Link>
          </li>
          <li>
            <Link
              className={menuStyles.navItem}
              activeClassName={menuStyles.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={menuStyles.navItem}
              activeClassName={menuStyles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu
