import React from "react"

// export interface IPaymentDeliveryPageProps {}

export function PaymentDeliveryPage() {
  return (
    <div>
      <h1 className="text-xl m-4">Оплата и доставка</h1>
      <div className="grid md:grid-cols-2 m-4">
        <div>
          <h2>Вы можете оплатить покупку одним из следующих способов:</h2>
          <ul className="px-10 py-2">
            <li className="list-decimal">Способ 1</li>
            <li className="list-decimal">Способ 2</li>
            <li className="list-decimal">Способ 3</li>
          </ul>
        </div>
        <div>
          <h2>Мы можем предложить несколько вариантов доставки:</h2>
          <ul className="px-10 py-2">
            <li className="list-decimal">Вариант 1</li>
            <li className="list-decimal">Вариант 2</li>
            <li className="list-decimal">Вариант 3</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
