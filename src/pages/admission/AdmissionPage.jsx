import { useState } from 'react';
import './AdmissionPage.css';

const AdmissionPage = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    classApplying: '',
    dob: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
        parentName: '',
        studentName: '',
        classApplying: '',
        dob: '',
        phone: '',
        email: '',
        message: ''
      });
    }, 4000);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    window.location.hash = 'home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEnquireClick = (e) => {
    e.preventDefault();
    const elem = document.getElementById('admission-form');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGuideClick = (e) => {
    e.preventDefault();
    const elem = document.getElementById('admission-criteria') || document.getElementById('dates-and-documents');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="svm-admission-page">
      {/* ======================================================
          SECTION 1: HERO / BANNER
          ====================================================== */}
      <section className="svm-admission-hero">

        {/* Faint Floral Branch Watermark on Far Left */}
        <div className="svm-admission-leaf-decor" aria-hidden="true">
          <svg viewBox="0 0 100 240" width="120" height="280" fill="none" stroke="#D4A259" strokeWidth="1.2">
            <path d="M-10 200 C30 150, 50 90, 20 20 C10 70, -10 130, -10 200 Z" opacity="0.35" />
            <path d="M10 140 C40 110, 70 80, 60 10" opacity="0.25" />
            <path d="M20 100 C50 80, 80 60, 70 5" opacity="0.25" />
          </svg>
        </div>

        <div className="container svm-admission-container">
          <div className="svm-admission-hero-content">

            {/* Breadcrumb with Home Icon */}
            <nav className="svm-admission-breadcrumb" aria-label="Breadcrumb">
              <a href="#home" onClick={handleHomeClick} className="svm-breadcrumb-home">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span>Home</span>
              </a>
              <span className="svm-breadcrumb-sep">&gt;</span>
              <span className="svm-breadcrumb-current">Admissions</span>
            </nav>

            {/* Eyebrow with Gold Accent Bar */}
            <div className="svm-admission-eyebrow">
              <span className="svm-eyebrow-text">A BRIGHTER TOMORROW</span>
              <span className="svm-eyebrow-bar" aria-hidden="true"></span>
            </div>

            {/* Main Title */}
            <h1 className="svm-admission-title">
              <span>Begin Your Child’s</span>
              <span>Journey With Us</span>
            </h1>

            {/* Description */}
            <p className="svm-admission-desc">
              Because education is not just about knowledge, but about building character,
              confidence and a better tomorrow.
            </p>

            {/* Dual CTA Buttons */}
            <div className="svm-admission-btn-group">
              <a href="#admission-form" onClick={handleEnquireClick} className="svm-admission-btn-primary">
                <span>Enquire for Admission</span>
                <span className="svm-btn-arrow">→</span>
              </a>
              <a href="#admission-criteria" onClick={handleGuideClick} className="svm-admission-btn-outline">
                <span>View Admission Guide</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================
          SECTION 2: KEY DATES & DOCUMENTS
          ====================================================== */}
      <section className="svm-dates-docs-section" id="dates-and-documents">
        {/* Soft Decorative Foliage Watermarks */}
        <div className="svm-corner-leaf svm-corner-leaf-tl" aria-hidden="true">
          <svg viewBox="0 0 120 120" width="130" height="130" fill="none" stroke="#D8B588" strokeWidth="1.2">
            <path d="M0 0 C40 10, 70 40, 90 90 C50 80, 20 50, 0 0 Z" opacity="0.3" fill="#F4E9DC" />
            <path d="M20 20 C50 40, 70 70, 75 110" opacity="0.25" />
            <path d="M40 15 C70 30, 90 60, 110 75" opacity="0.25" />
          </svg>
        </div>
        <div className="svm-corner-leaf svm-corner-leaf-tr" aria-hidden="true">
          <svg viewBox="0 0 120 120" width="130" height="130" fill="none" stroke="#D8B588" strokeWidth="1.2">
            <path d="M120 0 C80 10, 50 40, 30 90 C70 80, 100 50, 120 0 Z" opacity="0.3" fill="#F4E9DC" />
            <path d="M100 20 C70 40, 50 70, 45 110" opacity="0.25" />
            <path d="M80 15 C50 30, 30 60, 10 75" opacity="0.25" />
          </svg>
        </div>

        <div className="container svm-dates-docs-container">
          {/* Section Header */}
          <div className="svm-section-title-wrap">
            <h2 className="svm-dates-docs-title">Key Dates &amp; Documents</h2>
            <p className="svm-dates-docs-subtitle">
              Stay informed and keep your documents ready for a smooth admission process.
            </p>
          </div>

          {/* Side-by-Side Cards Grid */}
          <div className="svm-dates-docs-grid">

            {/* ---------------- CARD 1: ADMISSION CALENDAR ---------------- */}
            <div className="svm-card svm-calendar-card">
              <div className="svm-card-header">
                <div className="svm-header-icon-box svm-icon-orange">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#C0392B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="3" ry="3"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                    <circle cx="8" cy="15" r="1" fill="#C0392B"></circle>
                    <circle cx="12" cy="15" r="1" fill="#C0392B"></circle>
                    <circle cx="16" cy="15" r="1" fill="#C0392B"></circle>
                  </svg>
                </div>
                <div className="svm-header-text">
                  <h3 className="svm-card-title">Admission Calendar</h3>
                  <span className="svm-card-badge-label">IMPORTANT DATES FOR A BRIGHT TOMORROW</span>
                </div>
              </div>

              {/* Calendar Table */}
              <div className="svm-calendar-table-wrap">
                <div className="svm-calendar-table-header">
                  <div className="svm-col-particulars">Particulars</div>
                  <div className="svm-col-timeline">Timeline</div>
                </div>

                <div className="svm-calendar-table-body">
                  {/* Row 1 */}
                  <div className="svm-calendar-row">
                    <div className="svm-col-particulars">
                      <div className="svm-row-icon-wrap">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#8E1B24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                        </svg>
                      </div>
                      <span className="svm-row-title">Registration</span>
                    </div>
                    <div className="svm-col-timeline">
                      <span className="svm-row-desc">From December</span>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="svm-calendar-row">
                    <div className="svm-col-particulars">
                      <div className="svm-row-icon-wrap">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#8E1B24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </div>
                      <span className="svm-row-title">Entrance Test</span>
                    </div>
                    <div className="svm-col-timeline">
                      <span className="svm-row-desc">January – February</span>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="svm-calendar-row">
                    <div className="svm-col-particulars">
                      <div className="svm-row-icon-wrap">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#8E1B24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
                          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                        </svg>
                      </div>
                      <span className="svm-row-title">Result Declaration</span>
                    </div>
                    <div className="svm-col-timeline">
                      <span className="svm-row-desc">On 3rd Day</span>
                    </div>
                  </div>

                  {/* Row 4 */}
                  <div className="svm-calendar-row">
                    <div className="svm-col-particulars">
                      <div className="svm-row-icon-wrap">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#8E1B24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="9 12 11.5 14.5 15.5 9.5"></polyline>
                        </svg>
                      </div>
                      <span className="svm-row-title">Admission</span>
                    </div>
                    <div className="svm-col-timeline">
                      <span className="svm-row-desc">On the date planned instructed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Note Alert Card */}
              <div className="svm-calendar-note">
                <div className="svm-note-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#78111B"></circle>
                    <line x1="12" y1="16" x2="12" y2="12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"></line>
                    <circle cx="12" cy="8" r="1.25" fill="#FFFFFF"></circle>
                  </svg>
                </div>
                <div className="svm-note-content">
                  <span className="svm-note-label">Note:</span>
                  <p className="svm-note-text">
                    Dates are tentative and may be subject to change. Please keep checking our website for the latest updates.
                  </p>
                </div>
                {/* Decorative Floral Watermark in Note */}
                <div className="svm-note-watermark" aria-hidden="true">
                  <svg viewBox="0 0 60 60" width="48" height="48" fill="none">
                    <path d="M30 4C30 20, 10 30, 4 45C22 45, 28 35, 30 25C32 35, 38 45, 56 45C50 30, 30 20, 30 4Z" fill="#78111B" opacity="0.08"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* ---------------- CARD 2: DOCUMENTS REQUIRED ---------------- */}
            <div className="svm-card svm-docs-card">
              <div className="svm-card-header">
                <div className="svm-header-icon-box svm-icon-teal">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#0D7654" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <line x1="10" y1="9" x2="8" y2="9"></line>
                  </svg>
                </div>
                <div className="svm-header-text">
                  <h3 className="svm-card-title">Documents Required</h3>
                  <span className="svm-card-badge-label">KEEP THESE READY</span>
                </div>
              </div>

              {/* Documents List */}
              <div className="svm-docs-list">
                {/* Item 1 */}
                <div className="svm-doc-item">
                  <div className="svm-doc-icon-badge svm-badge-peach">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#C0392B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                    </svg>
                  </div>
                  <div className="svm-doc-details">
                    <h4 className="svm-doc-name">Application Form</h4>
                    <p className="svm-doc-sub">Duly filled up</p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="svm-doc-item">
                  <div className="svm-doc-icon-badge svm-badge-peach">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#C0392B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                      <circle cx="8" cy="10" r="2"></circle>
                      <path d="M15 8h2"></path>
                      <path d="M15 12h2"></path>
                      <path d="M7 16h10"></path>
                    </svg>
                  </div>
                  <div className="svm-doc-details">
                    <h4 className="svm-doc-name">Birth Certificate</h4>
                    <p className="svm-doc-sub">Issued by Municipal Corporation / Authorised body or copy of Aadhar Card</p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="svm-doc-item">
                  <div className="svm-doc-icon-badge svm-badge-green">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#0D7654" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                      <line x1="2" y1="10" x2="22" y2="10"></line>
                      <circle cx="7" cy="15" r="1.5"></circle>
                      <line x1="12" y1="15" x2="17" y2="15"></line>
                    </svg>
                  </div>
                  <div className="svm-doc-details">
                    <h4 className="svm-doc-name">Copy of Aadhaar Card</h4>
                    <p className="svm-doc-sub">(Father &amp; Mother)</p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="svm-doc-item">
                  <div className="svm-doc-icon-badge svm-badge-peach">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#C0392B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                      <line x1="9" y1="7" x2="15" y2="7"></line>
                      <line x1="9" y1="11" x2="13" y2="11"></line>
                    </svg>
                  </div>
                  <div className="svm-doc-details">
                    <h4 className="svm-doc-name">Transfer Certificate</h4>
                    <p className="svm-doc-sub">S.L.C.</p>
                  </div>
                </div>

                {/* Item 5 */}
                <div className="svm-doc-item">
                  <div className="svm-doc-icon-badge svm-badge-orange">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#D97706" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                  </div>
                  <div className="svm-doc-details">
                    <h4 className="svm-doc-name">Passport Size Photographs</h4>
                    <p className="svm-doc-sub">2 coloured photographs</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================
          SECTION 3: ELIGIBILITY CRITERIA
          ====================================================== */}
      <section className="svm-eligibility-section" id="admission-criteria">
        {/* Soft Decorative Botanical Leaves */}
        <div className="svm-corner-leaf svm-corner-leaf-tl" aria-hidden="true">
          <svg viewBox="0 0 120 120" width="130" height="130" fill="none" stroke="#D8B588" strokeWidth="1.2">
            <path d="M0 0 C40 10, 70 40, 90 90 C50 80, 20 50, 0 0 Z" opacity="0.25" fill="#F4E9DC" />
            <path d="M20 20 C50 40, 70 70, 75 110" opacity="0.2" />
          </svg>
        </div>
        <div className="svm-eligibility-leaf-mid" aria-hidden="true">
          <svg viewBox="0 0 80 80" width="90" height="90" fill="none" stroke="#D8B588" strokeWidth="1.2">
            <path d="M40 0 C60 20, 70 50, 80 80 C50 70, 20 60, 0 40 Z" opacity="0.2" fill="#F4E9DC" />
          </svg>
        </div>

        <div className="container svm-eligibility-container">
          {/* Left-Aligned Section Header */}
          <div className="svm-eligibility-header">
            <h2 className="svm-eligibility-title">Eligibility Criteria</h2>
            <p className="svm-eligibility-subtitle">
              Every child’s potential matters. Discover the class-wise age criteria and academic requirements to begin their journey with us.
            </p>
          </div>

          {/* Main Grid: Left Table Card + Right Editorial Column */}
          <div className="svm-eligibility-grid">

            {/* ---------------- LEFT: CLASS-WISE TABLE CARD ---------------- */}
            <div className="svm-card svm-eligibility-card">
              <div className="svm-card-header">
                <div className="svm-header-icon-box svm-icon-cap">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#C0392B" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                  </svg>
                </div>
                <div className="svm-header-text">
                  <h3 className="svm-card-title">Class-wise Eligibility Criteria</h3>
                  <span className="svm-card-badge-label">FIND THE RIGHT CLASS FOR YOUR CHILD</span>
                </div>
              </div>

              {/* Table Wrapper */}
              <div className="svm-criteria-table-wrap">
                <table className="svm-criteria-table">
                  <thead>
                    <tr>
                      <th className="th-class">Class</th>
                      <th className="th-age">Minimum Age<br />as on 1st April</th>
                      <th className="th-qual">Academic Qualification</th>
                      <th className="th-nature">Nature</th>
                      <th className="th-subject">Subject of Test</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="td-class font-bold">Arun (Nur.)</td>
                      <td className="td-age">3 Years</td>
                      <td className="td-dash">-</td>
                      <td className="td-nature">Viva</td>
                      <td className="td-dash">-</td>
                    </tr>
                    <tr>
                      <td className="td-class font-bold">Uday (LKG)</td>
                      <td className="td-age">4 Years</td>
                      <td className="td-dash">-</td>
                      <td className="td-nature">Viva</td>
                      <td className="td-dash">-</td>
                    </tr>
                    <tr>
                      <td className="td-class font-bold">Prabhat (UKG)</td>
                      <td className="td-age">5 Years</td>
                      <td className="td-dash">-</td>
                      <td className="td-nature">Viva</td>
                      <td className="td-dash">-</td>
                    </tr>
                    <tr>
                      <td className="td-class font-bold">Class I</td>
                      <td className="td-age">6 Years</td>
                      <td className="td-dash">-</td>
                      <td className="td-nature">Viva</td>
                      <td className="td-subject">Hindi, Eng., Math &amp; G.S.</td>
                    </tr>
                    <tr>
                      <td className="td-class font-bold">Class II</td>
                      <td className="td-age">7 Years</td>
                      <td className="td-qual">1st Std. Pass</td>
                      <td className="td-nature">Written and Viva</td>
                      <td className="td-dash">-</td>
                    </tr>
                    <tr>
                      <td className="td-class font-bold">Class III</td>
                      <td className="td-age">8 Years</td>
                      <td className="td-qual">IInd Std. Pass</td>
                      <td className="td-nature">Written and Viva</td>
                      <td className="td-dash">-</td>
                    </tr>
                    <tr>
                      <td className="td-class font-bold">Class IV</td>
                      <td className="td-age">9 Years</td>
                      <td className="td-qual">IIIrd Std. Pass</td>
                      <td className="td-nature">Written and Viva</td>
                      <td className="td-dash">-</td>
                    </tr>
                    <tr>
                      <td className="td-class font-bold">Class V</td>
                      <td className="td-age">10 Years</td>
                      <td className="td-qual">IVth Std. Pass</td>
                      <td className="td-nature">Written and Viva</td>
                      <td className="td-dash">-</td>
                    </tr>
                    <tr>
                      <td className="td-class font-bold">Class VI</td>
                      <td className="td-age">11 Years</td>
                      <td className="td-qual">Vth Std. Pass</td>
                      <td className="td-nature">Written and Viva</td>
                      <td className="td-dash">-</td>
                    </tr>
                    <tr>
                      <td className="td-class font-bold">Class VII</td>
                      <td className="td-age">12 Years</td>
                      <td className="td-qual">VIth Std. Pass</td>
                      <td className="td-nature">Written and Viva</td>
                      <td className="td-dash">-</td>
                    </tr>
                    <tr>
                      <td className="td-class font-bold">Class VIII</td>
                      <td className="td-age">13 Years</td>
                      <td className="td-qual">VIIth Std. Pass</td>
                      <td className="td-nature">Written and Viva</td>
                      <td className="td-dash">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Bottom Note */}
              <div className="svm-calendar-note svm-criteria-note">
                <div className="svm-note-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#78111B"></circle>
                    <line x1="12" y1="16" x2="12" y2="12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"></line>
                    <circle cx="12" cy="8" r="1.25" fill="#FFFFFF"></circle>
                  </svg>
                </div>
                <div className="svm-note-content">
                  <span className="svm-note-label">Note:</span>
                  <p className="svm-note-text">
                    The candidate seeking admission have to appear in the Entrance Test according to the above criteria.
                  </p>
                </div>
              </div>
            </div>

            {/* ---------------- RIGHT: EDITORIAL & FEATURES ---------------- */}
            <div className="svm-eligibility-sidebar">

              {/* Top Composite: Quote + Student Photo */}
              <div className="svm-quote-visual-banner">
                <div className="svm-quote-content">
                  <div className="svm-quote-mark" aria-hidden="true">“</div>
                  <h4 className="svm-quote-heading">
                    The right<br />
                    beginning builds<br />
                    a brighter<br />
                    tomorrow.
                  </h4>
                  <div className="svm-quote-underline" aria-hidden="true"></div>
                </div>

                <div className="svm-quote-img-container">
                  <img 
                    src="/src/assets/eligibility-student.jpg" 
                    alt="Student with books" 
                    className="svm-quote-student-img" 
                  />
                </div>
              </div>

              {/* 3 Value Pillars */}
              <div className="svm-pillars-list">

                {/* Pillar 1 */}
                <div className="svm-pillar-item">
                  <div className="svm-pillar-icon-badge">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#78111B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div className="svm-pillar-text">
                    <h5 className="svm-pillar-title">Age Appropriate Learning</h5>
                    <p className="svm-pillar-sub">Nurturing growth at every stage.</p>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="svm-pillar-item">
                  <div className="svm-pillar-icon-badge">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#78111B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                  </div>
                  <div className="svm-pillar-text">
                    <h5 className="svm-pillar-title">Fair &amp; Transparent Process</h5>
                    <p className="svm-pillar-sub">Equal opportunity for every child.</p>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="svm-pillar-item">
                  <div className="svm-pillar-icon-badge">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#78111B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="20" x2="18" y2="10"></line>
                      <line x1="12" y1="20" x2="12" y2="4"></line>
                      <line x1="6" y1="20" x2="6" y2="14"></line>
                      <path d="M4 4l6 6 4-4 6 6"></path>
                    </svg>
                  </div>
                  <div className="svm-pillar-text">
                    <h5 className="svm-pillar-title">Strong Academic Foundation</h5>
                    <p className="svm-pillar-sub">Preparing for a brighter future.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================
          SECTION 4: ADMISSION INQUIRY FORM
          ====================================================== */}
      <section className="svm-inquiry-section" id="admission-form">
        <div className="container svm-inquiry-container">
          {/* Centered Main Section Header */}
          <div className="svm-section-title-wrap">
            <h2 className="svm-inquiry-main-title">Admission Inquiry Form</h2>
            <p className="svm-inquiry-main-subtitle">
              Have questions? We&apos;re here to help. Fill out the form and our admission team will get in touch with you.
            </p>
          </div>

          <div className="svm-inquiry-grid">
            {/* ---------------- LEFT: TALK ABOUT FUTURE ---------------- */}
            <div className="svm-inquiry-left">
              <h3 className="svm-inquiry-talk-title">
                Let’s Talk<br />
                About Their Future
              </h3>
              <p className="svm-inquiry-talk-desc">
                Share a few details and our admission counsellors will guide you with the right information, class options and next steps.
              </p>

              <div className="svm-inquiry-perks">
                {/* Perk 1 */}
                <div className="svm-perk-item">
                  <div className="svm-perk-icon-circle">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#78111B" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      <line x1="8" y1="9" x2="16" y2="9"></line>
                      <line x1="8" y1="13" x2="14" y2="13"></line>
                    </svg>
                  </div>
                  <div className="svm-perk-text">
                    <h4 className="svm-perk-title">Get Guidance</h4>
                    <p className="svm-perk-desc">Talk to our admission counsellors for any queries.</p>
                  </div>
                </div>

                {/* Perk 2 */}
                <div className="svm-perk-item">
                  <div className="svm-perk-icon-circle">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#78111B" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div className="svm-perk-text">
                    <h4 className="svm-perk-title">Personalised Support</h4>
                    <p className="svm-perk-desc">Find the right class and program for your child.</p>
                  </div>
                </div>

                {/* Perk 3 */}
                <div className="svm-perk-item">
                  <div className="svm-perk-icon-circle">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#78111B" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                    </svg>
                  </div>
                  <div className="svm-perk-text">
                    <h4 className="svm-perk-title">Quick Response</h4>
                    <p className="svm-perk-desc">We&apos;ll get back to you as soon as possible.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ---------------- RIGHT: INQUIRY FORM CARD ---------------- */}
            <div className="svm-inquiry-form-card">
              {/* Card Maroon Header */}
              <div className="svm-form-header">
                <div className="svm-form-header-icon">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </div>
                <div className="svm-form-header-title-box">
                  <h3 className="svm-form-header-title">Admission Inquiry Form</h3>
                  <span className="svm-form-header-sub">FILL IN YOUR DETAILS</span>
                </div>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="svm-form-body">
                {isSubmitted && (
                  <div className="svm-form-success-alert">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#15803D" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Thank you! Your inquiry has been submitted. Our admission team will contact you soon.</span>
                  </div>
                )}

                <div className="svm-form-grid">
                  {/* Parent's Name */}
                  <div className="svm-field-group">
                    <label className="svm-form-label">
                      Parent’s Name <span className="svm-required">*</span>
                    </label>
                    <div className="svm-input-wrapper">
                      <span className="svm-input-icon">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#9CA3AF" strokeWidth="1.8">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </span>
                      <input 
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter parent’s full name"
                        className="svm-form-input"
                      />
                    </div>
                  </div>

                  {/* Student's Name */}
                  <div className="svm-field-group">
                    <label className="svm-form-label">
                      Student’s Name <span className="svm-required">*</span>
                    </label>
                    <div className="svm-input-wrapper">
                      <span className="svm-input-icon">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#9CA3AF" strokeWidth="1.8">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </span>
                      <input 
                        type="text"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter student’s full name"
                        className="svm-form-input"
                      />
                    </div>
                  </div>

                  {/* Class Applying For */}
                  <div className="svm-field-group">
                    <label className="svm-form-label">
                      Class Applying For <span className="svm-required">*</span>
                    </label>
                    <div className="svm-input-wrapper svm-select-wrapper">
                      <span className="svm-input-icon">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#9CA3AF" strokeWidth="1.8">
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                        </svg>
                      </span>
                      <select 
                        name="classApplying"
                        value={formData.classApplying}
                        onChange={handleInputChange}
                        required
                        className="svm-form-input svm-form-select"
                      >
                        <option value="">Select class</option>
                        <option value="Arun (Nur.)">Arun (Nur.)</option>
                        <option value="Uday (LKG)">Uday (LKG)</option>
                        <option value="Prabhat (UKG)">Prabhat (UKG)</option>
                        <option value="Class I">Class I</option>
                        <option value="Class II">Class II</option>
                        <option value="Class III">Class III</option>
                        <option value="Class IV">Class IV</option>
                        <option value="Class V">Class V</option>
                        <option value="Class VI">Class VI</option>
                        <option value="Class VII">Class VII</option>
                        <option value="Class VIII">Class VIII</option>
                      </select>
                      <span className="svm-select-chevron">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#6B7280" strokeWidth="2">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Date of Birth */}
                  <div className="svm-field-group">
                    <label className="svm-form-label">
                      Date of Birth <span className="svm-required">*</span>
                    </label>
                    <div className="svm-input-wrapper">
                      <span className="svm-input-icon">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#9CA3AF" strokeWidth="1.8">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                      </span>
                      <input 
                        type="text"
                        name="dob"
                        value={formData.dob}
                        onChange={handleInputChange}
                        required
                        placeholder="dd/mm/yyyy"
                        className="svm-form-input"
                      />
                      <span className="svm-input-icon-right">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#9CA3AF" strokeWidth="1.8">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="svm-field-group">
                    <label className="svm-form-label">
                      Phone Number <span className="svm-required">*</span>
                    </label>
                    <div className="svm-input-wrapper">
                      <span className="svm-input-icon">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#9CA3AF" strokeWidth="1.8">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </span>
                      <input 
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter mobile number"
                        className="svm-form-input"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="svm-field-group">
                    <label className="svm-form-label">Email Address</label>
                    <div className="svm-input-wrapper">
                      <span className="svm-input-icon">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#9CA3AF" strokeWidth="1.8">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </span>
                      <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter email address"
                        className="svm-form-input"
                      />
                    </div>
                  </div>
                </div>

                {/* Message (Optional) */}
                <div className="svm-field-group svm-field-full">
                  <label className="svm-form-label">Message (Optional)</label>
                  <div className="svm-input-wrapper svm-textarea-wrapper">
                    <span className="svm-input-icon svm-textarea-icon">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#9CA3AF" strokeWidth="1.8">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                    </span>
                    <textarea 
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your query..."
                      className="svm-form-input svm-form-textarea"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="svm-form-submit-btn">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svm-btn-icon-send">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                  <span>Submit Inquiry</span>
                  <span className="svm-btn-icon-arrow">→</span>
                </button>

                {/* Privacy Safeguard */}
                <div className="svm-form-privacy">
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <span>Your information is safe with us and will be used only for admission related communication.</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionPage;
