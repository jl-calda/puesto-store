import { SignUpForm } from "../auth/signup-form";
import { Modal } from "../ui/modal";

export const SignupModal = () => {
  return (
    <div>
      <Modal>
        <SignUpForm modal />
      </Modal>
    </div>
  );
};
