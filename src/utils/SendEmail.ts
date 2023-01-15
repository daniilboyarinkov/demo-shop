// import emailjs from "emailjs-com"

import { ShopData } from "./../const/data-shop"

const defaultMessage = "Спасибо за подписку на обновления!"
const defaultSubject = `Подписка на обновления ${ShopData.baseUrl}`

export const SendEmail = async (e: any, formRef: any) => {
  e.preventDefault()
  e.target.reset()
  console.log(e.target.email)
  alert(`Отправка сообщения на почту ${e.target.email}`)
  alert(`ну или еще нет...`)
  // console.log(
  //   env.REACT_APP_SERVICE_ID,
  //   env.REACT_APP_TEMPLATE_ID,
  //   formRef.current,
  //   env.REACT_APP_PUBLIC_KEY
  // )
  // try {
  //   const result = await emailjs.sendForm(
  //     env.REACT_APP_SERVICE_ID,
  //     env.REACT_APP_TEMPLATE_ID,
  //     formRef.current,
  //     env.REACT_APP_PUBLIC_KEY
  //   )
  // } catch (err) {
  //   console.log(err)
  // }
}
