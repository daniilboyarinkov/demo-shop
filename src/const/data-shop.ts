import { EndPoints } from "./endpoints"

export const ShopData = {
  name: "Shop Name",
  baseUrl: "http://localhost:5173/",
  slogan: "Super duper best shop",
}

export const ShopSortFilters = [
  {
    id: 1,
    title: "новизна",
  },
  {
    id: 2,
    title: "цена",
  },
]

export const ShopContacts: ShopContactsType = {
  mails: ["example@example.com"],
  phones: ["+7 (999) 999-9999", "+7 (000) 000-0000"],
  addresses: ["г. Москва ул. Киренского, 26a"],
  socials: [
    {
      id: 1,
      name: "facebook",
      url: "https://www.facebook.com/superduperbestshop",
    },
    {
      id: 2,
      name: "youtube",
      url: "https://www.youtube.com/superduperbestshop",
    },
    {
      id: 3,
      name: "twitter",
      url: "https://www.twitter.com/superduperbestshop",
    },
  ],
}

export interface SocialContactType {
  id: number
  name: string
  url: string
}

export interface ShopContactsType {
  mails: string[]
  phones: string[]
  addresses: string[]
  socials: SocialContactType[]
}

export const FooterLinks: FooterLinksType = {
  компания: [
    { id: 1, title: "O нас", link: EndPoints.About },
    { id: 2, title: "Контакты", link: EndPoints.About },
  ],
  полезное: [
    { id: 3, title: "Оплата и доставка", link: EndPoints.PaymentDelivery },
    { id: 4, title: "Условия возврата", link: EndPoints.Return },
    // { id: 5, title: "Бонусная система", link: "" },
  ],
  покупателю: [
    { id: 6, title: "Публичная оферта", link: EndPoints.PublicOffer },
    {
      id: 7,
      title: "Политика конфиденциальности",
      link: EndPoints.Confidential,
    },
  ],
}

export interface LinkType {
  id?: number
  title: string
  link: string
}

export interface FooterLinksType {
  [title: string]: LinkType[]
}
