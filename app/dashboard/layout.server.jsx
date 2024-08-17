import { getServerSession } from "next-auth/next";
import { Connection } from "../Utils/checkuser";
import DashboardPage from "./layout";

export default async function DashboardLayout({ children }) {
  const session = await getServerSession();
  if (session?.user?.name) {
    await Connection(session.user.name);
  }

  return <DashboardPage session={session}>{children}</DashboardPage>;
}