import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Navbar active="contact" />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="container page-hero-content">
          <h1 className="reveal-up delay-1">Let&apos;s <em>Connect</em></h1>
          <p className="reveal-up delay-2">We&apos;re here to help — no pressure, just genuine care and guidance.</p>
        </div>
      </section>

      {/* Contact Main */}
      <section className="contact-main">
        <div className="container contact-layout">

          {/* Left: Info + Cards */}
          <div className="contact-sidebar reveal-left">

            <div className="contact-info-block">
              <h2>Get In Touch</h2>
              <p>Whether you&apos;re exploring options or ready to start, our care advisors are happy to help — 7 days a week.</p>
            </div>

            <div className="contact-cards">

              <div className="contact-card">
                <div className="contact-card-icon">📞</div>
                <div>
                  <div className="contact-card-label">Call Us Directly</div>
                  <a href="tel:+19518343163" className="contact-card-value">+1 (951) 834-3163</a>
                  <div className="contact-card-note">Available 24/7 for emergencies</div>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">✉️</div>
                <div>
                  <div className="contact-card-label">Email Us</div>
                  <a href="mailto:aliveseniorhomecare@gmail.com" className="contact-card-value">aliveseniorhomecare@gmail.com</a>
                  <div className="contact-card-note">We reply within 4 hours</div>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">📍</div>
                <div>
                  <div className="contact-card-label">Service Area</div>
                  <div className="contact-card-value">Phoenix Metro, Arizona</div>
                  <div className="contact-card-note">Phoenix · Scottsdale · Tempe · Mesa</div>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">🕐</div>
                <div>
                  <div className="contact-card-label">Office Hours</div>
                  <div className="contact-card-value">Mon–Fri: 8 AM – 6 PM</div>
                  <div className="contact-card-note">24/7 emergency line always open</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-wrapper reveal-right">
            <div className="form-header">
              <h2>Request a Free Consultation</h2>
              <p>Fill in the form below and we&apos;ll reach out within 24 hours to discuss your needs.</p>
            </div>

            <ContactForm />
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header reveal-up">
            <span className="section-tag">FAQ</span>
            <h2>Common Questions <em>Answered</em></h2>
          </div>
          <div className="faq-list reveal-up">

            <div className="faq-item">
              <button className="faq-question">
                <span>How quickly can care services begin?</span>
                <span className="faq-chevron">+</span>
              </button>
              <div className="faq-answer">
                <p>In most cases, we can have a caregiver in place within 24–48 hours of your initial consultation. For urgent situations, we do our best to arrange same-day care.</p>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question">
                <span>What areas do you serve?</span>
                <span className="faq-chevron">+</span>
              </button>
              <div className="faq-answer">
                <p>We serve the entire Phoenix metro area, including Phoenix, Scottsdale, Tempe, Mesa, Chandler, Gilbert, and surrounding communities.</p>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question">
                <span>How do you select and train your caregivers?</span>
                <span className="faq-chevron">+</span>
              </button>
              <div className="faq-answer">
                <p>All caregivers undergo thorough background checks, reference verification, and skills assessments before joining our team. They also receive ongoing training in areas including dementia care, first aid, and person-centered care practices.</p>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question">
                <span>Do you accept insurance?</span>
                <span className="faq-chevron">+</span>
              </button>
              <div className="faq-answer">
                <p>We work with a variety of payment options including private pay, long-term care insurance, and VA benefits. Contact us to discuss which options may apply to your situation.</p>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question">
                <span>Can I change or cancel services?</span>
                <span className="faq-chevron">+</span>
              </button>
              <div className="faq-answer">
                <p>Absolutely. We offer flexible scheduling with no long-term contracts required. You can adjust, pause, or discontinue services at any time with reasonable notice.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
