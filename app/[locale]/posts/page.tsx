import Button from "@/components/Button";
import Table from "@/components/Table";
import { authConfig } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { LinkPost } from "./LinkPost";

export default async function Page() {
  const prisma = new PrismaClient();
  const posts: any = await prisma.post.findMany();
  const session: any = await getServerSession(authConfig);
  const role: number = session?.user?.role;

  return (
    <div className="mx-auto w-1/2">
      <LinkPost />
      <Table posts={posts} role={role} />
    </div>
  );
}
