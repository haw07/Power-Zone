import React from "react";
import Footer from "../Footer";
import MainImage from "./mainImage";
function MainPage() {
  return (
    <div className="relative bg-black">
      <MainImage />
      <Footer className="absolute bottom-0" />
    </div>
  );
}

export default MainPage;
