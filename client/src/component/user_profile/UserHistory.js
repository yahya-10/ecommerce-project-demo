import React from "react";
import UserConsumptionChart from "../charts/UserConsumptionChart";
import TransactionsTable from "./TransactionsTable";

const UserHistory = () => {
  return (
    <>
      <TransactionsTable />
      <UserConsumptionChart />
    </>
  );
};

export default UserHistory;
