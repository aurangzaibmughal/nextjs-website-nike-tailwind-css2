"use client";

import React, { useState } from "react";
import Link from "next/link"; // for server-side routing
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi"; // Hamburger icon
import { MdClose } from "react-icons/md"; // close icon

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // toggle menu Open/close
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // close menu
  };

  return (
    <header className="bg-[#B9FF66] text-blue-950 py-5 flex justify-between items-center px-10 relative z-10">
      <h1 className="text-3xl font-bold pl-5">NIKE</h1>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex gap-10 text-blue-950 font-bold">
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/about" onClick={closeMenu}>About</Link>
        <Link href="/shoes" onClick={closeMenu}>Shoes</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
        <FaShoppingCart className="text-blue-950 text-2xl" />
      </nav>

      {/* Mobile Navbar (Hamburger Menu) */}
      <div className="md:hidden flex items-center">
        <GiHamburgerMenu
          className=" text-blue-950 cursor-pointer"
          onClick={toggleMenu}
        />
      </div>
      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? `block` : `hidden`
        } absolute top-0 left-0 w-full bg-[#B9FF66] p-5 md:hidden z-20`}
      >
        {/* close botton */}
        <div className="flex justify-end">
          <MdClose
            className="text-3xl cursor-pointer text-blue-950"
            onClick={toggleMenu}
          />
        </div>

        <nav className="flex flex-row items-center gap-3 bg-[#B9FF66] text-blue-950 font-bold">
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/about" onClick={closeMenu}>About</Link>
          <Link href="/shoes" onClick={closeMenu}>Shoes</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
          <FaShoppingCart className="text-black text-xl" />
        </nav>
      </div>
    </header>
  );
};

export default Header;

