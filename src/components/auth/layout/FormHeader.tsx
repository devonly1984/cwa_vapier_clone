import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
interface FormHeaderProps {
    type: 'login'|'signup'
}
const FormHeader = ({ type }: FormHeaderProps) => {
  return (
    <CardHeader className="text-center">
      <CardTitle>
        {type === "login" ? "Welcome back" : "Get Started"}
      </CardTitle>
      <CardDescription>
        {type === "login"
          ? "Login to continue"
          : "Create an account get started"}
      </CardDescription>
    </CardHeader>
  );
};
export default FormHeader;
