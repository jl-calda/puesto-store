"use client";

import { CardWrapper } from "./card-wrapper";
import { FormError } from "./form-error";

interface ErrorFormProps {
  modal?: boolean;
}

export const ErrorForm = ({ modal }: ErrorFormProps) => {
  return (
    <CardWrapper
      headerTitle="❌Error"
      headerSubtitle="Enter your puesto account"
      buttonLabel="Don't have an account?"
      buttonHref="/signup"
      social
    >
      <FormError error="Something went wrong" />
    </CardWrapper>
  );
};
