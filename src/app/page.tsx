import prisma from "@/lib/prisma/client"

const HomePage = async () => {
  const users = await prisma.user.findMany();
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      {JSON.stringify(users)}
    </div>
  );
}
export default HomePage