import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  return (
    <div className="bg-red-100 border rounded-md border-red-600 py-2 px-3 flex items-center justify-center">
      <ExclamationTriangleIcon className="h-5 w-h text-red-700 mr-2" />
      <p className="text-sm text-red-700 font-semibold">
        {Array.isArray(message) ? message[0] : message}
      </p>
    </div>
  );
};
