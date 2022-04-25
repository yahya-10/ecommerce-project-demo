import React from "react";
import { useSelector } from "react-redux";
import { BadgeCheckIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const PaymentDetails = () => {
  const { subscription } = useSelector((state) => state.cart);

  return (
    <div>
      <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6">
        <li key={subscription.title} className="col-span-1 flex shadow-sm">
          <div
            className={classNames(
              subscription.bgColor,
              "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md"
            )}
          >
            <BadgeCheckIcon className="w-5 h-5" />
          </div>
          <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
            <div className="flex-1 px-4 py-2 text-sm truncate">
              <a
                href={subscription.href}
                className="text-gray-900 font-medium hover:text-gray-600"
              >
                {subscription.title}
              </a>
              <p className="text-gray-500">Include ${subscription.tax} Tax</p>
            </div>
            <div className="flex-shrink-0 pr-2">
              ${subscription.priceMonthly + subscription.tax}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default PaymentDetails;
