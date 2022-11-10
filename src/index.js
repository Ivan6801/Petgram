/* eslint-disable camelcase */
import React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const root = ReactDOM.createRoot(document.getElementById('app'))

const client = new ApolloClient({
  uri: 'https://petgram-serve-jorge-vicuna.vercel.app/graphql'
})

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
