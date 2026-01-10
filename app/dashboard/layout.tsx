import DashboardHeader from "@/components/dashboard/dashboard-header";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId, has } = await auth();

  if (!userId) redirect("/");
  const hasPaidPlan =
    (await has({ plan: "for_serious_newsletter_creators" })) ||
    (await has({ plan: "starter" }));
  console.log("Has paid plan:=>", hasPaidPlan);
  if (!hasPaidPlan) redirect("/#pricing");

  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader />
      {children}
    </div>
  );
}
