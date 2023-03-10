import { createSlice } from "@reduxjs/toolkit"

// пытаемся получить тему из локального хранилища браузера
// если там ничего нет, то пробуем получить тему из настроек системы
// если и настроек нет, то используем темную тему
const getTheme = () => {
  const theme = `${window?.localStorage?.getItem("theme")}`
  if (["light", "dark"].includes(theme)) {
    document.documentElement.dataset.theme = theme

    return theme
  }

  const userMedia = window.matchMedia("(prefers-color-scheme: light)")
  if (userMedia.matches) {
    document.documentElement.dataset.theme = "light"

    return "light"
  }

  document.documentElement.dataset.theme = "dark"
  return "dark"
}

const initialState = getTheme()

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    set: (_, action) => {
      document.documentElement.dataset.theme = action.payload
      localStorage.setItem("theme", action.payload)

      return action.payload
    },
  },
})

export const { set } = themeSlice.actions

export default themeSlice.reducer
