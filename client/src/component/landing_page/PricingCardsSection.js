import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { CheckIcon } from "@heroicons/react/solid";

import { selectSubscription } from "../../features/subscriptions/subscriptionSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const PricingCardsSection = ({ monthlyPlan }) => {
  //   const [monthlyPlan, setMonthlyPlan] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleAddSubscription = (product) => {
    dispatch(selectSubscription(product));
  };

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

  return (
    <div>
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
                        plan.featured ? "text-indigo-600" : "text-white",
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
                          plan.featured ? "text-gray-700" : "text-white",
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
                          plan.featured ? "text-gray-500" : "text-indigo-200",
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
                    onClick={() => handleAddSubscription(plan)}
                    className={classNames(
                      plan.featured
                        ? "bg-indigo-600 text-white hover:bg-indigo-700"
                        : "bg-white text-indigo-600 hover:bg-indigo-50",
                      "mt-6 w-full inline-block py-2 px-8 border border-transparent shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full"
                    )}
                  >
                    {t("pricing_section.pricing_section_buy")} {plan.title}
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
                  <li key={mainFeature.id} className="py-3 flex items-center">
                    <CheckIcon
                      className={classNames(
                        plan.featured ? "text-indigo-500" : "text-indigo-200",
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
  );
};

export default PricingCardsSection;
