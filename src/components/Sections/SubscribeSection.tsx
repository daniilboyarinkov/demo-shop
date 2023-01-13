import React from "react"

// export interface ISubscribeProps {}

export function SubscribeSection() {
  return (
    <>
      <div className="grid place-items-center gap-6 my-[80px] text-center">
        <h1 className="text-lg">Узнайте первым о новинках</h1>
        <input
          type="text"
          placeholder="urawesome@mail.com"
          className="input input-bordered input-primary w-full max-w-[256px]"
        />
        <button className="btn btn-wide btn-primary">Подписаться</button>
        <p className="text-justify text-gray-500 opacity-60 max-w-xs text-xs">
          * Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих
          персональных данных и ознакомлен(а) с условиями конфиденциальности.
        </p>
      </div>
      <div className="chat chat-start mx-10 -mt-10 mb-10">
        <div className="chat-bubble chat-bubble-primary">
          Вам новое интересное предложение!
        </div>
      </div>
    </>
  )
}
