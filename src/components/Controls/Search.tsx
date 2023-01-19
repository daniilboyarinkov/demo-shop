import React from "react"
import { DebounceInput } from "react-debounce-input"

import styles from "../../styles/Search.module.scss"
import { SearchSVG } from "../../svg/SearchSVG"

type Props = {
  query: string
  setQuery: (query: string) => void
}

export const Search = ({ query, setQuery }: Props) => {
  return (
    <div className={styles.search}>
      <div className={styles.search__input}>
        <DebounceInput
          debounceTimeout={300}
          placeholder="Search…"
          className="input input-bordered"
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setQuery(e?.target?.value)
          }}
        />
        <button className={styles.search__btn} onClick={() => setQuery(query)}>
          <SearchSVG />
        </button>
      </div>
    </div>
  )
}
