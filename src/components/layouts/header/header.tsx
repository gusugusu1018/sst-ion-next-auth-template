import React from "react";
import Link from "next/link";
import UserButton from "./userButton";
import { MainNav } from "./main-nav";
import DarkModeDropDown from "./dark-mode-dropdown";
import Image from "next/image";
const Header = () => {
  return (
    <div className="px-8 py-6 flex items-center justify-between">
      <Link
        href="/"
        className="font-medium text-lg flex flex-row items-center gap-3"
      >
        <Image
          src="/icon-jdenticon-gd-50.svg"
          alt="icon"
          width={42}
          height={42}
          priority
        />
        SST ion Next auth
      </Link>
      <div className="flex items-center gap-4">
        <MainNav />
        <UserButton />
        <DarkModeDropDown />
      </div>
    </div>
  );
};
export default Header;
