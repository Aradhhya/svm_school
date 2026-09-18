import React from 'react';
import './About.css';
import aboutStoryGroup from '../../assets/about-story-group.jpg';
import cultureAssembly from '../../assets/culture-assembly.png';
import culturePrayer from '../../assets/culture-prayer.png';
import cultureConduct from '../../assets/culture-conduct.png';
import cultureAddress from '../../assets/culture-address.png';
import cultureTeamwork from '../../assets/culture-teamwork.png';
import culturePride from '../../assets/culture-pride.png';

const schoolCultureItems = [
  {
    id: 'assembly',
    title: 'Morning Assembly',
    description: 'Saraswati Vandana, news of the day, value thought and pranayama to begin with positivity.',
    image: cultureAssembly,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#7F0A1A" strokeWidth="2">
        <circle cx="12" cy="13" r="5" />
        <path d="M12 4v3" strokeLinecap="round" />
        <path d="M4.93 7.93l2.12 2.12" strokeLinecap="round" />
        <path d="M19.07 7.93l-2.12 2.12" strokeLinecap="round" />
        <path d="M2 19h20" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'prayer',
    title: 'Daily Prayer',
    description: 'Gratitude before learning. A grounding moment for every child.',
    image: culturePrayer,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#7F0A1A" strokeWidth="1.8">
        <path d="M7 11V6a2 2 0 0 1 4 0v5" strokeLinecap="round" />
        <path d="M17 11V6a2 2 0 0 0-4 0v5" strokeLinecap="round" />
        <path d="M11 11v10" strokeLinecap="round" />
        <path d="M13 11v10" strokeLinecap="round" />
        <path d="M7 11c0 4 2 8 5 10 3-2 5-6 5-10" />
      </svg>
    ),
  },
  {
    id: 'conduct',
    title: 'Disciplined Conduct',
    description: 'Punctuality, uniform, classroom etiquette — small acts, big character.',
    image: cultureConduct,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#7F0A1A" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'address',
    title: 'Respectful Address',
    description: 'Acharyas, peers, helpers — every individual treated with dignity.',
    image: cultureAddress,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#7F0A1A" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 'teamwork',
    title: 'Teamwork',
    description: 'House system, group projects, Bal Sansad — learning to lead and follow.',
    image: cultureTeamwork,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#7F0A1A" strokeWidth="2">
        <circle cx="12" cy="5" r="3" />
        <circle cx="6" cy="17" r="3" />
        <circle cx="18" cy="17" r="3" />
        <path d="M9.5 7.5L7.5 14" strokeLinecap="round" />
        <path d="M14.5 7.5L16.5 14" strokeLinecap="round" />
        <path d="M9 17h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'pride',
    title: 'Cultural Pride',
    description: 'National festivals, Sanskrit gyan, music, art and language celebrations.',
    image: culturePride,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#7F0A1A" strokeWidth="1.8">
        <path d="M12 3C10 7 8 13 8 17C8 19.5 9.8 21 12 21C14.2 21 16 19.5 16 17C16 13 14 7 12 3Z" />
        <path d="M8 9C5 12 3 16 4 19C5 21 8 21.5 10 19.5" />
        <path d="M16 9C19 12 21 16 20 19C19 21 16 21.5 14 19.5" />
      </svg>
    ),
  },
];

const storyStats = [
  {
    id: 'cbse',
    value: 'CBSE',
    label: 'AFFILIATED',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#C58A3A" strokeWidth="1.8">
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v4M12 14v4M16 14v4" />
      </svg>
    ),
  },
  {
    id: 'range',
    value: 'Nur – VIII',
    label: 'CLASS RANGE',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#C58A3A" strokeWidth="1.8">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    id: 'location',
    value: 'Patna',
    label: 'KADAMKUAN',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#C58A3A" strokeWidth="1.8">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    id: 'dimensions',
    value: '5',
    label: 'DIMENSIONS OF DEVELOPMENT',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#C58A3A" strokeWidth="1.8">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

const committeeMembers = [
  { sNo: 1, post: 'Chairman', name: 'Shri Shankar Prasad Gupta' },
  { sNo: 2, post: 'Vice-Chairman', name: 'Shri Narendra Prasad' },
  { sNo: 3, post: 'Secretary', name: 'Shri Kulabhushan Kumar' },
  { sNo: 4, post: 'Joint Secretary', name: 'Shri Sahanand Prakash' },
  { sNo: 5, post: 'Treasurer', name: 'Shri Ankit Kumar' },
  { sNo: 6, post: 'Provincial Representative', name: 'State Secretary' },
  { sNo: 7, post: 'Provincial Representative', name: 'Shri Virendra Kumar' },
  { sNo: 8, post: 'Divisional Representative', name: 'Shri Anil Kumar Singh' },
  { sNo: 9, post: 'Divisional Representative', name: 'Smt. Deepmala Devi' },
  { sNo: 10, post: 'Educationist', name: 'Dr. Ramesh Yadav' },
  { sNo: 11, post: 'Educationist', name: 'Shri Sudhansh Kumar Thakur' },
  { sNo: 12, post: 'Member', name: 'Shri Harendra Prasad' },
  { sNo: 13, post: 'Member', name: 'Shri Ravi Prakash' },
  { sNo: 14, post: 'Member', name: 'Shri Tarakeshwar Upadhyay' },
  { sNo: 15, post: 'Member', name: 'Shri Prakash Narayan Swarnkar' },
  { sNo: 16, post: 'Principal Representative', name: 'Smt. Neelam Kumari' },
  { sNo: 17, post: 'Ex-Officio Member', name: 'Smt. Sushma Yadav, Principal' },
];

const futureVisionPillars = [
  {
    id: 'classrooms',
    title: 'Smarter\nClassrooms',
    badgeClass: 'svm-pillar-badge-book',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#8B1826" strokeWidth="1.8">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    id: 'innovation',
    title: 'Innovation\nin Learning',
    badgeClass: 'svm-pillar-badge-bulb',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#C58A3A" strokeWidth="1.8">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2v2" />
        <path d="M4.93 4.93l1.41 1.41" />
        <path d="M19.07 4.93l-1.41 1.41" />
        <path d="M12 6a6 6 0 0 0-6 6c0 2.22 1.21 4.16 3 5.2V18h6v-.8c1.79-1.04 3-2.98 3-5.2a6 6 0 0 0-6-6z" />
      </svg>
    ),
  },
  {
    id: 'parents',
    title: 'Stronger\nParent Partnerships',
    badgeClass: 'svm-pillar-badge-parents',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#7F0A1A" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 'opportunities',
    title: 'Expanded\nOpportunities',
    badgeClass: 'svm-pillar-badge-sprout',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#C58A3A" strokeWidth="1.8">
        <path d="M12 22V10" />
        <path d="M12 10C12 5.5 8.5 2 4 2C4 6.5 7.5 10 12 10Z" />
        <path d="M12 14C12 10.5 15.5 7 20 7C20 10.5 16.5 14 12 14Z" />
      </svg>
    ),
  },
  {
    id: 'citizens',
    title: 'Confident & Responsible\nFuture Citizens',
    badgeClass: 'svm-pillar-badge-star',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#8B1826" strokeWidth="1.8">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

const About = () => {
  const handleHomeClick = (e) => {
    e.preventDefault();
    window.location.hash = 'home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="svm-about-page">
      {/* ======================================================
          SECTION 1: HERO / BANNER HEADER
          ====================================================== */}
      <section className="svm-about-hero">
        {/* Subtle Lotus Line Watermark in Middle Blend Zone */}
        <div className="svm-about-lotus-decor" aria-hidden="true">
          <svg viewBox="0 0 100 100" width="180" height="180" fill="none" stroke="#D4A259" strokeWidth="1.2">
            <path d="M50 10C45 28 38 48 38 62C38 75 44 82 50 83C56 82 62 75 62 62C62 48 55 28 50 10Z" />
            <path d="M38 25C30 40 22 56 24 69C25 76 32 81 39 80C43 80 46 77 45 70C43 56 42 42 38 25Z" />
            <path d="M62 25C70 40 78 56 76 69C75 76 68 81 61 80C57 80 54 77 55 70C57 56 58 42 62 25Z" />
            <path d="M16 48C10 60 10 70 14 75C18 80 26 81 32 77C29 69 24 59 16 48Z" />
            <path d="M84 48C90 60 90 70 86 75C82 80 74 81 68 77C71 69 76 59 84 48Z" />
          </svg>
        </div>

        <div className="container svm-about-container">
          <div className="svm-about-hero-content">

            {/* Breadcrumb Navigation */}
            <nav className="svm-about-breadcrumb" aria-label="Breadcrumb">
              <a href="#home" onClick={handleHomeClick} className="svm-breadcrumb-link">
                Home
              </a>
              <span className="svm-breadcrumb-sep">&gt;</span>
              <span className="svm-breadcrumb-current">About Us</span>
            </nav>

            {/* Golden Accent Line below Breadcrumb */}
         

            {/* Eyebrow / Bilingual Label with Flanking Lines */}
            <div className="svm-about-eyebrow">
              <span className="svm-eyebrow-hindi">हमारी परंपरा</span>
              <span className="svm-eyebrow-bullet">•</span>
              <span className="svm-eyebrow-eng">ABOUT US</span>
              
            </div>

            {/* Main Headline */}
            <h1 className="svm-about-title">
              <span>About Us</span>
             </h1>

            {/* Description Paragraph */}
            <p className="svm-about-desc">
                  For decades, Saraswati Vidya Mandir, Kadamkuan, Patna has been
                  nurturing young minds with knowledge, character and Indian values -
                  shaping responsible individuals for a brighter tomorrow.
            </p>

            {/* 3 Pillar Feature Badges */}
            <div className="svm-about-pillars">
              {/* Pillar 1: Knowledge */}
              <div className="svm-about-pillar-item">
                <div className="svm-pillar-icon-badge">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7F0A1A" strokeWidth="2">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <div className="svm-pillar-text">
                  <span className="svm-pillar-title">Knowledge</span>
                  <span className="svm-pillar-sub">for Life</span>
                </div>
              </div>

              <div className="svm-pillar-separator" />

              {/* Pillar 2: Values */}
              <div className="svm-about-pillar-item">
                <div className="svm-pillar-icon-badge">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7F0A1A" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="svm-pillar-text">
                  <span className="svm-pillar-title">Values</span>
                  <span className="svm-pillar-sub">in Action</span>
                </div>
              </div>

              <div className="svm-pillar-separator" />

              {/* Pillar 3: A Brighter Tomorrow */}
              <div className="svm-about-pillar-item">
                <div className="svm-pillar-icon-badge">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7F0A1A" strokeWidth="2">
                    <path d="M12 3c-1.2 3.5-3 7-3 10.5 0 2.5 1.2 4.5 3 4.5s3-2 3-4.5C15 10 13.2 6.5 12 3z" />
                    <path d="M9 10c-1.5 3.5-3.5 7-3 10 .5 1.5 2 2.5 3.5 2.2" />
                    <path d="M15 10c1.5 3.5 3.5 7 3 10-.5 1.5-2 2.5-3.5 2.2" />
                  </svg>
                </div>
                <div className="svm-pillar-text">
                  <span className="svm-pillar-title">A Brighter</span>
                  <span className="svm-pillar-sub">Tomorrow</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      
      </section>

      {/* ======================================================
          SECTION 2: OUR STORY (परंपरा में जड़ें, भविष्य की उड़ान।)
          ====================================================== */}
      <section className="svm-story-section" id="our-story">
        {/* Background Open Book & Lotus Watermark */}
        <div className="svm-story-watermark-book" aria-hidden="true">
          <svg viewBox="0 0 160 100" width="260" height="160" fill="none" stroke="#C58A3A" strokeWidth="1.2">
            <path d="M10 80C35 70 70 72 80 85C90 72 125 70 150 80V25C125 15 90 17 80 30C70 17 35 15 10 25V80Z" />
            <path d="M80 30V85" />
          </svg>
        </div>

        <div className="container svm-story-container">
          <div className="svm-story-grid">

            {/* Left Column: Narrative & Pillars */}
            <div className="svm-story-content">
              
              {/* Eyebrow with Lotus & Rules */}
              <div className="svm-story-eyebrow-row">
               
              
                <span className="svm-story-eyebrow-text">हमारी कहानी - OUR STORY</span>
               
              </div>

              {/* Main Headline */}
              <h2 className="svm-story-title">
                <span>परंपरा में जड़ें,</span>
                <span>भविष्य की उड़ान।</span>
              </h2>

              {/* English Subtitle */}
              <p className="svm-story-subtitle">
                Rooted in heritage. Built for the future.
              </p>

              {/* Narrative Paragraphs */}
              <div className="svm-story-paragraphs">
                <p>
                  Saraswati Vidya Mandir, was established by Bharti Shiksha Samiti,
                  with a firm belief that the soul of a nation lives in its schools.The 
                  school has grown into a trusted name for parents who want their children
                   to receive both rigorous academics and a value-based upbringing.
                </p>
                <p>
                  Our founders were inspired by the all-India Vidya Bharati movement, envisioning
                  an education system uniquely Indian in spirit and globally competitive in standard.
                  They believed that no child should ever have to choose between excellence and ethics,
                  between modernity and tradition.
                </p>
                
              </div>

              {/* 3 Pillars at bottom of left column */}
              <div className="svm-story-pillars">
                <div className="svm-story-pillar-item">
                  <div className="svm-story-icon-badge">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7F0A1A" strokeWidth="2">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>
                  <div className="svm-story-pillar-text">
                    <span className="svm-story-pillar-title">Knowledge</span>
                    <span className="svm-story-pillar-sub">for Life</span>
                  </div>
                </div>

                <div className="svm-story-pillar-separator" />

                <div className="svm-story-pillar-item">
                  <div className="svm-story-icon-badge">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7F0A1A" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div className="svm-story-pillar-text">
                    <span className="svm-story-pillar-title">Values</span>
                    <span className="svm-story-pillar-sub">in Action</span>
                  </div>
                </div>

                <div className="svm-story-pillar-separator" />

                <div className="svm-story-pillar-item">
                  <div className="svm-story-icon-badge">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7F0A1A" strokeWidth="2">
                      <path d="M12 3c-1.2 3.5-3 7-3 10.5 0 2.5 1.2 4.5 3 4.5s3-2 3-4.5C15 10 13.2 6.5 12 3z" />
                      <path d="M9 10c-1.5 3.5-3.5 7-3 10 .5 1.5 2 2.5 3.5 2.2" />
                      <path d="M15 10c1.5 3.5 3.5 7 3 10-.5 1.5-2 2.5-3.5 2.2" />
                    </svg>
                  </div>
                  <div className="svm-story-pillar-text">
                    <span className="svm-story-pillar-title">A Brighter</span>
                    <span className="svm-story-pillar-sub">Tomorrow</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Visual Frame & 4 Stat Cards */}
            <div className="svm-story-visual">
              
              {/* Main Photo Card Frame with Overlaid JSX Cards */}
              <div className="svm-story-frame">
                <img
                  src={aboutStoryGroup}
                  alt="Students and Acharyas of U.N.S Saraswati Vidya Mandir"
                  className="svm-story-photo"
                />

                {/* Floating Card 1: Maroon Quote Card (Bottom-Left) */}
                <div className="svm-story-quote-card">
                  <div className="svm-quote-mark-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="28" height="24" fill="#E5933A">
                      <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                    </svg>
                  </div>
                  <p className="svm-quote-card-text">
                    Nurturing young minds<br />
                    to build a better tomorrow.
                  </p>
                  <div className="svm-quote-card-line" />
                </div>

                {/* Floating Card 2: Sanskar / Shiksha / Sampurn Vikas Circular Badge (Bottom-Right) */}
                <div className="svm-story-circle-badge">
                  <div className="svm-circle-lotus" aria-hidden="true">
                    <svg viewBox="0 0 44 32" width="38" height="26" fill="none" stroke="#7F0A1A" strokeWidth="1.8">
                      <path d="M22 2C20 9 17 18 17 24C17 27 19.5 29 22 29C24.5 29 27 27 27 24C27 18 24 9 22 2Z" />
                      <path d="M17 8C12 13 8 19 9 24C10 27 14 28 17 26C15 22 14 16 17 8Z" />
                      <path d="M27 8C32 13 36 19 35 24C34 27 30 28 27 26C29 22 30 16 27 8Z" />
                      <path d="M9 16C5 20 4 24 6 26C9 28 12 27 13 25C10 22 9 19 9 16Z" />
                      <path d="M35 16C39 20 40 24 38 26C35 28 32 27 31 25C34 22 35 19 35 16Z" />
                    </svg>
                  </div>
                  <div className="svm-circle-text">
                    <span>SANSKAR</span>
                    <span>SHIKSHA</span>
                    <span>SAMPURN VIKAS</span>
                  </div>
                  <div className="svm-circle-line" />
                </div>
              </div>

              {/* 4 Stat Cards Grid */}
              <div className="svm-story-stats-grid">
                {storyStats.map((stat) => (
                  <div key={stat.id} className="svm-story-stat-card">
                    <div className="svm-stat-icon-wrap">
                      {stat.icon}
                    </div>
                    <div className="svm-stat-value">{stat.value}</div>
                    <div className="svm-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>

            </div>

          </div>


        </div>
      </section>

      {/* ======================================================
          SECTION 3: OUR PURPOSE (हमारा उद्देश्य - OUR PURPOSE)
          ====================================================== */}
      <section className="svm-purpose-section" id="our-purpose">
         <div className="container svm-purpose-container">
          {/* Section Header */}
          <div className="svm-purpose-header">
            {/* Top Centered Lotus Icon */}
            <div className="svm-purpose-lotus-icon" aria-hidden="true">
              <svg viewBox="0 0 44 28" width="36" height="24" fill="none" stroke="#7F0A1A" strokeWidth="1.8">
                <path d="M22 2C20 9 17 18 17 24C17 27 19.5 29 22 29C24.5 29 27 27 27 24C27 18 24 9 22 2Z" />
                <path d="M17 8C12 13 8 19 9 24C10 27 14 28 17 26C15 22 14 16 17 8Z" />
                <path d="M27 8C32 13 36 19 35 24C34 27 30 28 27 26C29 22 30 16 27 8Z" />
                <path d="M9 16C5 20 4 24 6 26C9 28 12 27 13 25C10 22 9 19 9 16Z" />
                <path d="M35 16C39 20 40 24 38 26C35 28 32 27 31 25C34 22 35 19 35 16Z" />
              </svg>
            </div>

            {/* Bilingual Eyebrow */}
            <div className="svm-purpose-eyebrow">
              <span className="svm-purpose-eyebrow-line" />
              <span className="svm-purpose-eyebrow-text">हमारा उद्देश्य - OUR PURPOSE</span>
              <span className="svm-purpose-eyebrow-line" />
            </div>

            {/* Dual-Color Serif Headline */}
            <h2 className="svm-purpose-title">
              <span className="svm-purpose-title-maroon">Nurturing Minds.</span>{' '}
              <span className="svm-purpose-title-gold">Building Better Tomorrows.</span>
            </h2>

            {/* Narrative Subtitle */}
            <p className="svm-purpose-desc">
              At U.N.S. Saraswati Vidya Mandir, our purpose is to blend timeless values with modern
              education — shaping individuals who contribute to a brighter, kinder and stronger India.
            </p>
          </div>

          {/* 3 Interactive Purpose Cards */}
          <div className="svm-purpose-cards-grid">
            {/* Card 1: Our Vision */}
            <div className="svm-purpose-card svm-purpose-card-vision">
              <div className="svm-purpose-icon-wrap svm-icon-vision">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#7F0A1A" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                  <circle cx="12" cy="12" r="1.2" fill="#7F0A1A" />
                  <line x1="12" y1="2" x2="12" y2="4" strokeWidth="2" strokeLinecap="round" />
                  <line x1="17.5" y1="3.5" x2="16.5" y2="5" strokeWidth="2" strokeLinecap="round" />
                  <line x1="6.5" y1="3.5" x2="7.5" y2="5" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="svm-purpose-card-title">Our Vision</h3>
              <p className="svm-purpose-card-text">
                A future where children become responsible, compassionate and confident citizens rooted
                in Indian values.
              </p>
              {/* Soft Lotus Watermark */}
              <div className="svm-purpose-card-watermark svm-watermark-lotus" aria-hidden="true">
                <svg viewBox="0 0 60 40" width="80" height="52" fill="none" stroke="#DDA89B" strokeWidth="1.2">
                  <path d="M30 4C27 12 23 24 23 32C23 36 26.5 38 30 38C33.5 38 37 36 37 32C37 24 33 12 30 4Z" />
                  <path d="M23 12C17 18 11 26 13 32C14.5 36 19 37 23 34.5C20.5 29.5 19 21.5 23 12Z" />
                  <path d="M37 12C43 18 49 26 47 32C45.5 36 41 37 37 34.5C39.5 29.5 41 21.5 37 12Z" />
                </svg>
              </div>
            </div>

            {/* Card 2: Our Mission */}
            <div className="svm-purpose-card svm-purpose-card-mission">
              <div className="svm-purpose-icon-wrap svm-icon-mission">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#7F0A1A" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" fill="#7F0A1A" />
                  <path d="M19 5l3-3M22 6V2h-4" />
                </svg>
              </div>
              <h3 className="svm-purpose-card-title">Our Mission</h3>
              <p className="svm-purpose-card-text">
                To provide quality education, dedicated mentorship and a value-rich environment that
                develops knowledge, character and life skills in every child.
              </p>
              {/* Soft Book Watermark */}
              <div className="svm-purpose-card-watermark svm-watermark-book" aria-hidden="true">
                <svg viewBox="0 0 60 40" width="75" height="48" fill="none" stroke="#D8BFA5" strokeWidth="1.2">
                  <path d="M5 32C18 26 27 27 30 34C33 27 42 26 55 32V10C42 4 33 5 30 12C27 5 18 4 5 10V32Z" />
                  <path d="M30 12V34" />
                </svg>
              </div>
            </div>

            {/* Card 3: Our Core Values */}
            <div className="svm-purpose-card svm-purpose-card-values">
              <div className="svm-purpose-icon-wrap svm-icon-values">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#7F0A1A" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="svm-purpose-card-title">Our Core Values</h3>
              <p className="svm-purpose-card-text">
                Discipline, respect, integrity, compassion and a commitment to the greater good.
              </p>
              {/* Soft Leaf Watermark */}
              <div className="svm-purpose-card-watermark svm-watermark-leaf" aria-hidden="true">
                <svg viewBox="0 0 60 50" width="70" height="52" fill="none" stroke="#BCD2BA" strokeWidth="1.2">
                  <path d="M15 42C15 42 18 28 32 20C46 12 50 8 50 8C50 8 46 22 38 30C30 38 15 42 15 42Z" />
                  <path d="M15 42C18 36 28 28 42 16" />
                  <path d="M26 32C22 28 22 22 26 16C30 10 38 12 38 12" />
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom Rule Bar */}
          <div className="svm-purpose-bottom-bar">
            <span className="svm-purpose-bar-line" />
            <span className="svm-purpose-bar-text">
              KNOWLEDGE <span className="svm-purpose-dot">•</span> VALUES <span className="svm-purpose-dot">•</span> A BRIGHTER TOMORROW
            </span>
            <span className="svm-purpose-bar-line" />
          </div>
        </div>
      </section>

      {/* ======================================================
          SECTION 4: SCHOOL CULTURE (The Everyday Rhythms That Shape Us.)
          ====================================================== */}
      <section className="svm-culture-section" id="school-culture">
        
        {/* Top Right Subtle Lotus Petals Watermark */}
        <div className="svm-culture-top-lotus-watermark" aria-hidden="true">
          <svg viewBox="0 0 200 200" width="220" height="220" fill="none" opacity="0.45">
            <path d="M100 20C100 60 140 100 180 100C140 100 100 140 100 180C100 140 60 100 20 100C60 100 100 60 100 20Z" fill="#F4E6D8" />
            <path d="M100 50C100 75 125 100 150 100C125 100 100 125 100 150C100 125 75 100 50 100C75 100 100 75 100 50Z" fill="#EEDAC8" />
          </svg>
        </div>

        <div className="container svm-culture-container">
          
          {/* Section Header */}
          <div className="svm-culture-header">
            {/* Centered Top Lotus Emblem */}
            <div className="svm-culture-lotus-icon" aria-hidden="true">
              <svg viewBox="0 0 44 26" width="38" height="23" fill="none">
                <path d="M22 2C20 8 18 16 18 22C18 25 19.8 26 22 26C24.2 26 26 25 26 22C26 16 24 8 22 2Z" fill="#A32A29" />
                <path d="M18 7C14 11 10 17 11 21C11.8 24 15 25 18 23C16.5 19 15.5 14 18 7Z" fill="#C34A36" />
                <path d="M26 7C30 11 34 17 33 21C32.2 24 29 25 26 23C27.5 19 28.5 14 26 7Z" fill="#C34A36" />
                <path d="M11 14C7 17 5 21 7 23C8.5 24.5 12 24 13 22C11 19 10 16 11 14Z" fill="#D47348" />
                <path d="M33 14C37 17 39 21 37 23C35.5 24.5 32 24 31 22C33 19 34 16 33 14Z" fill="#D47348" />
              </svg>
            </div>

            {/* Eyebrow */}
            <div className="svm-culture-eyebrow">
              <span className="svm-culture-eyebrow-line" />
              <span className="svm-culture-eyebrow-text">SCHOOL CULTURE</span>
              <span className="svm-culture-eyebrow-line" />
            </div>

            {/* Headline */}
            <h2 className="svm-culture-title">
              <span className="svm-culture-title-maroon">The Everyday Rhythms</span>{' '}
              <span className="svm-culture-title-gold">That Shape Us.</span>
            </h2>

            {/* Subtitle */}
            <p className="svm-culture-subtitle">
              Shared practices that shape character, community and a sense of belonging.
            </p>

            {/* Accent Underline */}
            <div className="svm-culture-title-accent" aria-hidden="true" />
          </div>

          {/* 6 Culture Cards Grid */}
          <div className="svm-culture-cards-grid">
            {schoolCultureItems.map((item) => (
              <div key={item.id} className="svm-culture-card">
                {/* Left Content Area */}
                <div className="svm-culture-card-content">
                  <div className="svm-culture-card-icon-wrap" aria-hidden="true">
                    {item.icon}
                  </div>
                  <h3 className="svm-culture-card-title">{item.title}</h3>
                  <p className="svm-culture-card-desc">{item.description}</p>
                </div>

                {/* Right Photo Area with Soft Seamless Fade Mask */}
                <div className="svm-culture-card-visual">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="svm-culture-card-img"
                    loading="lazy"
                  />
                  <div className="svm-culture-card-fade-mask" aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>

          {/* Centered Bottom Tagline */}
          <div className="svm-culture-bottom-tagline">
            <span className="svm-culture-tagline-line" />
            <span className="svm-culture-tagline-text">“Rooted in Values. Growing Together.”</span>
            <span className="svm-culture-tagline-line" />
          </div>

        </div>


        {/* Bottom Crimson Wave with Gold Border Accent */}
        <div className="svm-culture-bottom-wave-wrap" aria-hidden="true">
          <svg
            viewBox="0 0 1440 46"
            preserveAspectRatio="none"
            className="svm-culture-bottom-wave-svg"
          >
            <path
              d="M0,24 C360,42 740,6 1120,24 C1280,32 1380,26 1440,24 L1440,46 L0,46 Z"
              fill="#7F0A1A"
            />
            <path
              d="M0,24 C360,42 740,6 1120,24 C1280,32 1380,26 1440,24"
              stroke="#D49D42"
              strokeWidth="2.5"
              fill="none"
            />
          </svg>
        </div>

      </section>

      {/* ======================================================
          SECTION 5: SCHOOL MANAGING COMMITTEE
          ====================================================== */}
      <section className="svm-committee-section" id="managing-committee">

        {/* Top/Side Decorative Foliage Watermarks */}
        <div className="svm-committee-watermark-left" aria-hidden="true">
         
        </div>

        <div className="svm-committee-watermark-right" aria-hidden="true">
         
        </div>

        <div className="container svm-committee-container">
          
          {/* Section Header */}
          <div className="svm-committee-header">
            {/* Top Golden Lotus Icon */}
            <div className="svm-committee-lotus-icon" aria-hidden="true">
              <svg viewBox="0 0 44 26" width="38" height="23" fill="none">
                <path d="M22 2C20 8 18 16 18 22C18 25 19.8 26 22 26C24.2 26 26 25 26 22C26 16 24 8 22 2Z" fill="#C58A3A" />
                <path d="M18 7C14 11 10 17 11 21C11.8 24 15 25 18 23C16.5 19 15.5 14 18 7Z" fill="#D49D42" />
                <path d="M26 7C30 11 34 17 33 21C32.2 24 29 25 26 23C27.5 19 28.5 14 26 7Z" fill="#D49D42" />
                <path d="M11 14C7 17 5 21 7 23C8.5 24.5 12 24 13 22C11 19 10 16 11 14Z" fill="#E5B56A" />
                <path d="M33 14C37 17 39 21 37 23C35.5 24.5 32 24 31 22C33 19 34 16 33 14Z" fill="#E5B56A" />
              </svg>
            </div>

            {/* Eyebrow */}
            <div className="svm-committee-eyebrow">
              <span className="svm-committee-eyebrow-line" />
              <span className="svm-committee-eyebrow-text">OUR COMMITMENT</span>
              <span className="svm-committee-eyebrow-line" />
            </div>

            {/* Main Headline */}
            <h2 className="svm-committee-title">
              School Managing Committee
            </h2>

            {/* Subtitle */}
            <p className="svm-committee-subtitle">
              Udaymin Nanakshahi Saraswati Vidya Mandir, Phulwari Sharif, Patna
            </p>

            {/* Pillars Pill Badge */}
            <div className="svm-committee-badge-pill">
              <span className="svm-pillar-pill-word">Service</span>
              <span className="svm-pillar-pill-sep">|</span>
              <span className="svm-pillar-pill-word">Education</span>
              <span className="svm-pillar-pill-sep">|</span>
              <span className="svm-pillar-pill-word">Culture</span>
              <span className="svm-pillar-pill-sep">|</span>
              <span className="svm-pillar-pill-word">Society</span>
            </div>
          </div>

          {/* Committee Table Card */}
          <div className="svm-committee-table-card">
            <div className="svm-committee-table-responsive">
              <table className="svm-committee-table">
                <thead>
                  <tr>
                    <th className="svm-th-sno">S. No.</th>
                    <th className="svm-th-post">Post</th>
                    <th className="svm-th-name">Name</th>
                  </tr>
                </thead>
                <tbody>
                  {committeeMembers.map((member) => (
                    <tr key={member.sNo} className="svm-tr-row">
                      <td className="svm-td-sno">{member.sNo}</td>
                      <td className="svm-td-post">{member.post}</td>
                      <td className="svm-td-name">{member.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Bottom Crimson Wave with Gold Border Accent */}
        <div className="svm-committee-bottom-wave-wrap" aria-hidden="true">
          <svg
            viewBox="0 0 1440 46"
            preserveAspectRatio="none"
            className="svm-committee-bottom-wave-svg"
          >
            <path
              d="M0,24 C360,42 740,6 1120,24 C1280,32 1380,26 1440,24 L1440,46 L0,46 Z"
              fill="#7F0A1A"
            />
            <path
              d="M0,24 C360,42 740,6 1120,24 C1280,32 1380,26 1440,24"
              stroke="#D49D42"
              strokeWidth="2.5"
              fill="none"
            />
          </svg>
        </div>

      </section>

      {/* ======================================================
          SECTION 6: OUR FUTURE VISION (The Saraswati Vidya Mandir of Tomorrow)
          ====================================================== */}
      <section className="svm-vision-section" id="future-vision">
        
        {/* Soft Botanical Background Watermarks */}
        <div className="svm-vision-watermark-left" aria-hidden="true">
          
        </div>

        <div className="svm-vision-watermark-right" aria-hidden="true">
          
        </div>

        <div className="container svm-vision-container">
          
          {/* Section Header */}
          <div className="svm-vision-header">
            {/* Top Seedling / Sprout Emblem */}
            <div className="svm-vision-sprout-icon" aria-hidden="true">
              <svg viewBox="0 0 28 28" width="30" height="30" fill="none" stroke="#C58A3A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 26V13" />
                <path d="M14 13C14 7.5 10 3 4 3C4 8.5 7.5 13 14 13Z" fill="none" />
                <path d="M14 17C14 13 18 9 24 9C24 14.5 20.5 17 14 17Z" fill="none" />
              </svg>
            </div>

            {/* Eyebrow */}
            <div className="svm-vision-eyebrow">
              <span className="svm-vision-eyebrow-line" />
              <span className="svm-vision-eyebrow-text">OUR FUTURE VISION</span>
              <span className="svm-vision-eyebrow-line" />
            </div>

            {/* Headline */}
            <h2 className="svm-vision-title">
              <span className="svm-vision-title-maroon">The Saraswati Vidya Mandir</span>
              <span className="svm-vision-title-gold">of Tomorrow.</span>
            </h2>

            {/* Narrative Paragraphs */}
            <div className="svm-vision-narrative">
              <p>
                At U.N.S Saraswati Vidya Mandir, we envision a future where tradition and innovation
                grow together. Our journey ahead is focused on creating smarter classrooms, stronger
                learning opportunities, modern STEAM and Sanskriti spaces, deeper parent partnerships,
                and expanded academic pathways for every child.
              </p>
              <p>
                While we embrace new technologies and new ways of learning, our foundation will always
                remain rooted in knowledge, discipline, culture, character and Indian values.
              </p>
            </div>

            {/* Highlight Callout Box */}
            <div className="svm-vision-callout">
              <div className="svm-vision-callout-line" aria-hidden="true" />
              <p className="svm-vision-callout-text">
                Our goal is not only to prepare students for the future, but to shape confident,
                compassionate and responsible individuals who are ready to build a better tomorrow.
              </p>
            </div>
          </div>

          {/* 5 Vision Pillars Row */}
          <div className="svm-vision-pillars-row">
            {futureVisionPillars.map((pillar, index) => (
              <React.Fragment key={pillar.id}>
                {index > 0 && <div className="svm-vision-pillar-divider" aria-hidden="true" />}
                <div className="svm-vision-pillar-item">
                  <div className={`svm-vision-pillar-badge ${pillar.badgeClass}`}>
                    {pillar.icon}
                  </div>
                  <h4 className="svm-vision-pillar-title">
                    {pillar.title.split('\n').map((line, i) => (
                      <span key={i} className="svm-vision-pillar-line">{line}</span>
                    ))}
                  </h4>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Centered Bottom Lotus Emblem & Tagline */}
          <div className="svm-vision-bottom-wrap">
            <div className="svm-vision-bottom-lotus" aria-hidden="true">
              <svg viewBox="0 0 44 26" width="34" height="20" fill="none" stroke="#C58A3A" strokeWidth="1.6">
                <path d="M22 2C20 8 18 16 18 22C18 25 19.8 26 22 26C24.2 26 26 25 26 22C26 16 24 8 22 2Z" />
                <path d="M18 7C14 11 10 17 11 21C11.8 24 15 25 18 23C16.5 19 15.5 14 18 7Z" />
                <path d="M26 7C30 11 34 17 33 21C32.2 24 29 25 26 23C27.5 19 28.5 14 26 7Z" />
              </svg>
            </div>
            <div className="svm-vision-bottom-tagline">
              <span className="svm-vision-tagline-rule" />
              <span className="svm-vision-tagline-text">ROOTED IN VALUES. READY FOR TOMORROW.</span>
              <span className="svm-vision-tagline-rule" />
            </div>
          </div>

        </div>

      </section>
    </div>
  );
};

export default About;
