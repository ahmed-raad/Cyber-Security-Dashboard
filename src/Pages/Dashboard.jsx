import React, { useEffect } from "react";
import DashMain from "../Components/Dashboard/DashMain";

const Dashboard = () => {
  useEffect(() => {
    localStorage.setItem("page", "dashboard");
  }, []);
  return (
    <React.Fragment>
      <DashMain />
    </React.Fragment>
  );
};

export default Dashboard;
