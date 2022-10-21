/* eslint-disable camelcase */
import React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
)
