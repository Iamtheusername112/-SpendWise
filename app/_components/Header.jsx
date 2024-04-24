//"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "../../components/ui/button";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Header = () => {
  const { user, isSignedIn } = useUser;
  return (
    <div className="p-5 flex justify-between items-center border shadow-lg">
      <Image src={"./logo.svg"} alt="logo" width={160} height={100} />
      {isSignedIn ? (
        <UserButton />
      ) : (
        <Link href={"/sign-in"}>
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
