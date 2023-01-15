import React from "react"

import { SubscribeSection } from "../components/Sections/SubscribeSection"
import { ShopContacts } from "../const/data-shop"
import { ServiceContact } from "../svg/ServiceContactSVG"

// export interface IAboutUsPageProps {}

export function AboutUsPage() {
  return (
    <div className="">
      <h1 className="text-xl m-4">Связаться с нами</h1>
      <div className="grid place-content-center sm:grid-cols-3 md:grid-cols-4 gap-8">
        <div className="text-center">
          <h2 className="text-lg mb-4">В социальных сетях:</h2>
          <div className="flex gap-4 justify-center">
            {ShopContacts.socials.map((contact) => (
              <a key={contact.id} href={contact.url}>
                {ServiceContact({ service: contact.name })}
              </a>
            ))}
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-lg mb-4">По телефону:</h2>
          <div className="flex flex-col gap-2 justify-center">
            {ShopContacts.phones.map((phone, index) => (
              <div key={phone + String(index)}>{phone}</div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-lg mb-4">По почте:</h2>
          <div>
            {ShopContacts.mails.map((mail, index) => (
              <div key={mail + String(index)}>{mail}</div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-lg mb-4">По телефону:</h2>
          <div>
            {ShopContacts.addresses.map((address, index) => (
              <div key={address + String(index)}>{address}</div>
            ))}
          </div>
        </div>
      </div>
      <SubscribeSection />
    </div>
  )
}
