import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Button from "./Button";
import Link from "next/link";

type PropsPost = {
  posts: [{ id: Number; title: string; content: string }];
  role: number;
};

export default function Table({ posts, role }: PropsPost) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full border text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              tools
            </th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post: any) => (
            <tr
              key={post.id}
              className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                <Link href={`/posts/${post.id}`}>{post.title}</Link>
              </th>
              <td className="px-6 py-4">
                <span className="flex space-x-3">
                  {role ? (
                    ""
                  ) : (
                    <Button id={post.id}>
                      <FaRegTrashAlt className="cursor-pointer" />
                    </Button>
                  )}
                  <Link href={`/posts/edit/${post.id}`}>
                    <FaRegEdit className="cursor-pointer" />
                  </Link>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
