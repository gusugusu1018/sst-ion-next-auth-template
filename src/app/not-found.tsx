import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function NotFound() {
  return (
    <>
      <div className="flex flex-grow flex-col items-center justify-center space-y-4">
        <h1 className="text-6xl font-bold">Not Found</h1>
        <p className="text-sm text-muted-foreground">
          Could not find requested page
        </p>
        <Button asChild variant="outline">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </>
  );
}
