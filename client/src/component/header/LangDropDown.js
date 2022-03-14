import React from "react";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import i18n from "i18next";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const LangDropDown = () => {
  const lang = localStorage.getItem("i18nextLng");

  return (
    <Menu as="div" className="relative inline-block ml-3 text-left">
      <div>
        <Menu.Button className="inline-flex items-center px-4 py-2 rounded-md shadow border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
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
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-transparent ring-1 ring-black ring-opacity-5 focus:outline-none cursor-pointer">
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
