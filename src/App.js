import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import AppRouter from './router/AppRouter'
import Logo from './components/Logo'

export default function App () {
  return (
    <>
      <GlobalStyles />
      <Logo />
      <AppRouter />
    </>
  )
}
