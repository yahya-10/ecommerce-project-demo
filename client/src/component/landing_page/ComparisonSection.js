import React from "react";
import { useTranslation } from "react-i18next";
import { CheckIcon, XIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ComparisonSection = ({ storedTheme }) => {
  const { t } = useTranslation();

  const plans = [
    {
      id: 20,
      title: "Starter",
      featured: false,
      description: t("plans.starter_plan_desc"),
      priceMonthly: 5,
      tax: 5.0,
      priceYearly: 56,
      mainFeatures: [
        { id: 1, value: t("plans.starter_value_1") },
        { id: 2, value: t("plans.starter_value_2") },
        { id: 3, value: t("plans.starter_value_3") },
        { id: 4, value: t("plans.starter_value_4") },
        { id: 5, value: t("plans.starter_value_5") },
        { id: 6, value: t("plans.starter_value_6") },
      ],
      bgColor: "bg-green-500",
    },
    {
      id: 21,
      title: "Scale",
      featured: true,
      description: t("plans.scale_plan_desc"),
      priceMonthly: 19,
      tax: 10.0,
      priceYearly: 220,
      mainFeatures: [
        { id: 1, value: t("plans.scale_value_1") },
        { id: 2, value: t("plans.scale_value_2") },
        { id: 3, value: t("plans.scale_value_3") },
        { id: 4, value: t("plans.scale_value_4") },
        { id: 5, value: t("plans.scale_value_5") },
        { id: 6, value: t("plans.scale_value_6") },
      ],
      bgColor: "bg-yellow-500",
    },
    {
      id: 22,
      title: "Growth",
      featured: false,
      description: t("plans.growth_plan_desc"),
      priceMonthly: 12,
      tax: 8.0,
      priceYearly: 140,
      mainFeatures: [
        { id: 1, value: t("plans.growth_value_1") },
        { id: 2, value: t("plans.growth_value_2") },
        { id: 3, value: t("plans.growth_value_3") },
        { id: 4, value: t("plans.growth_value_4") },
        { id: 5, value: t("plans.growth_value_5") },
        { id: 6, value: t("plans.growth_value_6") },
      ],
      bgColor: "bg-pink-500",
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

  return (
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
                plan.featured ? "border-indigo-600" : "border-transparent",
                "py-6 border-t-2"
              )}
            >
              <p
                className={classNames(
                  plan.featured
                    ? "text-indigo-600"
                    : `${
                        storedTheme === "light" ? "text-gray-900" : "text-white"
                      }`,
                  "text-sm font-bold"
                )}
              >
                {plan.title}
              </p>
              <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative">
        {/* Fake Card backgrounds */}
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
          <caption className="sr-only">Business feature comparison</caption>
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
                      index === feature.tiers.length - 1 ? "pl-4" : "px-4",
                      "relative w-1/4 py-0 text-center"
                    )}
                  >
                    <span className="relative w-full h-full py-3">
                      {typeof tier.value === "string" ? (
                        <span
                          className={classNames(
                            tier.featured ? "text-indigo-600" : "text-gray-600",
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

        {/* Fake Card borders */}
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
        {/* Fake Card backgrounds */}
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
                      index === perk.tiers.length - 1 ? "pl-4" : "px-4",
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

        {/* Fake Card borders */}
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
  );
};

export default ComparisonSection;
