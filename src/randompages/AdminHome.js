import React from "react";
import { MainNav } from "../components/MainNav/MainNav";
import { UserHomeInfo } from "../components/UserHomeInfo/UserHomeInfo";
import { UserHomeTime } from "../components/UserHomeTime/UserHomeTime";

export const AdminHome = () => {
  return (
    <>
      <MainNav />
      <UserHomeInfo />
      <UserHomeTime />
    </>
  );
};
