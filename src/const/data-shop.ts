export const ShopData = {
  name: "Shop Name",
  baseUrl: "http://localhost:5173/",
  slogan: "Super duper best shop",
}

export const ShopContacts = {
  mails: [],
  phones: [],
  addresses: [],
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

export const FooterLinks: FooterLinksType = {
  компания: [
    { id: 1, title: "O нас", link: "" },
    { id: 2, title: "Контакты", link: "" },
  ],
  полезное: [
    { id: 3, title: "Оплата и доставка", link: "" },
    { id: 4, title: "Условия возврата", link: "" },
    { id: 5, title: "Бонусная система", link: "" },
  ],
  покупателю: [
    { id: 6, title: "Публичная оферта", link: "" },
    { id: 7, title: "Политика конфиденциальности", link: "" },
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
