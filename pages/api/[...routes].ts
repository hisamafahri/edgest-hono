import { HelloController } from "@/src/server/controllers/hello.controller";
import { Hono } from "hono";
import { handle } from "hono/nextjs";

const app = new Hono().basePath("/api");

// /api/hello
const hello = new HelloController(app);
export const getHelloGreet = hello.getGreet();

export type ApiType = typeof getHelloGreet;

export default handle(app);
