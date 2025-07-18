"use client";

import { trpc } from "@/trpc/client";

export const PageClient = () => {
  //useSuspenseQuery를 사용하려면 이에 상응하는 prefetch가 존재해야 함(0719-X)
  const [data] = trpc.hello.useSuspenseQuery({
    text: "honghong",
  });

  return (
    <>
      <div>Page client says: {data.greeting}</div>
    </>
  );
};
