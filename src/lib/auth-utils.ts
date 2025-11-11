import { headers as getHeaders } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "./auth";

export const requireAuth = async () => {
  const session = await auth.api.getSession({
    headers: await getHeaders(),
  });
  if (!session) {
    redirect("/login");
  }
  return session;
};
export const requireUnAuth = async () => {
  const session = await auth.api.getSession({
    headers: await getHeaders(),
  });
  if (session) {
    redirect("/");
  }
  return session;
};
