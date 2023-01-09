export const ShopData = {
  name: "Shop Name",
  baseUrl: "http://localhost:5173/",
  slogan: "Super duper best shop",
}

export const ShopCategories = [
  {
    id: 1,
    title: "electronics",
  },
  {
    id: 2,
    title: "jewelery",
  },
  {
    id: 3,
    title: "men's clothing",
  },
  {
    id: 4,
    title: "women's clothing",
  },
]

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
