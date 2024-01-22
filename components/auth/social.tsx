import { Button } from "../ui/button";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { ButtonTooltip } from "../button-tooltip";

export const Social = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full space-x-2">
      <ButtonTooltip label="Login using facebook">
        <Button
          variant="outline"
          className="flex-1"
          size="lg"
        >
          <FaFacebook className="w-5 h-5 text-sky-600" />
        </Button>
      </ButtonTooltip>
      <Button
        variant="outline"
        className="flex-1"
        size="lg"
      >
        <FaGoogle className="w-5 h-5 text-red-700" />
      </Button>
    </div>
  );
};
