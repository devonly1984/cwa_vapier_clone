"use client"

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/lib/trpc/client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

//import { requireAuth } from "@/lib/auth-utils";

const HomePage = () => {
  //await requireAuth();
  const trpc = useTRPC();
  const {data} = useQuery(trpc.workflow.getWorkflows.queryOptions())
  const queryClient = useQueryClient()
  const create = useMutation(trpc.workflow.createWorkflow.mutationOptions({
    onSuccess: ()=>{
     queryClient.invalidateQueries(trpc.workflow.getWorkflows.queryOptions())
    }
  }))
  return (
    <div className="min-h-screen min-w-screen flex items-center  flex-col gap-y-6 justify-center">
      <div className="">{JSON.stringify(data, null, 2)}</div>
      <Button disabled={create.isPending} onClick={() => create.mutate()}>
        Create Workflow
      </Button>
    </div>
  );
};
export default HomePage;
