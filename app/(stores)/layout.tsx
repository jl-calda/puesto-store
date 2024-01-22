import { Footer } from "@/app/(stores)/_components/footer";
import { Header } from "@/app/(stores)/_components/header";

interface StoreLayoutProps {
  children: React.ReactNode;
}

const StoreLayout = ({ children }: StoreLayoutProps) => {
  return (
    <div className="h-full flex flex-col gap-y-8">
      <Header />
      <div className="flex-1 max-w-6xl container">{children}</div>
      <Footer />
    </div>
  );
};

export default StoreLayout;
