"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./button";

import { useRouter } from "next/navigation";
import { on } from "events";

interface ModalProps {
  children: React.ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  return (
    <Dialog
      modal
      defaultOpen
      onOpenChange={() => router.back()}
    >
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
