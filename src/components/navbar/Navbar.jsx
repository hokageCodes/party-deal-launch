import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const pathname = window.location.pathname;
    const bgColor = isScrolled ? "bg-[#f9f9f9]" : "bg-[#f9f9f9]";
    const navHeight = "h-[12vh]";
    const navLinks = ["Home", "Bookings", "Company"];

    return (
        <motion.nav
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`bg-charcoal fixed top-0 left-0 w-full ${bgColor} ${navHeight} shadow-sm z-50 flex items-center`}
        >
            <div className="container mx-auto flex items-center justify-between px-4 md:px-8 h-full">
                {/* Logo */}
                <a
                    href="/"
                    aria-label="Navigate to Home Page"
                    className="flex items-center h-full relative z-50"
                >
                    <div className="relative h-full max-h-full">
                        <img
                            src={
                                isOpen
                                    ? "/assets/img/party-deal-logo.png"
                                    : isScrolled
                                    ? "/assets/img/party-deal-logo.png"
                                    : "/assets/img/party-deal-logo.png"
                            }
                            alt="Logo"
                            className="h-64 mt-[-85px] md:ml-[-48] ml-[-50px] object-contain"
                        />
                    </div>
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-10 text-2xl font-satoshi capitalize tracking-wide h-full items-center">
                    {navLinks.map((item) => {
                        const isActive =
                            pathname === `/${item.toLowerCase()}` ||
                            (item === "Home" && pathname === "/");
                        return (
                            <li key={item} className="relative">
                                <a
                                    href={`/${item.toLowerCase()}`}
                                    className={`text-white transition-all duration-500 ease-in-out ${
                                        isActive
                                            ? "underline text-yellow"
                                            : "hover:underline hover:text-yellow"
                                    }`}
                                    aria-label={`Navigate to ${item} Page`}
                                >
                                    {item}
                                </a>
                                {isActive && isOpen && (
                                    <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-yellow rounded"></span>
                                )}
                                {isActive && !isOpen && (
                                    <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-red rounded"></span>
                                )}
                            </li>
                        );
                    })}
                </ul>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-4xl focus:outline-none z-50"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Mobile Menu"
                >
                    {isOpen ? <FiX className="text-yellow" /> : <FiMenu className="text-yellow" />}
                </button>

                {/* Mobile Dropdown Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="fixed inset-0 bg-charcoal text-white flex flex-col justify-center items-center space-y-8 z-40"
                        >
                            {navLinks.map((item) => {
                                const isActive =
                                    pathname === `/${item.toLowerCase()}` ||
                                    (item === "Home" && pathname === "/");
                                return (
                                    <a
                                        key={item}
                                        href={`/${item.toLowerCase()}`}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-6xl transition-all duration-500 ease-in-out ${
                                            isActive
                                                ? "text-yellow underline"
                                                : "hover:text-yellow hover:underline"
                                        }`}
                                        aria-label={`Navigate to ${item} Page`}
                                    >
                                        {item}
                                    </a>
                                );
                            })}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}
