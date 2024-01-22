import { LoginForm } from "@/components/auth/login-form";
import { Modal } from "@/components/ui/modal";

const LoginModalPage = () => {
  return (
    <div className="flex-1">
      <Modal>
        <LoginForm />;
      </Modal>
    </div>
  );
};

export default LoginModalPage;
