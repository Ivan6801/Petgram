import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "react-apollo";
import Context from "./context/Context";

const root = ReactDOM.createRoot(document.getElementById("app"));

const client = new ApolloClient({
  uri: "https://petgram-serve-jorge-vicuna.vercel.app/graphql",
  cache: new InMemoryCache(),
});

root.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>
);
