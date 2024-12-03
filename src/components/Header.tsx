"use client";

import React, { useState } from "react";
import Link from "next/link"; // for server-side routing
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi"; // Hamburger icon
import { MdClose } from "react-icons/md"; // close icon

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // toggle menu Open/close
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // close menu
  };

  return (
    <header className="bg-[#B9FF66] text-blue-950 py-5 flex justify-between">
      <h1 className="text-3xl font-bold pl-5">NIKE</h1>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex gap-8 text-blue-950 font-bold mr-5 md:items-center">
        <Link href="/" onClick={closeMenu}>
          Home
        </Link>
        <Link href="/about" onClick={closeMenu}>
          About
        </Link>
        <Link href="/shoes" onClick={closeMenu}>
          Shoes
        </Link>
        <Link href="/contact" onClick={closeMenu}>
          Contact
        </Link>
        <FaShoppingCart className="text-blue-950 text-3xl" />
      </nav>

      {/* Mobile Navbar (Hamburger Menu) */}
      <div className="md:hidden flex items-center">
        <GiHamburgerMenu
          className="text-3xl cursor-pointer text-blue-950"
          onClick={toggleMenu}
        />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 bg-[#B9FF66] w-full text-blue-950 flex flex-col">
          <MdClose
            className="text-blue-950 text-3xl cursor-pointer self-end"
            onClick={closeMenu}
          />
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/about" onClick={closeMenu}>
            About
          </Link>
          <Link href="/shoes" onClick={closeMenu}>
            Shoes
          </Link>
          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>
          <FaShoppingCart className="text-black text-xl" />
        </div>
      )}
    </header>
  );
};

export default Header;
