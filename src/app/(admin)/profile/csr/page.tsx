"use client";
import { data } from "autoprefixer";
import { useSession } from "next-auth/react";
import React from "react";

type Props = {};

export default function CSR({}: Props) {
  const { data: session } = useSession();
  return <div>{JSON.stringify(session)}</div>;
}
