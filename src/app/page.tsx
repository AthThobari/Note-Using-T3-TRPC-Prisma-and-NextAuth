import { SessionProvider, useSession } from "next-auth/react";
import Link from "next/link";


import { Header } from "next/dist/lib/load-custom-routes";
import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import { Headerr } from "~/components/Header";
import React from "react";


export default async function Home() {
  const hello = await api.post.hello({ text: "world" });
  const session = await getServerAuthSession();

  void api.post.getLatest.prefetch();

  return (
    <>
      <main>
        <Headerr />
        {/* <Content /> */}

      </main>

    </>
  );
}

// const Content: React.FC = () => {
//   const { data: sessionData } = useSession();

//   const {data: topics, refetch: refetchTopics} = api.topic.getAll.useQuery()
// }
