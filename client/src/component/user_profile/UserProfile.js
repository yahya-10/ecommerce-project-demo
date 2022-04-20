import React, { Fragment, useState, useRef } from "react";

import { Dialog, Transition } from "@headlessui/react";
import {
  CalendarIcon,
  HomeIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";

import SelectedSubscription from "./SelectedSubscription";
import Steps from "./Steps";
import UserHistory from "./UserHistory";
import comunikcrmLogo from "../../assets/comunikcrm.avif";
import cmkWhiteLogo from "../../assets/cmk-white-logo.avif";

/**
 * @private
 * in the profile user should fill a form of the pruchase order.
 */

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Create a reference.
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const UserProfile = ({ selectedPackage, storedTheme }) => {
  const { t } = useTranslation();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Show the user's summary and the selected subscription if toggle = true.
  const [toggle, setToggle] = useState(false);

  // This state controls if the form inputs are enabled or disabled.
  const [disableFields, setDisableFields] = useState(false);

  // Show the form view or the history panel
  const [view, setView] = useState(t("user_form.navigation"));

  const myRef = useRef();

  // User's inputs controllers with yup.
  const requiredMessage = "This field is required";
  const emptyFieldRegex = /^(?!\s*$).+/;
  const phoneNumberRegex =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

  const validationSchema = Yup.object({
    companyName: Yup.string()
      .matches(emptyFieldRegex, "Shouldn't be empty")
      .required(requiredMessage),
    about: Yup.string()
      .matches(emptyFieldRegex, "Shouldn't be empty")
      .required(requiredMessage),
    firstName: Yup.string()
      .matches(emptyFieldRegex, "Shouldn't be empty")
      .required(requiredMessage),
    lastName: Yup.string()
      .matches(emptyFieldRegex, "Shouldn't be empty")
      .required(requiredMessage),
    emailAddress: Yup.string().email().required(requiredMessage),
    phone: Yup.string()
      .matches(phoneNumberRegex, "Invalid phone number")
      .required(requiredMessage),
    country: Yup.string().required(requiredMessage),
    streetAddress: Yup.string()
      .matches(emptyFieldRegex, "Shouldn't be empty")
      .required(requiredMessage),
    city: Yup.string()
      .matches(emptyFieldRegex, "Shouldn't be empty")
      .required(requiredMessage),
    state: Yup.string()
      .matches(emptyFieldRegex, "Shouldn't be empty")
      .required(requiredMessage),
    zip: Yup.string()
      .matches(emptyFieldRegex, "Shouldn't be empty")
      .required(requiredMessage),
  });

  const navigation = [
    {
      name: t("user_form.navigation"),
      icon: HomeIcon,
      current: true,
    },
    {
      name: t("user_form.history"),
      icon: CalendarIcon,
      current: false,
    },
  ];

  // Change the displayed content (Form / History-grid)
  const changeViewHandler = (viewSpot) => {
    setView(viewSpot);
  };

  // Reset the inputs and enable the form fields
  const handleReset = () => {
    setToggle(false);
    setDisableFields(false);
  };

  // Scroll down automatically on submitting  the form.
  const executeScroll = () => scrollToRef(myRef);

  /**
   * After login, Checks if sessionStorage has a token & update isAuth to true.
   * This helps updating the header.
   */

  // useFormik will return all Formik state and helpers directly.
  const formik = useFormik({
    initialValues: {
      companyName: "",
      about: "",
      firstName: "",
      lastName: "",
      emailAddress: "",
      phone: "",
      country: "",
      streetAddress: "",
      city: "",
      state: "",
      zip: "",
    },
    onSubmit: () => {
      setToggle(true);
      setDisableFields(true);
    },
    validationSchema: validationSchema,
  });

  // Errors styles.
  const styles = {
    color: "red",
    fontSize: "2 rem",
  };

  return (
    <div
      className={`${
        storedTheme === "light"
          ? "bg-gray-50 transition-colors duration-300"
          : "bg-gray-800 transition-colors duration-300"
      }`}
    >
      <div className="mb-5">
        <Steps storedTheme={storedTheme} stage={"02"} />
      </div>
      <div className="h-full flex">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div
                className={`${
                  storedTheme === "light"
                    ? "relative flex-1 flex flex-col max-w-xs w-full bg-white transition-colors duration-300 focus:outline-none"
                    : "relative flex-1 flex flex-col max-w-xs w-full bg-black transition-colors duration-300 focus:outline-none"
                }`}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <div className="flex-shrink-0 flex items-center px-4">
                    <img
                      className="h-8 w-auto"
                      src={
                        storedTheme === "light" ? comunikcrmLogo : cmkWhiteLogo
                      }
                      alt="comunikcrm"
                    />
                  </div>
                  <nav aria-label="Sidebar" className="mt-5">
                    <div className="px-2 space-y-1">
                      {navigation.map((item) => (
                        <p
                          key={item.name}
                          onClick={() => changeViewHandler(item.name)}
                          className={classNames(
                            item.name === view
                              ? "bg-yellow-500 text-gray-50"
                              : "text-gray-800 bg-gray-50 hover:bg-yellow-500 hover:text-gray-900",
                            "group flex items-center px-2 py-2 text-sm font-medium rounded cursor-pointer"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-zinc-900"
                                : "text-zinc-900 group-hover:text-gray-500",
                              "mr-4 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </p>
                      ))}
                    </div>
                    <hr
                      className="border-t border-gray-200 my-5"
                      aria-hidden="true"
                    />
                  </nav>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Force sidebar to shrink to fit close icon  */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex lg:flex-shrink-0">
          <div className="flex flex-col w-64">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div
              className={`flex-1 flex flex-col min-h-0 border-r ${
                storedTheme === "light"
                  ? "border-gray-200 bg-gray-100 transition-colors duration-300"
                  : "border-gray-500 bg-gray-700 transition-colors duration-300"
              }`}
            >
              <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <nav className="mt-5 flex-1" aria-label="Sidebar">
                  <div className="px-2 space-y-1">
                    {navigation.map((item) => (
                      <p
                        key={item.name}
                        onClick={() => changeViewHandler(item.name)}
                        className={classNames(
                          item.name === view
                            ? "bg-yellow-500 text-gray-50"
                            : "text-gray-800 bg-gray-50 hover:bg-yellow-500 hover:text-gray-900",
                          "group flex items-center px-2 py-2 text-sm font-medium cursor-pointer"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <item.icon
                          className={classNames(
                            item.current ? "text-zinc-900" : "text-zinc-900",
                            "mr-3 flex-shrink-0 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </p>
                    ))}
                  </div>
                  <hr
                    className="border-t border-gray-200 my-5"
                    aria-hidden="true"
                  />
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
          <div className="lg:hidden">
            <div
              className={`${
                storedTheme === "light"
                  ? "flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5"
                  : "flex items-center justify-between bg-gray-800 border-b border-gray-800 px-4 py-1.5"
              }`}
            >
              <div>
                <button
                  type="button"
                  className="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600"
                  onClick={() => setSidebarOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
          {/* Form  */}
          {view === t("user_form.navigation") ? (
            <form
              onSubmit={formik.handleSubmit}
              className={`${
                storedTheme === "light"
                  ? "space-y-8 divide-y divide-gray-200 ml-5 mr-5 mt-5"
                  : "space-y-8 divide-y divide-gray-700 ml-5 mr-5 mt-5"
              }`}
              id="submit"
            >
              <div
                className={`${
                  storedTheme === "light"
                    ? "space-y-8 divide-y divide-gray-200 sm:space-y-5"
                    : "space-y-8 divide-y divide-gray-700 sm:space-y-5"
                }`}
              >
                <div>
                  <div>
                    <h3
                      className={`"text-lg leading-6 font-medium" ${
                        storedTheme === "light"
                          ? "text-gray-900"
                          : "text-gray-50"
                      }`}
                    >
                      {/* Business */}
                      {t("user_form.form_top_header_title")}
                    </h3>
                    <p
                      className={`"mt-1 max-w-2xl text-sm " ${
                        storedTheme === "light"
                          ? "text-gray-500"
                          : "text-gray-400"
                      }`}
                    >
                      {t("user_form.form_top_header_under_title")}
                    </p>
                  </div>

                  <div
                    className={`${
                      storedTheme === "light"
                        ? "mt-6 sm:mt-5 space-y-6 sm:space-y-5"
                        : "mt-6 sm:mt-5 space-y-6 sm:space-y-5 divide-gray-700"
                    }`}
                  >
                    <div
                      className={`${
                        storedTheme === "light"
                          ? "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                          : "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-700 sm:pt-5"
                      }`}
                    >
                      <label
                        htmlFor="companyName"
                        className={`"block text-sm font-medium sm:mt-px sm:pt-2 " ${
                          storedTheme === "light"
                            ? "text-gray-700"
                            : "text-gray-50"
                        }`}
                      >
                        {t("user_form.form_company_name")}
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <div className="max-w-lg flex rounded-md shadow-sm">
                          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                            workcation.com/
                          </span>
                          <input
                            type="text"
                            name="companyName"
                            id="companyName"
                            autoComplete="companyname"
                            disabled={disableFields}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.companyName}
                            className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                          />
                          {formik.touched.companyName &&
                          formik.errors.companyName ? (
                            <div style={styles}>
                              {formik.errors.companyName}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`${
                        storedTheme === "light"
                          ? "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                          : "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-700 sm:pt-5"
                      }`}
                    >
                      <label
                        htmlFor="about"
                        className={`"block text-sm font-medium sm:mt-px sm:pt-2 " ${
                          storedTheme === "light"
                            ? "text-gray-700"
                            : "text-gray-50"
                        }`}
                      >
                        {t("user_form.form_about")}
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <textarea
                          id="about"
                          name="about"
                          rows={3}
                          disabled={disableFields}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.about}
                          className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                        />
                        {formik.touched.about && formik.errors.about ? (
                          <div style={styles}>{formik.errors.about}</div>
                        ) : null}
                        <p
                          className={`"mt-2 text-sm  " ${
                            storedTheme === "light"
                              ? "text-gray-500"
                              : "text-gray-400"
                          }`}
                        >
                          {t("user_form.form_about_desc")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                  <div>
                    <h3
                      className={`"text-lg leading-6 font-medium " ${
                        storedTheme === "light"
                          ? "text-gray-900"
                          : "text-gray-50"
                      }`}
                    >
                      {t("user_form.form_mid_header_title")}
                    </h3>
                    <p
                      className={`"mt-1 max-w-2xl text-sm " ${
                        storedTheme === "light"
                          ? "text-gray-500"
                          : "text-gray-400"
                      }`}
                    >
                      {t("user_form.form_mid_header_under_title")}
                    </p>
                  </div>
                  <div
                    className={`${
                      storedTheme === "light"
                        ? "space-y-6 sm:space-y-5"
                        : "space-y-6 sm:space-y-5 divide-gray-700"
                    }`}
                  >
                    <div
                      className={`${
                        storedTheme === "light"
                          ? "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                          : "sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-700 sm:pt-5"
                      }`}
                    >
                      <label
                        htmlFor="first-name"
                        className={`"block text-sm font-medium sm:mt-px sm:pt-2" ${
                          storedTheme === "light"
                            ? "text-gray-700"
                            : "text-gray-50"
                        }`}
                      >
                        {t("user_form.form_st_name")}
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input
                          type="text"
                          name="firstName"
                          id="first-name"
                          autoComplete="given-name"
                          disabled={disableFields}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.firstName}
                          className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                          <div style={styles}>{formik.errors.firstName}</div>
                        ) : null}
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="last-name"
                        className={`"block text-sm font-medium sm:mt-px sm:pt-2" ${
                          storedTheme === "light"
                            ? "text-gray-700"
                            : "text-gray-50"
                        }`}
                      >
                        {t("user_form.form_last_name")}
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input
                          type="text"
                          name="lastName"
                          id="last-name"
                          autoComplete="family-name"
                          disabled={disableFields}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.lastName}
                          className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                          <div style={styles}>{formik.errors.lastName}</div>
                        ) : null}
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="email"
                        className={`"block text-sm font-medium sm:mt-px sm:pt-2" ${
                          storedTheme === "light"
                            ? "text-gray-700"
                            : "text-gray-50"
                        }`}
                      >
                        {t("email")}
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input
                          id="email"
                          name="emailAddress"
                          type="email"
                          autoComplete="email"
                          disabled={disableFields}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.emailAddress}
                          className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                        />
                        {formik.touched.emailAddress &&
                        formik.errors.emailAddress ? (
                          <div style={styles}>{formik.errors.emailAddress}</div>
                        ) : null}
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="phone"
                        className={`"block text-sm font-medium sm:mt-px sm:pt-2" ${
                          storedTheme === "light"
                            ? "text-gray-700"
                            : "text-gray-50"
                        }`}
                      >
                        {/* {t("email")} */}
                        Phone
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input
                          id="phone"
                          name="phone"
                          type="text"
                          // autoComplete="phone"
                          disabled={disableFields}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.phone}
                          className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                          // className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 sm:text-sm border-gray-300 rounded-md"
                        />
                        {formik.touched.phone && formik.errors.phone ? (
                          <div style={styles}>{formik.errors.phone}</div>
                        ) : null}
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="country"
                        className={`"block text-sm font-medium sm:mt-px sm:pt-2" ${
                          storedTheme === "light"
                            ? "text-gray-700"
                            : "text-gray-50"
                        }`}
                      >
                        {t("user_form.form_country")}
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          disabled={disableFields}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.country}
                          className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>France</option>
                          <option>Tunisia</option>
                          <option>Ivory Coast</option>
                          <option>China</option>
                        </select>
                        {formik.touched.country && formik.errors.country ? (
                          <p style={styles}>{formik.errors.country}</p>
                        ) : null}
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="street-address"
                        className={`"block text-sm font-medium sm:mt-px sm:pt-2" ${
                          storedTheme === "light"
                            ? "text-gray-700"
                            : "text-gray-50"
                        }`}
                      >
                        {t("user_form.form_str_address")}
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input
                          type="text"
                          name="streetAddress"
                          id="street-address"
                          autoComplete="street-address"
                          disabled={disableFields}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.streetAddress}
                          className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                        />
                        {formik.touched.streetAddress &&
                        formik.errors.streetAddress ? (
                          <div style={styles}>
                            {formik.errors.streetAddress}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="city"
                        className={`"block text-sm font-medium sm:mt-px sm:pt-2" ${
                          storedTheme === "light"
                            ? "text-gray-700"
                            : "text-gray-50"
                        }`}
                      >
                        {t("user_form.form_city")}
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input
                          type="text"
                          name="city"
                          id="city"
                          autoComplete="address-level2"
                          disabled={disableFields}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.city}
                          className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                        />
                        {formik.touched.city && formik.errors.city ? (
                          <div style={styles}>{formik.errors.city}</div>
                        ) : null}
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="state"
                        className={`"block text-sm font-medium sm:mt-px sm:pt-2" ${
                          storedTheme === "light"
                            ? "text-gray-700"
                            : "text-gray-50"
                        }`}
                      >
                        {t("user_form.form_state")}
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input
                          type="text"
                          name="state"
                          id="state"
                          autoComplete="address-level1"
                          disabled={disableFields}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.state}
                          className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                        />
                        {formik.touched.state && formik.errors.state ? (
                          <div style={styles}>{formik.errors.state}</div>
                        ) : null}
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="zip"
                        className={`"block text-sm font-medium sm:mt-px sm:pt-2" ${
                          storedTheme === "light"
                            ? "text-gray-700"
                            : "text-gray-50"
                        }`}
                      >
                        {t("user_form.form_zip")}
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input
                          type="text"
                          name="zip"
                          id="zip"
                          autoComplete="postal-code"
                          disabled={disableFields}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.zip}
                          className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                        />
                        {formik.touched.zip && formik.errors.zip ? (
                          <div style={styles}>{formik.errors.zip}</div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-5">
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="bg-white py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={handleReset}
                    >
                      {t("user_form.form_reset")}
                    </button>
                    <button
                      id="validate-btn"
                      type="submit"
                      onClick={executeScroll}
                      className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      {t("user_form.form_validate")}
                    </button>
                  </div>
                </div>
                <div ref={myRef}>
                  {toggle && (
                    <SelectedSubscription
                      selectedPackage={selectedPackage}
                      data={formik.values}
                      storedTheme={storedTheme}
                    />
                  )}
                </div>
              </div>
            </form>
          ) : (
            <UserHistory storedTheme={storedTheme} />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
