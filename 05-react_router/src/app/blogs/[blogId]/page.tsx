type Props = {
  params: {
    blogId: string;
  };
};

export default function BlogDetail({ params }: Props) {
  return <h1>This is blog number {params.blogId}</h1>;
}
