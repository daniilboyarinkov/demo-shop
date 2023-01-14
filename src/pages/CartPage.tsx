import React from "react"

import { useForm, SubmitHandler } from "react-hook-form"

import { useAppDispatch, useAppSelector } from "../app/hooks"
import { ProductHorizontal } from "../components"
import { removeFromCart } from "../features/cartSlice"
import { IProduct } from "../features/products/productsApi"
import { ConvertCurrency } from "../utils/ConvertCurrency"

// export interface ICartPageProps {}

interface IFormInput {
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()
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
              {...register("lastName", {
                required: "Поле Фамилия является обязательным",
              })}
              className="input input-bordered w-full max-w-xs"
              type="text"
              placeholder="Иванов"
            />
            {errors?.lastName && (
              <p className="text-error text-xs">* {errors.lastName.message}</p>
            )}
            <input
              {...register("firstName", {
                required: "Поле Имя является обязательным",
              })}
              className="input input-bordered w-full max-w-xs"
              type="text"
              placeholder="Иван"
            />
            {errors?.firstName && (
              <p className="text-error text-xs">* {errors.firstName.message}</p>
            )}
            <input
              {...register("email", {
                required: "Поле Email является обязательным",
                pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              })}
              className="input input-bordered w-full max-w-xs"
              type="email"
              placeholder="example@mail.ru"
            />
            {errors?.email && (
              <p className="text-error text-xs">* {errors.email.message}</p>
            )}
            <input
              {...register("phone", {
                required: "Поле Номер Телефона является обязательным",
                pattern: {
                  value:
                    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: "Формат номера телефона: +7 (999) 999 9999",
                },
              })}
              className="input input-bordered w-full max-w-xs"
              type="tel"
              placeholder="+7 (000) 000 0000"
            />
            {errors?.phone && (
              <p className="text-error text-xs">* {errors.phone.message}</p>
            )}
          </section>

          <section className="grid gap-2 p-4 border rounded-md border-base-300">
            <label className="label opacity-60">
              <span className="label-text ">Способ доставки</span>
            </label>
            <label className="label cursor-pointer">
              <span className="label-text">Самовывоз</span>
              <input
                {...register("deliveryType", {
                  required: "Необходимо указать способ доставки",
                })}
                className="radio radio-primary"
                type="radio"
                value="Самовывоз"
              />
            </label>
            <label className="label cursor-pointer">
              <span className="label-text">Почта России</span>
              <input
                {...register("deliveryType", {
                  required: "Необходимо указать способ доставки",
                })}
                className="radio radio-primary"
                type="radio"
                value="Почта России"
              />
            </label>
            <label className="label cursor-pointer">
              <span className="label-text">Транспортная служба</span>
              <input
                {...register("deliveryType", {
                  required: "Необходимо указать способ доставки",
                })}
                className="radio radio-primary"
                type="radio"
                value="Транспортная служба"
              />
            </label>
            {errors?.deliveryType && (
              <p className="text-error text-xs">
                * {errors?.deliveryType.message}
              </p>
            )}
          </section>

          <section className="grid gap-2 p-4 border rounded-md border-base-300">
            <label className="label opacity-60">
              <span className="label-text"> Адрес доставки</span>
            </label>
            <input
              {...register("addressTown", {
                required: "Необходимо указать Город Доставки",
              })}
              className="input input-bordered w-full max-w-xs"
              type="text"
              placeholder="Город"
            />
            {errors?.addressTown && (
              <p className="text-error text-xs">
                * {errors?.addressTown.message}
              </p>
            )}
            <input
              {...register("postCode", {
                required: "Необходимо указать Отделение Почты",
                pattern: { value: /\d{6}/, message: "Пример кода: 123456" },
              })}
              className="input input-bordered w-full max-w-xs"
              type="number"
              placeholder="Отделение почты"
            />
            {errors?.postCode && (
              <p className="text-error  text-xs">
                * {errors?.postCode.message}
              </p>
            )}
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
                {...register("paymentType", {
                  required: "Необходимо указать Способ Оплаты",
                })}
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
                {...register("paymentType", {
                  required: "Необходимо указать Способ Оплаты",
                })}
                className="radio radio-primary"
                type="radio"
                value="Почта России"
              />
            </label>
            {errors?.paymentType && (
              <p className="text-error text-xs">
                * {errors?.paymentType.message}
              </p>
            )}
          </section>

          <button className="btn btn-primary sm:col-span-2" type="submit">
            Оформить заказ
          </button>
        </form>
      </div>
    </div>
  )
}
