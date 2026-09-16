import { useState } from 'react';
import './HomePage.css';
import svmBuildingPhoto from '../../assets/welcome-frame-building.jpg';
import svmEducatorPhoto from '../../assets/welcome-frame-educator.jpg';
import svmStudentsPhoto from '../../assets/welcome-frame-students.jpg';
import panchapadi1 from '../../assets/panchapadi-img-1.png';
import panchapadi2 from '../../assets/panchapadi-img-2.png';
import panchapadi3 from '../../assets/panchapadi-img-3.png';
import panchapadi4 from '../../assets/panchapadi-img-4.png';
import panchapadi5 from '../../assets/panchapadi-img-5.png';
import studentDayPrayer from '../../assets/student-day-prayer.jpg';
import studentLibraryImg from '../../assets/library.jpg';
import studentSmartClassImg from '../../assets/smart-class-main.png';
import studentSportsImg from '../../assets/sports-football.jpg';
import studentYogaImg from '../../assets/gallery-yoga.jpg';
import studentCulturalImg from '../../assets/gallery-item-7.jpg';
import facilitySmartClassroom from '../../assets/facility-smart-classroom.png';
import facilityAiRobotics from '../../assets/facility-ai-robotics.png';
import facilityScienceLab from '../../assets/facility-science-lab.png';
import facilitySportsYoga from '../../assets/facility-sports-yoga.png';
import facilityLibrary from '../../assets/facility-library.png';
import facilityAssemblyHall from '../../assets/facility-assembly-hall.png';
import facilityMedicalCare from '../../assets/facility-medical-care.png';
import facilityTransport from '../../assets/facility-transport.png';

const homeFacilities = [
  {
    id: 'smart-classroom',
    title: 'Smart Classroom',
    image: facilitySmartClassroom,
  },
  {
    id: 'ai-robotics',
    title: 'AI & Robotics Learning',
    image: facilityAiRobotics,
  },
  {
    id: 'science-lab',
    title: 'Science Laboratory',
    image: facilityScienceLab,
  },
  {
    id: 'sports-yoga',
    title: 'Sports & Yoga',
    image: facilitySportsYoga,
  },
  {
    id: 'library',
    title: 'Library',
    image: facilityLibrary,
  },
  {
    id: 'assembly-hall',
    title: 'Assembly Hall',
    image: facilityAssemblyHall,
  },
  {
    id: 'medical-care',
    title: 'Medical Care Support',
    image: facilityMedicalCare,
  },
  {
    id: 'transport',
    title: 'Transport Facilities',
    image: facilityTransport,
  },
];

const renderScheduleIcon = (type) => {
  switch (type) {
    case 'meditation':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M12 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm7 15.5l-3.3-2.6-1.7 1.7V22h-4v-3.4l-1.7-1.7L5 19.5V22H3v-3.5c0-.6.3-1.1.7-1.4l4.5-3.5 1.5-4.4c.3-.8 1-1.3 1.9-1.3h.8c.9 0 1.6.5 1.9 1.3l1.5 4.4 4.5 3.5c.5.4.7.9.7 1.4V22h-2v-2.5z" />
        </svg>
      );
    case 'book':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.65 1 5.75V20.5c1.45-1.1 3.55-1.5 5.5-1.5s4.05.4 5.5 1.5c1.45-1.1 3.55-1.5 5.5-1.5 1.17 0 2.39.15 3.5.5V5zm-2 12c-1.04-.26-2.22-.4-3.5-.4-1.95 0-4.05.4-5.5 1.5V7c1.45-1.1 3.55-1.5 5.5-1.5s2.46.14 3.5.4v11.1z" />
        </svg>
      );
    case 'laptop':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
        </svg>
      );
    case 'library':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" />
        </svg>
      );
    case 'trophy':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0 0 11 15.9V19H7v2h10v-2h-4v-3.1a5.01 5.01 0 0 0 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
        </svg>
      );
    case 'lunch':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" />
        </svg>
      );
    case 'yoga':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M12 4c-1.2 3.5-3 7-3 10.5 0 2.5 1.2 4.5 3 4.5s3-2 3-4.5C15 11 13.2 7.5 12 4zm-4 3C6.5 10.5 4.5 14 5 17c.5 1.5 2 2.5 3.5 2.2.8-.2 1.3-.8 1.2-1.8-.4-3.5-.4-7-1.7-10.4zm8 0c-1.3 3.4-1.3 6.9-1.7 10.4-.1 1 .4 1.6 1.2 1.8 1.5.3 3-.7 3.5-2.2.5-3-1.5-6.5-3-10z" />
        </svg>
      );
    case 'cultural':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
      );
    case 'moon':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M12.3 2a10 10 0 0 0-1.9 19.8 10 10 0 0 0 11.4-11.4A10 10 0 0 1 12.3 2z" />
        </svg>
      );
    default:
      return null;
  }
};

const dailyScheduleList = [
  {
    id: 'prayer',
    time: '7:30 AM',
    title: 'Morning Prayer',
    desc: 'A day begins with Saraswati Vandana, pranayama and reflection in the assembly hall.',
    motto: ['DISCIPLINE', 'SHAPES', 'BRIGHTER', 'TOMORROWS'],
    image: studentDayPrayer,
    iconType: 'meditation',
  },
  {
    id: 'classroom',
    time: '8:30 AM',
    title: 'Classroom Learning',
    desc: 'Subjects taught via the Panchapadi method – engaging, inquiry-led and concept-first.',
    motto: ['CURIOSITY', 'IGNITES', 'ENDLESS', 'LEARNING'],
    image: svmStudentsPhoto,
    iconType: 'book',
  },
  {
    id: 'digital',
    time: '10:15 AM',
    title: 'Digital Learning',
    desc: 'Integrating technology for a stronger, brighter future.',
    motto: ['INNOVATION', 'EMPOWERS', 'FUTURE', 'MINDS'],
    image: studentSmartClassImg,
    iconType: 'laptop',
  },
  {
    id: 'library',
    time: '11:00 AM',
    title: 'Library Time',
    desc: 'Books open new worlds.',
    motto: ['BOOKS', 'OPEN', 'BOUNDLESS', 'HORIZONS'],
    image: studentLibraryImg,
    iconType: 'library',
  },
  {
    id: 'sports',
    time: '12:00 PM',
    title: 'Sports Activities',
    desc: 'Building fitness, teamwork and discipline.',
    motto: ['STRENGTH', 'FAIR PLAY', '& TEAM', 'SPIRIT'],
    image: studentSportsImg,
    iconType: 'trophy',
  },
  {
    id: 'lunch',
    time: '1:00 PM',
    title: 'Lunch Session',
    desc: 'Healthy food for active minds.',
    motto: ['NOURISH', 'THE BODY', 'ENRICH', 'THE MIND'],
    image: studentDayPrayer,
    iconType: 'lunch',
  },
  {
    id: 'yoga',
    time: '1:45 PM',
    title: 'Yoga Practice',
    desc: 'A calmer mind for a brighter tomorrow.',
    motto: ['BALANCE', 'HARMONY', 'INNER', 'PEACE'],
    image: studentYogaImg,
    iconType: 'yoga',
  },
  {
    id: 'cultural',
    time: '2:30 PM',
    title: 'Cultural Activities',
    desc: 'Celebrating our rich heritage.',
    motto: ['TRADITION', 'MEETS', 'CREATIVE', 'EXPRESSION'],
    image: studentCulturalImg,
    iconType: 'cultural',
  },
  {
    id: 'reflection',
    time: '4:00 PM',
    title: 'Evening Reflection',
    desc: 'Gratitude, self-learning and preparation for a better tomorrow.',
    motto: ['GRATITUDE', 'PREPARES', 'A NOBLE', 'FUTURE'],
    image: studentDayPrayer,
    iconType: 'moon',
  },
];

const panchapadiSteps = [
  {
    step: '01',
    theme: 'rose',
    image: panchapadi1,
    titleHindi: 'अधीति',
    subtitleEn: 'ATTENTIVE LISTENING',
    desc: 'The child is welcomed into a new concept through stories, observation and curiosity.',
    pill: 'Open Minds, Bright Beginnings',
  },
  {
    step: '02',
    theme: 'sky',
    image: panchapadi2,
    titleHindi: 'बोध',
    subtitleEn: 'COMPREHENSION',
    desc: 'Concepts are unpacked through dialogue, examples and discovery — not memorisation.',
    pill: 'Deeper Understanding, Stronger Thinking',
  },
  {
    step: '03',
    theme: 'sage',
    image: panchapadi3,
    titleHindi: 'अभ्यास',
    subtitleEn: 'PRACTICE',
    desc: 'Hands-on repetition, exercises and activity-based application until mastery.',
    pill: 'Practice Today, Confidence Tomorrow',
  },
  {
    step: '04',
    theme: 'lavender',
    image: panchapadi4,
    titleHindi: 'प्रसार',
    subtitleEn: 'SHARING',
    desc: 'Students teach peers and present learnings — deepening understanding through expression.',
    pill: 'Sharing Ideas, Growing Together',
  },
  {
    step: '05',
    theme: 'amber',
    image: panchapadi5,
    titleHindi: 'प्रवचन',
    subtitleEn: 'APPLICATION',
    desc: 'Knowledge is applied to life and community — turning learning into character.',
    pill: 'Better Individuals, A Brighter Society',
  },
];

const HomePage = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeScheduleIndex, setActiveScheduleIndex] = useState(0);

  const handleAdmissionClick = (e) => {
    e.preventDefault();
    window.location.hash = 'admission';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDiscoverClick = (e) => {
    e.preventDefault();
    window.location.hash = 'philosophy';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenVideo = () => {
    setVideoModalOpen(true);
  };

  const handleCloseVideo = () => {
    setVideoModalOpen(false);
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
               
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="svm-hero-desc">
              At U.N.S Saraswati Vidya Mandir, we nurture confident,
              compassionate and responsible individuals through quality education,
              Indian values and a vision for a better tomorrow.
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
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
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
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
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

      {/* ======================================================
          SECTION 2: WELCOME SECTION (WHERE KNOWLEDGE FINDS ITS PURPOSE)
          ====================================================== */}
      <section className="svm-welcome-section" id="welcome">

        <div className="container svm-welcome-container">

          {/* Left Column: Content & Typography */}
          <div className="svm-welcome-content">

            {/* Top Centered Lotus with Flanking Lines */}
            <div className="svm-welcome-top-badge">
              <span className="svm-welcome-top-line" />
              <div className="svm-welcome-top-lotus">
                <svg viewBox="0 0 100 80" width="30" height="24" fill="#8F0B1D">
                  <path d="M50 5 C45 25, 40 45, 50 65 C60 45, 55 25, 50 5 Z" />
                  <path d="M50 65 C35 55, 25 35, 38 20 C42 35, 46 50, 50 65 Z" />
                  <path d="M50 65 C65 55, 75 35, 62 20 C58 35, 54 50, 50 65 Z" />
                  <path d="M50 65 C22 60, 12 45, 22 35 C32 45, 42 58, 50 65 Z" />
                  <path d="M50 65 C78 60, 88 45, 78 35 C68 45, 58 58, 50 65 Z" />
                </svg>
              </div>
              <span className="svm-welcome-top-line svm-welcome-top-line-right" />
            </div>

            {/* Bilingual Eyebrow */}
            <div className="svm-welcome-eyebrow">
             
              <span className="svm-eyebrow-eng">About U.N.S Saraswati Vidya Mandir</span>
            </div>

            {/* Sanskrit Shloka / Tagline */}
            <p className="svm-welcome-shloka">यत्र विद्या, तत्र संस्कार।</p>        

            {/* Description */}
            <p className="svm-welcome-desc">
            At Saraswati Vidya Mandir, we believe education is not just about
            academic success, but about building confident, compassionate
            and responsible human beings - rooted in Indian values and
            ready for a brighter tomorrow. As a part of the <span className=
            'school-name'>U.N.S. Saraswati Vidya Mandir </span>family, our school
            strives to provide a nurturing environment where every child
            can learn, grow and discover their true potential. We focus on
            a balanced development of mind, body and character through
            quality education, discipline, cultural awareness and service
            to society. Together, we aim to create a generation that carries forward
            our rich heritage while embracing the opportunities of tomorrow.
            </p>

            {/* 3 Pillars Row */}
            <div className="svm-welcome-pillars">

              {/* Pillar 1: Modern CBSE Academics */}
              <div className="svm-welcome-pillar-item">
                <div className="svm-welcome-pillar-icon">
                  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#C58A3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <div className="svm-welcome-pillar-text">
                  <span className="svm-pillar-main">Modern</span>
                  <span className="svm-pillar-sub">CBSE Academics</span>
                </div>
              </div>

              <div className="svm-welcome-pillar-divider" />

              {/* Pillar 2: Indian Values & Culture */}
              <div className="svm-welcome-pillar-item">
                <div className="svm-welcome-pillar-icon">
                  <svg viewBox="0 0 100 80" width="30" height="24" fill="none" stroke="#C58A3A" strokeWidth="4">
                    <path d="M50 8 C46 28, 42 48, 50 68 C58 48, 54 28, 50 8 Z" />
                    <path d="M50 68 C35 58, 24 38, 37 22 C41 38, 45 53, 50 68 Z" />
                    <path d="M50 68 C65 58, 76 38, 63 22 C59 38, 55 53, 50 68 Z" />
                    <path d="M50 68 C20 62, 10 46, 21 35 C31 46, 42 59, 50 68 Z" />
                    <path d="M50 68 C80 62, 90 46, 79 35 C69 46, 58 59, 50 68 Z" />
                  </svg>
                </div>
                <div className="svm-welcome-pillar-text">
                  <span className="svm-pillar-main">Indian Values</span>
                  <span className="svm-pillar-sub">&amp; Culture</span>
                </div>
              </div>

              <div className="svm-welcome-pillar-divider" />

              {/* Pillar 3: Holistic Development */}
              <div className="svm-welcome-pillar-item">
                <div className="svm-welcome-pillar-icon">
                  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#C58A3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="svm-welcome-pillar-text">
                  <span className="svm-pillar-main">Holistic</span>
                  <span className="svm-pillar-sub">Development</span>
                </div>
              </div>

            </div>

            {/* CTAs Row */}
            <div className="svm-welcome-actions">
              <a
                href="#about"
                onClick={handleDiscoverClick}
                className="svm-welcome-primary-btn"
              >
                <span>Discover Our Story</span>
                <span className="svm-btn-arrow">→</span>
              </a>

              <button
                type="button"
                onClick={handleOpenVideo}
                className="svm-welcome-video-btn"
                aria-label="Watch Saraswati Vidya Mandir Video Tour"
              >
                <div className="svm-video-circle">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="#7F0A1A">
                    <polygon points="6,3 20,12 6,21" />
                  </svg>
                </div>
                <span className="svm-video-text">Watch Our Video</span>
              </button>
            </div>

          </div>

          {/* Right Column: Visual Collage Showcase Using Real CSS Frames */}
          <div className="svm-welcome-visual">
            <div className="svm-visual-showcase">

             
              {/* Frame 1: School Campus Building */}
              <div className="svm-frame-building-wrap">
                <div className="svm-frame-building">
                  <img
                    src={svmBuildingPhoto}
                    alt="U.N.S Saraswati Vidya Mandir Campus Building"
                    className="svm-building-img"
                  />
                </div>
              </div>

              {/* Frame 2: Dedicated Educator with Attached Pill Badge */}
              <div className="svm-educator-card-wrap">
                <div className="svm-frame-educator">
                  <img
                    src={svmEducatorPhoto}
                    alt="Dedicated Educator at Saraswati Vidya Mandir"
                    className="svm-educator-img"
                  />
                </div>
                {/* Attached Pill Badge */}
                <div className="svm-educator-badge-pill">
                  <div className="svm-badge-avatar">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="#A96F24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <div className="svm-badge-text">
                    <span className="svm-badge-title">Susum Yadav</span>
                    <span className="svm-badge-sub">Principal</span>
                  </div>
                </div>
              </div>

              {/* Frame 3: Students in Classroom */}
              <div className="svm-frame-students">
                <img
                  src={svmStudentsPhoto}
                  alt="Students Studying in Saraswati Vidya Mandir Classroom"
                  className="svm-students-img"
                />
              </div>
            </div>
          </div>

        </div>

        {/* ======================================================
            BOTTOM SWOOPING WAVE RIBBON (PURE SVG & CSS)
            ====================================================== */}
        

      </section>

      {/* ======================================================
          SECTION: FACILITIES THAT SUPPORT EVERY CHILD'S GROWTH
          ====================================================== */}
      <section className="svm-home-facilities-section" id="facilities">
        <div className="container svm-home-facilities-container">

          {/* Header Row: Eyebrow + Title (Left) & View All Link (Right) */}
          <div className="svm-home-facilities-header">
            <div className="svm-home-facilities-header-left">
              <div className="svm-home-facilities-eyebrow-wrap">
                <span className="svm-home-facilities-eyebrow-bar" />
                <span className="svm-home-facilities-eyebrow">सुविधाएँ • FACILITIES</span>
              </div>
              <h2 className="svm-home-facilities-title">
                Facilities That Support<br />
                Every Child’s Growth
              </h2>
            </div>

            <a
              href="#facilities"
              className="svm-home-facilities-view-all"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = 'facilities';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span>View all facilities</span>
              <span className="svm-home-facilities-arrow" aria-hidden="true">→</span>
            </a>
          </div>

          {/* 8-Card Facilities Grid */}
          <div className="svm-home-facilities-grid">
            {homeFacilities.map((item) => (
              <a
                key={item.id}
                href="#facilities"
                className="svm-home-facility-card"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = 'facilities';
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                title={item.title}
              >
                <div className="svm-home-facility-img-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="svm-home-facility-img"
                    loading="lazy"
                  />
                  <span className="sr-only">{item.title}</span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================
          SECTION 3: THE PANCHAPADI TEACHING METHOD (VIDYA BHARATI)
          ====================================================== */}
      <section className="svm-panchapadi-section" id="philosophy">
        <div className="container svm-panchapadi-container">

          {/* Eyebrow & Golden Lotus Header */}
          <div className="svm-panchapadi-header">
            <div className="svm-panchapadi-lotus-wrap" aria-hidden="true">
              <svg className="svm-panchapadi-lotus-icon" viewBox="0 0 32 32" width="28" height="28">
                <path fill="#9C6721" d="M16 3.5C14.8 8.2 13 13 13 17.5C13 21.2 14.6 23.3 16 23.5C17.4 23.3 19 21.2 19 17.5C19 13 17.2 8.2 16 3.5Z" />
                <path fill="#9C6721" d="M12.5 7.8C10.4 11.8 7.8 16 8.3 19.6C8.7 21.6 10.4 23 12.5 22.8C13.6 22.7 14.3 22 14.1 20C13.6 16 13.5 11.8 12.5 7.8Z" />
                <path fill="#9C6721" d="M19.5 7.8C21.6 11.8 24.2 16 23.7 19.6C23.3 21.6 21.6 23 19.5 22.8C18.4 22.7 17.7 22 17.9 20C18.4 16 18.5 11.8 19.5 7.8Z" />
                <path fill="#9C6721" d="M5.8 13.8C4.3 16.8 4.3 19.4 5.3 20.9C6.4 22.2 8.4 22.5 10 21.5C9.2 19.5 8 16.8 5.8 13.8Z" />
                <path fill="#9C6721" d="M26.2 13.8C27.7 16.8 27.7 19.4 26.7 20.9C25.6 22.2 23.6 22.5 22 21.5C22.8 19.5 24 16.8 26.2 13.8Z" />
                <path fill="#9C6721" d="M8.5 24.2C11.5 25.8 20.5 25.8 23.5 24.2C21.2 26.3 18.2 26.8 16 26.8C13.8 26.8 10.8 26.3 8.5 24.2Z" />
              </svg>
            </div>

            <div className="svm-panchapadi-eyebrow-row">
              <span className="svm-panchapadi-line" />
              <span className="svm-panchapadi-eyebrow-text">पञ्चपदी शिक्षण पद्धति</span>
              <span className="svm-panchapadi-line" />
            </div>

            <h2 className="svm-panchapadi-title">The Panchapadi Teaching Method</h2>
            
            <p className="svm-panchapadi-subtitle">
              A five-fold pedagogical path from{' '}
              <a
                href="https://vidyabharati.net"
                target="_blank"
                rel="noopener noreferrer"
                className="svm-panchapadi-vb-link"
              >
                Vidya Bharati
              </a>{' '}
              – guiding the child from listening, to understanding, to practice, to sharing, to wisdom.
            </p>
          </div>

          {/* 5-Card Panchapadi Steps Grid */}
          <div className="svm-panchapadi-grid">
            {panchapadiSteps.map((step) => (
              <div
                key={step.step}
                className={`svm-panchapadi-card svm-panchapadi-card-${step.theme}`}
              >
                <div className="svm-panchapadi-img-wrap">
                  <img
                    src={step.image}
                    alt={`${step.titleHindi} (${step.subtitleEn})`}
                    className="svm-panchapadi-card-img"
                    loading="lazy"
                  />
                </div>

                <div className="svm-panchapadi-body">
                  <h3 className="svm-panchapadi-card-hindi">{step.titleHindi}</h3>
                  <span className="svm-panchapadi-card-en">{step.subtitleEn}</span>
                  <p className="svm-panchapadi-card-desc">{step.desc}</p>
                  <div className="svm-panchapadi-card-pill">
                    {step.pill}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: Motto, CTA Button, Signature Tagline */}
          <div className="svm-panchapadi-bottom-bar">
            {/* Left Motto */}
            <div className="svm-panchapadi-bottom-left">
             
            </div>

            {/* Center CTA Button */}
            <div className="svm-panchapadi-bottom-center">
              <a
                href="#philosophy"
                onClick={handleDiscoverClick}
                className="svm-panchapadi-cta-btn"
              >
                <span>Explore Our Philosophy</span>
                <span className="svm-cta-arrow" aria-hidden="true">→</span>
              </a>
            </div>

            {/* Right Cursive Tagline */}
            <div className="svm-panchapadi-bottom-right">
             
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================
          SECTION 4: A DAY IN THE LIFE OF A STUDENT
          ====================================================== */}
      <section className="svm-day-section" id="student-life">
        <div className="container svm-day-container">

          {/* Section Header */}
          <div className="svm-day-header">
            <div className="svm-day-eyebrow-row">
              <span className="svm-day-line" />
              <div className="svm-day-eyebrow-content">
                <span className="svm-day-eyebrow-hindi">विद्या ददाति विनयम्</span>
                <span className="svm-day-eyebrow-sep">|</span>
                <span className="svm-day-eyebrow-eng">WALK A DAY WITH US</span>
              </div>
              <span className="svm-day-line" />
            </div>

            <h2 className="svm-day-title">A Day in the Life of a Student</h2>

            <p className="svm-day-subtitle">
              From the first chant in the morning assembly to the closing reflection — every hour at Saraswati Vidya Mandir is woven with purpose.
            </p>
          </div>

          {/* Main 2-Column Schedule Grid */}
          <div className="svm-day-main-grid">

            {/* Left Column: Vertical Interactive Timeline */}
            <div className="svm-day-timeline-col">
              <div className="svm-day-timeline">
                <div className="svm-day-timeline-track" aria-hidden="true" />

                {dailyScheduleList.map((item, index) => {
                  const isActive = index === activeScheduleIndex;
                  return (
                    <div
                      key={item.id}
                      className={`svm-day-timeline-item ${isActive ? 'svm-day-item-active' : ''}`}
                      onClick={() => setActiveScheduleIndex(index)}
                      role="button"
                      tabIndex={0}
                      aria-pressed={isActive}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setActiveScheduleIndex(index);
                        }
                      }}
                    >
                      {/* Node Icon Badge */}
                      <div className="svm-day-badge-wrap">
                        <div className="svm-day-icon-circle">
                          {renderScheduleIcon(item.iconType)}
                        </div>
                      </div>

                      {/* Content Wrap */}
                      <div className="svm-day-item-content">
                        <div className="svm-day-item-header">
                          <h4 className="svm-day-item-title">{item.title}</h4>
                          <span className="svm-day-item-time">{item.time}</span>
                        </div>
                        <p className="svm-day-item-desc">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Featured Showcase Card */}
            <div className="svm-day-showcase-col">
              <div className="svm-day-showcase-card">
                <img
                  src={dailyScheduleList[activeScheduleIndex].image}
                  alt={dailyScheduleList[activeScheduleIndex].title}
                  className="svm-day-showcase-img"
                  key={dailyScheduleList[activeScheduleIndex].id}
                />

                {/* For non-prayer items, render dynamic overlay so user gets an interactive showcase */}
                {activeScheduleIndex !== 0 && (
                  <div className="svm-day-showcase-overlay">
                    <div className="svm-day-overlay-left">
                      <div className="svm-day-overlay-pill">
                        <div className="svm-day-pill-icon">
                          {renderScheduleIcon(dailyScheduleList[activeScheduleIndex].iconType)}
                        </div>
                        <span className="svm-day-pill-divider">|</span>
                        <span className="svm-day-pill-time">
                          {dailyScheduleList[activeScheduleIndex].time}
                        </span>
                      </div>
                      <h3 className="svm-day-overlay-title">
                        {dailyScheduleList[activeScheduleIndex].title}
                      </h3>
                      <p className="svm-day-overlay-desc">
                        {dailyScheduleList[activeScheduleIndex].desc}
                      </p>
                    </div>

                    <div className="svm-day-overlay-right">
                      <div className="svm-day-motto-stack">
                        {dailyScheduleList[activeScheduleIndex].motto.map((line, i) => (
                          <span key={i} className="svm-day-motto-word">{line}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================
          SECTION 5: CAMPUS VISIT CTA BANNER
          ====================================================== */}
    

      {/* ======================================================
          INTERACTIVE SCHOOL VIDEO MODAL
          ====================================================== */}
      {videoModalOpen && (
        <div className="svm-modal-overlay" onClick={handleCloseVideo}>
          <div className="svm-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="svm-modal-close-btn"
              onClick={handleCloseVideo}
              aria-label="Close Video Modal"
            >
              ×
            </button>
            <div className="svm-modal-header">
              <div className="svm-modal-badge">CAMPUS TOUR &amp; OVERVIEW</div>
              <h3 className="svm-modal-title">Experience Saraswati Vidya Mandir</h3>
              <p className="svm-modal-subtitle">Nurturing Young Minds through Knowledge, Values &amp; Character</p>
            </div>
            <div className="svm-modal-body">
              <div className="svm-video-player-placeholder">
                <div className="svm-video-placeholder-content">
                  <div className="svm-play-ring">
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="#FFFFFF">
                      <polygon points="6,3 20,12 6,21" />
                    </svg>
                  </div>
                  <h4>U.N.S Saraswati Vidya Mandir Virtual Tour</h4>
                  <p>Discover our classrooms, science &amp; AI robotics labs, vibrant sports grounds, and Vedic cultural heritage.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default HomePage;
