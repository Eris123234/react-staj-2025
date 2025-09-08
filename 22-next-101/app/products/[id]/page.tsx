type Props = {
  params: Promise<{ id: string }>;
};

const page = async ({ params }: Props) => {
  const { id } = await params;
  return <div>Ürün id: {id}</div>;
};

export default page;
