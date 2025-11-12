import AuthLayout from "@/components/auth/layout/AuthLayout";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <AuthLayout>{children}</AuthLayout>;
};
export default Layout;
