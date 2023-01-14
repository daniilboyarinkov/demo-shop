import React from "react"
import { DebounceInput } from "react-debounce-input"

type Props = {
  query: string
  setQuery: (query: string) => void
}

export const Search = ({ query, setQuery }: Props) => {
  return (
    <div className="form-control mr-6 md:mr-0 self-start">
      <div className="input-group">
        <DebounceInput
          debounceTimeout={300}
          placeholder="Search…"
          className="input input-bordered"
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setQuery(e?.target?.value)
          }}
        />
        <button className="btn btn-square" onClick={() => setQuery(query)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
