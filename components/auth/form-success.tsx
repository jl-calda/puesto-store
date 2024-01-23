import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccessProps {
  message: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  return (
    <div className="bg-emerald-100 border rounded-md border-emerald-600 py-2 px-3 flex items-center justify-center">
      <CheckCircledIcon className="h-5 w-h text-emerald-700 mr-2" />
      <p className="text-sm text-emerald-700 font-semibold">
        {Array.isArray(message) ? message[0] : message}
      </p>
    </div>
  );
};
