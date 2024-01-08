import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import LogoutButton from "./_components/LogoutButton";
import { Button } from "@/components/ui/button";
import Tasks from "./_components/Tasks";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p>Hello Evvent , This is the home page</p>
      {session ? (
        <div>
          <h1>you are logged in</h1>
          <LogoutButton />
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <h1>Please Login in to manage your tasks</h1>
          <Button asChild>
            <div className=" flex flex-col items-center">
              <Link href={"/auth"}>Login</Link>
            </div>
          </Button>
        </div>
      )}
      {session && (
        <div className="grid grid-cols-1 gap-4 md:gap-8">
          <div className="flex flex-col gap-4 rounded-xl">
            <h3 className="text-xl font-bold">TASKS</h3>
            <Tasks/>
          </div>
        </div>
      )}
    </div>
  );
}
