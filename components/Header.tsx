import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import Head from "./Head";

export default async function Header() {
  const session: any = await getServerSession(authConfig);
  const id = session?.user?.id;

  return <Head id={id} />;
}
