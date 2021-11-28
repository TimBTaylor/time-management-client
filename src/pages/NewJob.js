import React from "react";
import { NewJobEntry } from "../components/NewJobEntry/NewJobEntry";
import { MainNav } from "../components/MainNav/MainNav";

export const NewJob = () => {
  return (
    <>
      <MainNav />
      <NewJobEntry />
    </>
  );
};
