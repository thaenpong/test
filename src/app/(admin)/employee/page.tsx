"use client";
import useSWR, { Fetcher } from "swr";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Employee } from "@/models/Employee";
type Props = {};

const fetcher = (req: any) =>
  fetch(req.url, {
    headers: {
      Authorization: `Bearer ${req.token}`,
    },
  }).then((res) => {
    if (res.status == 200) {
      return res.json();
    } else {
      throw new Error();
    }
  });

export default function Employee({}: Props) {
  const { data: session } = useSession();
  const { data, error, isLoading } = useSWR(
    {
      url: "http://127.0.0.1:3002/employee",
      token: session?.user.access_token,
    },
    fetcher
  );
  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";
  if (data)
    return (
      <div>
        {data.map((employee: Employee, index: number) => (
          <div key={index}>
            <p>
              Name: {employee.firstName} {employee.lastName}
            </p>
          </div>
        ))}
      </div>
    );
}
