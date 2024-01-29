"use client";

import { logout } from "@/actions/auth/logout";
import { Slot } from "@radix-ui/react-slot";
import { Button } from "../ui/button";

interface LogoutButtonProps {
  children?: React.ReactNode;
}

export const LogoutButton = ({ children }: LogoutButtonProps) => {
  return (
    <Slot>
      <Button
        onClick={() => logout()}
        variant="ghost"
        className="w-full justify-start"
      >
        {children}
      </Button>
    </Slot>
  );
};
