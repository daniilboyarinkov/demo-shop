import React from "react"

import { FooterLinks, ShopContacts, ShopData } from "../../const/data-shop"
import LogoTempSVG from "../../svg/LogoTempSVG"
import { ServiceContact } from "../../svg/ServiceContactSVG"

// type Props = {}

export const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        {Object.keys(FooterLinks).map((t: string) => (
          <div key={t}>
            <span className="footer-title">{t}</span>
            {FooterLinks[t].map((l) => (
              <a key={l.id} className="link link-hover" href={l.link}>
                {l.title}
              </a>
            ))}
          </div>
        ))}
      </footer>

      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <div className="items-center grid-flow-col">
          <LogoTempSVG />
          <p>
            {ShopData.name} inc. <br />
            {ShopData.slogan}
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            {ShopContacts.socials.map((contact) => (
              <a key={contact.id} href={contact.url}>
                {ServiceContact({ service: contact.name })}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
