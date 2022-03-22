import React from "react";
import { useTranslation } from "react-i18next";

import comunikcrmLogo from "../../assets/comunikcrm.png";

const Footer = ({ storedTheme }) => {
  const { t } = useTranslation();

  const footerNavigation = {
    solutions: [
      { name: t("footer.footer_marketing"), href: "#" },
      { name: t("footer.footer_analytics"), href: "#" },
      { name: t("footer.footer_commerce"), href: "#" },
      { name: t("footer.footer_insights"), href: "#" },
    ],
    support: [
      { name: t("footer.footer_pricing"), href: "#" },
      { name: t("footer.footer_documentation"), href: "#" },
      { name: t("footer.footer_guides"), href: "#" },
      { name: t("footer.footer_status"), href: "#" },
    ],
    company: [
      { name: t("footer.footer_about"), href: "#" },
      { name: t("footer.footer_blog"), href: "#" },
      { name: t("footer.footer_jobs"), href: "#" },
      { name: t("footer.footer_press"), href: "#" },
      { name: t("footer.footer_partners"), href: "#" },
    ],
    legal: [
      { name: t("footer.footer_claim"), href: "#" },
      { name: t("footer.footer_privacy"), href: "#" },
      { name: t("footer.footer_terms"), href: "#" },
    ],
    social: [
      {
        name: "Facebook",
        href: "https://www.facebook.com/comunikcrm/",
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  };

  return (
    <footer
      aria-labelledby="footer-heading"
      className={`${storedTheme === "light" ? "bg-gray-50" : "bg-gray-800"}`}
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <img className="h-10" src={comunikcrmLogo} alt="Company name" />
            <p
              // className="text-gray-500 text-base"
              className={`${
                storedTheme === "light"
                  ? "text-base text-gray-500"
                  : "text-base text-gray-200"
              }`}
            >
              {t("footer.footer_slogan")}
            </p>
            <div className="flex space-x-6">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3
                  // className="text-sm font-semibold tracking-wider uppercase text-gray-900"
                  className={`${
                    storedTheme === "light"
                      ? "text-sm font-semibold tracking-wider uppercase text-gray-900"
                      : "text-sm font-semibold tracking-wider uppercase text-gray-400"
                  }`}
                >
                  Solutions
                </h3>
                <ul className="mt-4 space-y-4">
                  {footerNavigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        // className="text-base text-gray-500 hover:text-gray-900"
                        className={`${
                          storedTheme === "light"
                            ? "text-base text-gray-500 hover:text-gray-900"
                            : "text-base text-gray-100 hover:text-gray-400"
                        }`}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3
                  className={`${
                    storedTheme === "light"
                      ? "text-sm font-semibold tracking-wider uppercase text-gray-900"
                      : "text-sm font-semibold tracking-wider uppercase text-gray-400"
                  }`}
                >
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  {footerNavigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={`${
                          storedTheme === "light"
                            ? "text-base text-gray-500 hover:text-gray-900"
                            : "text-base text-gray-100 hover:text-gray-400"
                        }`}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3
                  className={`${
                    storedTheme === "light"
                      ? "text-sm font-semibold tracking-wider uppercase text-gray-900"
                      : "text-sm font-semibold tracking-wider uppercase text-gray-400"
                  }`}
                >
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={`${
                          storedTheme === "light"
                            ? "text-base text-gray-500 hover:text-gray-900"
                            : "text-base text-gray-100 hover:text-gray-400"
                        }`}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3
                  className={`${
                    storedTheme === "light"
                      ? "text-sm font-semibold tracking-wider uppercase text-gray-900"
                      : "text-sm font-semibold tracking-wider uppercase text-gray-400"
                  }`}
                >
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={`${
                          storedTheme === "light"
                            ? "text-base text-gray-500 hover:text-gray-900"
                            : "text-base text-gray-100 hover:text-gray-400"
                        }`}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
