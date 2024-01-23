import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ModalProps {
  children: React.ReactNode;
  onClose?: () => void;
}

export const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <Dialog
      defaultOpen
      modal
      onOpenChange={onClose}
    >
      <DialogContent className="p-0 border-none w-auto overflow-hidden rounded-xl">
        {children}
      </DialogContent>
    </Dialog>
  );
};
