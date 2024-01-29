import { User } from "@prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { UserCircle } from "lucide-react";

interface UserAvatarProps {
  user: User;
}

export const UserAvatar = ({ user }: UserAvatarProps) => {
  const initials = user?.name?.substring(0, 2).toUpperCase() || "";

  return (
    <Avatar>
      <AvatarImage
        src={user?.image || undefined}
        alt={user ? `${user.name}'s avatar` : "User avatar"}
      />
      <AvatarFallback>{user ? initials : <UserCircle />}</AvatarFallback>
    </Avatar>
  );
};
