import React, { useState } from "react";
import UserConsumptionChart from "../charts/UserConsumptionChart";
import TransactionsTable from "./TransactionsTable";

import { ChartPieIcon, ChartBarIcon } from "@heroicons/react/solid";
import UserConsumptionBarChart from "../charts/UserConsumptionBarChart";

const UserHistory = () => {
  const [displayPieChart, setDisplayPiChart] = useState(false);

  console.log("userHistory", displayPieChart);
  return (
    <div className="mx-3 my-3">
      <TransactionsTable />
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
    </div>
  );
};

export default UserHistory;
