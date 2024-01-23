"use client";

import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Input, InputProps } from "./ui/input";
import { useState } from "react";

interface InputPasswordProps {
  field: InputProps;
}

export const InputPassword = ({ field }: InputPasswordProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <Input
        {...field}
        type={show ? "text" : "password"}
        placeholder="*******"
      />
      <Button
        className="absolute top-2.5 right-2.5 w-5 h-5 text-muted-foreground cursor-pointer transition-all duration-75"
        variant="ghost"
        size="icon"
        asChild
        onClick={() => setShow(!show)}
      >
        {show ? (
          <EyeOpenIcon className="text-muted-foreground" />
        ) : (
          <EyeClosedIcon className="text-muted-foreground" />
        )}
      </Button>
    </div>
  );
};
