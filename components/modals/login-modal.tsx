"use client";

import { Modal } from "../ui/modal";
import { LoginForm } from "../auth/login-form";
import { useRouter } from "next/navigation";

export const LoginModal = () => {
  const router = useRouter();
  return (
    <div>
      <Modal onClose={() => router.back()}>
        <LoginForm modal />
      </Modal>
    </div>
  );
};
