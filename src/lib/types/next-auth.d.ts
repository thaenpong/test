import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      username: string;
      name: string;
      employeeId: number;
      access_token: string;
    };
  }
}
