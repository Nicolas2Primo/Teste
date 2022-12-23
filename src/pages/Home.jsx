import React from "react";

function Home() {
  return (
    <div className=" z-0">
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
