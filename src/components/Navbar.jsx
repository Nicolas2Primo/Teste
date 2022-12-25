import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  const { user, setUser } = useContext(AuthContext);

  return (
    <div className="fixed w-full h-[70px] flex justify-between items-center text-white px-8 md:px-16 pt-4 z-10">
      <Link to="/" className="font-bold text-[25px]">
        MenmoList
      </Link>

      <div className="hidden md:flex md:gap-10 text-[16px]">
        <Link to="/create" className="font-semibold">
          Create List
        </Link>

        <Link
          to="/login"
          className={`font-semibold ${!!user ? "hidden" : "flex"}`}
        >
          Login
        </Link>

        <Link to="/about" className="font-semibold">
          About
        </Link>

        <Link to="/login" className="font-semibold">
          <FaUserCircle size={25} className={`${!!user ? "flex" : "hidden"}`} />
        </Link>
      </div>

      <button className="md:hidden">Menu</button>
    </div>
  );
}

export default Navbar;
