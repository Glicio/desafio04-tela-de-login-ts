import React, { useEffect, useReducer, useState } from "react";
import "./App.css";

function App() {
  const emailRegex = new RegExp(/\w+@\w+\.\w+/);
  const [isValid, setValid] = useState({ email: false, password: false });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (password.length < 8) {
      setValid((old) => {
        return { ...old, password: false };
      });
    } else {
      setValid((old) => {
        return { ...old, password: true };
      });
    }
    if (email.length < 5 || !emailRegex.test(email)) {
      setValid((old) => {
        return { ...old, email: false };
      });
    } else {
      setValid((old) => {
        return { ...old, email: true };
      });
    }
  }, [email, password]);

  return (
    <div className="App bg-purple-700 w-screen h-screen flex justify-center items-center p-4">
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="w-96 bg-white rounded-xl p-4 flex flex-col"
      >
        <span className="text-purple-700 text-3xl font-bold mb-4">Login</span>
        <div className="inputs flex flex-col px-2 gap-3">
          <span className="h-3 text-red-500 text-xs">
            {!isValid.email ? "Email inválido" : null}
          </span>
          <input
            type="email"
            name="email"
            id="email"
            className="border border-purple-700 rounded-2xl px-3 py-1"
            placeholder="E-Mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <span className="h-3 text-red-500 text-xs">
            {!isValid.password ? "Senha inválida" : null}
          </span>
          <input
            type="password"
            name="password"
            id="password"
            className="border border-purple-700 rounded-2xl px-3 py-1"
            placeholder="Senha"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="submit"
            value="Entrar"
            onClick={() => {
              alert("LOGIN!");
            }}
            disabled={isValid.email && isValid.password ? false : true}
            className={`border ${
              isValid.email && isValid.password
                ? ""
                : "bg-purple-500 text-black"
            } bg-purple-700 rounded-2xl text-white p-1 cursor-pointer hover:bg-purple-500 as`}
          />
        </div>
      </form>
    </div>
  );
}

export default App;
