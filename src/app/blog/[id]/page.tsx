interface Props {
  params: {
    id: string;
  };
}
const getData = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return response.json();
};

export const generateMetadata = async ({ params }: Props) => {
  const post = await getData(params.id);

  return {
    title: post.title,
  };
};

const Page = async ({ params }: Props) => {
  const post = await getData(params.id);
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
};

export default Page;
