import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { toast } from "react-toastify";

import { register, reset } from "../../features/auth/authSlice";

import Hero from "../../assets/hero.png";
import Spinner from "../../utils/spinner/Spinner";

/**
 *
 * @param {*} userData
 * @returns Give acces to a new user
 */

const Register = ({ storedTheme }) => {
  const [fullName] = useState();
  const [companyName] = useState();
  const [email] = useState();
  const [password] = useState();
  const [showPwd, setShowPwd] = useState(false);

  // User's inputs controllers with yup.
  const requiredMessage = "This field is required";
  const validationSchema = Yup.object({
    companyName: Yup.string().required(requiredMessage),
    fullName: Yup.string().required(requiredMessage),
    email: Yup.string().email().required(requiredMessage),
    password: Yup.string().required(requiredMessage).min(8).max(12),
  });

  // Importing and destructuring the state to the component
  const { user, isError, isSuccess, message, isLoading } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    // In case of error, it'll display the error message
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate(`/profile`);
    }

    dispatch(reset());
  }, [isError, message, navigate, isSuccess, user, dispatch]);

  // useFormik will return all Formik state and helpers directly.
  const formik = useFormik({
    initialValues: {
      fullName: "",
      companyName: "",
      email: "",
      password: "",
    },
    onSubmit: async () => {
      dispatch(
        register({
          fullName,
          companyName,
          email,
          password,
        })
      );
      navigate("/profile");
      // window.location.reload();
    },
    validationSchema: validationSchema,
  });

  // Icons motion
  const svgVariants = {
    hidden: { rotate: 360 },
    visible: {
      rotate: 0,
      transition: {
        duration: 1,
      },
    },
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className={`${
          storedTheme === "light"
            ? "min-h-full flex bg-gray-50 transition-colors duration-300"
            : "min-h-full flex bg-gray-800 transition-colors duration-300"
        }`}
      >
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <h2
              className={`${
                storedTheme === "light"
                  ? "mt-6 text-3xl font-extrabold text-gray-900"
                  : "mt-6 text-3xl font-extrabold text-gray-50"
              }`}
            >
              {t("signup.signup_title")}
            </h2>
            <p
              className={`${
                storedTheme === "light"
                  ? "mt-2 text-sm text-gray-600"
                  : "mt-2 text-sm text-gray-200"
              }`}
            >
              {t("login.or")}{" "}
              <Link
                to="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                {t("signup.login_redirect")}
              </Link>
            </p>

            <div className="mt-8">
              <p
                className={`${
                  storedTheme === "light"
                    ? "text-sm font-medium text-gray-700"
                    : "text-sm font-medium text-gray-200"
                }`}
              >
                {t("signup.signup_with")}
              </p>

              <div className="mt-1 grid grid-cols-3 gap-3">
                <a
                  href="/"
                  className={`${
                    storedTheme === "light"
                      ? "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                      : "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  <span className="sr-only">Sign in with Facebook</span>
                  <motion.svg
                    variants={svgVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    style={{ color: "#4267B2" }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                      clipRule="evenodd"
                    />
                  </motion.svg>
                </a>

                <a
                  href="/"
                  className={`${
                    storedTheme === "light"
                      ? "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                      : "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  <span className="sr-only">Sign in with Twitter</span>
                  <motion.svg
                    variants={svgVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    style={{ color: "#1DA1F2" }}
                  >
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </motion.svg>
                </a>

                <div>
                  <a
                    href="/"
                    className={`${
                      storedTheme === "light"
                        ? "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        : "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    <span className="sr-only">Sign in with GitHub</span>
                    <motion.svg
                      variants={svgVariants}
                      initial="hidden"
                      animate="visible"
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      style={{ color: "black" }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                  </a>
                </div>
              </div>

              <div className="mt-6 relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    {t("login.second_option")}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <form
                  onSubmit={formik.handleSubmit}
                  id="submit"
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="fullName"
                      className={`${
                        storedTheme === "light"
                          ? "block text-sm font-medium text-gray-700"
                          : "block text-sm font-medium text-gray-200"
                      }`}
                    >
                      {t("signup.full_name")}
                    </label>
                    <div className="mt-1">
                      <input
                        id="fullName"
                        name="fullName"
                        type="fullName"
                        data-testid="fullname"
                        value={formik.values.fullName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete="fullName"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    {formik.touched.fullName && formik.errors.fullName ? (
                      <h6 style={{ color: "red" }}>{formik.errors.fullName}</h6>
                    ) : null}
                  </div>
                  <div>
                    <label
                      htmlFor="companyName"
                      className={`${
                        storedTheme === "light"
                          ? "block text-sm font-medium text-gray-700"
                          : "block text-sm font-medium text-gray-200"
                      }`}
                    >
                      {t("signup.company_name")}
                    </label>
                    <div className="mt-1">
                      <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        data-testid="companyname"
                        value={formik.values.companyName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete=""
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    {formik.touched.companyName && formik.errors.companyName ? (
                      <h6 style={{ color: "red" }}>
                        {formik.errors.companyName}
                      </h6>
                    ) : null}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className={`${
                        storedTheme === "light"
                          ? "block text-sm font-medium text-gray-700"
                          : "block text-sm font-medium text-gray-200"
                      }`}
                    >
                      {t("login.email")}
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        data-testid="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete="email"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    {formik.touched.email && formik.errors.email ? (
                      <h6 style={{ color: "red" }}>{formik.errors.email}</h6>
                    ) : null}
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className={`${
                        storedTheme === "light"
                          ? "block text-sm font-medium text-gray-700"
                          : "block text-sm font-medium text-gray-200"
                      }`}
                    >
                      {t("login.password")}
                    </label>
                    <div className="relative flex items-end mt-1">
                      <input
                        id="password"
                        name="password"
                        type={showPwd ? "text" : "password"}
                        data-testid="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete="current-password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      {showPwd ? (
                        <EyeIcon
                          className="h-4 w-4 absolute right-2 align-center top-2"
                          aria-hidden="true"
                          onClick={() => setShowPwd(false)}
                        />
                      ) : (
                        <EyeOffIcon
                          className="h-4 w-4 absolute right-2 align-center top-2"
                          aria-hidden="true"
                          onClick={() => setShowPwd(true)}
                        />
                      )}
                    </div>
                    {formik.touched.password && formik.errors.password ? (
                      <h6 style={{ color: "red" }}>{formik.errors.password}</h6>
                    ) : null}
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      {t("login.sign_up")}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 1.3, bounce: 0.15 }}
          className="hidden lg:block relative w-0 flex-1"
        >
          <img
            style={{ maxWidth: "100%" }}
            className="absolute inset-0 h-full w-full object-cover"
            src={Hero}
            height={559}
            width={808}
            alt="register-banner"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Register;
