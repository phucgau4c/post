// "use client";

import { getPost } from "@/lib/action";

type Props = {
  params: { id: string };
  searchParams: {};
};

export default async function Page(props: Props) {
  const result = await getPost(parseInt(props.params.id));

  return (
    <div>
      <div>
        <a
          href="#"
          className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {result!.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {result!.content}
          </p>
        </a>
      </div>
    </div>
  );
}
