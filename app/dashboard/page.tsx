import PageHeader from "@/components/dashboard/page-header";
import { Sparkles } from "lucide-react";

function Dashboard() {
  return (
    <div>
      <PageHeader
        icon={Sparkles}
        title="Dashboard"
        description="Manage your RSS feeds and generate AI-powered newsletters"
      />
    </div>
  );
}

export default Dashboard;
