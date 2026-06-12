import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-pattern"></div>
        <div className="hero-glow"></div>
        <div className="hero-content container">
          <div className="hero-tag reveal-up">Trusted by Indiana Families</div>
          <h1 className="reveal-up delay-1">
            Compassionate Care<br />
            <em>Where It Matters Most</em>
          </h1>
          <p className="hero-sub reveal-up delay-2">
            Professional, personalized home care services — so your loved one can live
            with dignity, comfort, and joy in their own home.
          </p>
          <div className="hero-buttons reveal-up delay-3">
            <Link href="/contact" className="btn-primary">Schedule a Free Consultation</Link>
            <a href="#services" className="btn-outline">View Our Services ↓</a>
          </div>
        </div>
        <div className="scroll-hint">
          <span className="scroll-arrow">↓</span>
          <span className="scroll-text">Scroll to Explore</span>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-header reveal-up">
            <span className="section-tag">What We Offer</span>
            <h2 className="section-title">Caring Services, <em>Tailored for You</em></h2>
            <p className="section-sub">Every care plan is as unique as the person we serve.</p>
          </div>

          <div className="services-grid">
            <div className="service-card reveal-card" style={{ "--delay": "0.1s" } as React.CSSProperties}>
              <div className="card-glow"></div>
              <div className="service-icon">🫶</div>
              <h3>Personal Care</h3>
              <p>Bathing, dressing, grooming, and daily living assistance — delivered with warmth, dignity, and respect.</p>
            </div>

            <div className="service-card reveal-card" style={{ "--delay": "0.2s" } as React.CSSProperties}>
              <div className="card-glow"></div>
              <div className="service-icon">🍽️</div>
              <h3>Meal Preparation</h3>
              <p>Nutritious, delicious meals prepared to dietary needs — because good food is good medicine.</p>
            </div>

            <div className="service-card reveal-card" style={{ "--delay": "0.3s" } as React.CSSProperties}>
              <div className="card-glow"></div>
              <div className="service-icon">🏡</div>
              <h3>Housekeeping</h3>
              <p>A clean, safe home environment that promotes comfort, peace of mind, and overall well-being.</p>
            </div>

            <div className="service-card reveal-card" style={{ "--delay": "0.4s" } as React.CSSProperties}>
              <div className="card-glow"></div>
              <div className="service-icon">💊</div>
              <h3>Medication Management</h3>
              <p>Timely reminders and assistance to ensure your loved one stays on their healthcare regimen.</p>
            </div>

            <div className="service-card reveal-card" style={{ "--delay": "0.5s" } as React.CSSProperties}>
              <div className="card-glow"></div>
              <div className="service-icon">🚗</div>
              <h3>Companionship & Errands</h3>
              <p>Friendly presence, transportation to appointments, shopping assistance, and meaningful social engagement.</p>
            </div>

            <div className="service-card reveal-card featured-card" style={{ "--delay": "0.6s" } as React.CSSProperties}>
              <div className="card-glow"></div>
              <div className="service-icon">❤️</div>
              <h3>Specialized Care</h3>
              <p>Expert support for dementia, post-operative recovery, and seniors managing chronic health conditions.</p>
            </div>
          </div>

          <div className="services-cta reveal-up">
            <p>Not sure which service is right for your family?</p>
            <Link href="/contact" className="btn-primary">Talk to a Care Advisor</Link>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="trust-strip reveal-up">
        <div className="container trust-inner">
          <div className="trust-item"><span className="trust-icon">✓</span> Licensed & Insured</div>
          <div className="trust-item"><span className="trust-icon">✓</span> Background Checked Staff</div>
          <div className="trust-item"><span className="trust-icon">✓</span> 24/7 Emergency Support</div>
          <div className="trust-item"><span className="trust-icon">✓</span> Flexible Scheduling</div>
          <div className="trust-item"><span className="trust-icon">✓</span> Person-Centered Plans</div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner reveal-up">
        <div className="cta-banner-glow"></div>
        <div className="container cta-banner-inner">
          <div>
            <h2>Ready to give your loved one the care they deserve?</h2>
            <p>Our care advisors are available 7 days a week to answer your questions.</p>
          </div>
          <div className="cta-banner-buttons">
            <Link href="/contact" className="btn-primary">Get a Free Consultation</Link>
            <a href="tel:+16025550147" className="btn-outline-light">📞 Call Now</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
