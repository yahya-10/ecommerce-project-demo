import React, { useState } from "react";
import UserConsumptionChart from "../charts/UserConsumptionChart";
import TransactionsTable from "./TransactionsTable";

import { ChartPieIcon, ChartBarIcon } from "@heroicons/react/solid";
import UserConsumptionBarChart from "../charts/UserConsumptionBarChart";

const UserHistory = () => {
  const [displayPieChart, setDisplayPiChart] = useState(false);

  console.log(displayPieChart);
  return (
    <div className="mx-3 my-3">
      <TransactionsTable />
      <div>
        <div className="flex flex-row px-3 py-4 w-1/2">
          <div className={displayPieChart ? "text-red-400" : "text-gray-400"}>
            <ChartPieIcon
              onClick={() => setDisplayPiChart(true)}
              className="h-6 w-6 "
              aria-hidden="true"
            />
          </div>
          <div className={!displayPieChart ? "text-red-400" : "text-gray-400"}>
            <ChartBarIcon
              onClick={() => setDisplayPiChart(false)}
              className="h-6 w-6 "
              aria-hidden="true"
            />
          </div>
        </div>
        {displayPieChart ? (
          <UserConsumptionBarChart />
        ) : (
          <UserConsumptionChart />
        )}
      </div>
    </div>
  );
};

export default UserHistory;
