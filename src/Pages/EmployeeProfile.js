import React from "react";
import { MainNav } from "../components/MainNav/MainNav";
import { UserProfileInfo } from "../components/UserProfileInfo/UserProfileInfo";
import { EmployeeProfileTime } from "../components/EmployeeProfileTime/EmployeeProfileTime";

export const EmployeeProfile = () => {
  return (
    <>
      <MainNav />
      <UserProfileInfo />
      <EmployeeProfileTime />
    </>
  );
};
