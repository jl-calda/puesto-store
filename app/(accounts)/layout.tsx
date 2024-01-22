interface AccountLayoutProps {
  children: React.ReactNode;
}

const AccountLayout = ({ children }: AccountLayoutProps) => {
  return <div>{children}</div>;
};

export default AccountLayout;
