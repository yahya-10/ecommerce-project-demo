import React from "react";

import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import { useTranslation } from "react-i18next";

import cmkVoip from "../../assets/comunik-voip.png";
import cmkContact from "../../assets/comunik-contact.png";
import cmkSales from "../../assets/comunik-sales.png";

const TransactionsTable = ({ storedTheme }) => {
  const { t } = useTranslation();

  const people = [
    {
      name: "Scale package",
      title: "Regional Paradigm Technician",
      role: "Admin",
      isValid: true,
      email: "y.akermi@comunikmail.com",
      telephone: "+21625887546",
      imageUrl: cmkVoip,
    },
    {
      name: "Growth package",
      title: "Regional Paradigm Technician",
      role: "Admin",
      isValid: false,
      email: "y.akermi@comunikmail.com",
      telephone: "+21625887546",
      imageUrl: cmkContact,
    },
    {
      name: "Starter package",
      title: "Regional Paradigm Technician",
      role: "Admin",
      isValid: true,
      email: "y.akermi@comunikmail.com",
      telephone: "+21625887546",
      imageUrl: cmkSales,
    },
    {
      name: "Scale package",
      title: "Regional Paradigm Technician",
      role: "Admin",
      isValid: false,
      email: "y.akermi@comunikmail.com",
      telephone: "+21625887546",
      imageUrl: cmkVoip,
    },
  ];

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person, i) => (
        <li
          key={i}
          // className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
          className={`"col-span-1 rounded-lg shadow divide-y " ${
            storedTheme === "light"
              ? "bg-white divide-gray-200 transition-colors duration-300"
              : "bg-gray-600 divide-gray-400 transition-colors duration-300"
          }`}
        >
          <div className="w-full flex items-center justify-between p-6 space-x-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3
                  // className="text-gray-900 text-sm font-medium truncate"
                  className={`"text-sm font-medium truncate" ${
                    storedTheme === "light" ? "text-gray-900" : "text-gray-50"
                  }`}
                >
                  {person.name}
                </h3>
                <span
                  className={`"flex-shrink-0 inline-block px-2 py-0.5 ${
                    person.isValid
                      ? "text-green-800 bg-green-200"
                      : "text-red-800 bg-red-200"
                  } text-xs font-medium rounded-full"`}
                >
                  {person.isValid ? "Valid" : "Expired"}
                </span>
              </div>
              <p
                // className="mt-1 text-gray-500 text-sm truncate"
                className={`"mt-1 text-sm truncate" ${
                  storedTheme === "light" ? "text-gray-500" : "text-gray-400"
                }`}
              >
                {person.title}
              </p>
            </div>
            <img
              className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
              src={person.imageUrl}
              alt=""
            />
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                <a
                  href={`mailto:${person.email}`}
                  // className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                  className={`"relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm font-medium border border-transparent rounded-bl-lg" ${
                    storedTheme === "light"
                      ? "text-gray-700 hover:text-gray-500"
                      : "text-gray-200 hover:text-gray-400"
                  }`}
                >
                  <MailIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">{t("user_history.contact")}</span>
                </a>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <a
                  href={`tel:${person.telephone}`}
                  // className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                  className={`"relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm font-medium border border-transparent rounded-br-lg" ${
                    storedTheme === "light"
                      ? "text-gray-700 hover:text-gray-500"
                      : "text-gray-200 hover:text-gray-400"
                  }`}
                >
                  <PhoneIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">{t("user_history.call")}</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TransactionsTable;
