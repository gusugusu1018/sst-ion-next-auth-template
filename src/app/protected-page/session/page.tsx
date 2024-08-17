import { auth } from "@/auth";
import SessionData from "@/features/authentication/session-data";

export default async function SessionPage() {
  const session = await auth();

  if (!session)
    return (
      <div className="flex flex-grow flex-col gap-4 items-center justify-center">
        <h1 className="text-xl text-red-500">Error</h1>
      </div>
    );

  return (
    <div className="flex flex-grow flex-col gap-4 items-center justify-center">
      <SessionData session={session} />
    </div>
  );
}
