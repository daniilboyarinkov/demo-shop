import React from "react"

import { useForm, SubmitHandler } from "react-hook-form"

import { useAppDispatch, useAppSelector } from "../app/hooks"
import { ProductHorizontal } from "../components"
import { removeFromCart } from "../features/cartSlice"
import { IProduct } from "../features/products/productsApi"
import { ConvertCurrency } from "../utils/ConvertCurrency"

// export interface ICartPageProps {}

export interface IFormInput {
  lastName: string
  firstName: string
  email: string
  phone: string
  deliveryType: string
  addressTown: string
  postCode: string
  paymentType: string
}

export function CartPage() {
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.cart.cart)
  const total = useAppSelector((state) => state.cart.subtotal)

  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  const handleDeleteProduct = (product: IProduct) => {
    dispatch(removeFromCart(product))
  }

  return (
    <div>
      <h1 className="text-lg m-4">Ваш заказ</h1>
      <div className="grid place-content-center sm:flex sm:flex-col">
        {products.map((product) => (
          <ProductHorizontal
            key={product.id}
            product={product}
            handleDeleteProduct={handleDeleteProduct}
          />
        ))}
        <div className="flex flex-col sm:flex-row sm:justify-between p-4 sm:w-5/6 md:w-3/4 self-center">
          <div className="flex justify-between pb-4 sm:pb-0 gap-4 sm:w-5/6 font-bold text-2xl">
            <p>Итого:</p>
            <p>{ConvertCurrency(total)}</p>
          </div>
        </div>
      </div>
      <div className="grid place-content-center my-10 text-primary">
        <h1 className="text-xl text-center mb-4">Оформление заказа</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form-control w-full max-w-xl grid sm:grid-cols-2 gap-6"
        >
          <section className="grid gap-2 p-4 border rounded-md border-base-300">
            <label className="label">
              <span className="label-text opacity-60">Персональные данные</span>
            </label>
            <input
              {...register("lastName")}
              className="input input-bordered w-full max-w-xs"
              type="text"
              placeholder="Иванов"
            />
            <input
              {...register("firstName")}
              className="input input-bordered w-full max-w-xs"
              type="text"
              placeholder="Иван"
            />
            <input
              {...register("email")}
              className="input input-bordered w-full max-w-xs"
              type="email"
              placeholder="example@mail.ru"
            />
            <input
              {...register("phone")}
              className="input input-bordered w-full max-w-xs"
              type="tel"
              placeholder="+7 (000) 000-00-00"
            />
          </section>

          <section className="grid gap-2 p-4 border rounded-md border-base-300">
            <label className="label opacity-60">
              <span className="label-text ">Способ доставки</span>
            </label>
            <label className="label cursor-pointer">
              <span className="label-text">Самовывоз</span>
              <input
                {...register("deliveryType")}
                className="radio radio-primary"
                type="radio"
                value="Самовывоз"
              />
            </label>
            <label className="label cursor-pointer">
              <span className="label-text">Почта России</span>
              <input
                {...register("deliveryType")}
                className="radio radio-primary"
                type="radio"
                value="Почта России"
              />
            </label>
            <label className="label cursor-pointer">
              <span className="label-text">Транспортная служба</span>
              <input
                {...register("deliveryType")}
                className="radio radio-primary"
                type="radio"
                value="Транспортная служба"
              />
            </label>
          </section>

          <section className="grid gap-2 p-4 border rounded-md border-base-300">
            <label className="label opacity-60">
              <span className="label-text"> Адрес доставки</span>
            </label>
            <input
              {...register("addressTown")}
              className="input input-bordered w-full max-w-xs"
              type="text"
              placeholder="Город"
            />
            <input
              {...register("postCode")}
              className="input input-bordered w-full max-w-xs"
              type="number"
              placeholder="Отделение почты"
            />
          </section>

          <section className="grid gap-2 p-4 border rounded-md border-base-300">
            <label className="label opacity-60">
              <span className="label-text">Способ оплаты</span>
            </label>
            <label className="label cursor-pointer">
              <span className="label-text">
                Денежным переводом (Visa, MasterCard)
              </span>
              <input
                {...register("paymentType")}
                className="radio radio-primary"
                type="radio"
                value="Самовывоз"
              />
            </label>
            <label className="label cursor-pointer">
              <span className="label-text">
                Отложенным платежем в отделении почты
              </span>
              <input
                {...register("paymentType")}
                className="radio radio-primary"
                type="radio"
                value="Почта России"
              />
            </label>
          </section>

          <button className="btn btn-primary sm:col-span-2" type="submit">
            Оформить заказ
          </button>
        </form>
      </div>
    </div>
  )
}
