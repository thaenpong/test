import { NextRequest, NextResponse } from "next/server";

interface ReqBody {
  username: string;
  password: string;
}

interface User {
  id: number;
  username: string;
  name: string;
  employeeId: number;
  access_token: string;
}

export async function POST(req: NextRequest) {
  const reqBody: ReqBody = await req.json();

  const res = await fetch(`${process.env.API_URL}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: reqBody.username,
      password: reqBody.password,
    }),
  });
  if (res.status == 200) {
    const user: User = await res.json();
    return new NextResponse(JSON.stringify(user));
  } else {
    return new NextResponse(JSON.stringify(null));
  }
}
