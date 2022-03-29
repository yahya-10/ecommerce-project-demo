import React from "react";

import { MailIcon, PhoneIcon } from "@heroicons/react/solid";

import cmkVoip from "../../assets/comunik-voip.png";
import cmkContact from "../../assets/comunik-contact.png";
import cmkSales from "../../assets/comunik-sales.png";

const people = [
  {
    name: "Scale package",
    title: "Regional Paradigm Technician",
    role: "Admin",
    isValid: true,
    email: "y.akermi@comunikmail.com",
    telephone: "+21628202633",
    imageUrl: cmkVoip,
  },
  {
    name: "Growth package",
    title: "Regional Paradigm Technician",
    role: "Admin",
    isValid: false,
    email: "y.akermi@comunikmail.com",
    telephone: "+21628202633",
    imageUrl: cmkContact,
  },
  {
    name: "Starter package",
    title: "Regional Paradigm Technician",
    role: "Admin",
    isValid: true,
    email: "y.akermi@comunikmail.com",
    telephone: "+21628202633",
    imageUrl: cmkSales,
  },
  {
    name: "Scale package",
    title: "Regional Paradigm Technician",
    role: "Admin",
    isValid: false,
    email: "y.akermi@comunikmail.com",
    telephone: "+21628202633",
    imageUrl: cmkVoip,
  },
];

const TransactionsTable = () => {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person, i) => (
        <li
          key={i}
          className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="w-full flex items-center justify-between p-6 space-x-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="text-gray-900 text-sm font-medium truncate">
                  {person.name}
                </h3>
                <span
                  className={`"flex-shrink-0 inline-block px-2 py-0.5 ${
                    person.isValid
                      ? "text-green-800 bg-green-100"
                      : "text-red-800 bg-red-100"
                  } text-xs font-medium rounded-full"`}
                >
                  {person.isValid ? "Valid" : "Expired"}
                </span>
              </div>
              <p className="mt-1 text-gray-500 text-sm truncate">
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
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  <MailIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">Contact Sales</span>
                </a>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <a
                  href={`tel:${person.telephone}`}
                  onClick={() => console.log(person.telephone)}
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <PhoneIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">Call Support</span>
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
