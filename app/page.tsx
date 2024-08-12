import { addUser } from "@/lib/action";
import { authConfig } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authConfig);
  // addUser();
  const data = JSON.stringify(session);

  return (
    <div>
      <h1>hi</h1>
      <p>{JSON.stringify(session)}</p>
    </div>
  );
}
