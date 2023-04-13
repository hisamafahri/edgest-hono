import { Env, Hono } from "hono";
import { HelloService } from "../services/hello.service";

export class BaseController {
  app: Hono<Env, {}, "/api">;
  public service: HelloService = new HelloService();

  constructor(app: Hono<Env, {}, "/api">) {
    this.app = app;
  }
}
