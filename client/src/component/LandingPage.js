import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { CheckIcon, XIcon } from "@heroicons/react/solid";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import HeroSection from "./HeroSection";
import LogoClouds from "./LogoClouds";
import LandingPageChart from "./charts/LandingPageChart";

/**
 * @public
 * this is the landing page where the user can browse in a different pages.
 */

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const LandingPage = ({ handleSelectPackage, storedTheme }) => {
  const [monthlyPlan, setMonthlyPlan] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();
  const plans = [
    {
      id: 20,
      title: "Starter",
      featured: false,
      description: t("plans.starter_plan_desc"),
      priceMonthly: 5,
      priceYearly: 56,
      mainFeatures: [
        { id: 1, value: t("plans.starter_value_1") },
        { id: 2, value: t("plans.starter_value_2") },
        { id: 3, value: t("plans.starter_value_3") },
        { id: 4, value: t("plans.starter_value_4") },
        { id: 5, value: t("plans.starter_value_5") },
        { id: 6, value: t("plans.starter_value_6") },
      ],
    },
    {
      id: 21,
      title: "Scale",
      featured: true,
      description: t("plans.scale_plan_desc"),
      priceMonthly: 19,
      priceYearly: 220,
      mainFeatures: [
        { id: 1, value: t("plans.scale_value_1") },
        { id: 2, value: t("plans.scale_value_2") },
        { id: 3, value: t("plans.scale_value_3") },
        { id: 4, value: t("plans.scale_value_4") },
        { id: 5, value: t("plans.scale_value_5") },
        { id: 6, value: t("plans.scale_value_6") },
      ],
    },
    {
      id: 22,
      title: "Growth",
      featured: false,
      description: t("plans.growth_plan_desc"),
      priceMonthly: 12,
      priceYearly: 140,
      mainFeatures: [
        { id: 1, value: t("plans.growth_value_1") },
        { id: 2, value: t("plans.growth_value_2") },
        { id: 3, value: t("plans.growth_value_3") },
        { id: 4, value: t("plans.growth_value_4") },
        { id: 5, value: t("plans.growth_value_5") },
        { id: 6, value: t("plans.growth_value_6") },
      ],
    },
  ];

  const features = [
    {
      title: t("features.title_1"),
      tiers: [
        { title: "starter", value: true },
        { title: "popular", featured: true, value: true },
        { title: "intermediate", value: true },
      ],
    },
    {
      title: t("features.title_2"),
      tiers: [
        { title: "starter", value: true },
        { title: "popular", featured: true, value: true },
        { title: "intermediate", value: true },
      ],
    },
    {
      title: t("features.title_3"),
      tiers: [
        { title: "starter", value: "3 accounts" },
        { title: "popular", featured: true, value: "Unlimited accounts" },
        { title: "intermediate", value: "7 accounts" },
      ],
    },
    {
      title: t("features.title_4"),
      tiers: [
        { title: "starter", value: "3 invoices" },
        { title: "popular", featured: true, value: "Unlimited invoices" },
        { title: "intermediate", value: "10 invoices" },
      ],
    },
    {
      title: t("features.title_5"),
      tiers: [
        { title: "starter", value: false },
        { title: "popular", featured: true, value: true },
        { title: "intermediate", value: true },
      ],
    },
    {
      title: t("features.title_6"),
      tiers: [
        { title: "starter", value: false },
        { title: "popular", featured: true, value: true },
        { title: "intermediate", value: true },
      ],
    },
    {
      title: t("features.title_7"),
      tiers: [
        { title: "starter", value: false },
        { title: "popular", featured: true, value: true },
        { title: "intermediate", value: false },
      ],
    },
  ];

  const perks = [
    {
      title: t("perks.title_1"),
      tiers: [
        { title: "starter", value: true },
        { title: "popular", featured: true, value: true },
        { title: "intermediate", value: true },
      ],
    },
    {
      title: t("perks.title_2"),
      tiers: [
        { title: "starter", value: true },
        { title: "popular", featured: true, value: true },
        { title: "intermediate", value: true },
      ],
    },
    {
      title: t("perks.title_3"),
      tiers: [
        { title: "starter", value: true },
        { title: "popular", featured: true, value: true },
        { title: "intermediate", value: true },
      ],
    },
    {
      title: t("perks.title_4"),
      tiers: [
        { title: "starter", value: true },
        { title: "popular", featured: true, value: true },
        { title: "intermediate", value: true },
      ],
    },
    {
      title: t("perks.title_5"),
      tiers: [
        { title: "starter", value: false },
        { title: "popular", featured: true, value: true },
        { title: "intermediate", value: true },
      ],
    },
    {
      title: t("perks.title_6"),
      tiers: [
        { title: "starter", value: false },
        { title: "popular", featured: true, value: true },
        { title: "intermediate", value: false },
      ],
    },
    {
      title: t("perks.title_7"),
      tiers: [
        { title: "starter", value: false },
        { title: "popular", featured: true, value: true },
        { title: "intermediate", value: false },
      ],
    },
  ];
  // console.log("Landing page render");
  return (
    <>
      <div>
        <HeroSection storedTheme={storedTheme} />
      </div>
      <div>
        <LogoClouds />
      </div>
      <div
        className={`${
          storedTheme === "light"
            ? "bg-gray-50 transition-colors duration-300"
            : "bg-gray-800 transition-colors duration-300"
        }`}
      >
        <main>
          {/* Pricing section */}
          <div>
            <div
              className={`${
                storedTheme === "light"
                  ? "relative bg-gray-50 transition-colors duration-300"
                  : "relative bg-gray-800 transition-colors duration-300"
              }`}
            >
              {/* Overlapping background */}
              <div
                aria-hidden="true"
                className="hidden absolute w-full h-6 bottom-0 lg:block"
              />

              <div className="relative max-w-2xl mx-auto pt-16 px-4 text-center sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2
                  className={`${
                    storedTheme === "light"
                      ? "text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl"
                      : "text-4xl font-extrabold tracking-tight text-gray-50 sm:text-6xl"
                  }`}
                >
                  <span className="block lg:inline">
                    {t("pricing_section.pricing_section_title_st_half")}
                  </span>
                  <span className="block lg:inline">
                    {t("pricing_section.pricing_section_title_nd_half")}
                  </span>
                </h2>
                <p
                  className={`${
                    storedTheme === "light"
                      ? "mt-4 text-xl text-indigo-600"
                      : "mt-4 text-xl text-gray-200"
                  }`}
                >
                  {t("pricing_section.pricing_section_under_title")}
                </p>
              </div>

              <h2 className="sr-only">Plans</h2>

              {/* Toggle */}
              <div className="relative mt-12 flex justify-center sm:mt-16">
                <div className="bg-indigo-700 p-0.5 rounded-lg flex">
                  <button
                    type="button"
                    className="relative bg-white py-2 px-6 border-indigo-700 rounded-md shadow-sm text-sm font-medium text-indigo-700 whitespace-nowrap hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:z-10"
                    onClick={() => setMonthlyPlan(true)}
                  >
                    {t("pricing_section.monthly_billing")}
                  </button>
                  <button
                    type="button"
                    className="ml-0.5 relative py-2 px-6 border border-transparent rounded-md text-sm font-medium text-indigo-200 whitespace-nowrap hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:z-10"
                    onClick={() => setMonthlyPlan(false)}
                  >
                    {t("pricing_section.yearly_billing")}
                  </button>
                </div>
              </div>

              {/* Cards */}
              <div className="relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
                {/* Decorative background */}
                <div
                  aria-hidden="true"
                  className="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-indigo-700 rounded-tl-lg rounded-tr-lg lg:block"
                />

                <div className="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3">
                  {plans.map((plan) => (
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                      key={plan.title}
                      className={classNames(
                        plan.featured
                          ? "bg-gradient-to-b from-gray-300 to-white ring-2 ring-indigo-700 shadow-md"
                          : "bg-gradient-to-b from-blue-500 to-gray-500 lg:bg-transparent",
                        "pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12"
                      )}
                    >
                      <div>
                        <h3
                          className={classNames(
                            plan.featured ? "text-indigo-600" : "text-white",
                            "text-sm font-semibold uppercase tracking-wide"
                          )}
                        >
                          {plan.title}
                        </h3>
                        <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                          <div className="mt-3 flex items-center">
                            <p
                              className={classNames(
                                plan.featured
                                  ? "text-indigo-600"
                                  : "text-white",
                                "text-4xl font-extrabold tracking-tight"
                              )}
                            >
                              {monthlyPlan
                                ? `$${plan.priceMonthly}`
                                : `$${plan.priceYearly}`}
                            </p>
                            <div className="ml-4">
                              <p
                                className={classNames(
                                  plan.featured
                                    ? "text-gray-700"
                                    : "text-white",
                                  "text-sm"
                                )}
                              >
                                USD /{" "}
                                {monthlyPlan
                                  ? `${t("pricing_section.month")}`
                                  : `${t("pricing_section.year")}`}
                              </p>
                              <p
                                className={classNames(
                                  plan.featured
                                    ? "text-gray-500"
                                    : "text-indigo-200",
                                  "text-sm"
                                )}
                              >
                                {!monthlyPlan
                                  ? `$${plan.priceMonthly} ${t(
                                      "pricing_section.billed_monthly"
                                    )}`
                                  : `$${plan.priceYearly} ${t(
                                      "pricing_section.billed_yearly"
                                    )}`}
                              </p>
                            </div>
                          </div>
                          <Link
                            to="/profile"
                            onClick={() => handleSelectPackage(plan)}
                            className={classNames(
                              plan.featured
                                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                                : "bg-white text-indigo-600 hover:bg-indigo-50",
                              "mt-6 w-full inline-block py-2 px-8 border border-transparent shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full"
                            )}
                          >
                            {t("pricing_section.pricing_section_buy")}{" "}
                            {plan.title}
                          </Link>
                        </div>
                      </div>
                      <h4 className="sr-only">Features</h4>
                      <ul
                        className={classNames(
                          plan.featured
                            ? "border-gray-200 divide-gray-200"
                            : "border-indigo-500 divide-indigo-500 divide-opacity-75",
                          "mt-7 border-t divide-y lg:border-t-0"
                        )}
                      >
                        {plan.mainFeatures.map((mainFeature) => (
                          <li
                            key={mainFeature.id}
                            className="py-3 flex items-center"
                          >
                            <CheckIcon
                              className={classNames(
                                plan.featured
                                  ? "text-indigo-500"
                                  : "text-indigo-200",
                                "w-5 h-5 flex-shrink-0"
                              )}
                              aria-hidden="true"
                            />
                            <span
                              className={classNames(
                                plan.featured ? "text-gray-600" : "text-white",
                                "ml-4 text-sm font-medium"
                              )}
                            >
                              {mainFeature.value}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Feature comparison */}
            <section
              aria-labelledby="mobile-comparison-heading"
              className="lg:hidden"
            >
              <h2 id="mobile-comparison-heading" className="sr-only">
                Feature comparison
              </h2>

              <div className="mt-16 max-w-2xl mx-auto px-4 space-y-16 sm:px-6">
                {plans.map((plan, planIndex) => (
                  <div key={plan.title} className="border-t border-gray-200">
                    <div
                      className={classNames(
                        plan.featured
                          ? "border-indigo-600"
                          : "border-transparent",
                        "-mt-px pt-6 border-t-2 sm:w-1/2"
                      )}
                    >
                      <h3
                        className={classNames(
                          plan.featured ? "text-indigo-600" : "text-white",
                          "text-sm font-bold"
                        )}
                        // Comparison titles NOT changing color on toggling light/dark mode
                        // className={`"${
                        //   plan.featured ? "text-indigo-600" : "text-white"
                        // }"`}
                      >
                        {plan.title}
                      </h3>
                      <p
                        className={`${
                          storedTheme === "light"
                            ? "mt-2 text-sm text-gray-500"
                            : "mt-2 text-sm text-gray-50"
                        }`}
                      >
                        {plan.description}
                      </p>
                    </div>
                    <h4
                      className={`${
                        storedTheme === "light"
                          ? "mt-10 text-sm font-bold text-gray-900"
                          : "mt-10 text-sm font-bold text-gray-50"
                      }`}
                    >
                      Catered for business
                    </h4>

                    <div className="mt-6 relative">
                      {/* Fake card background */}
                      <div
                        aria-hidden="true"
                        className="hidden absolute inset-0 pointer-events-none sm:block"
                      >
                        <div
                          className={classNames(
                            plan.featured ? "shadow-md" : "shadow",
                            "absolute right-0 w-1/2 h-full bg-white rounded-lg"
                          )}
                        />
                      </div>

                      <div
                        className={classNames(
                          plan.featured
                            ? "ring-2 ring-indigo-600 shadow-md"
                            : "ring-1 ring-black ring-opacity-5 shadow",
                          "relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none"
                        )}
                      >
                        <dl className="divide-y divide-gray-200">
                          {features.map((feature) => (
                            <div
                              key={feature.title}
                              className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2"
                            >
                              <dt className="pr-4 text-sm font-medium text-gray-600">
                                {feature.title}
                              </dt>
                              <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                                {typeof feature.tiers[planIndex].value ===
                                "string" ? (
                                  <span
                                    className={classNames(
                                      feature.tiers[planIndex].featured
                                        ? "text-indigo-600"
                                        : "text-gray-900",
                                      "text-sm font-medium"
                                    )}
                                  >
                                    {feature.tiers[planIndex].value}
                                  </span>
                                ) : (
                                  <>
                                    {feature.tiers[planIndex].value === true ? (
                                      <CheckIcon
                                        className="mx-auto h-5 w-5 text-indigo-600"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <XIcon
                                        className="mx-auto h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                      />
                                    )}

                                    <span className="sr-only">
                                      {feature.tiers[planIndex].value === true
                                        ? "Yes"
                                        : "No"}
                                    </span>
                                  </>
                                )}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </div>

                      {/* Fake card border */}
                      <div
                        aria-hidden="true"
                        className="hidden absolute inset-0 pointer-events-none sm:block"
                      >
                        <div
                          className={classNames(
                            plan.featured
                              ? "ring-2 ring-indigo-600"
                              : "ring-1 ring-black ring-opacity-5",
                            "absolute right-0 w-1/2 h-full rounded-lg"
                          )}
                        />
                      </div>
                    </div>

                    <h4
                      className={`${
                        storedTheme === "light"
                          ? "mt-10 text-sm font-bold text-gray-900"
                          : "mt-10 text-sm font-bold text-gray-50"
                      }`}
                    >
                      Other perks
                    </h4>

                    <div className="mt-6 relative">
                      {/* Fake card background */}
                      <div
                        aria-hidden="true"
                        className="hidden absolute inset-0 pointer-events-none sm:block"
                      >
                        <div
                          className={classNames(
                            plan.featured ? "shadow-md" : "shadow",
                            "absolute right-0 w-1/2 h-full bg-white rounded-lg"
                          )}
                        />
                      </div>

                      <div
                        className={classNames(
                          plan.featured
                            ? "ring-2 ring-indigo-600 shadow-md"
                            : "ring-1 ring-black ring-opacity-5 shadow",
                          "relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none"
                        )}
                      >
                        <dl className="divide-y divide-gray-200">
                          {perks.map((perk) => (
                            <div
                              key={perk.title}
                              className="py-3 flex justify-between sm:grid sm:grid-cols-2"
                            >
                              <dt className="text-sm font-medium text-gray-600 sm:pr-4">
                                {perk.title}
                              </dt>
                              <dd className="text-center sm:px-4">
                                {perk.tiers[planIndex].value === true ? (
                                  <CheckIcon
                                    className="mx-auto h-5 w-5 text-indigo-600"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <XIcon
                                    className="mx-auto h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                )}

                                <span className="sr-only">
                                  {perk.tiers[planIndex].value === true
                                    ? "Yes"
                                    : "No"}
                                </span>
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </div>

                      {/* Fake card border */}
                      <div
                        aria-hidden="true"
                        className="hidden absolute inset-0 pointer-events-none sm:block"
                      >
                        <div
                          className={classNames(
                            plan.featured
                              ? "ring-2 ring-indigo-600"
                              : "ring-1 ring-black ring-opacity-5",
                            "absolute right-0 w-1/2 h-full rounded-lg"
                          )}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section
              aria-labelledby="comparison-heading"
              className="hidden lg:block"
            >
              <h2 id="comparison-heading" className="sr-only">
                Feature comparison
              </h2>

              <div className="mt-24 max-w-7xl mx-auto px-8">
                <div
                  className={`${
                    storedTheme === "light"
                      ? "w-full border-t border-gray-200 flex items-stretch"
                      : "w-full border-t border-gray-800 flex items-stretch"
                  }`}
                >
                  <div className="-mt-px w-1/4 py-6 pr-4 flex items-end">
                    <h3
                      className={`${
                        storedTheme === "light"
                          ? "mt-auto text-sm font-bold text-gray-900"
                          : "mt-auto text-sm font-bold text-gray-50"
                      }`}
                    >
                      Catered for business
                    </h3>
                  </div>
                  {plans.map((plan, index) => (
                    <div
                      key={plan.title}
                      aria-hidden="true"
                      className={classNames(
                        index === plans.length - 1 ? "" : "pr-4",
                        "-mt-px pl-4 w-1/4"
                      )}
                    >
                      <div
                        className={classNames(
                          plan.featured
                            ? "border-indigo-600"
                            : "border-transparent",
                          "py-6 border-t-2"
                        )}
                      >
                        <p
                          className={classNames(
                            plan.featured
                              ? "text-indigo-600"
                              : `${
                                  storedTheme === "light"
                                    ? "text-gray-900"
                                    : "text-white"
                                }`,
                            "text-sm font-bold"
                          )}
                        >
                          {plan.title}
                        </p>
                        <p className="mt-2 text-sm text-gray-500">
                          {plan.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="relative">
                  {/* Fake card backgrounds */}
                  <div
                    className="absolute inset-0 flex items-stretch pointer-events-none"
                    aria-hidden="true"
                  >
                    <div className="w-1/4 pr-4" />
                    <div className="w-1/4 px-4">
                      <div
                        className={`${
                          storedTheme === "light"
                            ? "w-full h-full bg-white rounded-lg shadow"
                            : "w-full h-full bg-gray-900 rounded-lg shadow"
                        }`}
                      />
                    </div>
                    <div className="w-1/4 px-4">
                      <div
                        className={`${
                          storedTheme === "light"
                            ? "w-full h-full bg-white rounded-lg shadow"
                            : "w-full h-full bg-gray-900 rounded-lg shadow"
                        }`}
                      />
                    </div>
                    <div className="w-1/4 pl-4">
                      <div
                        className={`${
                          storedTheme === "light"
                            ? "w-full h-full bg-white rounded-lg shadow"
                            : "w-full h-full bg-gray-900 rounded-lg shadow"
                        }`}
                      />
                    </div>
                  </div>

                  <table className="relative w-full">
                    <caption className="sr-only">
                      Business feature comparison
                    </caption>
                    <thead>
                      <tr className="text-left">
                        <th scope="col">
                          <span className="sr-only">Feature</span>
                        </th>
                        {plans.map((plan) => (
                          <th key={plan.title} scope="col">
                            <span className="sr-only">{plan.title} plan</span>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody
                      className={`${
                        storedTheme === "light"
                          ? "divide-y divide-gray-100"
                          : "divide-y divide-gray-100"
                      }`}
                    >
                      {features.map((feature) => (
                        <tr key={feature.title}>
                          <th
                            scope="row"
                            className={`${
                              storedTheme === "light"
                                ? "w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600"
                                : "w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-300"
                            }`}
                          >
                            {feature.title}
                          </th>
                          {feature.tiers.map((tier, index) => (
                            <td
                              key={tier.title}
                              className={classNames(
                                index === feature.tiers.length - 1
                                  ? "pl-4"
                                  : "px-4",
                                "relative w-1/4 py-0 text-center"
                              )}
                            >
                              <span className="relative w-full h-full py-3">
                                {typeof tier.value === "string" ? (
                                  <span
                                    className={classNames(
                                      tier.featured
                                        ? "text-indigo-600"
                                        : "text-gray-600",
                                      "text-sm font-medium"
                                    )}
                                  >
                                    {tier.value}
                                  </span>
                                ) : (
                                  <>
                                    {tier.value === true ? (
                                      <CheckIcon
                                        className="mx-auto h-5 w-5 text-indigo-600"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <XIcon
                                        className="mx-auto h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                      />
                                    )}

                                    <span className="sr-only">
                                      {tier.value === true ? "Yes" : "No"}
                                    </span>
                                  </>
                                )}
                              </span>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* Fake card borders */}
                  <div
                    className="absolute inset-0 flex items-stretch pointer-events-none"
                    aria-hidden="true"
                  >
                    <div className="w-1/4 pr-4" />
                    <div className="w-1/4 px-4">
                      <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5 bg-red" />
                    </div>
                    <div className="w-1/4 px-4">
                      <div className="w-full h-full rounded-lg ring-2 ring-indigo-600 ring-opacity-100" />
                    </div>
                    <div className="w-1/4 pl-4">
                      <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                    </div>
                  </div>
                </div>

                <h3
                  className={`${
                    storedTheme === "light"
                      ? "mt-10 text-sm font-bold text-gray-900"
                      : "mt-10 text-sm font-bold text-gray-50"
                  }`}
                >
                  Other perks
                </h3>

                <div className="mt-6 relative">
                  {/* Fake card backgrounds */}
                  <div
                    className="absolute inset-0 flex items-stretch pointer-events-none"
                    aria-hidden="true"
                  >
                    <div className="w-1/4 pr-4" />
                    <div className="w-1/4 px-4">
                      <div
                        className={`${
                          storedTheme === "light"
                            ? "w-full h-full bg-white rounded-lg shadow"
                            : "w-full h-full bg-gray-900 rounded-lg shadow"
                        }`}
                      />
                    </div>
                    <div className="w-1/4 px-4">
                      <div
                        className={`${
                          storedTheme === "light"
                            ? "w-full h-full bg-white rounded-lg shadow"
                            : "w-full h-full bg-gray-900 rounded-lg shadow"
                        }`}
                      />
                    </div>
                    <div className="w-1/4 pl-4">
                      <div
                        className={`${
                          storedTheme === "light"
                            ? "w-full h-full bg-white rounded-lg shadow"
                            : "w-full h-full bg-gray-900 rounded-lg shadow"
                        }`}
                      />
                    </div>
                  </div>

                  <table className="relative w-full">
                    <caption className="sr-only">Perk comparison</caption>
                    <thead>
                      <tr className="text-left">
                        <th scope="col">
                          <span className="sr-only">Perk</span>
                        </th>
                        {plans.map((plan) => (
                          <th key={plan.title} scope="col">
                            <span className="sr-only">{plan.title} plan</span>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {perks.map((perk) => (
                        <tr key={perk.title}>
                          <th
                            scope="row"
                            className={`${
                              storedTheme === "light"
                                ? "w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600"
                                : "w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-300"
                            }`}
                          >
                            {perk.title}
                          </th>
                          {perk.tiers.map((tier, index) => (
                            <td
                              key={tier.title}
                              className={classNames(
                                index === perk.tiers.length - 1
                                  ? "pl-4"
                                  : "px-4",
                                "relative w-1/4 py-0 text-center"
                              )}
                            >
                              <span className="relative w-full h-full py-3">
                                {tier.value === true ? (
                                  <CheckIcon
                                    className="mx-auto h-5 w-5 text-indigo-600"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <XIcon
                                    className="mx-auto h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                )}

                                <span className="sr-only">
                                  {tier.value === true ? "Yes" : "No"}
                                </span>
                              </span>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* Fake card borders */}
                  <div
                    className="absolute inset-0 flex items-stretch pointer-events-none"
                    aria-hidden="true"
                  >
                    <div className="w-1/4 pr-4" />
                    <div className="w-1/4 px-4">
                      <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                    </div>
                    <div className="w-1/4 px-4">
                      <div className="w-full h-full rounded-lg ring-2 ring-indigo-600 ring-opacity-100" />
                    </div>
                    <div className="w-1/4 pl-4">
                      <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Logo cloud */}
          <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8"></div>

          {/* Chart section */}
          <div>
            <LandingPageChart />
          </div>

          {/* FAQs */}
          <section
            aria-labelledby="faq-heading"
            className="bg-gradient-to-b from-gray-800 via-fuchsia-800 to-fuchsia-900"
          >
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="max-w-2xl lg:mx-auto lg:text-center">
                <h2
                  id="faq-heading"
                  className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
                >
                  {t("faq.faq_primary_title")}
                </h2>
                <p className="mt-4 text-gray-200">
                  {t("faq.faq_under_primary_title")}
                </p>
              </div>
              <div className="mt-20">
                <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
                  <div>
                    <dt className="font-semibold text-white">
                      {t("faq.faq_secondary_title")}
                    </dt>
                    <dd className="mt-3 text-gray-200">
                      {t("faq.faq_under_secondary_title")}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default LandingPage;
