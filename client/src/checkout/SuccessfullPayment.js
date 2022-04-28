import { useEffect } from "react";
import { useSelector } from "react-redux";

import Steps from "../pages/user_profile/Steps";

import jsPDF from "jspdf";
import "jspdf-autotable";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

/**
 * @returns Static component with an invoice of the last Purchase.
 */

const SuccessfullPayment = ({ storedTheme }) => {
  const { subscription } = useSelector((state) => state.cart);

  const projects = [
    {
      id: 1,
      name: subscription.title,
      hours: "12.0",
      rate: "$75.00",
      price: subscription.priceMonthly,
    },
  ];

  useEffect(() => {
    toast.success("Thanks for your business", { position: "bottom-right" });
  });

  // Initiate a new reference from the jspdf library
  const doc = new jsPDF();

  // Get the exact time of the download
  var currentdate = new Date();
  var exactTime =
    currentdate.getDate() +
    "-" +
    (currentdate.getMonth() + 1) +
    "-" +
    currentdate.getFullYear() +
    "_" +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();

  // Convert html table to pdf and downloading handler.
  const save = () => {
    doc.autoTable({ html: "#invoice-field" });
    doc.save(`invoice-${exactTime}.pdf`);
  };

  // console.log("successfull payment comp", <Invoice />);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`${
        storedTheme === "light"
          ? "bg-white transition-colors duration-300"
          : "bg-gray-800 transition-colors duration-300"
      }`}
    >
      <Steps storedTheme={storedTheme} stage={"05"} />
      <div id="printable-area" className="mt-5 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1
              className={`${
                storedTheme === "light"
                  ? "text-xl font-semibold text-gray-900"
                  : "text-xl font-semibold text-gray-50"
              }`}
            >
              Invoice
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              For work completed from{" "}
              <time dateTime="2022-08-01">August 1, 2022</time> to{" "}
              <time dateTime="2022-08-31">August 31, 2022</time>.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              type="button"
              onClick={save}
              className="inline-flex items-center justify-center border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              Download
            </button>
          </div>
        </div>
        <div className="-mx-4 mt-8 flex flex-col sm:-mx-6 md:mx-0">
          <table
            id="invoice-field"
            className="min-w-full divide-y divide-gray-300"
          >
            {/* <Invoice />  */}
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-600 sm:pl-6 md:pl-0"
                >
                  Purchases
                </th>
                <th
                  scope="col"
                  className="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-600 sm:table-cell"
                >
                  Hours
                </th>
                <th
                  scope="col"
                  className="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-600 sm:table-cell"
                >
                  Rate
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-600 sm:pr-6 md:pr-0"
                >
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-b border-gray-200">
                  <td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                    <div
                      className={`${
                        storedTheme === "light"
                          ? "font-medium text-gray-900"
                          : "font-medium text-gray-50"
                      }`}
                    >
                      {project.name}
                    </div>
                    <div className="mt-0.5 text-gray-500 sm:hidden">
                      {project.hours} hours at {project.rate}
                    </div>
                  </td>
                  <td className="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell">
                    {project.hours}
                  </td>
                  <td className="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell">
                    {project.rate}
                  </td>
                  <td className="py-4 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-6 md:pr-0">
                    ${project.price}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th
                  scope="row"
                  colSpan={3}
                  className="hidden pl-6 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell md:pl-0"
                >
                  Subtotal
                </th>
                <th
                  scope="row"
                  className="pl-4 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden"
                >
                  Subtotal
                </th>
                <td className="pl-3 pr-4 pt-6 text-right text-sm text-gray-500 sm:pr-6 md:pr-0">
                  ${subscription.priceMonthly}
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  colSpan={3}
                  className="hidden pl-6 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell md:pl-0"
                >
                  Tax
                </th>
                <th
                  scope="row"
                  className="pl-4 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden"
                >
                  Tax
                </th>
                <td className="pl-3 pr-4 pt-4 text-right text-sm text-gray-500 sm:pr-6 md:pr-0">
                  ${subscription.tax}
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  colSpan={3}
                  className={`${
                    storedTheme === "light"
                      ? "hidden pl-6 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell md:pl-0"
                      : "hidden pl-6 pr-3 pt-4 text-right text-sm font-semibold text-gray-50 sm:table-cell md:pl-0"
                  }`}
                >
                  Total
                </th>
                <th
                  scope="row"
                  className={`${
                    storedTheme === "light"
                      ? "pl-4 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden"
                      : "pl-4 pr-3 pt-4 text-left text-sm font-semibold text-gray-50 sm:hidden"
                  }`}
                >
                  Total
                </th>
                <td
                  className={`${
                    storedTheme === "light"
                      ? "pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0"
                      : "pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-50 sm:pr-6 md:pr-0"
                  }`}
                >
                  ${subscription.priceMonthly + subscription.tax}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default SuccessfullPayment;
