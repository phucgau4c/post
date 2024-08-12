"use client";
import { signIn, signOut } from "next-auth/react";

type ButtonLog = {
  id: string;
  className: string;
  name: string;
};

export default function ButtonLog({ className, id, name }: ButtonLog) {
  return (
    <button
      className={className}
      onClick={() => {
        id === "signIn" ? signIn() : id === "signOut" ? signOut() : null;
      }}
    >
      {name}
    </button>
  );
}
