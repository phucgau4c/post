import FormPost from "@/components/FormPost";
import { getPost } from "@/lib/action";

type Props = {
  params: { id: string };
  searchParams: {};
};

export default async function Page(props: Props) {
  const id = await parseInt(props.params.id);
  const post = await getPost(id);
  return (
    <div>
      <FormPost dataPost={JSON.stringify(post)} />
    </div>
  );
}
