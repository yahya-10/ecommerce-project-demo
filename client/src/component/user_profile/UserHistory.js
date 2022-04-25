import React, { useState } from "react";

import UserConsumptionBarChart from "../charts/UserConsumptionBarChart";
import UserConsumptionChart from "../charts/UserConsumptionChart";
import TransactionsTable from "./TransactionsTable";

import { ChartPieIcon, ChartBarIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

const UserHistory = ({ storedTheme }) => {
  // Toggle between charts icons.
  const [displayPieChart, setDisplayPiChart] = useState(false);

  // console.log("userHistory", displayPieChart);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mx-3 my-3"
    >
      <TransactionsTable storedTheme={storedTheme} />
      <div>
        <div className="flex flex-row px-3 py-4">
          <div className="flex flex-column">
            <div className={displayPieChart ? "text-red-400" : "text-gray-400"}>
              <ChartPieIcon
                onClick={() => setDisplayPiChart(true)}
                className="h-6 w-6 "
                aria-hidden="true"
              />
            </div>
            <div
              className={!displayPieChart ? "text-red-400" : "text-gray-400"}
            >
              <ChartBarIcon
                onClick={() => setDisplayPiChart(false)}
                className="h-6 w-6 "
                aria-hidden="true"
              />
            </div>
          </div>
          <div style={{ height: "40vh", width: "80vw" }}>
            {displayPieChart ? (
              <UserConsumptionBarChart />
            ) : (
              <UserConsumptionChart />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UserHistory;
