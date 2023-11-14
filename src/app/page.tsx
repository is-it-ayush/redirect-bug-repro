import { getServerAuthSession } from "~/server/auth";
import { SignOutButton } from "./_components/signout";

export default async function Home() {
  const session = await getServerAuthSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col w-[400px] space-y-4">
        <pre className="rounded-lg p-4 bg-gray-200">{JSON.stringify(session)}</pre>
        <SignOutButton />
      </div>
    </main>
  );
}
