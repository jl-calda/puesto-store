import { currentUser } from "@/lib/auth";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import { Info, LogIn, UserIcon, LogOut, Store } from "lucide-react";
import { LogoutButton } from "@/components/auth/logout-button";
import { UserAvatar } from "@/components/user-avatar";

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

export const UserInfo = async () => {
  const user = await currentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar user={user} />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[200px]"
        align="end"
      >
        <DropdownMenuLabel>
          {user ? "Manage your Puesto" : "You are signed out"}
        </DropdownMenuLabel>
        {user ? (
          <>
            <DropdownMenuItem asChild>
              <ButtonLink href="/account">
                <UserIcon className="w-4 h-4 mr-4" />
                Account
              </ButtonLink>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <ButtonLink href="/account">
                <Store className="w-4 h-4 mr-4" />
                Stores
              </ButtonLink>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <LogoutButton>
                <LogOut className="w-4 h-4 mr-4" />
                Logout
              </LogoutButton>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem asChild>
              <ButtonLink href="/login">
                <LogIn className="w-4 h-4 mr-4" />
                Login
              </ButtonLink>
            </DropdownMenuItem>
          </>
        )}

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
