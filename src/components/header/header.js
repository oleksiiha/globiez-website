import React, { Component } from 'react';
import Link from 'gatsby-link';
import styles from './header.module.css';
import logo from './globiez_logo.svg';
import menu from './icon-menu.svg';
import classNames from "classnames";

class Header extends Component { 
  state = {
    opened: false
  }

  render() {
    const { currentPath } = this.props;
    return (
      <div className={styles.main}>
        <div className={`container ${styles.flex}`}>
          <button className={styles.menuButton}>
            <img src={menu} alt="Menu button icon" />
          </button>
          <Link
            to="/"
            className={styles.logo}
          >
            <img src={logo} alt="Globiez Logo" />
          </Link>
          <nav className={styles.nav}>
            <Link
              to="/"
              className={styles.nav_link}
            >
              Home
            </Link>
            <Link
              to="/vacancies/"
              className={classNames(styles.nav_link, {
                [styles.active]: (currentPath || "").search(/vacancies/) >= 0
              })}
            >
              Vacancies
            </Link>
            <Link
              to="/qa/"
              className={styles.nav_link}
            >
              Q&A
            </Link>
            <Link
              to="/services/"
              className={styles.nav_link}
            >
              Services
            </Link>
            <Link
              to="/contact/"
              className={styles.nav_link}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>)
  }
}

export default Header
