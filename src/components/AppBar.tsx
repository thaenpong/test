import Link from "next/link";
import React from "react";
import SigninButton from "./SigninButton";

type Props = {};

export default function AppBar({}: Props) {
  return (
    <div>
      <Link href={"/"}>Home</Link>
      <SigninButton />
    </div>
  );
}
