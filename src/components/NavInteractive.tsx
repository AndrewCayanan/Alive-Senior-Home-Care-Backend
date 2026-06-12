"use client";

import Link from "next/link";

export default function NavInteractive({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <>
      <button className="hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
      <div className="mobile-menu" id="mobileMenu">
        <Link href="/#services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        {isLoggedIn ? (
          <Link href="/portal">👤 Portal</Link>
        ) : (
          <Link href="/login">👤 Login</Link>
        )}
        <Link href="/contact" className="mobile-cta">Free Consultation →</Link>
      </div>
    </>
  );
}
