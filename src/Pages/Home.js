import React from "react";
import { HomeNav } from "../components/HomeNav/HomeNav";
import { HomeView } from "../components/HomeView/HomeView";

export const Home = () => {
  console.log("home");
  return (
    <div>
      <HomeNav />
      <HomeView />
    </div>
  );
};
