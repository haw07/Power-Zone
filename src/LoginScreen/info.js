import React from "react";
import { useState } from "react";

function Info() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section className="m-auto text-center text-orange-700">
      <h1 className="font-bold text-3xl mb-3">Welcome to Power Zone!</h1>
      <img
        width={"25%"}
        src={require("../images/logo.jpeg")}
        alt="image"
        className="block m-auto "
      />
      <div className="mb-5">
        <div className="mb-3"></div>
        <input
          className="w-auto bg-white text-white rounded p-2 focus-within:text-orange-700"
          type="email"
          id="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail((Prev) => e.target.value)}
        />
      </div>

      <div className="mb-5">
        <input
          className=" w-auto bg-white text-white rounded p-2  focus-within:text-orange-700"
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword((Prev) => e.target.value)}
        />
      </div>

      <div className="mb-5 font-bold text-3m text-center text-white">
        <button
          type="button"
          className="bg-orange-700 w-24 p-2 hover:bg-white hover:text-orange-700"
        >
          Log In
        </button>
      </div>

      <div className="mb-5 font-bold text-3m text-center">
        <a
          className="text-orange-700 hover:bg-orange-700 hover:text-white p-2"
          href="#"
        >
          Forgot your password?
        </a>
      </div>

      <div className="mb-5 font-bold text-3m text-center ">
        <a
          className="text-orange-700  hover:bg-orange-700 hover:text-white p-2"
          href="#"
        >
          Don't have an account?
        </a>
      </div>
    </section>
  );
}
export default Info;
