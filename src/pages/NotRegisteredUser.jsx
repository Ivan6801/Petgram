import React from "react";
import Context from "../context/Context";
import { UserForm } from "../components/UserForm";

export default function NotRegisteredUser() {
  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        return (
          <>
            <UserForm title="Registrarse" onSubmit={activateAuth} />
            <UserForm title="Iniciar sesión" onSubmit={activateAuth} />
          </>
        );
      }}
    </Context.Consumer>
  );
}
