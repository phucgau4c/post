"use client";

import { deletePost, reload } from "@/lib/action";
import { ReactNode } from "react";
import toast from "react-hot-toast";

type ButtonProps = {
  children?: ReactNode;
  id: number;
};

export default function Button({ children, id }: ButtonProps) {
  return (
    <button
      onClick={() => {
        deletePost(id);
        toast.success("delete success!");
        reload();
      }}
    >
      {children}
    </button>
  );
}
