import './FacilitiesPage.css';
import smartClassMain from '../../assets/smart-class-main.png';
import smartClassTablet from '../../assets/smart-class-tablet.png';
import roboticsMain from '../../assets/ai-robotics-main.jpg';
import roboticsStudent from '../../assets/ai-robotics-student.jpg';
import roboticsCar from '../../assets/ai-robotics-car.jpg';
import scienceMain from '../../assets/science-lab-main.jpg';
import scienceBeakers from '../../assets/science-lab-beakers.jpg';
import scienceStudent from '../../assets/science-lab-student.jpg';
import computerLabImg from '../../assets/computer-lab.jpg';
import libraryImg from '../../assets/library.jpg';
import sportsFootballImg from '../../assets/sports-football.jpg';
import medicalSupportImg from '../../assets/medical-support.jpg';

const facilitiesList = [
  {
    id: 'smart-classrooms',
    title: 'Smart Classrooms',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#7F0A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
  },
  {
    id: 'ai-robotics',
    title: 'AI/Robotics Learning',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#7F0A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2"></rect>
        <circle cx="12" cy="5" r="2"></circle>
        <path d="M12 7v4"></path>
        <line x1="8" y1="16" x2="8.01" y2="16"></line>
        <line x1="16" y1="16" x2="16.01" y2="16"></line>
      </svg>
    ),
  },
  {
    id: 'science-labs',
    title: 'Science Lab',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#7F0A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2v7.31L4.69 17.6A2 2 0 0 0 6.31 21h11.38a2 2 0 0 0 1.62-3.4L14 9.31V2h-4z"></path>
        <line x1="8.5" y1="2" x2="15.5" y2="2"></line>
      </svg>
    ),
  },
  {
    id: 'computer-lab',
    title: 'Computer Lab',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#7F0A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
  },
  {
    id: 'library',
    title: 'Library',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#7F0A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      </svg>
    ),
  },
  {
    id: 'sports-yoga',
    title: 'Sports & Yoga',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#7F0A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
        <path d="M2 12h20"></path>
      </svg>
    ),
  },
  // {
  //   id: 'medical-support',
  //   title: 'Medical Support',
  //   icon: (
  //     <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#7F0A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  //       <path d="M12 2v20M2 12h20"></path>
  //     </svg>
  //   ),
  // },
];

const FacilitiesPage = () => {
  const handleHomeClick = (e) => {
    e.preventDefault();
    window.location.hash = 'home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    window.location.hash = 'Academics';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePillClick = (id, e) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleRoboticsClick = (e) => {
    e.preventDefault();
    window.location.hash = 'academics';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLabsClick = (e) => {
    e.preventDefault();
    window.location.hash = 'academics';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleComputerLabClick = (e) => {
    e.preventDefault();
    window.location.hash = 'academics';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLibraryClick = (e) => {
    e.preventDefault();
    window.location.hash = 'academics';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSportsClick = (e) => {
    e.preventDefault();
    window.location.hash = 'academics';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMedicalClick = (e) => {
    e.preventDefault();
    window.location.hash = 'academics';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="svm-facilities-page">
      {/* ======================================================
          SECTION 1: HERO / BANNER HEADER
          ====================================================== */}
      <section className="svm-facilities-hero">
        <div className="container svm-facilities-container">
          <div className="svm-facilities-hero-content">

            {/* Breadcrumb */}
            <nav className="svm-facilities-breadcrumb" aria-label="Breadcrumb">
              <a href="#home" onClick={handleHomeClick} className="svm-breadcrumb-link">
                Home
              </a>
              <span className="svm-breadcrumb-sep">›</span>
              <span className="svm-breadcrumb-current">Facilities</span>
            </nav>

            {/* Eyebrow / Hindi-English Label */}
            <div className="svm-facilities-eyebrow">
              <span className="svm-eyebrow-hindi">हमारी सुविधाएं</span>
              <span className="svm-eyebrow-bullet">•</span>
              <span className="svm-eyebrow-eng">OUR FACILITIES</span>
            </div>

            {/* Main Page Title */}
            <h1 className="svm-facilities-title">
              <span>A Nurturing Environment for Holistic Growth.</span>
            </h1>

            {/* Description Paragraph */}
            <p className="svm-facilities-desc">
              At Saraswati Vidya Mandir, we provide world-class infrastructure and
              facilities to ensure a safe, inspiring and enriching learning experience
              for every student.
            </p>

          </div>
        </div>
      </section>

      {/* ======================================================
          SECTION 2: OVERVIEW & FACILITIES NAVIGATION PILLS
          ====================================================== */}
      <section className="svm-facilities-overview-section">
        <div className="container svm-facilities-overview-container">

          {/* 8 Facilities Quick Navigation Bar */}
          <div className="svm-facilities-nav-pills">
            {facilitiesList.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="svm-facility-nav-pill"
                onClick={(e) => handlePillClick(item.id, e)}
              >
                <div className="svm-pill-icon-wrap">
                  {item.icon}
                </div>
                <span className="svm-pill-label">{item.title}</span>
                <div className="svm-pill-arrow-wrap">
                  <span className="svm-pill-arrow">→</span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================
          SECTION 3: FACILITY 01 - SMART CLASSROOMS
          ====================================================== */}
      <section id="smart-classrooms" className="svm-facility-section svm-facility-01">
        <div className="container svm-facility-container">
          <div className="svm-facility-grid">

            {/* Left Column: Information & Text */}
            <div className="svm-facility-info">

              {/* Facility Badge */}
              <div className="svm-facility-badge">
                <span>FACILITY • 01</span>
              </div>

              {/* Facility Icon */}
              <div className="svm-facility-icon-box">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#4A151E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>

              {/* Title */}
              <h2 className="svm-facility-title">Smart Classrooms</h2>

              {/* Description */}
              <p className="svm-facility-description">
                Every classroom is fitted with interactive smart boards, high-quality projection
                and surround audio. Acharyas weave together textbook content with rich digital
                media – videos, animations, virtual field trips and quizzes – turning abstract
                concepts into vivid, memorable experiences. Class strengths are kept small so
                every child receives personal attention.
              </p>

              {/* CTA Button */}
              <div className="svm-facility-cta-wrap">
                <a href="#contact" onClick={handleContactClick} className="svm-facility-btn">
                  <span>Our Academics</span>
                  <span className="svm-btn-arrow">→</span>
                </a>
              </div>

              {/* Decorative Watermark */}
              <div className="svm-facility-watermark" aria-hidden="true">
                <svg viewBox="0 0 100 80" width="130" height="104" fill="#C58A3A">
                  <path d="M50 5 C45 25, 40 45, 50 65 C60 45, 55 25, 50 5 Z" />
                  <path d="M50 65 C35 55, 25 35, 38 20 C42 35, 46 50, 50 65 Z" />
                  <path d="M50 65 C65 55, 75 35, 62 20 C58 35, 54 50, 50 65 Z" />
                  <path d="M50 65 C22 60, 12 45, 22 35 C32 45, 42 58, 50 65 Z" />
                  <path d="M50 65 C78 60, 88 45, 78 35 C68 45, 58 58, 50 65 Z" />
                </svg>
              </div>

            </div>

            {/* Right Column: Visual Showcase */}
            <div className="svm-facility-media-grid">

              {/* Top Main Image */}
              <div className="svm-facility-main-img-wrap">
                <div className="svm-media-accent-tab" aria-hidden="true" />
                <img
                  src={smartClassMain}
                  alt="Teacher in Smart Classroom with Interactive Board"
                  className="svm-facility-main-img"
                />
              </div>

              {/* Bottom Row */}
              <div className="svm-facility-bottom-row">

                {/* Bottom Left: Student Tablet Image */}
                <div className="svm-facility-tablet-wrap">
                  <img
                    src={smartClassTablet}
                    alt="Student with Digital Learning Tablet"
                    className="svm-facility-tablet-img"
                  />
                </div>

                {/* Bottom Right: Feature Card */}
                <div className="svm-facility-feature-card">
                  <div className="svm-feature-card-icon">
                    <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#7F0A1A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                      <line x1="9" y1="7" x2="15" y2="7" />
                      <line x1="9" y1="11" x2="15" y2="11" />
                    </svg>
                  </div>
                  <h3 className="svm-feature-card-title">Concepts<br />Come Alive</h3>
                  <span className="svm-feature-card-line" />
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ======================================================
          SECTION 4: FACILITY 02 - AI & ROBOTICS LEARNING
          ====================================================== */}
      <section id="ai-robotics" className="svm-facility-section svm-robotics-section">
   
          <div className="container svm-facility-container">
          <div className="svm-facility-grid svm-robotics-grid">

            {/* Left Column: Media Showcase Collage */}
            <div className="svm-robotics-media-col">

              {/* Floating Orange Sticky Note */}
              <div className="svm-robotics-sticky-note">
                <span className="svm-note-line">Turning</span>
                <span className="svm-note-line">Ideas into</span>
                <span className="svm-note-line">a Better</span>
                <span className="svm-note-line svm-note-emphasis">Tomorrow.</span>
                <svg className="svm-note-underline" viewBox="0 0 60 8" fill="none">
                  <path d="M3 5 C18 2, 42 7, 57 3" stroke="#4A0E17" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              </div>

              {/* Top Main Image with White Frame */}
              <div className="svm-robotics-main-frame">
                <img
                  src={roboticsMain}
                  alt="Students Collaborating on AI Robotics Car"
                  className="svm-robotics-main-img"
                />
              </div>

              {/* Bottom Images Row */}
              <div className="svm-robotics-sub-row">

                {/* Bottom Left Student Image */}
                <div className="svm-robotics-student-frame">
                  <img
                    src={roboticsStudent}
                    alt="Student Assembling Electronics Microcontroller"
                    className="svm-robotics-sub-img"
                  />
                </div>

                {/* Bottom Right Robot Car Image with Underneath Orange Tab */}
                <div className="svm-robotics-car-frame-wrap">
                  <div className="svm-robotics-orange-tab" aria-hidden="true"></div>
                  <div className="svm-robotics-car-frame">
                    <img
                      src={roboticsCar}
                      alt="Close-up of AI Robotic Car with Yellow Wheels"
                      className="svm-robotics-sub-img"
                    />
                  </div>
                </div>

              </div>

             

            </div>

            {/* Right Column: Information & Features */}
            <div className="svm-robotics-info-col">

              {/* Facility Badge */}
              <div className="svm-robotics-badge">
                <span>FACILITY • 02</span>
              </div>

              {/* Orange Robot Icon Box */}
              <div className="svm-robotics-icon-box">
                <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#4A0E17" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="10" rx="3"></rect>
                  <circle cx="12" cy="5" r="2"></circle>
                  <path d="M12 7v4"></path>
                  <line x1="8" y1="15" x2="8.01" y2="15" strokeWidth="3"></line>
                  <line x1="16" y1="15" x2="16.01" y2="15" strokeWidth="3"></line>
                  <path d="M9 18h6"></path>
                </svg>
              </div>

              {/* Heading */}
              <h2 className="svm-robotics-title">AI & Robotics Learning</h2>

              {/* Tagline / Subtitle */}
              <div className="svm-robotics-tagline">
                <span className="svm-tagline-bar"></span>
                <span className="svm-tagline-text">INNOVATE &nbsp;|&nbsp; EXPLORE &nbsp;|&nbsp; BUILD &nbsp;|&nbsp; GROW</span>
              </div>

              {/* Description */}
              <p className="svm-robotics-desc">
                We introduce students to the exciting world of Artificial Intelligence and Robotics,
                helping them develop problem-solving skills, creativity and a future-ready mindset.
                Through hands-on learning, students explore, build and innovate, turning ideas into
                real-world solutions.
              </p>

              {/* 4 Feature Cards Grid */}
              <div className="svm-robotics-features-grid">

                {/* Card 1: Hands-on Learning */}
                <div className="svm-robotics-feat-card">
                  <div className="svm-feat-icon-circle">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#4A0E17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-5.04z" />
                      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-5.04z" />
                    </svg>
                  </div>
                  <span className="svm-feat-label">Hands-on<br />Learning</span>
                </div>

                {/* Card 2: Problem Solving Skills */}
                <div className="svm-robotics-feat-card">
                  <div className="svm-feat-icon-circle">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#4A0E17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18h6" />
                      <path d="M10 22h4" />
                      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5" />
                    </svg>
                  </div>
                  <span className="svm-feat-label">Problem<br />Solving Skills</span>
                </div>

                {/* Card 3: Innovation & Creativity */}
                <div className="svm-robotics-feat-card">
                  <div className="svm-feat-icon-circle">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#4A0E17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </div>
                  <span className="svm-feat-label">Innovation<br />& Creativity</span>
                </div>

                {/* Card 4: Future Ready Mindset */}
                <div className="svm-robotics-feat-card">
                  <div className="svm-feat-icon-circle">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#4A0E17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                      <polyline points="17 6 23 6 23 12" />
                    </svg>
                  </div>
                  <span className="svm-feat-label">Future<br />Ready Mindset</span>
                </div>

              </div>

              {/* CTA Button */}
              <div className="svm-robotics-cta-wrap">
                <a href="#academics" onClick={handleRoboticsClick} className="svm-robotics-btn">
                  <span>Explore more</span>
                  <span className="svm-btn-arrow">→</span>
                </a>
              </div>

              {/* Bottom Right Lotus Art & Motto */}
              <div className="svm-robotics-quote-wrap" aria-hidden="true">
                <div className="svm-robotics-lotus">
                  {/* <svg viewBox="0 0 100 80" width="130" height="104" fill="none" stroke="rgba(212, 162, 89, 0.45)" strokeWidth="1.2">
                    <path d="M50 8 C46 28, 42 48, 50 68 C58 48, 54 28, 50 8 Z" />
                    <path d="M50 68 C35 58, 24 38, 37 22 C41 38, 45 53, 50 68 Z" />
                    <path d="M50 68 C65 58, 76 38, 63 22 C59 38, 55 53, 50 68 Z" />
                    <path d="M50 68 C20 62, 10 46, 21 35 C31 46, 42 59, 50 68 Z" />
                    <path d="M50 68 C80 62, 90 46, 79 35 C69 46, 58 59, 50 68 Z" />
                    <path d="M28 72 C36 69, 64 69, 72 72" strokeWidth="1" />
                  </svg> */}
                </div>
                <p className="svm-robotics-motto">
                  Empowered Minds. Brighter Futures.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ======================================================
          SECTION 5: FACILITY 03 - SCIENCE LABORATORIES
          ====================================================== */}
      <section id="science-labs" className="svm-facility-section svm-science-section">
        
       

        <div className="container svm-facility-container">
          <div className="svm-facility-grid svm-science-grid">

            {/* Left Column: Information & Text */}
            <div className="svm-science-info-col">
              
              {/* Facility Badge */}
              <div className="svm-science-badge">
                <span>FACILITY • 03</span>
              </div>

              {/* Orange Icon Box with Science Flask */}
              <div className="svm-science-icon-box">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#4A0E17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 2v7.31L4.69 17.6A2 2 0 0 0 6.31 21h11.38a2 2 0 0 0 1.62-3.4L14 9.31V2h-4z"></path>
                  <line x1="8.5" y1="2" x2="15.5" y2="2"></line>
                  <line x1="7.5" y1="16" x2="16.5" y2="16" strokeDasharray="1.5 2.5"></line>
                </svg>
              </div>

              {/* Title */}
              <h2 className="svm-science-title">Science Laboratories</h2>

              {/* Tagline */}
              <div className="svm-science-tagline">
                <span className="svm-tagline-bar"></span>
                <span className="svm-science-tagline-text">EXPERIMENT &nbsp;|&nbsp; OBSERVE &nbsp;|&nbsp; DISCOVER</span>
              </div>

              {/* Description */}
              <p className="svm-science-desc">
                Fully equipped labs for hands-on experiments in Physics, Chemistry and Biology.
                Our labs encourage curiosity, critical thinking and scientific temperament
                through practical learning.
              </p>

              {/* 4 Feature Cards */}
              <div className="svm-science-features-grid">

                {/* Feature 1: Modern Instruments */}
                <div className="svm-science-feat-card">
                  <div className="svm-sci-icon-wrap">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7F0A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="2.5" fill="#7F0A1A"></circle>
                      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)"></ellipse>
                      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(-30 12 12)"></ellipse>
                    </svg>
                  </div>
                  <span className="svm-sci-feat-label">Modern<br />Instruments</span>
                </div>

                {/* Feature 2: Safe & Supervised */}
                <div className="svm-science-feat-card">
                  <div className="svm-sci-icon-wrap">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7F0A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      <path d="M9 12l2 2 4-4"></path>
                    </svg>
                  </div>
                  <span className="svm-sci-feat-label">Safe &amp;<br />Supervised</span>
                </div>

                {/* Feature 3: Hands-on Learning */}
                <div className="svm-science-feat-card">
                  <div className="svm-sci-icon-wrap">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7F0A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 2v7.31L4.69 17.6A2 2 0 0 0 6.31 21h11.38a2 2 0 0 0 1.62-3.4L14 9.31V2h-4z"></path>
                    </svg>
                  </div>
                  <span className="svm-sci-feat-label">Hands-on<br />Learning</span>
                </div>

                {/* Feature 4: Expert Guidance */}
                <div className="svm-science-feat-card">
                  <div className="svm-sci-icon-wrap">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7F0A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <span className="svm-sci-feat-label">Expert<br />Guidance</span>
                </div>

              </div>

              {/* Bottom Actions Row: CTA & Cursive Note */}
              <div className="svm-science-bottom-actions">
                <a href="#academics" onClick={handleLabsClick} className="svm-science-btn">
                  <span>Our Academics</span>
                  <span className="svm-btn-arrow">→</span>
                </a>

              
              </div>

              {/* Subtle Orange Accent Tab on Column Edge */}
              <div className="svm-science-accent-tab" aria-hidden="true"></div>

            </div>

            {/* Right Column: Visual Showcase Media Grid */}
            <div className="svm-science-media-col">

              {/* Main Top Image Frame with Overlapping Maroon Card */}
              <div className="svm-science-main-frame-wrap">
                
                {/* Floating Maroon Card on Top-Right */}
                <div className="svm-science-maroon-card">
                  <div className="svm-maroon-card-icon">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#D4A259" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 2v7.31L4.69 17.6A2 2 0 0 0 6.31 21h11.38a2 2 0 0 0 1.62-3.4L14 9.31V2h-4z"></path>
                      <line x1="8.5" y1="2" x2="15.5" y2="2"></line>
                    </svg>
                  </div>
                  <div className="svm-maroon-card-divider"></div>
                  <div className="svm-maroon-card-text">
                    <span>Turning</span>
                    <span>Curiosity</span>
                    <span>into</span>
                    <span>Knowledge</span>
                  </div>
                </div>

                <div className="svm-science-main-frame">
                  <img
                    src={scienceMain}
                    alt="Students conducting experiments in Science Laboratory"
                    className="svm-science-main-img"
                  />
                </div>
              </div>

              {/* Bottom Row Images */}
              <div className="svm-science-sub-row">
                
                {/* Bottom Left Beakers Image */}
                <div className="svm-science-beakers-frame">
                  <img
                    src={scienceBeakers}
                    alt="Colorful chemistry solutions in laboratory flasks"
                    className="svm-science-sub-img"
                  />
                </div>

                {/* Bottom Right Student Image */}
                <div className="svm-science-student-frame">
                  <img
                    src={scienceStudent}
                    alt="Student observing blue chemical solution in test tube"
                    className="svm-science-sub-img"
                  />
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ======================================================
          SECTION 6: FACILITY 04 (COMPUTER LAB) & FACILITY 05 (LIBRARY)
          ====================================================== */}
      <section className="svm-facility-section svm-dual-facility-section">
        
        {/* Subtle Background Floral Leaf Watermarks */}
        <div className="svm-dual-leaf-decor svm-dual-leaf-left" aria-hidden="true">
          <svg viewBox="0 0 100 220" width="130" height="280" fill="none" stroke="#D4A259" strokeWidth="1.2">
            <path d="M-10 180 C30 140, 50 80, 20 20 C10 60, -10 120, -10 180 Z" opacity="0.35" />
            <path d="M10 130 C40 100, 70 70, 60 10" opacity="0.25" />
            <path d="M20 90 C50 70, 80 50, 70 5" opacity="0.25" />
          </svg>
        </div>
        <div className="svm-dual-leaf-decor svm-dual-leaf-right" aria-hidden="true">
          <svg viewBox="0 0 100 220" width="130" height="280" fill="none" stroke="#D4A259" strokeWidth="1.2">
            <path d="M110 180 C70 140, 50 80, 80 20 C90 60, 110 120, 110 180 Z" opacity="0.35" />
            <path d="M90 130 C60 100, 30 70, 40 10" opacity="0.25" />
            <path d="M80 90 C50 70, 20 50, 30 5" opacity="0.25" />
          </svg>
        </div>

        <div className="container svm-facility-container">
          <div className="svm-dual-cards-grid">

            {/* ----------------------------------------------------
                CARD 1: FACILITY 04 - COMPUTER LAB
                ---------------------------------------------------- */}
            <div id="computer-lab" className="svm-dual-card svm-card-computer-lab">
              
              {/* Card Image Wrap with Overlapping Orange Icon */}
              <div className="svm-dual-card-media">
                <div className="svm-dual-img-frame">
                  <img
                    src={computerLabImg}
                    alt="Modern School Computer Lab with Desktop Computers"
                    className="svm-dual-card-img"
                  />
                </div>

                {/* Overlapping Orange Icon Box (Bottom-Left) */}
                <div className="svm-dual-icon-box svm-icon-box-orange">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#4A0E17" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
              </div>

              {/* Card Content Area */}
              <div className="svm-dual-card-body">
                
                {/* Badge */}
                <div className="svm-dual-badge">
                  <span>FACILITY • 04</span>
                </div>

                {/* Title */}
                <h3 className="svm-dual-card-title">Computer Lab</h3>

                {/* Tagline */}
                <div className="svm-dual-card-tagline">
                  <span>EXPLORE &nbsp;|&nbsp; PRACTICE &nbsp;|&nbsp; INNOVATE</span>
                </div>

                {/* Description */}
                <p className="svm-dual-card-desc">
                  Well-equipped computer labs with modern systems and high-speed internet to develop
                  digital skills and prepare students for a technology-driven future.
                </p>

                {/* 4 Feature Pills Grid */}
                <div className="svm-dual-features-grid">
                  
                  {/* Feature 1 */}
                  <div className="svm-dual-feat-item">
                    <div className="svm-dual-feat-circle">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7F0A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                    </div>
                    <span className="svm-dual-feat-text">Modern<br />Systems</span>
                  </div>

                  {/* Feature 2 */}
                  <div className="svm-dual-feat-item">
                    <div className="svm-dual-feat-circle">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7F0A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                        <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                        <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                        <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="3"></line>
                      </svg>
                    </div>
                    <span className="svm-dual-feat-text">High-Speed<br />Internet</span>
                  </div>

                  {/* Feature 3 */}
                  <div className="svm-dual-feat-item">
                    <div className="svm-dual-feat-circle">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7F0A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <span className="svm-dual-feat-text">Hands-on<br />Learning</span>
                  </div>

                  {/* Feature 4 */}
                  <div className="svm-dual-feat-item">
                    <div className="svm-dual-feat-circle">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7F0A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                      </svg>
                    </div>
                    <span className="svm-dual-feat-text">Skill<br />Development</span>
                  </div>

                </div>

                {/* CTA Link */}
                <div className="svm-dual-card-cta">
                  <a href="#academics" onClick={handleComputerLabClick} className="svm-dual-link">
                    <span>Explore more</span>
                    <span className="svm-btn-arrow">→</span>
                  </a>
                </div>

              </div>
            </div>

            {/* ----------------------------------------------------
                CARD 2: FACILITY 05 - LIBRARY
                ---------------------------------------------------- */}
            <div id="library" className="svm-dual-card svm-card-library">
              
              {/* Card Image Wrap with Overlapping White Icon */}
              <div className="svm-dual-card-media">
                <div className="svm-dual-img-frame">
                  <img
                    src={libraryImg}
                    alt="Student reading peacefully in School Library"
                    className="svm-dual-card-img"
                  />
                </div>

                {/* Overlapping White Icon Box (Top-Right) */}
                <div className="svm-dual-icon-box svm-icon-box-white">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#7F0A1A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </div>
              </div>

              {/* Card Content Area */}
              <div className="svm-dual-card-body">
                
                {/* Badge */}
                <div className="svm-dual-badge">
                  <span>FACILITY • 05</span>
                </div>

                {/* Title */}
                <h3 className="svm-dual-card-title">Library</h3>

                {/* Tagline */}
                <div className="svm-dual-card-tagline">
                  <span>READ &nbsp;|&nbsp; RESEARCH &nbsp;|&nbsp; DISCOVER</span>
                </div>

                {/* Description */}
                <p className="svm-dual-card-desc">
                  A rich collection of books, digital resources and a peaceful reading space to encourage
                  independent thinking and a lifelong love for learning.
                </p>

                {/* 4 Feature Pills Grid */}
                <div className="svm-dual-features-grid">
                  
                  {/* Feature 1 */}
                  <div className="svm-dual-feat-item">
                    <div className="svm-dual-feat-circle">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7F0A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                      </svg>
                    </div>
                    <span className="svm-dual-feat-text">Wide Range<br />of Books</span>
                  </div>

                  {/* Feature 2 */}
                  <div className="svm-dual-feat-item">
                    <div className="svm-dual-feat-circle">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7F0A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                    </div>
                    <span className="svm-dual-feat-text">Digital<br />Resources</span>
                  </div>

                  {/* Feature 3 */}
                  <div className="svm-dual-feat-item">
                    <div className="svm-dual-feat-circle">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7F0A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </div>
                    <span className="svm-dual-feat-text">Research &amp;<br />Reference</span>
                  </div>

                  {/* Feature 4 */}
                  <div className="svm-dual-feat-item">
                    <div className="svm-dual-feat-circle">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7F0A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <span className="svm-dual-feat-text">Quiet &amp; Comfortable<br />Environment</span>
                  </div>

                </div>

                {/* CTA Link */}
                <div className="svm-dual-card-cta">
                  <a href="#academics" onClick={handleLibraryClick} className="svm-dual-link">
                    <span>Explore more</span>
                    <span className="svm-btn-arrow">→</span>
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================
          SECTION 7: FACILITY 06 (SPORTS & YOGA) & FACILITY 07 (MEDICAL SUPPORT)
          ====================================================== */}
      <section className="svm-facility-section svm-dual-facility-section svm-sports-medical-section">
        <div className="container svm-facility-container">
          <div className="svm-dual-cards-grid">

            {/* ----------------------------------------------------
                CARD 1: FACILITY 06 - SPORTS & YOGA
                ---------------------------------------------------- */}
            <div id="sports-yoga" className="svm-dual-card svm-card-sports">
              
              {/* Card Image Wrap with Attached Maroon Curve Accent */}
              <div className="svm-dual-card-media svm-sports-media">
                <div className="svm-dual-img-frame">
                  <img
                    src={sportsFootballImg}
                    alt="Students playing football soccer on school sports ground"
                    className="svm-dual-card-img"
                  />
                </div>

                {/* Attached Maroon Banner on Right Side of Image */}
                <div className="svm-sports-maroon-banner">
                  <div className="svm-sports-icon-white">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#7F0A1A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="17" cy="4" r="2"></circle>
                      <path d="m15 7-3 4-4-2-4 4"></path>
                      <path d="m13 15-2 6"></path>
                      <path d="m17 11 3 3-2 5"></path>
                    </svg>
                  </div>
                  <div className="svm-sports-banner-text">
                    <span className="svm-sports-quote">“Play</span>
                    <span className="svm-sports-quote">Learn</span>
                    <span className="svm-sports-quote">Grow</span>
                    <span className="svm-sports-quote">Together.”</span>
                    <svg className="svm-sports-underline" viewBox="0 0 54 8" fill="none">
                      <path d="M2 5 C16 2, 38 7, 52 3" stroke="#F89E3A" strokeWidth="2.4" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="svm-dual-card-body">
                
                {/* Badge */}
                <div className="svm-dual-badge">
                  <span>FACILITY • 06</span>
                </div>

                {/* Title */}
                <h3 className="svm-dual-card-title">Sports &amp; Yoga</h3>

                {/* Tagline */}
                <div className="svm-dual-card-tagline">
                  <span>FITNESS &nbsp;|&nbsp; DISCIPLINE &nbsp;|&nbsp; WELL-BEING</span>
                </div>

                {/* Description */}
                <p className="svm-dual-card-desc">
                  Our sports and yoga programs help students build physical strength, mental
                  balance and teamwork, shaping them into confident and healthy individuals.
                </p>

                {/* 4 Feature Items */}
                <div className="svm-dual-features-grid">
                  
                  {/* Feature 1 */}
                  <div className="svm-dual-feat-item">
                    <div className="svm-dual-feat-circle">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7F0A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                        <path d="M4 22h16"></path>
                        <path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34"></path>
                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                      </svg>
                    </div>
                    <span className="svm-dual-feat-text">Sports<br />Facilities</span>
                  </div>

                  {/* Feature 2 */}
                  <div className="svm-dual-feat-item">
                    <div className="svm-dual-feat-circle">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7F0A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V17m-4.5-5a4.5 4.5 0 0 0 4.5 4.5m0 0a4.5 4.5 0 0 0 4.5-4.5"></path>
                      </svg>
                    </div>
                    <span className="svm-dual-feat-text">Yoga &amp;<br />Wellness</span>
                  </div>

                  {/* Feature 3 */}
                  <div className="svm-dual-feat-item">
                    <div className="svm-dual-feat-circle">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7F0A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6.5 6.5 11 11"></path>
                        <path d="m21 21-1-1"></path>
                        <path d="m3 3 1 1"></path>
                        <path d="m18 22 4-4"></path>
                        <path d="m2 6 4-4"></path>
                        <path d="m3 10 7-7"></path>
                        <path d="m14 21 7-7"></path>
                      </svg>
                    </div>
                    <span className="svm-dual-feat-text">Fitness<br />Training</span>
                  </div>

                  {/* Feature 4 */}
                  <div className="svm-dual-feat-item">
                    <div className="svm-dual-feat-circle">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7F0A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <span className="svm-dual-feat-text">Teamwork<br />&amp; Leadership</span>
                  </div>

                </div>

                {/* CTA Link */}
                <div className="svm-dual-card-cta">
                  <a href="#academics" onClick={handleSportsClick} className="svm-dual-link">
                    <span>Explore more </span>
                    <span className="svm-btn-arrow">→</span>
                  </a>
                </div>

              </div>
            </div>

            {/* ----------------------------------------------------
                CARD 2: FACILITY 07 - MEDICAL SUPPORT
                ---------------------------------------------------- */}
            <div id="medical-support" className="svm-dual-card svm-card-medical">
              
              {/* Card Image Wrap with Left Mint Cross Watermark & Cursive Motto */}
              <div className="svm-dual-card-media svm-medical-media">
                
                {/* Left Side: Soft Mint Medical Cross & Motto */}
                <div className="svm-medical-left-accent">
                  <div className="svm-medical-cross-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="46" height="46" fill="#A4DFC7">
                      <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3z" />
                    </svg>
                  </div>
                  <div className="svm-medical-motto-wrap">
                    <span className="svm-medical-quote">“Healthy</span>
                    <span className="svm-medical-quote">Students</span>
                    <span className="svm-medical-quote">Happier</span>
                    <span className="svm-medical-quote">Tomorrows.”</span>
                    <svg className="svm-medical-underline" viewBox="0 0 54 8" fill="none">
                      <path d="M2 5 C16 2, 38 7, 52 3" stroke="#680815" strokeWidth="2.4" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                {/* Right Side: Doctor Photo with Asymmetric Border Radius */}
                <div className="svm-medical-img-frame">
                  <img
                    src={medicalSupportImg}
                    alt="Doctor checking student in school medical room"
                    className="svm-dual-card-img"
                  />
                </div>
              </div>

              {/* Card Body */}
              <div className="svm-dual-card-body">
                
                {/* Badge */}
                <div className="svm-dual-badge svm-medical-badge">
                  <span>FACILITY • 07</span>
                </div>

                {/* Title */}
                <h3 className="svm-dual-card-title">Medical Support</h3>

                {/* Tagline */}
                <div className="svm-dual-card-tagline">
                  <span>CARE &nbsp;|&nbsp; SAFETY &nbsp;|&nbsp; WELL-BEING</span>
                </div>

                {/* Description */}
                <p className="svm-dual-card-desc">
                  The health and well-being of our students is our priority. We provide on-campus
                  medical support and quick assistance in case of any emergency.
                </p>

                {/* 4 Feature Items */}
                <div className="svm-dual-features-grid">
                  
                  {/* Feature 1 */}
                  <div className="svm-dual-feat-item svm-medical-feat-item">
                    <div className="svm-dual-feat-circle svm-medical-feat-circle">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#B83A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="1" y="3" width="15" height="13"></rect>
                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                        <circle cx="5.5" cy="18.5" r="2.5"></circle>
                        <circle cx="18.5" cy="18.5" r="2.5"></circle>
                        <line x1="8.5" y1="7" x2="8.5" y2="12"></line>
                        <line x1="6" y1="9.5" x2="11" y2="9.5"></line>
                      </svg>
                    </div>
                    <span className="svm-dual-feat-text">First Aid &amp;<br />Medical Assistance</span>
                  </div>

                  {/* Feature 2 */}
                  <div className="svm-dual-feat-item svm-medical-feat-item">
                    <div className="svm-dual-feat-circle svm-medical-feat-circle">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#B83A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        <path d="M12 9v6"></path>
                        <path d="M9 12h6"></path>
                      </svg>
                    </div>
                    <span className="svm-dual-feat-text">Regular Health<br />Check-ups</span>
                  </div>

                  {/* Feature 3 */}
                  <div className="svm-dual-feat-item svm-medical-feat-item">
                    <div className="svm-dual-feat-circle svm-medical-feat-circle">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#B83A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="6" width="18" height="15" rx="2"></rect>
                        <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
                        <line x1="12" y1="10" x2="12" y2="16"></line>
                        <line x1="9" y1="13" x2="15" y2="13"></line>
                      </svg>
                    </div>
                    <span className="svm-dual-feat-text">Emergency<br />Care Support</span>
                  </div>

                  {/* Feature 4 */}
                  <div className="svm-dual-feat-item svm-medical-feat-item">
                    <div className="svm-dual-feat-circle svm-medical-feat-circle">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#B83A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <span className="svm-dual-feat-text">Safe &amp; Hygienic<br />Environment</span>
                  </div>

                </div>

                {/* CTA Link */}
                <div className="svm-dual-card-cta">
                  <a href="#academics" onClick={handleMedicalClick} className="svm-dual-link">
                    <span>Learn More</span>
                    <span className="svm-btn-arrow">→</span>
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default FacilitiesPage;
