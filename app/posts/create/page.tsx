"use client";
import { createPost, navigate } from "@/lib/action";
import { FormPostSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

type Inputs = z.infer<typeof FormPostSchema>;

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    resolver: zodResolver(FormPostSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const result = await createPost(data);
    const isEmpty = Object.keys(result).length !== 0;
    isEmpty
      ? toast.success("Create post success!!")
      : toast.error("Create post fail!!");
    reset();
    navigate("/posts");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-sm">
        <div className="mb-5">
          <label
            htmlFor="Title"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Post Title
          </label>
          <input
            {...register("title")}
            type="Title"
            id="Title"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="some title"
          />
          {errors.title?.message && (
            <p className="text-sm text-red-400">{errors.title.message}</p>
          )}
        </div>

        <label
          htmlFor="content"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Your content
        </label>
        <textarea
          id="content"
          rows={4}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Write your thoughts here..."
          {...register("content")}
        ></textarea>
        {errors.content?.message && (
          <p className="text-sm text-red-400">{errors.content.message}</p>
        )}

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Post
        </button>
      </form>
    </div>
  );
}
