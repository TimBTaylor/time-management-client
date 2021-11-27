import React from "react";
import { MainNav } from "../components/MainNav/MainNav";
import { UserProfileInfo } from "../components/UserProfileInfo/UserProfileInfo";
import { AdminProfileTime } from "../components/AdminProfileTime/AdminProfileTime";

export const AdminProfile = () => {
  return (
    <>
      <MainNav />
      <UserProfileInfo />
      <AdminProfileTime />
    </>
  );
};
