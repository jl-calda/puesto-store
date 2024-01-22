import { CardWrapper } from "./card-wrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerTitle="Login"
      headerSubtitle="Login to your account"
      buttonLabel="Don't have an account?"
      buttonHref="/signup"
      social
    >
      form
    </CardWrapper>
  );
};
