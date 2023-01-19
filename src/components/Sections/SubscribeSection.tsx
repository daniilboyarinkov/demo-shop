import React from "react"

import { SubmitHandler, useForm } from "react-hook-form"

import styles from "../../styles/SubscribeSection.module.scss"

// import { SendEmail } from "../../utils/SendEmail"

// export interface ISubscribeProps {}

interface IFormInput {
  email: string
}

export function SubscribeSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const { email: toEmail } = data
    // SendEmail(toEmail)
    alert(`Отправка сообщения на почту ${toEmail}`)
    alert(`ну или еще нет...`)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles["subscribe-section"]}
      >
        <h1 className="text-lg">Узнайте первым о новинках</h1>
        <input
          type="email"
          {...register("email", {
            required: "Поле Email является обязательным",
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Формат Email: test@gmail.com",
            },
          })}
          placeholder="test@mail.com"
          className={styles["subscribe-section__input"]}
        />
        {errors?.email && (
          <p className="text-error text-xs">* {errors.email.message}</p>
        )}
        <div
          className={styles["app-tooltip"]}
          data-tip="* Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих
          персональных данных и ознакомлен(а) с условиями конфиденциальности."
        >
          <button type="submit" className={styles["subscribe-section__btn"]}>
            Подписаться
          </button>
        </div>

        {/* убрано из эстетических соображений */}
        {/* текст перенесен в tooltip сверху */}
        {/* <p className="text-justify text-gray-500 opacity-60 max-w-xs text-xs">
          * Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих
          персональных данных и ознакомлен(а) с условиями конфиденциальности.
        </p> */}
      </form>

      <div className="chat chat-start mx-10 -mt-10 mb-10">
        <div className="chat-bubble chat-bubble-primary">
          Вам новое интересное предложение!
        </div>
      </div>
    </>
  )
}
