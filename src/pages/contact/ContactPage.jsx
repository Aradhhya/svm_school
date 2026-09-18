import { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 4000);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    window.location.hash = 'home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="svm-contact-page">
      {/* ======================================================
          SECTION 1: HERO / BANNER
          ====================================================== */}
      <section className="svm-contact-hero">
        
       

        <div className="container svm-contact-container">
          <div className="svm-contact-hero-content">

            {/* Breadcrumb Navigation */}
            <nav className="svm-contact-breadcrumb" aria-label="Breadcrumb">
              <a href="#home" onClick={handleHomeClick}>
                Home
              </a>
              <span className="svm-contact-breadcrumb-sep">&gt;</span>
              <span className="svm-contact-breadcrumb-current">Contact</span>
            </nav>

            {/* Eyebrow / Hindi-English Label */}
            <div className="svm-facilities-eyebrow">
              <span className="svm-eyebrow-hindi">संपर्क करें </span>
              <span className="svm-eyebrow-bullet">•</span>
              <span className="svm-eyebrow-eng">CONTACT US</span>
            </div>

            {/* Main Headline */}
            <h1 className="svm-contact-title">
              <span>We’re Here</span>
              <span>for You</span>
            </h1>

            {/* Description Text */}
            <p className="svm-contact-desc">
              Have a question, need more information, or want to visit our campus?
              We’d love to hear from you. Reach out to us and we’ll be happy to assist you.
            </p>

          </div>
        </div>
      </section>

      {/* ======================================================
          SECTION 2: CONTACT INFO CARDS
          ====================================================== */}
      <section className="svm-contact-cards-section">
        <div className="container svm-contact-cards-container">
          <div className="svm-contact-cards-grid">

            {/* Card 1: Our Address */}
            <div className="svm-contact-card">
              <div className="svm-card-icon-circle">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#78111B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="svm-card-body">
                <h3 className="svm-card-heading">Our Address</h3>
                <p className="svm-card-line">Sangat, Phulwari Shree</p>
                <p className="svm-card-line"> Patna, Bihar – 801505</p>
              </div>
            </div>

            {/* Card 2: Call Us */}
            <div className="svm-contact-card">
              <div className="svm-card-icon-circle">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#78111B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="svm-card-body">
                <h3 className="svm-card-heading">Call Us</h3>
                <p className="svm-card-line">
                  <a href="tel:+918873072293" className="svm-contact-link">+91 8873072293</a>
                </p>
                <p className="svm-card-line">
                  <a href="tel:+919110985925" className="svm-contact-link">+91 9110985925</a>
                </p>
              </div>
            </div>

            {/* Card 3: Email Us */}
            <div className="svm-contact-card">
              <div className="svm-card-icon-circle">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#78111B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <div className="svm-card-body">
                <h3 className="svm-card-heading">Email Us</h3>
                <p className="svm-card-line">
                  <a href="mailt0:unssvmphulwari@gmail.com" className="svm-contact-link">unssvmphulwari@gmail.com</a>
                </p>
              </div>
            </div>

            {/* Card 4: Office Hours */}
            <div className="svm-contact-card">
              <div className="svm-card-icon-circle">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#78111B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="svm-card-body">
                <h3 className="svm-card-heading">Office Hours</h3>
                <p className="svm-card-line">Mon – Sat : 7:30 AM to 3:00 PM</p>
                <p className="svm-card-subline">(Excluding Sundays &amp; Holidays)</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================
          SECTION 3: MAP & MESSAGE FORM
          ====================================================== */}
      <section className="svm-contact-interactive-section">
        <div className="container svm-contact-interactive-container">
          <div className="svm-contact-split-grid">

            {/* ---------------- LEFT: FIND US ON MAP ---------------- */}
            <div className="svm-map-block">
              {/* Header */}
              <div className="svm-map-header">
                <div className="svm-map-title-row">
                  <span className="svm-map-accent-line" aria-hidden="true"></span>
                  <h2 className="svm-map-title">Find Us on Map</h2>
                </div>
                <p className="svm-map-subtitle">
                  Visit our campus and experience our learning environment firsthand.
                </p>
              </div>

              {/* Map Canvas / Frame */}
              <div className="svm-map-box">
                <iframe
                  title="Saraswati Vidya Mandir Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.781786960343!2d85.07239841014048!3d25.57892567614591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a9b062776fb7%3A0xcfcc1fb4f5c453b8!2sUNS%20Saraswati%20Vidya%20Mandir%20-%20Phulwari%20Shree!5e0!3m2!1sen!2sin!4v1789378663096!5m2!1sen!2sin"
                  className="svm-map-iframe"
                  loading="lazy"
                  allowFullScreen
                ></iframe>

                {/* Map Floating Location Badge Pin */}
                <div className="svm-map-pin-badge">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="#E53E3E">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span className="svm-pin-label"> U.N.S Saraswati Vidya Mandir</span>
                </div>

                {/* Get Directions Floating CTA Button */}
                <a 
                  href="https://maps.google.com/?q=Saraswati+Vidya+Mandir+Kadamkuan+Patna" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="svm-map-directions-btn"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Get Directions</span>
                  <span className="svm-btn-arrow">→</span>
                </a>
              </div>
            </div>

            {/* ---------------- RIGHT: SEND US A MESSAGE FORM ---------------- */}
            <div className="svm-message-card">
              {/* Decorative Corner Lotus Watermark */}
              <div className="svm-msg-corner-watermark" aria-hidden="true">
                <svg viewBox="0 0 80 80" width="90" height="90" fill="none">
                  <path d="M40 8C40 28, 16 38, 8 58C30 58, 38 46, 40 34C42 46, 50 58, 72 58C64 38, 40 28, 40 8Z" fill="#FFFFFF" opacity="0.08" />
                </svg>
              </div>

              <div className="svm-msg-card-header">
                <h2 className="svm-msg-card-title">Send Us a Message</h2>
                <p className="svm-msg-card-subtitle">
                  Fill in the details below and we&apos;ll get back to you soon.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="svm-msg-form">
                {isSubmitted && (
                  <div className="svm-msg-success-alert">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#FFFFFF" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Message sent successfully! Our team will contact you shortly.</span>
                  </div>
                )}

                <div className="svm-msg-form-grid">
                  {/* Your Name */}
                  <div className="svm-msg-field">
                    <label className="svm-msg-label">
                      Your Name <span className="svm-msg-req">*</span>
                    </label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your name"
                      className="svm-msg-input"
                    />
                  </div>

                  {/* Your Email */}
                  <div className="svm-msg-field">
                    <label className="svm-msg-label">
                      Your Email <span className="svm-msg-req">*</span>
                    </label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email"
                      className="svm-msg-input"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="svm-msg-field">
                    <label className="svm-msg-label">
                      Phone Number <span className="svm-msg-req">*</span>
                    </label>
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter mobile number"
                      className="svm-msg-input"
                    />
                  </div>

                  {/* Subject */}
                  <div className="svm-msg-field">
                    <label className="svm-msg-label">
                      Subject <span className="svm-msg-req">*</span>
                    </label>
                    <div className="svm-msg-select-wrap">
                      <select 
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="svm-msg-input svm-msg-select"
                      >
                        <option value="">Select a subject</option>
                        <option value="Admission Inquiry">Admission Inquiry</option>
                        <option value="Fee Structure">Fee Structure</option>
                        <option value="Academic Curriculum">Academic Curriculum</option>
                        <option value="Campus Visit">Campus Visit</option>
                        <option value="General Query">General Query</option>
                        <option value="Other">Other</option>
                      </select>
                      <span className="svm-msg-select-arrow" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#78111B" strokeWidth="2.5">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="svm-msg-field svm-msg-field-full">
                  <label className="svm-msg-label">
                    Message <span className="svm-msg-req">*</span>
                  </label>
                  <textarea 
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Write your message here..."
                    className="svm-msg-input svm-msg-textarea"
                  ></textarea>
                </div>

                {/* Submit Orange Button */}
                <div className="svm-msg-btn-wrap">
                  <button type="submit" className="svm-msg-submit-btn">
                    <span>Send Message</span>
                    <span className="svm-msg-btn-arrow">→</span>
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================
          SECTION 4: FREQUENTLY ASKED QUESTIONS (FAQ)
          ====================================================== */}
      <section className="svm-contact-faq-section" id="faq">
        <div className="container svm-faq-container">
          <div className="svm-faq-layout-grid">

            {/* ---------------- LEFT: ARTISTIC VISUAL CARD ---------------- */}
            <div className="svm-faq-visual-column">
              <div className="svm-faq-visual-card">
                
                

                {/* Main Books & Classroom Photograph */}
                <div className="svm-faq-img-wrap">
                  <img 
                    src="/src/assets/contact-faq-books.jpg" 
                    alt="Questions, Answers, Guidance, Support books stack" 
                    className="svm-faq-main-img" 
                  />
                  {/* Subtle curved overlay badge at bottom */}
                  <div className="svm-faq-bottom-badge">
                    <div className="svm-badge-book-icon">
                      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#C58A3A" strokeWidth="1.8">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        <line x1="12" y1="1" x2="12" y2="4" stroke="#C58A3A" strokeWidth="2"></line>
                        <line x1="8" y1="2" x2="9" y2="4" stroke="#C58A3A" strokeWidth="1.5"></line>
                        <line x1="16" y1="2" x2="15" y2="4" stroke="#C58A3A" strokeWidth="1.5"></line>
                      </svg>
                    </div>
                    <div className="svm-badge-titles">
                      <span className="svm-badge-title-1">YOUR QUESTIONS</span>
                      <span className="svm-badge-title-2">OUR COMMITMENT</span>
                      <div className="svm-badge-line" aria-hidden="true"></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* ---------------- RIGHT: FAQ ACCORDION ---------------- */}
            <div className="svm-faq-content-column">
              
              {/* Header with Sanskrit Motto on the far right */}
              <div className="svm-faq-header-flex">
                <div className="svm-faq-header-titles">
                  <div className="svm-faq-eyebrow">
                    <span className="svm-faq-eyebrow-line" aria-hidden="true"></span>
                    <span className="svm-faq-eyebrow-text">FAQ</span>
                  </div>
                  <h2 className="svm-faq-main-heading">Frequently Asked Questions</h2>
                  <p className="svm-faq-subtitle">
                    Find quick answers to some of the most common questions about our school, admissions, facilities and more.
                  </p>
                </div>

                {/* Sanskrit Motto Badge on Top Right */}
                <div className="svm-faq-sanskrit-badge" aria-hidden="true">
                  <div className="svm-sanskrit-leaf">
                    <svg viewBox="0 0 60 60" width="48" height="48" fill="none" stroke="#D4A259" strokeWidth="1.2">
                      <path d="M30 6C42 16, 50 32, 54 54C32 50, 16 42, 6 30C18 28, 26 18, 30 6Z" opacity="0.35" fill="#F4E9DC" />
                    </svg>
                  </div>
                  <div className="svm-sanskrit-text">
                    <span>विद्या</span>
                    <span>ददाति</span>
                    <span>विनयम्</span>
                  </div>
                  <div className="svm-sanskrit-line"></div>
                </div>
              </div>

              {/* Accordion Pills List */}
              <div className="svm-faq-accordion-list">

                {/* Item 1 */}
                <div className={`svm-faq-item ${openFaqIndex === 0 ? 'active' : ''}`}>
                  <button 
                    type="button" 
                    className="svm-faq-item-header" 
                    onClick={() => setOpenFaqIndex(openFaqIndex === 0 ? null : 0)}
                    aria-expanded={openFaqIndex === 0}
                  >
                    <div className="svm-faq-item-left">
                      <div className="svm-faq-icon-badge">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#78111B" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </div>
                      <span className="svm-faq-question">Where is the school located?</span>
                    </div>
                    <span className="svm-faq-toggle-icon">{openFaqIndex === 0 ? '−' : '+'}</span>
                  </button>
                  <div className="svm-faq-item-body-wrapper">
                    <div className="svm-faq-item-body">
                      <p>
                        Our campus is located at Baldev Sahay Path, Kadamkuan, Patna, Bihar – 800003. We are conveniently situated in the heart of the city with easy access from major transit hubs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className={`svm-faq-item ${openFaqIndex === 1 ? 'active' : ''}`}>
                  <button 
                    type="button" 
                    className="svm-faq-item-header" 
                    onClick={() => setOpenFaqIndex(openFaqIndex === 1 ? null : 1)}
                    aria-expanded={openFaqIndex === 1}
                  >
                    <div className="svm-faq-item-left">
                      <div className="svm-faq-icon-badge">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#78111B" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                      </div>
                      <span className="svm-faq-question">What are the school timings?</span>
                    </div>
                    <span className="svm-faq-toggle-icon">{openFaqIndex === 1 ? '−' : '+'}</span>
                  </button>
                  <div className="svm-faq-item-body-wrapper">
                    <div className="svm-faq-item-body">
                      <p>
                        School hours are Monday through Saturday, from 7:30 AM to 2:00 PM. The administrative office is open during the same hours. Sundays and public holidays remain closed.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 3 */}
                <div className={`svm-faq-item ${openFaqIndex === 2 ? 'active' : ''}`}>
                  <button 
                    type="button" 
                    className="svm-faq-item-header" 
                    onClick={() => setOpenFaqIndex(openFaqIndex === 2 ? null : 2)}
                    aria-expanded={openFaqIndex === 2}
                  >
                    <div className="svm-faq-item-left">
                      <div className="svm-faq-icon-badge">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#78111B" strokeWidth="2">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                      </div>
                      <span className="svm-faq-question">How can I schedule a campus visit?</span>
                    </div>
                    <span className="svm-faq-toggle-icon">{openFaqIndex === 2 ? '−' : '+'}</span>
                  </button>
                  <div className="svm-faq-item-body-wrapper">
                    <div className="svm-faq-item-body">
                      <p>
                        You can schedule a visit by filling out the inquiry form above, calling our reception desk at +91 9006502899, or visiting the school during morning office hours.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 4 */}
                <div className={`svm-faq-item ${openFaqIndex === 3 ? 'active' : ''}`}>
                  <button 
                    type="button" 
                    className="svm-faq-item-header" 
                    onClick={() => setOpenFaqIndex(openFaqIndex === 3 ? null : 3)}
                    aria-expanded={openFaqIndex === 3}
                  >
                    <div className="svm-faq-item-left">
                      <div className="svm-faq-icon-badge">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#78111B" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                        </svg>
                      </div>
                      <span className="svm-faq-question">Who can I contact for admission-related queries?</span>
                    </div>
                    <span className="svm-faq-toggle-icon">{openFaqIndex === 3 ? '−' : '+'}</span>
                  </button>
                  <div className="svm-faq-item-body-wrapper">
                    <div className="svm-faq-item-body">
                      <p>
                        You can contact our Admission Counsellor directly via mobile at +91 9006502899 or email us at saraswatividyamandir1977@gmail.com for entrance syllabi and criteria.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 5 */}
                <div className={`svm-faq-item ${openFaqIndex === 4 ? 'active' : ''}`}>
                  <button 
                    type="button" 
                    className="svm-faq-item-header" 
                    onClick={() => setOpenFaqIndex(openFaqIndex === 4 ? null : 4)}
                    aria-expanded={openFaqIndex === 4}
                  >
                    <div className="svm-faq-item-left">
                      <div className="svm-faq-icon-badge">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#78111B" strokeWidth="2">
                          <path d="M19 17h2l.64-2.54a6 6 0 0 0 .36-2.06V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v5.4a6 6 0 0 0 .36 2.06L3 17h2"></path>
                          <circle cx="7" cy="17" r="2"></circle>
                          <path d="M9 17h6"></path>
                          <circle cx="17" cy="17" r="2"></circle>
                        </svg>
                      </div>
                      <span className="svm-faq-question">Is there a transport facility available?</span>
                    </div>
                    <span className="svm-faq-toggle-icon">{openFaqIndex === 4 ? '−' : '+'}</span>
                  </button>
                  <div className="svm-faq-item-body-wrapper">
                    <div className="svm-faq-item-body">
                      <p>
                        Yes, safe and supervised school transport facilities are available covering major routes across Patna and surrounding localities.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 6 */}
                <div className={`svm-faq-item ${openFaqIndex === 5 ? 'active' : ''}`}>
                  <button 
                    type="button" 
                    className="svm-faq-item-header" 
                    onClick={() => setOpenFaqIndex(openFaqIndex === 5 ? null : 5)}
                    aria-expanded={openFaqIndex === 5}
                  >
                    <div className="svm-faq-item-left">
                      <div className="svm-faq-icon-badge">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#78111B" strokeWidth="2">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </div>
                      <span className="svm-faq-question">How can I reach the school by public transport?</span>
                    </div>
                    <span className="svm-faq-toggle-icon">{openFaqIndex === 5 ? '−' : '+'}</span>
                  </button>
                  <div className="svm-faq-item-body-wrapper">
                    <div className="svm-faq-item-body">
                      <p>
                        The school is easily reachable by city buses, auto-rickshaws, and e-rickshaws with stops near Kadamkuan / Rajendra Nagar terminal.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
