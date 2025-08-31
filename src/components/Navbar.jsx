import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/100 backdrop-blur-md p-2 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="#landing" className="text-white font-extrabold text-xl tracking-widest">
          CON<span className="text-blue-400">++</span>
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2 rounded-md z-50 hover:text-blue-400 hover:bg-gray-800/50 transition"
        >
          <svg className="h-6 w-6" stroke="currentColor" viewBox="0 0 20 20">
            {isOpen ? (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            ) : (
              <path d="M3 5h14M3 10h14M3 15h14" />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <ul className="hidden lg:flex gap-8 text-white text-sm">
          <li><a href="#landing" className="hover:text-blue-400 transition">OVERVIEW</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition">PORTFOLIO</a></li>
          <li><a href="#tools" className="hover:text-blue-400 transition">TECH STACK</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition">CONNECT</a></li>
          {/* Download Resume Button */}
          <li>
            <a
              href="/public/Christian_CV.pdf"
              download
              className="hover:bg-blue-400 text-white py-2 px-4 rounded-md border-2 border-blue-400 hover:text-gray-900 transition"
            >
              DOWNLOAD CV
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <ul className="lg:hidden flex flex-col gap-4 px-6 py-4">
          <li><a href="#landing" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>OVERVIEW</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>PORTFOLIO</a></li>
          <li><a href="#tools" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>TECH STACK</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>CONNECT</a></li>
          {/* Mobile download Resume Button */}
          <li>
            <a
              href="/public/Christian_CV.pdf"
              download
              className="hover:bg-blue-400 text-white py-2 px-4 rounded-md border-2 border-blue-400 hover:text-gray-900 transition"
              onClick={() => setIsOpen(false)}
            >
              DOWNLOAD CV
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
