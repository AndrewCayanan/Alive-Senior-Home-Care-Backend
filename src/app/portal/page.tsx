import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createClient } from "@/utils/supabase/server";
import { logout } from "../auth-actions";

export default async function PortalPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const displayName =
    (user?.user_metadata?.full_name as string) || user?.email || "there";

  // Example: fetch care plans belonging to this user.
  // Requires a `care_plans` table with a `user_id` column and RLS policy
  // restricting rows to auth.uid() = user_id. See setup instructions.
  const { data: carePlans } = await supabase
    .from("care_plans")
    .select("*")
    .eq("user_id", user?.id)
    .order("created_at", { ascending: false });

  return (
    <>
      <Navbar active="portal" />

      <section className="portal-section">
        <div className="portal-header">
          <div>
            <h1>Welcome, {displayName.split(" ")[0]}</h1>
            <p className="portal-sub">Here&apos;s an overview of your loved one&apos;s care.</p>
          </div>
          <form action={logout}>
            <button type="submit" className="portal-signout">Sign Out</button>
          </form>
        </div>

        {carePlans && carePlans.length > 0 ? (
          <div className="portal-grid">
            {carePlans.map((plan: any) => (
              <div className="portal-card" key={plan.id}>
                <span className="portal-card-icon">📋</span>
                <h3>{plan.title}</h3>
                <p>{plan.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="portal-grid">
            <div className="portal-card">
              <span className="portal-card-icon">📋</span>
              <h3>Care Plan</h3>
              <p>Your care plan details will appear here once your care advisor sets them up.</p>
            </div>
            <div className="portal-card">
              <span className="portal-card-icon">🗓️</span>
              <h3>Upcoming Visits</h3>
              <p>Your caregiver schedule and appointment times will be shown here.</p>
            </div>
            <div className="portal-card">
              <span className="portal-card-icon">📞</span>
              <h3>Need Help?</h3>
              <p>
                Call us anytime at{" "}
                <a href="tel:+19518343163" style={{ color: "var(--primary)", fontWeight: 600 }}>
                  +1 (951) 834-3163
                </a>{" "}
                or email{" "}
                <a href="mailto:aliveseniorhomecare@gmail.com" style={{ color: "var(--primary)", fontWeight: 600 }}>
                  aliveseniorhomecare@gmail.com
                </a>.
              </p>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}
