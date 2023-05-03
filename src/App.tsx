import React, { useEffect, useState } from "react"

import "./App.scss"
import { Outlet } from "react-router"
import { Container, Navbar } from "./components"

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

export default App
