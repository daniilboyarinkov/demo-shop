import React from "react"

import { NavLink } from "react-router-dom"

import { FooterLinks, ShopContacts, ShopData } from "../../const/data-shop"
import styles from "../../styles/Footer.module.scss"
import LogoTempSVG from "../../svg/LogoTempSVG"
import { ServiceContact } from "../../svg/ServiceContactSVG"

// type Props = {}

export const Footer = () => {
  return (
    <div>
      <footer className={styles["app-footer"]}>
        {Object.keys(FooterLinks).map((t: string) => (
          <div key={t}>
            <span className="footer-title">{t}</span>
            {FooterLinks[t].map((l) => (
              <NavLink key={l.id} className="link link-hover" to={l.link}>
                {l.title}
              </NavLink>
            ))}
          </div>
        ))}
      </footer>

      <footer className={styles["app-footer"]}>
        <div className={styles["app-footer__logo"]}>
          <LogoTempSVG />
          <p>
            {ShopData.name} inc. <br />
            {ShopData.slogan}
          </p>
        </div>
        <div className={styles["app-footer__contacts"]}>
          {ShopContacts.socials.map((contact) => (
            <a key={contact.id} href={contact.url}>
              {ServiceContact({ service: contact.name })}
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}
