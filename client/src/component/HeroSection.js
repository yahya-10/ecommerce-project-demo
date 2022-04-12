import React from "react";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const HeroSection = ({ storedTheme }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`${
        storedTheme === "light"
          ? "relative bg-gray-50 transition-colors duration-300 overflow-hidden py-5"
          : "relative bg-gray-800 transition-colors duration-300 overflow-hidden py-5"
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
                  className="text-gray-200"
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
        </div>
      </div>
      <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <div className="text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
          >
            <h1
              className={`${
                storedTheme === "light"
                  ? "text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                  : "text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
              }`}
            >
              <span className="block xl:inline">
                {t("hero_section.main_title_st_half")}
              </span>{" "}
              <span className="block text-indigo-600 xl:inline">
                {t("hero_section.main_title_nd_half")}
              </span>
            </h1>
          </motion.div>
          <motion.div initial={{ y: 250 }} animate={{ y: 10 }}>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              {t("hero_section.under_main_title")}
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 cursor-pointer"
                  to="/register"
                >
                  Get started
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link
                  to="/register"
                  className={`${
                    storedTheme === "light"
                      ? "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                      : "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-gray-50 bg-gray-600 hover:bg-gray-500 md:py-4 md:text-lg md:px-10"
                  }`}
                >
                  Live demo
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
