import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import StatsSection from "./StatsSection";
import TeamSection from "./TeamSection";
import Client from "../../assets/client.png";

const AboutPage = ({ storedTheme }) => {
  const { t } = useTranslation();

  useEffect(() => {
    console.log("USEEFFECT about component mounted");
  });

  console.log("about page rendered");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <main
        className="min-h-full bg-cover bg-top sm:bg-top"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75")',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
          <h1 className="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
            Do UC what you say
          </h1>
          <p className="mt-2 text-lg font-medium text-black text-opacity-50">
            {t("about_page.about_page_header")}
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black text-opacity-75 bg-white bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50"
            >
              {t("about_page.about_page_btn")}
            </Link>
          </div>
        </div>
      </main>
      <div
        className={`${
          storedTheme === "light"
            ? "py-16 bg-gray-50 overflow-hidden transition-colors duration-300"
            : "py-16 bg-gray-800 overflow-hidden transition-colors duration-300"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-none">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              {t("about_page.about_page_transaction")}
            </h2>
            <p
              className={`${
                storedTheme === "light"
                  ? "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                  : "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl"
              }`}
            >
              {t("about_page.about_page_banner_st_title")}
            </p>
          </div>
          <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
            <p
              className={`${
                storedTheme === "light"
                  ? "text-lg text-gray-500"
                  : "text-lg text-gray-300"
              }`}
            >
              {t("about_page.about_us_section")}
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
            <div className="relative z-10">
              <div
                className={`${
                  storedTheme === "light"
                    ? "prose prose-indigo text-gray-500 mx-auto lg:max-w-none"
                    : "prose prose-indigo text-gray-300 mx-auto lg:max-w-none"
                }`}
              >
                <div className="text-base max-w-prose mx-auto lg:max-w-none">
                  <p
                    className={`${
                      storedTheme === "light"
                        ? "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                        : "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl"
                    }`}
                  >
                    {t("about_page.about_page_banner_nd_title")}
                  </p>
                  <p>{t("about_page.certificate_section")}</p>
                </div>
              </div>
              <div className="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
                <div className="rounded-md shadow">
                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    {t("about_page.contact_sales_btn")}
                  </Link>
                </div>
                <div className="rounded-md shadow ml-4">
                  <a
                    href="/"
                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
                  >
                    {t("about_page.learn_more_btn")}
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
              <svg
                className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
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
                      // className="text-gray-200 dark:text-gray-800"
                      className={`${
                        storedTheme === "light"
                          ? "text-gray-200"
                          : "text-gray-700"
                      }`}
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
                />
              </svg>
              <blockquote className="relative bg-white rounded-lg shadow-lg">
                <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                  <img
                    src="https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg"
                    alt="Workcation"
                    className="h-8"
                    height={80}
                    width={80}
                  />
                  <div className="relative text-lg text-gray-700 font-medium mt-8">
                    <svg
                      className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative">
                      Tincidunt integer commodo, cursus etiam aliquam neque, et.
                      Consectetur pretium in volutpat, diam. Montes, magna
                      cursus nulla feugiat dignissim id lobortis amet. Laoreet
                      sem est phasellus eu proin massa, lectus.
                    </p>
                  </div>
                </div>
                <cite className="relative flex items-center sm:items-start bg-indigo-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
                  <div className="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2">
                    <img
                      className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-indigo-300"
                      // src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80"
                      src={Client}
                      alt=""
                      height={3050}
                      width={2440}
                    />
                  </div>
                  <span className="relative ml-4 text-indigo-300 font-semibold leading-6 sm:ml-24 sm:pl-1">
                    <p className="text-white font-semibold sm:inline">
                      Tunisie Telecom
                    </p>{" "}
                    {/* <p className="sm:inline">CEO at Workcation</p> */}
                  </span>
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      {/* Stats section */}
      <StatsSection />

      {/* Teams section */}
      <TeamSection storedTheme={storedTheme} />
    </motion.div>
  );
};

export default AboutPage;
