import { Link } from "react-router-dom";
import { BsBookshelf, BsMenuButtonWide } from "react-icons/bs";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { motion as m } from "framer-motion";

const MainLayout = ({ children }) => {
  let Links = [
    { name: "Naslovna", link: "/" },
    { name: "Proizvodi", link: "/Products" },
    { name: "Kontakt", link: "/Contact" },
  ];
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header>
        <div className="shadow-md w-full fixed  top-0 left-0">
          <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
            <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
              <BsBookshelf className="w-7 h-7 text-amber-800" />
              <Link to="/" class="text-amber-800 font-pop">
                SVET POLICA
              </Link>
            </div>
            <div
              onClick={() => setIsOpen(!isOpen)}
              class="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
            >
              {isOpen ? (
                <IoMdClose class="text-amber-800" />
              ) : (
                <FaBars class="text-amber-800 duration-500" />
              )}
            </div>
            <ul
              class={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                isOpen ? "top-12" : "top-[-490px]"
              }`}
            >
              {Links.map((link) => (
                <m.li
                  whileTap={{ scale: 0.85 }}
                  className="md:ml-8 md:my-0 my-7 font-semibold"
                >
                  <a
                    href={link.link}
                    class="text-amber-800 hover:text-amber-600 duration-500 font-pop"
                  >
                    {link.name}
                  </a>
                </m.li>
              ))}
            </ul>
          </div>
        </div>
        <hr class="w-60 h-1 mx-auto my-12 bg-gray-200 border-2 rounded-md:my-10 dark:bg-gray-700" />
      </header>
      <main className="p-8">{children}</main>
      <footer class="justify-center text-amber-700 font-light  w-full fixed h-10 bottom-0">
        <p class="md:flex items-center justify-between bg-white py-4 md:px-8 px-4">
          &copy; Srdjan Ilic, {new Date().getFullYear()} My Website.
        </p>
      </footer>
    </div>
  );
};
export default MainLayout;
