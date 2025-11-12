import LoginForm from "@/components/auth/forms/LoginForm";
import { requireUnAuth } from "@/lib/auth-utils";

const LoginPage = async () => {
  await requireUnAuth();

  return <LoginForm />;
};
export default LoginPage;
