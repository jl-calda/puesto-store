import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ButtonTooltipProps {
  label: string;
  children: React.ReactNode;
}

export const ButtonTooltip = ({ label, children }: ButtonTooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          asChild
          autoFocus={false}
        >
          {children}
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
