import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Updated dataset based on M.S.S. Public School's facilities and dynamic event posters
  const galleryData = [
    {
      id: 1,
      category: 'campus',
      title: 'Three Storied RC Building',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      category: 'labs',
      title: 'Modern Computer Laboratory',
      image: 'https://images.unsplash.com/photo-1562774053-401386dfdf8f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      category: 'sports',
      title: '750 Sq. mtr. Football Ground',
      image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      category: 'labs',
      title: 'Chemistry Resource Lab',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9d39d6618?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      category: 'campus',
      title: 'Open Air Auditorium',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      category: 'sports',
      title: 'Athletics & Games Training',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 7,
      category: 'campus',
      title: 'Central Library Storehouse',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 8,
      category: 'labs',
      title: 'Biology Purpose Lab',
      image: 'https://images.unsplash.com/photo-1511140595351-872f232d189b?auto=format&fit=crop&w=800&q=80',
    },
    // New Achievements & Events posters from the school screenshots
    {
      id: 9,
      category: 'events',
      title: '100% Result Celebration - Grade X',
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80', // Replace with school asset later
    },
    {
      id: 10,
      category: 'events',
      title: 'SSCE Class 12 Toppers 2026',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80', // Replace with school asset later
    },
    {
      id: 11,
      category: 'events',
      title: 'Annual Sports Meet 2025-26',
      image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80', // Replace with school asset later
    },
    {
      id: 12,
      category: 'events',
      title: '26th Annual Day Celebration',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80', // Replace with school asset later
    },
    {
      id: 13,
      category: 'events',
      title: 'Ethical Hacking with AI Workshop',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80', // Replace with school asset later
    },
    {
      id: 14,
      category: 'events',
      title: 'Kerala Piravi Dinam Celebration',
      image: 'https://images.unsplash.com/photo-1608958416715-bc65476a8cae?auto=format&fit=crop&w=800&q=80', // Replace with school asset later
    }
  ];

  // Filter images based on selected tab category
  const filteredImages = activeFilter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeFilter);

  // Helper function to turn technical category tags into user-friendly names
  const getCategoryLabel = (category) => {
    switch(category) {
      case 'campus': return 'Campus & Buildings';
      case 'labs': return 'Science & Tech Labs';
      case 'sports': return 'Sports & Games';
      case 'events': return 'Achievements & Events';
      default: return 'Gallery';
    }
  };

  return (
    <div className="gallery-page">
      {/* Gallery Header Banner */}
      <div className="gallery-hero">
        <div className="gallery-hero-content">
          <h1>Our School Gallery</h1>
          <div className="gallery-divider"></div>
          <p>Visual glimpses of M.S.S. Public School infrastructure, labs, achievements, and student activities.</p>
        </div>
      </div>

      {/* Filter Navigation Tabs */}
      <div className="gallery-container">
        <div className="filter-tabs-bar">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Photos
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'campus' ? 'active' : ''}`}
            onClick={() => setActiveFilter('campus')}
          >
            School & Buildings
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'labs' ? 'active' : ''}`}
            onClick={() => setActiveFilter('labs')}
          >
            Science & Tech Labs
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'sports' ? 'active' : ''}`}
            onClick={() => setActiveFilter('sports')}
          >
            Sports & Games
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'events' ? 'active' : ''}`}
            onClick={() => setActiveFilter('events')}
          >
            Achievements & Events
          </button>
        </div>

        {/* Dynamic Image Grid */}
        <div className="gallery-grid">
          {filteredImages.map((item) => (
            <div key={item.id} className="gallery-card">
              <div className="gallery-img-wrapper">
                <img src={item.image} alt={item.title} className="gallery-img" />
                <div className="gallery-overlay">
                  <span className="category-badge">{getCategoryLabel(item.category)}</span>
                  <h3>{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;