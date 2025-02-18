import { useEffect, useRef, useState } from "react";
import logo from "../assets/Coat_of_Arms_of_Siroki_Brijeg.png";
import Close from "./icons/Close";
import Menu from "./icons/Menu";
import Globe from "./icons/Globe";
import { useTranslation } from "react-i18next";

const Navigation: React.FC = () => {
  const [t, i18next] = useTranslation();
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (language: string) => {
    i18next.changeLanguage(language);
    setDropdownOpen(false);
  };

  return (
    <header className="bg-white p-6 shadow-md">
      <nav className="mx-auto flex h-full max-w-7xl items-start justify-between">
        <div className="hover:text-sec flex h-full cursor-pointer items-center justify-center gap-2 transition-colors">
          <img
            src={logo}
            alt="Landmarks AR"
            className="h-8 w-8"
          />
          <h1 className="whitespace-nowrap text-xl">Landmarks AR</h1>
        </div>
        <div className="flex items-center md:hidden">
          <ul
            className={`mt-1 h-full items-center gap-4 pt-4 md:flex md:pt-0 ${sidebarOpened ? "flex flex-col" : "hidden"}`}>
            <li className="flex items-center">
              <a
                href="#"
                className="text-pri hover:text-sec transition duration-150">
                {t("navbar.home")}
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="#how-to-use"
                className="text-pri hover:text-sec transition duration-150">
                {t("navbar.how-to-use")}
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="#download"
                className="text-pri hover:text-sec transition duration-150">
                {t("navbar.download")}
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden items-center md:flex">
          <ul
            className={`mt-1 h-full items-center gap-4 pt-4 md:flex md:pt-0`}>
            <li className="flex items-center">
              <a
                href="#"
                className="text-pri hover:text-sec transition duration-150">
                {t("navbar.home")}
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="#how-to-use"
                className="text-pri hover:text-sec transition duration-150">
                {t("navbar.how-to-use")}
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="#download"
                className="text-pri hover:text-sec transition duration-150">
                {t("navbar.download")}
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="#FAQ"
                className="text-pri hover:text-sec transition duration-150">
                {t("navbar.about")}
              </a>
            </li>
          </ul>
        </div>
        <div className="text-sec mt-1 hidden md:flex items-center justify-center md:mb-0">
        <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center">
            <Globe />
          </button>
          <select
            className="hover:text-sec/80 flex cursor-pointer items-center justify-center"
            value={i18next.language}
            onChange={e => handleLanguageChange(e.target.value)}>
            <option value="en">English</option>
            <option value="hr">Hrvatski</option>
          </select>
        </div>
        <div className="flex md:hidden text-sec ">
        <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center">
            <Globe />
          </button>
          
          <div className="relative" ref={dropdownRef}>
          {dropdownOpen && (
            <ul className="z-10 absolute mt-2 bg-white shadow-lg rounded-lg text-sec py-2 -translate-x-28 translate-y-4">
              <li>
                <button
                  className="px-4 py-2 text-left w-full hover:bg-gray-100"
                  onClick={() => handleLanguageChange("en")}>
                  English
                </button>
              </li>
              <li>
                <button
                  className="px-4 py-2 text-left w-full hover:bg-gray-100"
                  onClick={() => handleLanguageChange("hr")}>
                  Hrvatski
                </button>
              </li>
            </ul>
          )}</div>
          
          <div className="flex md:hidden">
            <button
              className="bg-sec hover:bg-pri rounded px-3 ml-2 py-1 text-white transition"
              onClick={() => setSidebarOpened(!sidebarOpened)}>
              {sidebarOpened ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
