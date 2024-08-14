"use client";
import { FormLogSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useTranslations } from "use-intl";
import { z } from "zod";

type Inputs = z.infer<typeof FormLogSchema>;

export default function FormLog() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormLogSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: "http://localhost:3000/posts",
    });
    toast.success("Login successful");
  };

  const t = useTranslations("LoginPage");

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto grid max-w-screen-xl gap-8 px-4 py-8 lg:grid-cols-2 lg:gap-16 lg:py-16">
        <div>
          <div className="w-full space-y-8 rounded-lg bg-white p-6 shadow-xl sm:p-8 lg:max-w-xl dark:bg-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {t("name")}
            </h2>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  {t("email")}
                </label>
                <input
                  {...register("email")}
                  defaultValue="test@test.com"
                  name="email"
                  id="email"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="name@company.com"
                />
                {errors.email?.message && (
                  <p className="text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  {t("password")}
                </label>
                <input
                  {...register("password")}
                  defaultValue="test"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                />
                {errors.password?.message && (
                  <p className="text-sm text-red-400">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {t("btnLogin")}
              </button>
            </form>
            <button onClick={() => signIn("google")}>google</button>
          </div>
        </div>
      </div>
    </section>
  );
}
