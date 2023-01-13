import React from "react"

import { useAppDispatch, useAppSelector } from "../app/hooks"
import { ProductHorizontal } from "../components"
import { removeFromCart } from "../features/cartSlice"
import { IProduct } from "../features/products/productsApi"

// export interface ICartPageProps {}

export function CartPage() {
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.cart.cart)

  const handleDeleteProduct = (product: IProduct) => {
    dispatch(removeFromCart(product))
  }

  return (
    <div>
      <div className="grid place-content-center sm:flex sm:flex-col">
        {products.map((product) => (
          <ProductHorizontal
            key={product.id}
            product={product}
            handleDeleteProduct={handleDeleteProduct}
          />
        ))}
      </div>
      <div className="grid place-content-center">
        <h1 className="text-xl">Оформление заказа</h1>
        <form
          action=""
          onSubmit={() => {
            return
          }}
        >
          <section>
            <label>
              <p>Персональные данные</p>
              <input type="text" placeholder="Иванов" />
              <input type="text" placeholder="Иван" />
            </label>
          </section>
          <section>
            <label>
              <p>Способ доставки</p>
              <label>
                <input type="radio" name="delivery_type" value="Самовывоз" />
                <span>Самовывоз</span>
              </label>
              <label>
                <input type="radio" name="delivery_type" value="Почта России" />
                <span>Почта России</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="delivery_type"
                  value="Транспортная служба"
                />
                <span>Транспортная служба</span>
              </label>
            </label>
          </section>
          <section>
            <label>
              <p> Адрес доставки</p>
              <input type="text" placeholder="Город" />
              <input type="number" placeholder="Отделение почты" />
            </label>
          </section>
          <section>
            <label>
              <p>Способ оплаты</p>
              <label>
                <input type="radio" name="delivery_type" value="Самовывоз" />
                <span>Денежным переводом (Visa, MasterCard)</span>
              </label>
              <label>
                <input type="radio" name="delivery_type" value="Почта России" />
                <span>Отложенным платежем в отделении почты</span>
              </label>
            </label>
          </section>
        </form>
      </div>
    </div>
  )
}
