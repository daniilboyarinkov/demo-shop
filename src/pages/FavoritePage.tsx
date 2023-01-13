import React from "react"

import { useAppSelector } from "../app/hooks"
import { ProductSpace } from "../components"

// export interface IFavoritePageProps {}

export function FavoritePage() {
  const favorites = useAppSelector((state) => state.favorites.favorites)

  if (!favorites.length)
    return <div className="grid place-items-center">Ничего не добавлено</div>

  return (
    <div className="py-10">
      <h1 className="text-xl px-2 pb-4 md:px-10">Избранное</h1>
      <ProductSpace products={favorites} />
    </div>
  )
}
