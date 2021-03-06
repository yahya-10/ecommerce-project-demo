import React, { Fragment } from "react";

import { Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/solid";
import { GlobeIcon } from "@heroicons/react/outline";
import i18n from "i18next";

/**
 *
 * Displays the drop down of languages.
 * Select le suited language and store it in localStorage
 *
 */

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const LangDropDown = ({ storedTheme }) => {
  const lang = localStorage.getItem("i18nextLng");

  return (
    <Menu as="div" className="relative inline-block px-4 text-left">
      <Menu.Button
        className={`inline-flex items-center px-4 py-2 shadow border border-transparent text-base font-medium text-indigo-600 ${
          storedTheme === "light" ? "bg-white" : "bg-gray-800"
        } transition duration-300`}
      >
        {lang}
        <GlobeIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`${
            storedTheme === "light"
              ? "origin-top-right absolute mt-2 w-56 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none cursor-pointer"
              : "origin-top-right absolute mt-2 w-56 shadow-lg bg-gray-400 ring-1 ring-black ring-opacity-5 focus:outline-none cursor-pointer"
          }`}
        >
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <option
                  value="en"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-1 text-sm"
                  )}
                  onClick={() => i18n.changeLanguage("en")}
                >
                  English
                </option>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <option
                  value="fr"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-1 text-sm"
                  )}
                  onClick={() => i18n.changeLanguage("fr")}
                >
                  Fran??ais
                </option>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <option
                  value="es"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-1 text-sm"
                  )}
                  onClick={() => i18n.changeLanguage("es")}
                >
                  Espa??ol
                </option>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default LangDropDown;
