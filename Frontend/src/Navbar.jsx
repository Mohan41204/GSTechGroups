import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GSTechLogo from "./GSTechLogo"; // ✅ Import your logo component

const Navbar = ({
  homeRef,
  aboutRef,
  servicesRef,
  whyusRef,
  pastExpRef,
  contactRef,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const navItems = [
    { name: "Home", ref: homeRef },
    { name: "About Us", ref: aboutRef },
    { name: "Services", ref: servicesRef },
    { name: "Why Choose", ref: whyusRef },
    { name: "Past Performance", ref: pastExpRef },
    { name: "Contact", ref: contactRef },
  ];

  const scrollTo = (ref, name) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
    setActive(name);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-blue-200 shadow-md px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* ✅ Logo Component */}
        <div
          className="cursor-pointer flex items-center"
          onClick={() => scrollTo(homeRef, "Home")}
        >
          <GSTechLogo className="h-12 w-auto" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-3">
          {navItems.map((item, i) => (
            <button
              key={i}
              onClick={() => scrollTo(item.ref, item.name)}
              className={`px-5 py-2 text-sm rounded-lg transition-all duration-300
                ${
                  active === item.name
                    ? "text-blue-600 bg-blue-100 border border-blue-300"
                    : "text-gray-800 hover:bg-blue-50"
                }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-3 rounded-lg bg-blue-50 text-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.div
            animate={menuOpen ? { rotate: 45 } : { rotate: 0 }}
            className="w-6 h-0.5 bg-current relative"
          >
            <motion.div
              animate={menuOpen ? { opacity: 0 } : { opacity: 1, y: -6 }}
              className="absolute w-full h-0.5 bg-current"
            />
            <motion.div
              animate={menuOpen ? { opacity: 0 } : { opacity: 1, y: 6 }}
              className="absolute w-full h-0.5 bg-current"
            />
          </motion.div>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mt-3 bg-white/95 backdrop-blur-xl rounded-xl border border-blue-200 shadow-xl"
          >
            <div className="py-3">
              {navItems.map((item, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(item.ref, item.name)}
                  className={`w-full text-left px-6 py-4 text-sm border-b last:border-none transition-all
                    ${
                      active === item.name
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-700 hover:bg-blue-50"
                    }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
