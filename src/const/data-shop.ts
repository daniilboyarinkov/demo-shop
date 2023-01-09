export const ShopData = {
  name: "Shop Name",
  baseUrl: "http://localhost:5173/",
  slogan: "Super duper best shop",
}

export const ShopCategories = [
  {
    id: 1,
    title: "electronics",
    image:
      "https://www.techinpost.com/wp-content/uploads/How-do-Analog-Digital-Circuits-Shape-the-Electronics-Industry.jpg",
  },
  {
    id: 2,
    title: "jewelery",
    image:
      "https://womanmagazine-npp.com/wp-content/uploads/cache/images/2021/11/IMG_1024.webp",
  },
  {
    id: 3,
    title: "men's clothing",
    image:
      "https://ds393qgzrxwzn.cloudfront.net/cat1/img/images/0/9al85Sw18I.jpg",
  },
  {
    id: 4,
    title: "women's clothing",
    image:
      "https://media.glamour.com/photos/595ea38ef4609a21dfa1137e/1:1/w_352/summer-fashion.jpg",
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
