import { Button } from "@/components/ui/button";
import Image from "next/image";

const SocialButton = ({ isPending }: { isPending: boolean }) => {
  return (
    <div className="flex flex-col gap-4">
      <Button
        variant={"outline"}
        type="button"
        className="w-full"
        disabled={isPending}
      >
        <Image src="/images/github.svg" alt="" width={20} height={20} />
        Continue with Github
      </Button>
      <Button
        variant={"outline"}
        type="button"
        className="w-full"
        disabled={isPending}
      >
        <Image src="/images/google.svg" alt="" width={20} height={20} />
        Continue with Google
      </Button>
    </div>
  );
};
export default SocialButton;
