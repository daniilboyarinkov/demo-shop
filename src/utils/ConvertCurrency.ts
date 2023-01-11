export function ConvertCurrency(price: number) {
  return price.toLocaleString("ru", {
    style: "currency",
    currency: "RUB",
    currencyDisplay: "symbol",
    maximumFractionDigits: 0,
  })
}
