import Button from "@/components/Button";
import Table from "@/components/Table";
import { authConfig } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Page() {
  const prisma = new PrismaClient();
  const posts: any = await prisma.post.findMany();
  const session: any = await getServerSession(authConfig);
  const role: number = session?.user?.role;

  return (
    <div className="mx-auto w-1/2">
      <Link
        href="/posts/create"
        className="my-3 mb-2 me-2 h-6 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      >
        Create new post
      </Link>
      <Table posts={posts} role={role} />
    </div>
  );
}
