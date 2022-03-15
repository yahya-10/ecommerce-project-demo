import { useEffect } from "react";
import Steps from "./Steps";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const UserValidationPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Steps stage={"03"} />
      <div className="bg-white">
        <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto py-16 sm:py-24">
            <div className="text-center">
              <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                {t("validation_section.validation_greeting")}
              </p>
              <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                {t("validation_section.validation_header")}
              </h1>
              <p className="mt-2 text-lg text-gray-500">
                {t("validation_section.validation_under_header")}
              </p>
            </div>
            <div className="mt-8">
              <Link
                to="/"
                className="text-base font-medium text-indigo-600 hover:text-indigo-500"
              >
                {t("validation_section.home_redirect")}
                <span aria-hidden="true"> &rarr;</span>
              </Link>
              <Link
                to="/checkout"
                className="text-base font-medium text-red-400 hover:text-red-600"
              >
                Temporary button
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default UserValidationPage;
