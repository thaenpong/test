"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Employee from "../app/(admin)/employee/page";

type Props = {};

export default function SigninButton({}: Props) {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <div>
        <p>
          <Link href={"/employee/"}>Employee</Link>
        </p>
        <p>
          <Link href={"/profile/"}>Profile</Link>
        </p>
        <p>Name:{session.user.name}</p>

        <button onClick={() => signOut()}>SignOut</button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={() => signIn()}>SignIn</button>
      </div>
    );
  }
}
