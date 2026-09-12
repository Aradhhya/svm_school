import './HomePage.css';

const HomePage = () => {
  const handleAdmissionClick = (e) => {
    e.preventDefault();
    window.location.hash = 'admission';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="svm-home-page">
      {/* ======================================================
          HERO SECTION (USING EXACT COMPOSITE HERO BACKGROUND)
          ====================================================== */}
      <section className="svm-hero-section">
        
        {/* Floating Calligraphy Quote in the Sky
        <div className="svm-hero-sky-quote" aria-hidden="true">
          <p className="svm-sky-quote-line1">A Legacy of Learning</p>
          <p className="svm-sky-quote-line2">A Future of Possibilities.</p>
        </div> */}

        <div className="container svm-hero-container">
          
          {/* Left Column: Content & Typography */}
          <div className="svm-hero-content">
            
            {/* Shloka & Eyebrow */}
            <div className="svm-hero-shloka-wrap">
              <p className="svm-hero-shloka">ॐ सरस्वती नमस्तुभ्यं, वरदे कामरूपिणि।</p>
              <p className="svm-hero-eyebrow">A BRIGHTER TOMORROW BEGINS HERE</p>
            </div>

            {/* Main Headline */}
            <h1 className="svm-hero-title">
              <span className="svm-title-black">Shaping Young Minds</span>
              <span className="svm-title-maroon">Through Knowledge,</span>
              <span className="svm-title-maroon svm-title-relative">
                Values & Character
                {/* <svg 
                  className="svm-title-curve" 
                  viewBox="0 0 260 20" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path 
                    d="M3 14C70 4 190 4 257 14" 
                    stroke="#C58A3A" 
                    strokeWidth="3.5" 
                    strokeLinecap="round" 
                  />
                </svg> */}
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="svm-hero-desc">
              At U.N.S Saraswati Vidya Mandir, we nurture confident,
              compassionate and responsible individuals through quality education,
              Indian values and a vision for  better tomorrow.
            </p>

            {/* CTA Button */}
            <div className="svm-hero-cta-wrap">
              <a 
                href="#admission" 
                className="svm-hero-primary-btn" 
                onClick={handleAdmissionClick}
              >
                <span>Apply for Admission</span>
                <span className="svm-btn-arrow">→</span>
              </a>
            </div>

            {/* 3 Pillars / Highlights Grid */}
            <div className="svm-hero-highlights">
              
              {/* Highlight 1: Nursery to Class Xth */}
              <div className="svm-highlight-item">
                <div className="svm-highlight-icon">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#C58A3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
                <div className="svm-highlight-text">
                  <span className="svm-highlight-main">Nursery</span>
                  <span className="svm-highlight-sub">to Class Xth</span>
                </div>
              </div>

              <div className="svm-highlight-divider" />

              {/* Highlight 2: 5 Pillars of Development */}
              <div className="svm-highlight-item">
                <div className="svm-highlight-icon">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#C58A3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="20" x2="20" y2="20" />
                    <line x1="4" y1="4" x2="20" y2="4" />
                    <line x1="6" y1="4" x2="6" y2="20" />
                    <line x1="18" y1="4" x2="18" y2="20" />
                    <line x1="12" y1="4" x2="12" y2="20" />
                  </svg>
                </div>
                <div className="svm-highlight-text">
                  <span className="svm-highlight-main">5</span>
                  <span className="svm-highlight-sub">Pillars of Development</span>
                </div>
              </div>

              <div className="svm-highlight-divider" />

              {/* Highlight 3: CBSE Affiliated Curriculum */}
              <div className="svm-highlight-item">
                <div className="svm-highlight-icon">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#C58A3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  </svg>
                </div>
                <div className="svm-highlight-text">
                  <span className="svm-highlight-main">CBSE</span>
                  <span className="svm-highlight-sub">Affiliated Curriculum</span>
                </div>
              </div>

            </div>

            {/* Bottom Motto Line */}
            <div className="svm-hero-bottom-motto">
              <span className="svm-motto-line" />
              <span className="svm-motto-text">Knowledge • Values • Character</span>
              <span className="svm-motto-line" />
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default HomePage;
