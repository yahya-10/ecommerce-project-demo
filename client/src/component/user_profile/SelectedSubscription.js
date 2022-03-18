import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import SelectPackageModal from "./SelectPackageModal";

import {
  CalendarIcon,
  CheckIcon,
  PlusIcon,
  ViewBoardsIcon,
  ViewListIcon,
} from "@heroicons/react/outline";
import { UsersIcon } from "@heroicons/react/outline";
import { PaperClipIcon } from "@heroicons/react/solid";
import { ShoppingCartIcon } from "@heroicons/react/solid";

/**
 * This component
 */

const features = [
  {
    name: "List view",
    description:
      "Nunc a, lacinia sed risus neque, arcu, rhoncus. Id mauris justo facilisis aliquam platea vestibulum condimentum morbi.",
    icon: ViewListIcon,
  },
  {
    name: "Boards",
    description:
      "Purus lobortis volutpat posuere id integer nunc tellus. Non mauris malesuada feugiat massa mi pellentesque cum est. Pharetra a varius urna rhoncus, tempor rutrum.",
    icon: ViewBoardsIcon,
  },
  {
    name: "Calendar",
    description:
      "Purus lobortis volutpat posuere id integer nunc tellus. Non mauris malesuada feugiat massa mi pellentesque cum est. Pharetra a varius urna rhoncus, tempor rutrum.",
    icon: CalendarIcon,
  },
  {
    name: "Teams",
    description:
      "Tincidunt sollicitudin interdum nunc sit risus at bibendum vitae. Urna, quam ut sit justo non, consectetur et varius.",
    icon: UsersIcon,
  },
];
const checklist = [
  "Unlimited projects",
  "No per user fees",
  "Unlimited storage",
  "24/7 support",
  "Cancel any time",
  "14 days free",
];

const SelectedSubscription = ({ data, selectedPackage }) => {
  const { t } = useTranslation();

  // console.log("SelectedSubs", selectedPackage);
  return (
    <>
      {/* Split brand panel */}
      <div className="relative bg-white">
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
              <div className="bg-white  sm:py-24 sm:px-6 lg:px-0 lg:pr-8">
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
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
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {`${data.firstName} ${data.lastName}`}
                        </dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          {t("sum_section.application_for")}
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {selectedPackage.title}
                        </dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          {t("email")}
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {data.emailAddress}
                        </dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          {t("sum_section.num_of_licenses")}
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          80
                        </dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Address
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {`${data.streetAddress} ${data.city} ${data.state} ${data.zip} ${data.country}`}
                        </dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          {t("user_form.form_about")}
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {data.about}
                        </dd>
                      </div>

                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Attachments
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          <ul
                            role="list"
                            className="border border-gray-200 rounded-md divide-y divide-gray-200"
                          >
                            <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                              <div className="w-0 flex-1 flex items-center">
                                <PaperClipIcon
                                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span className="ml-2 flex-1 w-0 truncate">
                                  resume_back_end_developer.pdf
                                </span>
                              </div>
                              <div className="ml-4 flex-shrink-0">
                                <a
                                  href="#"
                                  className="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                  Download
                                </a>
                              </div>
                            </li>
                            <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                              <div className="w-0 flex-1 flex items-center">
                                <PaperClipIcon
                                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span className="ml-2 flex-1 w-0 truncate">
                                  coverletter_back_end_developer.pdf
                                </span>
                              </div>
                              <div className="ml-4 flex-shrink-0">
                                <a
                                  href="#"
                                  className="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                  Download
                                </a>
                              </div>
                            </li>
                          </ul>
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
                  <ul
                    role="list"
                    className="rounded overflow-hidden grid gap-px sm:grid-cols-2"
                  >
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
                    className="w-full bg-white border border-transparent rounded-md py-4 px-8 flex items-center justify-center text-lg leading-6 font-medium text-cyan-700 hover:bg-cyan-50 md:px-10"
                  >
                    <span className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
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
