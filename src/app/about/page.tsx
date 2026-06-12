import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar active="about" />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="container page-hero-content">
          <h1 className="reveal-up delay-1">Our Story &amp; <em>Mission</em></h1>
          <p className="reveal-up delay-2">Compassion, expertise, and dedication to Arizona and Indiana families.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="container about-grid">
          <div className="about-text reveal-left">
            <span className="section-tag">Who We Are</span>
            <h2>More Than a Service — <em>A Calling</em></h2>
            <p>We offer a wide range of non-medical home care
            services that prioritize safety, comfort, and high-quality treatment. Our approach integrates professional personal care with compassion,
            ensuring the well-being of our clients.
            Your loved one will never feel like just another client, because your love one deserves care with dignity, respect, and heart.</p>
          </div>
          <div className="about-visual reveal-right">
            <div className="about-image-block">
              <div className="about-image-card main-img">
                <div className="img-placeholder">
                  <img src="/images/missionimg.jpg" alt="Mission Image" className="about-img" />
                </div>
              </div>
              <div className="about-badge-float">
                <span className="badge-num">Always</span>
                <span className="badge-text">Ready to Serve</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header reveal-up">
            <span className="section-tag">Our Core Values</span>
            <h2>What Drives <em>Everything We Do</em></h2>
          </div>
          <div className="values-grid">
            <div className="value-card reveal-card" style={{ "--delay": "0.1s" } as React.CSSProperties}>
              <div className="value-icon">💛</div>
              <h3>Compassion</h3>
              <p>We lead with empathy in every interaction — listening deeply, responding gently, and caring genuinely for each individual.</p>
            </div>
            <div className="value-card reveal-card" style={{ "--delay": "0.2s" } as React.CSSProperties}>
              <div className="value-icon">🛡️</div>
              <h3>Integrity</h3>
              <p>We are transparent, honest, and accountable. Families trust us with their most precious loved ones — we never take that lightly.</p>
            </div>
            <div className="value-card reveal-card" style={{ "--delay": "0.3s" } as React.CSSProperties}>
              <div className="value-icon">🌟</div>
              <h3>Excellence</h3>
              <p>From caregiver training to care planning, we uphold the highest professional standards across everything we do.</p>
            </div>
            <div className="value-card reveal-card" style={{ "--delay": "0.4s" } as React.CSSProperties}>
              <div className="value-icon">🤝</div>
              <h3>Partnership</h3>
              <p>We work alongside families as trusted partners — keeping you informed, involved, and confident every step of the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header reveal-up">
            <span className="section-tag">Our People</span>
            <h2>The Caregivers Behind <em>Every Smile</em></h2>
            <p className="section-sub">Each caregiver is hand-selected, thoroughly vetted, and continuously trained.</p>
          </div>
          <div className="team-features reveal-up">
            <div className="team-feature">
              <div className="tf-icon">🎓</div>
              <div>
                <h4>Certified &amp; Trained</h4>
                <p>Every caregiver holds current certifications and completes ongoing professional development.</p>
              </div>
            </div>
            <div className="team-feature">
              <div className="tf-icon">🔍</div>
              <div>
                <h4>Background Checked</h4>
                <p>Comprehensive federal and state background screenings for every team member, without exception.</p>
              </div>
            </div>
            <div className="team-feature">
              <div className="tf-icon">💼</div>
              <div>
                <h4>Licensed &amp; Insured</h4>
                <p>Full liability coverage and workers' compensation for your complete peace of mind.</p>
              </div>
            </div>
            <div className="team-feature">
              <div className="tf-icon">❤️</div>
              <div>
                <h4>Matched with Care</h4>
                <p>We carefully match caregivers to clients based on personality, skills, and specific care needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner reveal-up">
        <div className="cta-banner-glow"></div>
        <div className="container cta-banner-inner">
          <div>
            <h2>Let&apos;s talk about care for your loved one.</h2>
            <p>We&apos;re here to answer every question, with no pressure and no obligation.</p>
          </div>
          <div className="cta-banner-buttons">
            <Link href="/contact" className="btn-primary">Contact Us Today</Link>
            <a href="tel:+19518343163" className="btn-outline-light">📞 +1 (951) 834-3163</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
