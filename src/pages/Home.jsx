import React from "react";

function Home() {
  return (
    <div className=" z-0">
      <div className="absolute flex justify-center md:justify-start items-center md:items-end w-full h-screen bg-black bg-opacity-40">
        <span className="text-white  w-[250px] md:w-[500px]  md:pl-16 md:pb-32 text-2xl md:text-4xl font-bold ">
          Welcome to the most innovative to-do list ever.
        </span>
      </div>
      <header className="h-screen">
        <video autoPlay loop muted className=" h-screen w-screen object-cover">
          <source src="src\static\BackgroundVideo.mp4" type="video/mp4" />
        </video>
      </header>
      <footer className="bg-black h-[400px]  text-white"></footer>
    </div>
  );
}

export default Home;
