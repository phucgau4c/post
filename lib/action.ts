"use server";

import { z } from "zod";
import { FormPostSchema } from "./schema";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import { hash } from "bcrypt";
import { revalidateTag } from "next/cache";
import { GetServerSidePropsContext } from "next";
import { getCsrfToken } from "next-auth/react";

type Inputs = z.infer<typeof FormPostSchema>;
type Data = {
  title: string;
  content: string;
};

const prisma = new PrismaClient();

export async function createPost(data: Inputs) {
  try {
    const post = prisma.post.create({
      data,
    });
    return post;
  } catch (error) {
    throw new Error("create post error!!");
  }
}

export async function getPost(id: number) {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
    });
    return post;
  } catch (error) {
    throw new Error("show post error!!");
  }
}

export async function deletePost(id: number) {
  try {
    const post = await prisma.post.delete({
      where: {
        id,
      },
    });
    return post;
  } catch (error) {
    throw new Error("delete post error!!");
  }
}

export async function updatePost(data: Data, id: number) {
  try {
    const post = await prisma.post.update({
      where: {
        id: id,
      },
      data: {
        title: data.title,
        content: data.content,
      },
    });
    return post;
  } catch (error) {
    throw new Error("edit post error!!");
  }
}

//redirect

export async function navigate(path: string) {
  redirect(path);
}

//reload
export async function reload() {
  revalidateTag("posts");
}

//some action login
export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}

// User

export async function addUser() {
  try {
    const password = await hash("user", 12);

    const user = await prisma.user.create({
      data: {
        email: "user@user.com",
        password,
        role: 1,
      },
    });

    return user;
  } catch (error) {}
}
