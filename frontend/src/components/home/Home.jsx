import React from "react"


import Dietss from "./Dietss/Dietss"
import Corousel from "./Corousel/Hero"

import Recent from "./recent/Recent"


const Home = () => {
  return (
    <>
      <Corousel />
      <Recent />
      <Dietss/>
    </>
  )
}

export default Home
