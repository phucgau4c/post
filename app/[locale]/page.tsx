import { addUser } from "@/lib/action";
import { authConfig } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Index from "./Index";

export default async function Home() {
  const session = await getServerSession(authConfig);
  // addUser();
  const data = JSON.stringify(session);

  return (
    <div>
      <h1>hi</h1>
      <Index session={session} />
    </div>
  );
}
