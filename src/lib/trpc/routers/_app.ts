import { z } from "zod";
import { createTRPCRouter } from "../init";
import { userRouter } from "./userRouter";
import { workflowRouter } from "./workflowRouter";
export const appRouter = createTRPCRouter({
  user: userRouter,
  workflow: workflowRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
