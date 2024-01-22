import { InfoHeader } from "./_components/info-header";

interface InfoLayoutProps {
  children: React.ReactNode;
}

const InfoLayout = ({ children }: InfoLayoutProps) => {
  return (
    <div className="flex flex-col">
      <InfoHeader />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default InfoLayout;
