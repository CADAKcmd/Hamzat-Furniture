import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <section className=" w-full overflow-hidden">
      <div className="fixed top-0 left-0 w-full z-50">
        {/* Background Effect */}
      
        {/* Navbar */}
        <nav className="bg-black h-[80px] w-full flex justify-between items-center px-10 lg:px-16 rounded-md ">
          {/* Logo */}
          <div className="text-white text-2xl font-bold">Hamzat Furniture</div>

          {/* Hamburger Button (Mobile) */}
          <button
            className="text-white text-2xl lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex text-white justify-between space-x-6">
            <Link to="/"><li>Home</li></Link>
            <Link to="/About"><li>About Us</li></Link>
            <Link to="/Services"><li>Services</li></Link>
            <Link to="/Gallery"><li>Gallery</li></Link>
            <Link to="/Shop"><li>Shop</li></Link>
          </ul>

          {/* Desktop Contact + Button */}
          <div className="hidden lg:flex items-center gap-6">
            <h1 className="text-2xl text-white"></h1>
            <button
              className="bg-red-900 h-14 w-24 rounded-md text-white hover:bg-red-700 transition-all"
              onClick={() => navigate("/LetTalk")}
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute top-[80px] left-0 w-full bg-opacity-70 backdrop-blur-md flex flex-col p-4 space-y-5 lg:hidden transition-all duration-300">
              <ul className="flex flex-col space-y-3 text-white text-lg">
                <Link to="/" onClick={() => setIsOpen(false)}><li>Home</li></Link>
                <Link to="/About" onClick={() => setIsOpen(false)}><li>About Us</li></Link>
                <Link to="/Services" onClick={() => setIsOpen(false)}><li>Services</li></Link>
                <Link to="/Gallery" onClick={() => setIsOpen(false)}><li>Gallery</li></Link>
                <Link to="/Shop" onClick={() => setIsOpen(false)}><li>Shop</li></Link>
              </ul>
              
              {/* Mobile Contact + Button */}
              <div className="flex flex-col items-center gap-4">
                <h1 className="text-2xl text-white">07072625562</h1>
                <button
                  className="bg-red-900 h-14 w-24 rounded-md text-white hover:bg-red-700 transition-all"
                  onClick={() => { 
                    navigate("/LetTalk");
                    setIsOpen(false);
                  }}
                >
                  Let's Talk
                </button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
