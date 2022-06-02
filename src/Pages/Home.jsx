import React, { useEffect } from "react";
import HomeMain from "../Components/Home/HomeMain";

const Home = () => {
  useEffect(() => {
    localStorage.setItem("page", "home");
  }, []);
  return (
    <React.Fragment>
      <HomeMain />
    </React.Fragment>
  );
};
export default Home;
