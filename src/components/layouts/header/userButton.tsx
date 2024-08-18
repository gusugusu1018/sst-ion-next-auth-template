import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GetStarted, SignOut } from "@/features/authentication/auth-components";
import Link from "next/link";
import { Session } from "next-auth";

interface UserButtonProps {
  session: Session | null;
}

const UserButton: React.FC<UserButtonProps> = ({ session }) => {
  if (!session?.user) return <GetStarted />;

  return (
    <div className="flex gap-2 items-center">
      <span className="hidden text-sm sm:inline-flex"></span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative w-8 h-8 rounded-full">
            <Avatar className="w-8 h-8">
              {session.user.image && (
                <AvatarImage
                  src={session.user.image}
                  alt={session.user.email ?? ""}
                />
              )}
              <AvatarFallback className="bg-tertiary">
                {(session.user.email ?? "DF").slice(0, 2)}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {session.user.name}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {session.user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuItem>
            <Button asChild variant="ghost" className="w-full p-0">
              <Link href="/authentication/login">Login</Link>
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button asChild variant="ghost" className="w-full p-0">
              <Link href="/authentication/sign-up">Sign up</Link>
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SignOut />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserButton;
