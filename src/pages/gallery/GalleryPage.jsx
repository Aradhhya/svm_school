import React, { useState, useEffect } from 'react';
import './GalleryPage.css';

import imgCard1 from '../../assets/gallery-item-1.jpg';
import imgCard2 from '../../assets/gallery-item-2.jpg';
import imgCard3 from '../../assets/gallery-item-3.jpg';
import imgCard4 from '../../assets/gallery-item-4.jpg';
import imgCard5 from '../../assets/gallery-item-5.jpg';
import imgCard6 from '../../assets/gallery-item-6.jpg';
import imgCard7 from '../../assets/gallery-item-7.jpg';
import imgCard8 from '../../assets/gallery-item-8.jpg';
import imgCard9 from '../../assets/gallery-item-9.jpg';
import imgCard10 from '../../assets/gallery-item-10.jpg';
import imgCard11 from '../../assets/gallery-item-11.jpg';
import imgCard12 from '../../assets/gallery-item-12.jpg';
import imgCard13 from '../../assets/computer-lab.jpg';
import imgCard14 from '../../assets/ai-robotics-main.jpg';
import imgCard15 from '../../assets/ai-robotics-car.jpg';
import imgCard16 from '../../assets/ai-robotics-student.jpg';
import imgCard17 from '../../assets/science-lab-main.jpg';
import imgCard18 from '../../assets/smart-class-main.png';
import imgCard19 from '../../assets/sports-football.jpg';
import imgCard20 from '../../assets/library.jpg';
import imgCard21 from '../../assets/gallery-yoga.jpg';
import imgCard22 from '../../assets/science-lab-student.jpg';
import imgCard23 from '../../assets/gallery-track-race.jpg';
import imgCard24 from '../../assets/smart-class-tablet.png';
import imgCard25 from '../../assets/science-lab-beakers.jpg';
import imgCard26 from '../../assets/medical-support.jpg';
import imgCard27 from '../../assets/admission-hero.jpg';
import imgCard28 from '../../assets/eligibility-student.jpg';

const CATEGORIES = [
  'All',
  'School Events',
  'Academic Activities',
  'Cultural Programs',
  'Sports',
  'Festivals',
  'Achievements',
  'Infrastructure',
];

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'School Campus & Main Building',
    category: 'Infrastructure',
    categories: ['Infrastructure'],
    image: imgCard1,
    description: 'Front architectural facade of U.N.S Saraswati Vidya Mandir surrounded by manicured lawns and trees.',
  },
  {
    id: 2,
    title: 'Science Practical Laboratory',
    category: 'Academic Activities',
    categories: ['Academic Activities'],
    image: imgCard2,
    description: 'Students conducting chemistry and microscopy practicals under dedicated teacher guidance.',
  },
  {
    id: 3,
    title: 'Inter-House Football Match',
    category: 'Sports',
    categories: ['Sports'],
    image: imgCard3,
    description: 'Students participating in competitive football matches on our lush green athletic sports field.',
  },
  {
    id: 4,
    title: 'Sanskriti Se Sanskar Dance',
    category: 'Cultural Programs',
    categories: ['Cultural Programs'],
    image: imgCard4,
    description: 'Traditional Indian classical dance performance celebrating our timeless cultural heritage.',
  },
  {
    id: 5,
    title: 'Annual Day Celebration & Assembly',
    category: 'School Events',
    categories: ['School Events'],
    image: imgCard5,
    description: 'Students, faculty and parents gathering for our grand annual cultural gala and award distribution.',
  },
  {
    id: 6,
    title: 'Library Reading & Self Study',
    category: 'Academic Activities',
    categories: ['Academic Activities'],
    image: imgCard6,
    description: 'Students immersed in literature, reference books and quiet intellectual discovery in the central library.',
  },
  {
    id: 7,
    title: 'Championship Trophy Winners',
    category: 'Achievements',
    categories: ['Achievements', 'Sports'],
    image: imgCard7,
    description: 'Our proud school athletics squad celebrating gold medals and winning the inter-school championship trophy.',
  },
  {
    id: 8,
    title: 'Saraswati Puja Aarti & Prayers',
    category: 'Festivals',
    categories: ['Festivals', 'School Events'],
    image: imgCard8,
    description: 'Devotional prayers and traditional diya offerings in reverence to Maa Saraswati on Vasant Panchami.',
  },
  {
    id: 9,
    title: 'Science & Innovation Exhibition',
    category: 'Academic Activities',
    categories: ['Academic Activities', 'School Events'],
    image: imgCard9,
    description: 'Students demonstrating working models, robotics projects and green energy solutions to visitors.',
  },
  {
    id: 10,
    title: 'Inner Quadrangle & Corridors',
    category: 'Infrastructure',
    categories: ['Infrastructure'],
    image: imgCard10,
    description: 'Spacious, well-ventilated academic building wings with sunlit corridors and open courtyard.',
  },
  {
    id: 11,
    title: 'Interactive Classroom Learning',
    category: 'Academic Activities',
    categories: ['Academic Activities'],
    image: imgCard11,
    description: 'Teachers inspiring young minds with interactive blackboard discussions and encouraging questions.',
  },
  {
    id: 12,
    title: 'Independence Day Celebrations',
    category: 'Festivals',
    categories: ['Festivals', 'School Events'],
    image: imgCard12,
    description: 'National flag hoisting, patriotic songs and cultural programs celebrating India\'s freedom.',
  },
  {
    id: 13,
    title: 'Modern Computer & IT Laboratory',
    category: 'Infrastructure',
    categories: ['Infrastructure', 'Academic Activities'],
    image: imgCard13,
    description: 'High-speed computer lab equipped with the latest software tools and individual student terminals.',
  },
  {
    id: 14,
    title: 'AI & Robotics Innovation Hub',
    category: 'Academic Activities',
    categories: ['Academic Activities', 'Achievements'],
    image: imgCard14,
    description: 'Hands-on experiential learning in artificial intelligence, electronics and sensor programming.',
  },
  {
    id: 15,
    title: 'Student Robotics Smart Car Project',
    category: 'Academic Activities',
    categories: ['Academic Activities', 'Achievements'],
    image: imgCard15,
    description: 'Autonomous line-follower robotic vehicle designed and built by student engineering enthusiasts.',
  },
  {
    id: 16,
    title: 'Electronics Prototyping & Soldering',
    category: 'Academic Activities',
    categories: ['Academic Activities'],
    image: imgCard16,
    description: 'Practical training in microcontrollers, circuits and hardware design in our STEM maker space.',
  },
  {
    id: 17,
    title: 'Senior Chemistry Reagents Lab',
    category: 'Academic Activities',
    categories: ['Academic Activities'],
    image: imgCard17,
    description: 'Equipped with safety apparatus, high-grade reagents and precision instruments for board practicals.',
  },
  {
    id: 18,
    title: 'Smart Class Digital Instruction',
    category: 'Infrastructure',
    categories: ['Infrastructure', 'Academic Activities'],
    image: imgCard18,
    description: 'Interactive touchscreen smart boards that make abstract scientific concepts easy to grasp.',
  },
  {
    id: 19,
    title: 'Football Training & Coaching Drills',
    category: 'Sports',
    categories: ['Sports'],
    image: imgCard19,
    description: 'Regular physical conditioning, tactical soccer drills and team spirit development on the field.',
  },
  {
    id: 20,
    title: 'Central Reference Library Hall',
    category: 'Infrastructure',
    categories: ['Infrastructure', 'Academic Activities'],
    image: imgCard20,
    description: 'Rich catalog of books, NCERT publications, magazines and periodicals in an inviting quiet reading space.',
  },
  {
    id: 21,
    title: 'Morning Yoga & Prayer Assembly',
    category: 'Cultural Programs',
    categories: ['Cultural Programs', 'School Events'],
    image: imgCard21,
    description: 'Students practicing morning meditation, pranayama and yoga asanas on the school lawn.',
  },
  {
    id: 22,
    title: 'Biology & Microscopy Practical',
    category: 'Academic Activities',
    categories: ['Academic Activities'],
    image: imgCard22,
    description: 'High school student investigating cellular plant structures through a high-precision compound microscope.',
  },
  {
    id: 23,
    title: 'Annual Track & Field Sprint Championship',
    category: 'Sports',
    categories: ['Sports', 'Achievements'],
    image: imgCard23,
    description: 'Competitive 100m sprint finals showcasing athletic stamina and speed at our sports stadium.',
  },
  {
    id: 24,
    title: 'Digital Tablet E-Learning Workshop',
    category: 'Academic Activities',
    categories: ['Academic Activities', 'Infrastructure'],
    image: imgCard24,
    description: 'Students collaborating on interactive digital learning modules and science simulations.',
  },
  {
    id: 25,
    title: 'Chemistry Analytical Apparatus',
    category: 'Academic Activities',
    categories: ['Academic Activities'],
    image: imgCard25,
    description: 'Precision titration, chemical reagent testing and experimental setup in the senior laboratory.',
  },
  {
    id: 26,
    title: 'Campus Wellness & First-Aid Center',
    category: 'Infrastructure',
    categories: ['Infrastructure'],
    image: imgCard26,
    description: 'Dedicated school infirmary with qualified medical care staff for routine student health checkups.',
  },
  {
    id: 27,
    title: 'Primary Wing Collaborative Learning',
    category: 'Academic Activities',
    categories: ['Academic Activities', 'School Events'],
    image: imgCard27,
    description: 'Young learners engaged in joyful classroom activities, moral storytelling and teamwork.',
  },
  {
    id: 28,
    title: 'Merit Scholar Recognition',
    category: 'Achievements',
    categories: ['Achievements', 'School Events'],
    image: imgCard28,
    description: 'Celebrating top academic achievers who embody the school ethos of diligence and character.',
  },
];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  // Filter items based on active category
  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => 
        item.category === activeCategory || (item.categories && item.categories.includes(activeCategory))
      );

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
      } else if (e.key === 'ArrowRight' && selectedItem) {
        navigateLightbox(1);
      } else if (e.key === 'ArrowLeft' && selectedItem) {
        navigateLightbox(-1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, filteredItems]);

  const navigateLightbox = (direction) => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    if (currentIndex === -1) return;
    const newIndex = (currentIndex + direction + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[newIndex]);
  };

  return (
    <div className="svm-gallery-page">
      {/* ======================================================
          HERO / HEADER SECTION
          ====================================================== */}
      <section className="svm-gallery-hero">
        
        {/* Left Decorative Mandala Sacred Artwork */}
        <div className="svm-gallery-mandala-decor" aria-hidden="true">
          <svg 
            viewBox="0 0 340 340" 
            width="380" 
            height="380" 
            fill="none" 
            stroke="#C58A3A" 
            strokeWidth="1.2" 
            className="svm-mandala-svg"
          >
            {/* Outer dotted and solid concentric rings */}
            <circle cx="170" cy="170" r="164" strokeDasharray="3 4" opacity="0.45" strokeWidth="1" />
            <circle cx="170" cy="170" r="154" opacity="0.65" strokeWidth="1.1" />
            <circle cx="170" cy="170" r="144" opacity="0.4" strokeWidth="0.8" />
            
            {/* 16 Outer Pointed Lotus Petals */}
            {[...Array(16)].map((_, i) => (
              <g key={`outer-${i}`} transform={`rotate(${i * 22.5} 170 170)`}>
                <path 
                  d="M170 16 C156 46, 142 82, 150 116 C158 82, 164 46, 170 16 Z" 
                  opacity="0.65" 
                  fill="#F5ECE0" 
                  fillOpacity="0.2" 
                />
                <path 
                  d="M170 16 C176 46, 182 82, 190 116 C182 82, 174 46, 170 16 Z" 
                  opacity="0.65" 
                  fill="#F5ECE0" 
                  fillOpacity="0.2" 
                />
                <circle cx="170" cy="32" r="2.5" fill="#C58A3A" opacity="0.75" />
              </g>
            ))}

            {/* Middle decorative ring */}
            <circle cx="170" cy="170" r="116" opacity="0.75" strokeWidth="1.2" />
            <circle cx="170" cy="170" r="106" strokeDasharray="3 3" opacity="0.5" />

            {/* 16 Mid Lotus Petals */}
            {[...Array(16)].map((_, i) => (
              <g key={`mid-${i}`} transform={`rotate(${i * 22.5 + 11.25} 170 170)`}>
                <path 
                  d="M170 54 C154 84, 148 118, 170 138 C192 118, 186 84, 170 54 Z" 
                  opacity="0.75" 
                  strokeWidth="1.1"
                />
                <line x1="170" y1="54" x2="170" y2="124" opacity="0.35" strokeWidth="0.8" />
              </g>
            ))}

            {/* Inner Core Rings */}
            <circle cx="170" cy="170" r="74" opacity="0.8" strokeWidth="1.2" />
            <circle cx="170" cy="170" r="64" opacity="0.5" strokeWidth="0.8" />
            
            {/* 8 Inner Core Petals */}
            {[...Array(8)].map((_, i) => (
              <g key={`inner-${i}`} transform={`rotate(${i * 45} 170 170)`}>
                <path 
                  d="M170 96 C157 118, 154 144, 170 156 C186 144, 183 118, 170 96 Z" 
                  opacity="0.85" 
                  fill="#EEDCC6" 
                  fillOpacity="0.3" 
                  strokeWidth="1.1"
                />
              </g>
            ))}
            
            <circle cx="170" cy="170" r="32" opacity="0.7" strokeWidth="1" />
            <circle cx="170" cy="170" r="18" fill="#C58A3A" opacity="0.25" />
            <circle cx="170" cy="8" r="8" fill="#C58A3A" opacity="0.65" />
          </svg>
        </div>

        <div className="container svm-gallery-hero-container">
          {/* Top Section Split: Heading block on left + Sanskrit Quote on mid-right */}
          <div className="svm-gallery-top-split">
            
            {/* Left Titles */}
            <div className="svm-gallery-title-block">
              {/* Breadcrumb */}
              <nav className="svm-gallery-breadcrumb" aria-label="Breadcrumb">
                <a href="#home" className="svm-gallery-crumb-link">Home</a>
                <span className="svm-gallery-crumb-sep">›</span>
                <span className="svm-gallery-crumb-active">Gallery</span>
              </nav>
                
              {/* Eyebrow / Hindi-English Label */}
            <div className="svm-facilities-eyebrow">
              <span className="svm-eyebrow-hindi">हमारी चित्रागार</span>
              <span className="svm-eyebrow-bullet">•</span>
              <span className="svm-eyebrow-eng">OUR GALLERY</span>
            </div>

              {/* Main Heading */}
              <h1 className="svm-gallery-heading">
                Moments that<br />
                Make Us Proud
              </h1>

              {/* Warm Gold Accent Bar */}
              <div className="svm-gallery-accent-bar" aria-hidden="true"></div>

              {/* Subtitle description */}
              <p className="svm-gallery-subtitle">
                A glimpse into the vibrant life at Saraswati Vidya Mandir — where learning, values and joyful experiences come together.
              </p>
            </div>

          

          </div>
        </div>
      </section>

      {/* ======================================================
          CATEGORY FILTER BAR (JUST BELOW HERO SECTION)
          ====================================================== */}
      <section className="svm-gallery-filter-section">
        <div className="container">
          <div className="svm-gallery-filter-bar" role="tablist" aria-label="Gallery Categories">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`svm-gallery-pill-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================
          GALLERY PHOTO GRID SECTION
          ====================================================== */}
      <section className="svm-gallery-grid-section">
        
        {/* Bottom Decorative Watermarks */}
        <div className="svm-grid-watermark svm-grid-watermark-left" aria-hidden="true">
          <svg viewBox="0 0 200 200" width="220" height="220" fill="none" stroke="#C58A3A" strokeWidth="1">
            <circle cx="30" cy="170" r="140" strokeDasharray="3 4" opacity="0.25" />
            <circle cx="30" cy="170" r="110" opacity="0.35" />
            <circle cx="30" cy="170" r="80" opacity="0.25" />
            {[...Array(8)].map((_, i) => (
              <g key={`corner-l-${i}`} transform={`rotate(${i * 45} 30 170)`}>
                <path d="M30 60 C20 90, 15 125, 30 145 C45 125, 40 90, 30 60 Z" opacity="0.4" fill="#F4E8D7" fillOpacity="0.2" />
              </g>
            ))}
          </svg>
        </div>

        <div className="svm-grid-watermark svm-grid-watermark-right" aria-hidden="true">
          <svg viewBox="0 0 200 200" width="220" height="220" fill="none" stroke="#C58A3A" strokeWidth="1">
            <circle cx="170" cy="170" r="140" strokeDasharray="3 4" opacity="0.25" />
            <circle cx="170" cy="170" r="110" opacity="0.35" />
            <circle cx="170" cy="170" r="80" opacity="0.25" />
            {[...Array(8)].map((_, i) => (
              <g key={`corner-r-${i}`} transform={`rotate(${i * 45} 170 170)`}>
                <path d="M170 60 C160 90, 155 125, 170 145 C185 125, 180 90, 170 60 Z" opacity="0.4" fill="#F4E8D7" fillOpacity="0.2" />
              </g>
            ))}
          </svg>
        </div>

        <div className="container">
          {/* Active Category Counter */}
          <div className="svm-gallery-results-meta">
            <span className="svm-results-count">
              Showing <strong>{filteredItems.length}</strong> {filteredItems.length === 1 ? 'photo' : 'photos'} in <em>{activeCategory}</em>
            </span>
          </div>

          {/* 4-Column Responsive Grid (5 Rows = 20 Photos) */}
          <div className="svm-gallery-cards-grid">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="svm-gallery-card"
                onClick={() => setSelectedItem(item)}
                tabIndex={0}
                role="button"
                aria-label={`View photo: ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedItem(item);
                  }
                }}
              >
                {/* Photo Image Frame */}
                <div className="svm-card-img-wrapper">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="svm-card-img" 
                    loading="lazy" 
                  />
                  
                  {/* Subtle Hover Gradient & Details */}
                  <div className="svm-card-hover-overlay">
                    <span className="svm-card-badge">{item.category}</span>
                    <div className="svm-card-hover-content">
                      <h3 className="svm-card-title">{item.title}</h3>
                      <div className="svm-card-zoom-btn">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                          <line x1="11" y1="8" x2="11" y2="14"></line>
                          <line x1="8" y1="11" x2="14" y2="11"></line>
                        </svg>
                        <span>View Photo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="svm-gallery-empty">
              <p>No photos found under this category.</p>
              <button 
                type="button" 
                className="svm-gallery-pill-btn active"
                onClick={() => setActiveCategory('All')}
              >
                View All Photos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ======================================================
          LIGHTBOX MODAL VIEWER
          ====================================================== */}
      {selectedItem && (
        <div 
          className="svm-lightbox-backdrop" 
          onClick={() => setSelectedItem(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
        >
          <div 
            className="svm-lightbox-modal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              type="button" 
              className="svm-lightbox-close"
              onClick={() => setSelectedItem(null)}
              aria-label="Close photo preview"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Prev & Next Navigation */}
            <button 
              type="button" 
              className="svm-lightbox-nav svm-lightbox-prev"
              onClick={() => navigateLightbox(-1)}
              aria-label="Previous photo"
            >
              ‹
            </button>
            <button 
              type="button" 
              className="svm-lightbox-nav svm-lightbox-next"
              onClick={() => navigateLightbox(1)}
              aria-label="Next photo"
            >
              ›
            </button>

            {/* Main Preview Image */}
            <div className="svm-lightbox-img-container">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title} 
                className="svm-lightbox-img" 
              />
            </div>

            {/* Lightbox Caption / Meta */}
            <div className="svm-lightbox-caption">
              <div className="svm-lightbox-meta-row">
                <span className="svm-lightbox-category-tag">{selectedItem.category}</span>
                <span className="svm-lightbox-counter">
                  {filteredItems.findIndex(i => i.id === selectedItem.id) + 1} / {filteredItems.length}
                </span>
              </div>
              <h2 className="svm-lightbox-title">{selectedItem.title}</h2>
              <p className="svm-lightbox-desc">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
