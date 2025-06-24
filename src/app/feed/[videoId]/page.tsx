// 타입정의
interface PageProps {
  params: Promise<{ videoId: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { videoId } = await params;

  return <div>Video Id page: {videoId}</div>;
};

export default Page;
