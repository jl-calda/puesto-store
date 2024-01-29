import { auth } from "@/auth";
import { currentUser } from "@/lib/auth";
import React from "react";

const StoresPage = async () => {
  const user = await currentUser();
  return <div className="h-full">{JSON.stringify(user?.name)}</div>;
};

export default StoresPage;
