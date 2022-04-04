import { useRef } from "react";
import Steps from "../component/user_profile/Steps";
import Notification from "./Notification";

import ReactToPrint from "react-to-print";

/**
 *
 * @returns Static component with an invoice of the last Purchase.
 */

const SuccessfullPayment = ({ storedTheme }) => {
  const projects = [
    {
      id: 1,
      name: "New Advertising Campaign",
      hours: "12.0",
      rate: "$75.00",
      price: "$900.00",
    },
    // More projects...
  ];

  let componentRef = useRef();

  // console.log("successfull payment comp");
  return (
    <div className={`${storedTheme === "light" ? "bg-white" : "bg-gray-900"}`}>
      <Steps stage={"05"} />
      <Notification />
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
          {/* Enable the customer to download the invoice on his device. */}
          <ReactToPrint
            trigger={() => {
              return (
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                  >
                    {/* <a href="#" download="Invoice.pdf"> */}
                    Download
                    {/* </a> */}
                  </button>
                </div>
              );
            }}
            content={() => componentRef}
          />
        </div>
        <div className="-mx-4 mt-8 flex flex-col sm:-mx-6 md:mx-0">
          <table
            ref={(el) => (componentRef = el)}
            className="min-w-full divide-y divide-gray-300"
          >
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
                      // className="font-medium text-gray-900"
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
                    {project.price}
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
                  $3,900.00
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
                  $585.00
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
                  $4,485.00
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SuccessfullPayment;
