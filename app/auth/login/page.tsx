import { getServerSession } from "next-auth";

import FormLog from "@/components/FormLog";
import { authConfig } from "@/lib/auth";
import { navigate } from "@/lib/action";

export default async function SignIn() {
  const session: any = await getServerSession(authConfig);
  const id = await session?.user?.id;

  if (id) await navigate("/posts");

  return (
    <>
      <FormLog />
    </>
  );
}
