"use client";
import { signIn, signOut } from "next-auth/react";
import { useTranslations } from "next-intl";

type ButtonLog = {
  id: string;
  className: string;
  name: string;
};

export default function ButtonLog({ className, id, name }: ButtonLog) {
  const t = useTranslations("Header");

  return (
    <button
      className={className}
      onClick={() => {
        id === "signIn" ? signIn() : id === "signOut" ? signOut() : null;
      }}
    >
      {id === "signIn"
        ? t("btnLogin")
        : id === "signOut"
          ? t("btnLogout")
          : null}
    </button>
  );
}
