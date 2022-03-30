import React, { Fragment } from "react";

import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
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
    <Menu as="div" className="relative inline-block ml-3 text-left">
      <div>
        <Menu.Button className="inline-flex items-center px-4 py-2 shadow border border-transparent text-base font-medium text-indigo-600 bg-white hover:bg-gray-50">
          {lang}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

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
              ? "origin-top-right absolute right-0 mt-2 w-56 shadow-lg bg-transparent ring-1 ring-black ring-opacity-5 focus:outline-none cursor-pointer"
              : "origin-top-right absolute right-0 mt-2 w-56 shadow-lg bg-gray-400 ring-1 ring-black ring-opacity-5 focus:outline-none cursor-pointer"
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
                  Français
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
                  Español
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
