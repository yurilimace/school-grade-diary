import { Server } from "miragejs";

export const MockRoutes = (server: Server) => {
  server.post("/login", (schema, request) => {
    return { token: "tokengerado" };
  });
};
