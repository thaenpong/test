import { getServerSession } from "next-auth";
import React from "react";

type Props = {};

export default async function Profile({}: Props) {
  const session = await getServerSession();

  console.log(session);
  return (
    <div>
      <p>Employee</p>
      {session != null ? <p>ID : {JSON.stringify(session)}</p> : <></>}
    </div>
  );
}
