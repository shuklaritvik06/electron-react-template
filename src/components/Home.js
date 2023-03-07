import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-4xl bg-green-500">
      <Link to={"/dashboard"}>Dashboard</Link>
    </div>
  );
};

export default Home;
