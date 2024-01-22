import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { HeaderCard } from "./header-card";
import { BackButton } from "./back-button";
import { Social } from "./social";
import { LogoBanner } from "../logo-banner";

interface CardWrapperProps {
  headerTitle: string;
  headerSubtitle?: string;
  children: React.ReactNode;
  social?: boolean;
  buttonLabel: string;
  buttonHref: string;
  linkLabel?: string;
  linkHref?: string;
}

export const CardWrapper = ({
  headerTitle,
  headerSubtitle,
  children,
  social,
  buttonLabel,
  buttonHref,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <LogoBanner />
        <HeaderCard
          title={headerTitle}
          subtitle={headerSubtitle}
        />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {social && (
        <CardFooter className="py-0">
          <Social />
        </CardFooter>
      )}
      <CardFooter className="py-0">
        <BackButton
          label={buttonLabel}
          href={buttonHref}
        />
      </CardFooter>
    </Card>
  );
};
