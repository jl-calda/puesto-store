import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import { Info, LogIn } from "lucide-react";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
}
const ButtonLink = ({ href, children }: ButtonLinkProps) => {
  return (
    <Button
      variant="ghost"
      size="default"
      className="w-full justify-start"
      asChild
    >
      <Link
        href={href}
        className="cursor-pointer"
      >
        {children}
      </Link>
    </Button>
  );
};

export const UserInfo = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage
            src=""
            alt="User avatar"
          />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[200px]"
        align="end"
      >
        <DropdownMenuItem asChild>
          <ButtonLink href="/login">
            <LogIn className="w-4 h-4 mr-4" />
            Login
          </ButtonLink>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Learn more</DropdownMenuLabel>
        <DropdownMenuItem asChild>
          <ButtonLink href="/about">
            <Info className="w-4 h-4 mr-4" />
            About Puesto
          </ButtonLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
