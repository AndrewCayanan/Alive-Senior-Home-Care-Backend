import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="logo"><span className="logo-icon"></span> Alive Senior <em>Home Care</em></div>
          <p>Providing compassionate, professional home care to Arizona and Indiana families since yesterday.</p>
          <div className="footer-badges">
            <span>Licensed</span>
            <span>Insured</span>
            <span>Background Checked</span>
          </div>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/#services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>📞 <a href="tel:+19518343163">+1 (951) 834-3163</a></p>
          <p>✉️ <a href="mailto:aliveseniorhomecare@gmail.com">aliveseniorhomecare@gmail.com</a></p>
          <p>📍 Indianapolis Metro Area, Indiana</p>
          <p>🕐 24/7 Emergency Support</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Alive Senior Home Care. All rights reserved. | Serving Indianapolis, Bloomington, Carmel & Greenfield</p>
      </div>
    </footer>
  );
}
