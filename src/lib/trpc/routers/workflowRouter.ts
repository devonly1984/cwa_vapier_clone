import prisma from "@/lib/prisma/client";
import { createTRPCRouter, protectedProcedure } from "../init";

export const workflowRouter = createTRPCRouter({
    getWorkflows: protectedProcedure.query(async({ctx})=>{
        return prisma.workflow.findMany({});
    }),
    createWorkflow: protectedProcedure.mutation(()=>{
        return prisma.workflow.create({
          data: {
            name: "test-workflow",
          },
        });
    })
})