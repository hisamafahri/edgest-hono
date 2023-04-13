import { GetGreetResponse } from "../schemas/hello.schema";

export class HelloService {
  async greet(): Promise<GetGreetResponse> {
    return { message: "Hello from the edge!" };
  }
}
