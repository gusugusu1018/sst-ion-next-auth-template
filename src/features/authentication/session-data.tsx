import { Session } from "next-auth";

export default function SessionData({ session }: { session: Session | null }) {
  return (
    <div className="flex flex-col gap-4 w-[700px] px-5 py-10">
      <h2 className="text-xl font-bold">Current session data</h2>
      <p className="text-muted-foreground">
        In this example, only some fields of the user object are passed to the
        page in order not to expose sensitive information.
      </p>
      <div className="flex flex-col rounded-md">
        <div className="px-5 py-3 font-bold rounded-t-md text-primary bg-tertiary">
          Session
        </div>
        <pre className="py-3 px-4 text-sm rounded-b-md whitespace-pre-wrap break-all text-primary bg-secondary">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
    </div>
  );
}
