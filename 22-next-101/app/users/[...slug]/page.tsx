type Props = {
  params: Promise<{ slug: string[] }>;
};

// 1 numaralı kullanıcının 42 idli commenti
// /users/1/comments/42
// /users/3/items/56
// /users/3/credit-cards/21
const page = async ({ params }: Props) => {
  const { slug } = await params;
  const userId = slug[0];
  const category = slug[1];
  const categoryId = slug[2];

  return (
    <ul>
      <li>UserId: {userId}</li>
      <li>Category: {category}</li>
      <li>
        {category} id: {categoryId}
      </li>
    </ul>
  );
};

export default page;
