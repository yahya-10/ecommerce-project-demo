import React from "react";

import { Link } from "react-router-dom";

import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";

const pages = [
  { name: "Projects", href: "#", current: false },
  { name: "Project Nero", href: "#", current: true },
];

const BreadCrumbs = () => {

  //The problem here is to update the path on navigating from page to page
  /*const extractPathName = () => {
    const pathName = window.location.pathname;
    const path = pathName.split("/").pop();
    if (path) {
      setPages([...pages, path]);
    }
  };*/

  return (
    <nav className="flex bg-gray-50 ml-3" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4">
        <li>
          <div>
            <Link to="/" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRightIcon
                className="flex-shrink-0 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <a
                href={page.href}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                aria-current={page.current ? "page" : undefined}
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
