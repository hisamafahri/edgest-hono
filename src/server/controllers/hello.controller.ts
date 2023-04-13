import { BaseController } from "../utils/BaseController";

export class HelloController extends BaseController {
  getGreet() {
    return this.app.get("/greet", async (c) => {
      const data = await this.service.greet();

      return c.jsonT(data);
    });
  }
}
