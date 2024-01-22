import { Logo } from "./logo";
import { SearchBar } from "./search-bar";
import { UserInfo } from "./user-info";

export const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between h-20 border-b px-10">
      <Logo />
      <SearchBar />
      <UserInfo />
    </header>
  );
};
