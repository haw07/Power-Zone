import React from "react";
import "../index.css";
function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <section className="flex justify-between m-5">
        <div className="mr-5 w-64">
          <img
            src={require("../images/logo.jpeg")}
            alt="image"
            className="h-32 block m-auto mb-2"
          />
          <p className="ml-4">
            Power Zone is a gym for athletics. Through this website, you can
            register for classes, take advice from nutritionist and much more!
          </p>
        </div>

        <div className="mr-5">
          <h1 className="font-bold text-3xl">Useful Links</h1>
          <ul className="p-5 text-center">
            <li className="mb-3">
              <a href="#">About</a>
            </li>
            <li className="mb-3">
              <a href="#">Blog</a>
            </li>
            <li className="mb-3">
              <a href="#">Classes</a>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="font-bold text-3xl">Support</h1>
          <ul className="p-5 text-center">
            <li className="mb-3">
              <a href="#">login</a>
            </li>
            <li className="mb-3">
              <a href="#">My Account</a>
            </li>
            <li className="mb-3">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </section>

      <hr />

      <section className="text-center m-3">
        <p>Copywrites @ 2023 | Power Zone | CMPS 271</p>
      </section>
    </footer>
  );
}

export default Footer;
