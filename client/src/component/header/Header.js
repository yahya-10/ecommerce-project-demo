import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { logOut } from "../../utils";
import comunikcrmLogo from "../../assets/comunikcrm.png";
import LangDropDown from "./LangDropDown";

import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
// import { MoonIcon, SunIcon } from "@heroicons/react/solid";
// import { ShoppingCartIcon } from "@heroicons/react/solid";
import { useTranslation } from "react-i18next";
import { avatarCreator } from "../../utils/CreateAvatar";
import { getRondomColor } from "../../utils/GetRandomColor";

/**
 * @public
 * This a navbar component where user can navigate through different pages.
 * @param {Function} isLoggedIn - Certain UI will load based on the returned value of
 * this function
 */

const Header = ({ isLoggedIn, storedTheme, setTheme }) => {
  const { t } = useTranslation();

  const navigation = [
    { name: t("header.nav_solution"), href: "/" },
    { name: t("header.nav_store"), href: "/store" },
    { name: t("header.nav_about_us"), href: "/about" },
    { name: t("header.nav_support"), href: "/contact" },
  ];

  // console.log(storedTheme);

  return (
    <div>
      <div
        className={`${
          storedTheme === "light"
            ? "relative bg-gray-50 overflow-hidden"
            : "relative bg-gray-800 overflow-hidden"
        }`}
      >
        <div
          className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
          aria-hidden="true"
        >
          <div className="relative h-full max-w-7xl mx-auto">
            <svg
              className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    // className="text-gray-200"
                    className={`${
                      storedTheme === "light"
                        ? "text-gray-200"
                        : "text-gray-800"
                    }`}
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className={`${
                      storedTheme === "light"
                        ? "text-gray-200"
                        : "text-gray-800"
                    }`}
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
              />
            </svg>
          </div>
        </div>

        <div className="relative pt-6 pb-16 sm:pb-24">
          <Popover>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <nav
                className="relative flex items-center justify-between sm:h-10 md:justify-center"
                aria-label="Global"
              >
                <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <Link to="/">
                      <span className="sr-only">Workflow</span>
                      <img
                        className="h-8 w-auto sm:h-10"
                        src={comunikcrmLogo}
                        alt="comunik_logo"
                      />
                    </Link>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:space-x-10">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      // className="font-medium text-gray-500 hover:text-gray-900"
                      className={`${
                        storedTheme === "light"
                          ? "font-medium text-gray-500 hover:text-gray-900"
                          : "font-medium text-gray-100 hover:text-gray-400"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                  {isLoggedIn() ? (
                    <div className="flex items-center space-x-4 lg:space-x-6">
                      <span
                        className="inline-flex rounded-md shadow"
                        onClick={logOut}
                      >
                        <Link
                          to="/login"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600"
                        >
                          {t("header.log_out")}
                        </Link>
                      </span>
                      <Link to="/profile">
                        <span className="inline-block relative">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={avatarCreator(
                              500,
                              "Yahya Akermi",
                              getRondomColor()
                            )}
                            alt=""
                          />
                          <span className="absolute top-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400" />
                        </span>
                      </Link>
                    </div>
                  ) : (
                    <span className="inline-flex rounded-md shadow">
                      <Link
                        to="/login"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600"
                      >
                        {t("header.log_in")}
                      </Link>
                    </span>
                  )}
                  <LangDropDown storedTheme={storedTheme} />
                  {/* {storedTheme === "dark" ? (
                    <SunIcon
                      style={{ color: "#fcec05" }}
                      className="h-6 w-6 ml-3"
                      aria-hidden="true"
                      onClick={() => setTheme("light")}
                    />
                  ) : (
                    <MoonIcon
                      style={{ color: "#2b313b" }}
                      className="h-6 w-6 ml-3"
                      aria-hidden="true"
                      onClick={() => setTheme("dark")}
                    />
                  )} */}

                  {/* Shopping cart icon */}
                  {/* <div className="inline-flex rounded-md shadow">
                    <Link
                      to="/store/cart"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
                    >
                      <span className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
                        <ShoppingCartIcon
                          className="flex-shrink-0 h-5 w-5"
                          aria-hidden="true"
                        />
                      </span> */}
                  {/* Display the number of items in the cart */}
                  {/* <span>{listItems.length}</span>
                    </Link>
                  </div> */}
                </div>
              </nav>
            </div>
            <Transition
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className=" top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center space-between">
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                          >
                            <span className="ml-3 text-base font-medium text-gray-900">
                              {item.name}
                            </span>
                          </a>
                        ))}
                        <LangDropDown />
                        {/* <MoonIcon className="h-6 w-6" aria-hidden="true" /> */}
                      </nav>
                    </div>
                  </div>
                  <div className="py-6 px-5 space-y-6">
                    {isLoggedIn() ? (
                      <div className="flex items-center space-x-4 lg:space-x-6">
                        <span
                          className="inline-flex rounded-md shadow"
                          onClick={logOut}
                        >
                          <Link
                            to="/login"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600"
                          >
                            {t("header.log_out")}
                          </Link>
                        </span>
                        <Link to="/profile">
                          <img
                            className="w-16 h-16 rounded-full lg:w-12 lg:h-12"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="spacex"
                          />
                        </Link>
                      </div>
                    ) : (
                      <span className="inline-flex rounded-md shadow">
                        <Link
                          to="/login"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600"
                        >
                          {t("header.log_in")}
                        </Link>
                      </span>
                    )}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Header;
