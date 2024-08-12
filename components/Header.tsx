import { getServerSession } from "next-auth";
import ButtonLog from "./ButtonLog";
import { authConfig } from "@/lib/auth";

export default async function Header() {
  const session: any = await getServerSession(authConfig);
  const id = session?.user?.id;

  return (
    <div className="flex h-10 p-2">
      <h2 className="flex-1 text-center text-lg font-bold">Blog</h2>
      <div className="flex-none">
        {id ? (
          <ButtonLog
            className="mb-2 me-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            id="signOut"
            name="Sign Out"
          />
        ) : (
          <ButtonLog
            className="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            id="signIn"
            name="Sign In"
          />
        )}
      </div>
    </div>
  );
}
