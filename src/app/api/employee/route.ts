import { useSession } from "next-auth/react";
import { NextResponse } from "next/server";

export async function GET() {
  const session = useSession();
  console.log(session);
  return new NextResponse(JSON.stringify(null));
}
