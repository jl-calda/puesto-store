interface CardHeaderProps {
  title: string;
  subtitle?: string;
}

export const HeaderCard = ({ title, subtitle }: CardHeaderProps) => {
  return (
    <header className="flex flex-col gap-y-1 flex-1 items-center justify-center">
      <h1 className="text-2xl font-semibold">🔑 {title}</h1>
      <p className="text-muted-foreground text-sm2">{subtitle}</p>
    </header>
  );
};
