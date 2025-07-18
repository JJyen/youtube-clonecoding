// "use client";
//import { trpc } from "@/trpc/client";
import { HydrateClient, trpc } from "@/trpc/server";
import { PageClient } from "./client";
import { Suspense } from "react";

export default async function Home() {
  // const { data } = trpc.hello.useQuery({ text: "hong" });
  // return <div>Client component says: {data?.greeting}</div>;
  void trpc.hello({ text: "honghong" });

  return (
    <>
      <HydrateClient>
        <Suspense fallback={<p>Loading...</p>}>
          <PageClient />
        </Suspense>
      </HydrateClient>
    </>
  );
}
