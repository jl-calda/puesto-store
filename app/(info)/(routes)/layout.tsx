interface InfoRoutesLayoutProps {
  children: React.ReactNode;
}

const InfoRoutesLayout = ({ children }: InfoRoutesLayoutProps) => {
  return <div className="h-full flex-1">{children}</div>;
};

export default InfoRoutesLayout;
