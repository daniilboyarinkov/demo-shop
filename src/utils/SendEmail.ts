import { createTransport } from "nodemailer"

import { ShopData } from "./../const/data-shop"

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: "",
    pass: "",
  },
})

const defaultMessage = "Спасибо за подписку на обновления!"
const defaultSubject = `Подписка на обновления ${ShopData.baseUrl}`

export const SendEmail = (
  toMail: string,
  subject: string = defaultSubject,
  message: string = defaultMessage
) => {
  transporter.sendMail(
    {
      from: `"${ShopData.name}"`,
      to: toMail,
      subject: subject,
      text: message,
      // html: "This <i>message</i> with <strong>attachments</strong>.",
    },
    (error, info) => {
      if (error) console.log(error)
      else console.log("Email sent: " + info.response)
    }
  )
}
