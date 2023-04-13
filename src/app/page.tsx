"use client";

import { useEffect, useState } from "react";
import { hc } from "hono/client";
import { Inter } from "next/font/google";
import { ApiType } from "@/pages/api/[...routes]";

const client = hc<ApiType>("").api;
const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await client.greet.$get();
      const data = await res.json();

      setMessage(data.message);
    };
    fetchData();
  }, []);

  if (!message) return <p>Loading...</p>;

  return <p className={`${inter.className}`}>{message}</p>;
}
