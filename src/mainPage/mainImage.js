import React from "react";
function MainImage() {
  return (
    <div className="text-white">
      <section className="relative">
        <img src={require("../images/hero-1.jpg")} alt="image" />
        <div className="absolute top-0 right-0 mr-[15rem] mt-[20rem]">
          <h1 className="font-bold text-2xl mb-5">Shape Your Body</h1>
          <h1 className="font-bold text-6xl mb-3">
            BE <span className="text-orange-700">STRONG</span>
          </h1>
          <h1 className="font-bold text-6xl">TRAIN HARD</h1>
        </div>
      </section>
    </div>
  );
}

export default MainImage;
