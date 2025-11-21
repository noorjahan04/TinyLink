import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const loc = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-md">
            SL
          </div>
          <div className="text-xl font-semibold tracking-wide">ShortLink</div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-4">
          <Link
            to="/dashboard"
            className={`px-4 py-2 rounded-md transition-all ${
              loc.pathname === "/dashboard"
                ? "bg-indigo-50 text-indigo-600"
                : "text-gray-700 hover:bg-indigo-50"
            }`}
          >
            Dashboard
          </Link>

          <Link
            to="/add"
            className="px-4 py-2 bg-gradient-to-r from-pink-500 to-indigo-600 text-white rounded-md shadow-md hover:scale-[1.05] transition-transform"
          >
            Add Link
          </Link>
        </nav>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-sm absolute w-full transition-all overflow-hidden ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-4 pb-4 gap-2">

          <Link
            to="/dashboard"
            onClick={() => setOpen(false)}
            className={`px-4 py-2 rounded-md ${
              loc.pathname === "/dashboard"
                ? "bg-indigo-50 text-indigo-600"
                : "text-gray-700 hover:bg-indigo-50"
            }`}
          >
            Dashboard
          </Link>

          <Link
            to="/add"
            onClick={() => setOpen(false)}
            className="px-4 py-2 bg-gradient-to-r from-pink-500 to-indigo-600 text-white rounded-md shadow-md"
          >
            Add Link
          </Link>

        </nav>
      </div>
    </header>
  );
}
