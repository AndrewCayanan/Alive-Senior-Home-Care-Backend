import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import NavInteractive from "./NavInteractive";

export default async function Navbar({ active }: { active?: string }) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <nav id="navbar">
      <div className="container nav-inner">
        <Link href="/" className="logo">
          <span className="logo-icon"></span>
          <span>Alive Senior <em>Home Care</em></span>
        </Link>
        <ul className="nav-links">
          <li><Link href="/#services" className="nav-link">Services</Link></li>
          <li><Link href="/about" className={`nav-link ${active === "about" ? "active" : ""}`}>About</Link></li>
          <li><Link href="/contact" className={`nav-link ${active === "contact" ? "active" : ""}`}>Contact</Link></li>
          {user ? (
            <li><Link href="/portal" className={`nav-link portal-link ${active === "portal" ? "active" : ""}`}>👤 Portal</Link></li>
          ) : (
            <li><Link href="/login" className={`nav-link portal-link ${active === "login" ? "active" : ""}`}>👤 Login</Link></li>
          )}
        </ul>
        <Link href="/contact" className="cta-button">Free Consultation</Link>
        <NavInteractive isLoggedIn={!!user} />
      </div>
    </nav>
  );
}
