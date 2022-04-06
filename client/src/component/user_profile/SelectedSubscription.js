import { Link } from "react-router-dom";

import SelectPackageModal from "./SelectPackageModal";

import { useTranslation } from "react-i18next";
import { CheckIcon, PlusIcon } from "@heroicons/react/outline";
import { ShoppingCartIcon } from "@heroicons/react/solid";

/**
 * This component
 */

const SelectedSubscription = ({ data, selectedPackage, storedTheme }) => {
  const { t } = useTranslation();

  // console.log("SelectedSubs", selectedPackage);
  return (
    <>
      {/* Split brand panel */}
      <div
        className={`relative mb-3 ${
          storedTheme === "light"
            ? "bg-white transition-colors duration-300"
            : "bg-gray-900 transition-colors duration-300"
        }`}
      >
        {!selectedPackage ? (
          // <Link to="/">select a package first</Link>
          <SelectPackageModal />
        ) : (
          <div id="selectedSubs-div">
            <div className="absolute inset-0" aria-hidden="true">
              <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-violet-500 to-fuchsia-500" />
            </div>
            <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:px-8">
              {/* Applicant information summary */}
              <div
                // className="bg-white  sm:py-24 sm:px-6 lg:px-0 lg:pr-8"
                className={`sm:py-24 sm:px-6 lg:px-0 lg:pr-8 ${
                  storedTheme === "light"
                    ? "bg-white transition-colors duration-300"
                    : "bg-gray-800 transition-colors duration-300"
                }`}
              >
                <div
                  // className="bg-white shadow overflow-hidden sm:rounded-lg"
                  className={`shadow overflow-hidden sm:rounded-lg ${
                    storedTheme === "light"
                      ? "bg-white transition-colors duration-300"
                      : "bg-gray-800 transition-colors duration-300"
                  }`}
                >
                  <div className="px-4 py-5 sm:px-6">
                    <h3
                      // className="text-lg leading-6 font-medium text-gray-900"
                      className={`text-lg leading-6 font-medium ${
                        storedTheme === "light"
                          ? "text-gray-900"
                          : "text-gray-50"
                      }`}
                    >
                      {t("sum_section.applicant_info")}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      {t("sum_section.summary")}
                    </p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          {t("signup.full_name")}
                        </dt>
                        <dd
                          // className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                          className={`mt-1 text-sm sm:mt-0 sm:col-span-2 ${
                            storedTheme === "light"
                              ? "text-gray-900"
                              : "text-gray-200"
                          }`}
                        >
                          {`${data.firstName} ${data.lastName}`}
                        </dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          {t("sum_section.application_for")}
                        </dt>
                        <dd
                          // className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                          className={`mt-1 text-sm sm:mt-0 sm:col-span-2 ${
                            storedTheme === "light"
                              ? "text-gray-900"
                              : "text-gray-200"
                          }`}
                        >
                          {selectedPackage.title}
                        </dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          {t("email")}
                        </dt>
                        <dd
                          // className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                          className={`mt-1 text-sm sm:mt-0 sm:col-span-2 ${
                            storedTheme === "light"
                              ? "text-gray-900"
                              : "text-gray-200"
                          }`}
                        >
                          {data.emailAddress}
                        </dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          {t("sum_section.num_of_licenses")}
                        </dt>
                        <dd
                          // className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                          className={`mt-1 text-sm sm:mt-0 sm:col-span-2 ${
                            storedTheme === "light"
                              ? "text-gray-900"
                              : "text-gray-200"
                          }`}
                        >
                          80
                        </dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Address
                        </dt>
                        <dd
                          // className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                          className={`mt-1 text-sm sm:mt-0 sm:col-span-2 ${
                            storedTheme === "light"
                              ? "text-gray-900"
                              : "text-gray-200"
                          }`}
                        >
                          {`${data.streetAddress} ${data.city} ${data.state} ${data.zip} ${data.country}`}
                        </dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          {t("user_form.form_about")}
                        </dt>
                        <dd
                          // className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                          className={`mt-1 text-sm sm:mt-0 sm:col-span-2 ${
                            storedTheme === "light"
                              ? "text-gray-900"
                              : "text-gray-200"
                          }`}
                        >
                          {data.about}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
              {/* Selected package */}
              <div className="bg-gradient-to-r from-cyan-600 to-green-400 py-16 px-4 sm:py-24 sm:px-6 lg:bg-none lg:flex lg:items-center lg:justify-end lg:px-0 lg:pl-8">
                <div className="max-w-lg mx-auto w-full space-y-8 lg:mx-0">
                  <div>
                    <h2 className="sr-only">Price</h2>
                    <p className="relative grid grid-cols-2">
                      <span className="flex flex-col text-center">
                        <span className="text-5xl font-extrabold text-white tracking-tight">
                          ${selectedPackage.priceMonthly}
                        </span>
                        <span className="mt-2 text-base font-medium text-cyan-100">
                          Setup fee
                        </span>
                        <span className="sr-only">plus</span>
                      </span>
                      <span
                        className="pointer-events-none absolute h-12 w-full flex items-center justify-center"
                        aria-hidden="true"
                      >
                        <PlusIcon
                          className="h-6 w-6 text-cyan-200"
                          aria-hidden="true"
                        />
                      </span>
                      <span>
                        <span className="flex flex-col text-center">
                          <span className="text-5xl font-extrabold text-white tracking-tight">
                            $4
                          </span>
                          <span className="mt-2 text-base font-medium text-cyan-100">
                            Per month
                          </span>
                        </span>
                      </span>
                    </p>
                  </div>
                  <ul className="rounded overflow-hidden grid gap-px sm:grid-cols-2">
                    {selectedPackage.mainFeatures.map((item, i) => (
                      <li
                        key={i}
                        className="bg-cyan-700 bg-opacity-50 py-4 px-4 flex items-center text-base text-white"
                      >
                        <CheckIcon
                          className="h-6 w-6 text-cyan-200"
                          aria-hidden="true"
                        />
                        <span className="ml-3">{item.value}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/validation-stage"
                    className="w-full bg-white border border-transparent py-4 px-8 flex items-center justify-center text-lg leading-6 font-medium text-cyan-700 hover:bg-cyan-50 md:px-10"
                  >
                    <span className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium text-indigo-600 bg-white hover:bg-gray-50">
                      <ShoppingCartIcon
                        className="flex-shrink-0 h-6 w-6"
                        aria-hidden="true"
                      />
                    </span>
                    {t("sum_section.buy_btn")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SelectedSubscription;
