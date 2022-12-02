import React from "react";
import Context from "../context/Context";

export default function NotRegisteredUser() {
  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        return (
          <form onSubmit={activateAuth}>
            <button>Iniciar sesión</button>
          </form>
        );
      }}
    </Context.Consumer>
  );
}
