import { createServer } from "miragejs";
import { MockRoutes } from "./MockRoutes/mockRoutes";

export const CreateMockServer = () => {
  return createServer({
    urlPrefix: "http://localhost:3001",
    routes() {
      MockRoutes(this);
    },
  });
};
