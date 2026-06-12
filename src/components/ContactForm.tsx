"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    emailjs: any;
  }
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    // Initialize EmailJS once the script has loaded
    const interval = setInterval(() => {
      if (window.emailjs) {
        window.emailjs.init("1fyd81KiEjTAhAo57");
        clearInterval(interval);
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const validate = (data: FormData) => {
    const newErrors: Record<string, string> = {};
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!String(data.get("firstName") || "").trim()) {
      newErrors.firstName = "Please enter your first name.";
    }
    if (!String(data.get("lastName") || "").trim()) {
      newErrors.lastName = "Please enter your last name.";
    }
    if (!emailRe.test(String(data.get("email") || "").trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!String(data.get("phone") || "").trim()) {
      newErrors.phone = "Please enter a phone number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const data = new FormData(formRef.current);
    if (!validate(data)) return;

    setSubmitting(true);

    const now = new Date();
    const formattedTime = now.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const payload = {
      first_name: data.get("firstName"),
      last_name: data.get("lastName"),
      email: data.get("email"),
      phone: data.get("phone"),
      service: data.get("service"),
      message: data.get("message"),
      time: formattedTime,
    };

    try {
      if (window.emailjs) {
        await window.emailjs.send("service_eku5bnc", "template_efnyzx9", payload);
        await window.emailjs.send("service_eku5bnc", "template_07n89ru", payload);
      }
      formRef.current.reset();
      setShowSuccess(true);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js" strategy="afterInteractive" />

      <form ref={formRef} id="contactForm" className="contact-form" noValidate onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Jane"
              required
              className={errors.firstName ? "error" : ""}
              onChange={() => setErrors((p) => ({ ...p, firstName: "" }))}
            />
            <span className="form-error">{errors.firstName}</span>
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Smith"
              required
              className={errors.lastName ? "error" : ""}
              onChange={() => setErrors((p) => ({ ...p, lastName: "" }))}
            />
            <span className="form-error">{errors.lastName}</span>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="jane@example.com"
            required
            className={errors.email ? "error" : ""}
            onChange={() => setErrors((p) => ({ ...p, email: "" }))}
          />
          <span className="form-error">{errors.email}</span>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(602) 555-0000"
            required
            className={errors.phone ? "error" : ""}
            onChange={() => setErrors((p) => ({ ...p, phone: "" }))}
          />
          <span className="form-error">{errors.phone}</span>
        </div>

        <div className="form-group">
          <label htmlFor="service">Service Interested In</label>
          <select id="service" name="service" defaultValue="">
            <option value="">Select a service...</option>
            <option>Personal Care</option>
            <option>Meal Preparation</option>
            <option>Housekeeping</option>
            <option>Medication Management</option>
            <option>Companionship & Errands</option>
            <option>Specialized / Dementia Care</option>
            <option>Not Sure Yet – Need Guidance</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Tell Us About Your Needs</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Share any details about your loved one's situation, care schedule, or questions you have..."
          ></textarea>
        </div>

        <div className="form-check">
          <input type="checkbox" id="consent" name="consent" />
          <label htmlFor="consent">I agree to be contacted by Alive Senior Home Care regarding my inquiry.</label>
        </div>

        <button type="submit" className="submit-btn" id="submitBtn" disabled={submitting}>
          <span className="btn-text" style={{ display: submitting ? "none" : "inline" }}>Send My Request</span>
          <span className="btn-loader" style={{ display: submitting ? "inline" : "none" }}>Sending...</span>
        </button>

        {showSuccess && (
          <div className="form-success" id="formSuccess">
            <div className="success-icon">✅</div>
            <h3>Thank You!</h3>
            <p>Your consultation request has been received. A care advisor will reach out within 24 hours.</p>
          </div>
        )}
      </form>
    </>
  );
}
