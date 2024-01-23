import { auth } from "@/auth";
import React from "react";

const StoresPage = async () => {
  const user = await auth();
  return <div className="h-full">{JSON.stringify(user)}</div>;
};

export default StoresPage;
