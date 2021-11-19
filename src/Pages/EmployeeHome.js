import React from "react";
import { MainNav } from "../components/MainNav/MainNav";
import { UserHomeInfo } from "../components/UserHomeInfo/UserHomeInfo";
import { UserHomeTime } from "../components/UserHomeTime/UserHomeTime";

export const EmployeeHome = () => {
  return (
    <>
      <MainNav />
      <UserHomeInfo />
      <UserHomeTime />
    </>
  );
};
