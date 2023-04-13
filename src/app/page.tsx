import { hc } from "hono/client";
import { Inter } from "next/font/google";
import { ApiType } from "@/pages/api/[...routes]";

const client = hc<ApiType>(
  process.env.CF_PAGES_URL ? process.env.CF_PAGES_URL : "http://localhost:3000"
).api;
const inter = Inter({ subsets: ["latin"] });

const fetchData = async () => {
  const res = await client.greet.$get();
  const data = await res.json();
  return data;
};

export default async function Home() {
  const data = await fetchData();

  if (!data) return <p>Loading...</p>;

  return <p className={`${inter.className}`}>{data.message}</p>;
}
