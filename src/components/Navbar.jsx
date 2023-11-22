import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Assuming you're using React Router
import { useTranslation } from "react-i18next";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("/");
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState("");

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    const updateCurrentUrl = () => {
      setCurrentUrl(location.pathname);
    };

    window.addEventListener("scroll", handleScroll);
    updateCurrentUrl(); // Set initial URL

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const isNavLinkActive = (path) => {
    return currentUrl === path;
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white shadow" : "bg-transparent shadow-none"
      } dark:bg-gray-800`}
    >
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <a href="/">
            <img
              className="w-auto h-10 sm:h-12 hover:bg-white hover:rounded-md"
              src="logo.png"
              alt="Shri Swami Krupa Poultry Farm"
              title="Shri Swami Krupa Poultry Farm"
            />
          </a>

          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500 dark:text-gray-200 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
            isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
          }`}
        >
          <div
            className={`flex flex-col md:flex-row md:mx-6 rounded-md ${
              isScrolled
                ? ""
                : "md:bg-yellow-500 md:text-white md:p-2 md:shadow-md ease-in-out"
            }`}
          >
            <a
              className={`my-2 text-gray-700 transition-colors duration-300  transform dark:text-gray-200 ${
                isNavLinkActive("/") ? "text-blue-500 dark:text-blue-400" : ""
              } md:mx-4 md:my-0`}
              href="/"
            >
              {t("Home")}
            </a>
            <a
              className={`my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 ${
                isNavLinkActive("/contact")
                  ? "text-blue-500 dark:text-blue-400"
                  : ""
              } md:mx-4 md:my-0`}
              href="/contact"
            >
              {t("Contact")}
            </a>
            <a
              className={`my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 ${
                isNavLinkActive("/about")
                  ? "text-blue-500 dark:text-blue-400"
                  : ""
              } md:mx-4 md:my-0`}
              href="/about"
            >
              {t("About")}
            </a>

            <select
              value={selectedLanguage}
              onChange={(e) => changeLanguage(e.target.value)}
              className="md:mx-4 md:my-0 bg-transparent text-gray-700 shadow-none"
            >
              <option>{t("Language")}</option>
              <option value="MR">MR</option>
              <option value="EN">EN</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
