import React from "react";

import { useTranslation } from "react-i18next";

const LogoClouds = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-indigo-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8 sm:justify-center">
        <h2 className="text-3xl font-extrabold text-white">
          {t("logo_cloud")}
        </h2>
        <div className="flow-root mt-8 lg:mt-10">
          <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg"
                width="158"
                height="48"
                alt="Tuple"
              />
            </div>
            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/mirage-logo-indigo-300.svg"
                width="158"
                height="48"
                alt="Mirage"
              />
            </div>
            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/statickit-logo-indigo-300.svg"
                width="158"
                height="48"
                alt="StaticKit"
              />
            </div>
            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/transistor-logo-indigo-300.svg"
                width="158"
                height="48"
                alt="Transistor"
              />
            </div>
            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg"
                width="158"
                height="48"
                alt="Workcation"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoClouds;
