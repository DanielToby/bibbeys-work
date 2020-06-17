import React from "react"
import { Link } from "gatsby"

import menuStyles from "./menu.module.scss"

const Menu = () => {
  return (
    <div className={menuStyles.menu}>
      <nav>
        <ul className={menuStyles.navList}>
          <li className={menuStyles.first}>
            <Link
              className={menuStyles.navItem}
              activeClassName={menuStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className={menuStyles.second}>
            <Link
              className={menuStyles.navItem}
              activeClassName={menuStyles.activeNavItem}
              to="/projects"
            >
              Videos
            </Link>
          </li>
          <li className={menuStyles.third}>
            <Link
              className={menuStyles.navItem}
              activeClassName={menuStyles.activeNavItem}
              to="/photography"
            >
              Photos
            </Link>
          </li>
          <li className={menuStyles.fourth}>
            <Link
              className={menuStyles.navItem}
              activeClassName={menuStyles.activeNavItem}
              to="/design"
            >
              Design
            </Link>
          </li>
          <li className={menuStyles.fifth}>
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
