import SignUpForm from "@/components/auth/forms/SignUpForm";
import { requireUnAuth } from "@/lib/auth-utils";

const SignUpPage = async () => {
  await requireUnAuth();
  return <SignUpForm />;
};
export default SignUpPage;
