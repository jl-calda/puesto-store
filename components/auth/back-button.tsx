import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
  label: string;
  href: string;
}

export const BackButton = ({ label, href }: BackButtonProps) => {
  return (
    <Button
      variant="link"
      className="w-full"
      asChild
    >
      <Link
        href={href}
        className="text-muted-foreground text-sm"
      >
        {label}
      </Link>
    </Button>
  );
};
