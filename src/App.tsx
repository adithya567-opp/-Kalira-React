import React, { useEffect, useState } from "react"

import "./App.scss"

function App() {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    setAppIsReady(true)
  }, [])

  if (!appIsReady) return null

  return (
    <>
      <h1>JSX</h1>
    </>
  )
}

export default App
