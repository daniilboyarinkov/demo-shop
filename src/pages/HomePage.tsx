import React from "react"

import delay from "../temp/delay"

// export interface IHomePageProps {}

export async function loader() {
  await delay(300)
  return {}
}

export function HomePage() {
  return <>Hero Categories Subscribe</>
}
