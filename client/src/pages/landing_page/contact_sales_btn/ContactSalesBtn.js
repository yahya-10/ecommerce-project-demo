import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { selectSubscription } from "../../../features/subscriptions/subscriptionSlice";

import "./contactSalesBtn.css";

const ContactSalesBtn = () => {
  const dispatch = useDispatch();

  // Add the selected package to redux state
  const handleAddSubscription = (product) => {
    dispatch(selectSubscription(product));
  };

  const customPlanFeature = {
    id: 24,
    title: "Custom Plan",
    featured: false,
    description: "Custom plan",
    priceMonthly: 5,
    tax: 5.0,
    priceYearly: 56,
    mainFeatures: [
      { id: 1, value: "value1" },
      { id: 2, value: "value1" },
      { id: 3, value: "value1" },
      { id: 4, value: "value1" },
      { id: 5, value: "value1" },
      { id: 6, value: "value1" },
    ],
    bgColor: "bg-blue-500",
  };

  return (
    <Link
      to="/profile"
      className="arrow-button"
      onClick={() => handleAddSubscription(customPlanFeature)}
    >
      Contact Sales for a Custom Subscription<span className="arrow"></span>
    </Link>
  );
};

export default ContactSalesBtn;
