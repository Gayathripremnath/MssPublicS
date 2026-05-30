import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import './Facilities.css';

// eslint-disable-next-line react-refresh/only-export-components
export const facilitiesData = [
  {
    id: "library",
    title: "Library",
    shortDesc: "Our Library is set around an area of 30x20sq feet and is a store house of knowledge with more than 8000 books...",
    fullDesc: "Our Library is set around an area of 30x20sq feet and is a store house of knowledge with more than 8000 books including Referance Books (KG - 200 Nos.,LP - 1000 Nos.,UP - 1500 Nos.,HS - 2300 Nos.,HSS - 3000 Nos). Our P.T.A has played a prominent role in embellishing the library with the help our students to out reach and get well equipped with knowledge in different fields. Weekly Periodicals - Sports star, The Week, Out look, Balarama Digest, Mathruboomi Azhchapadippu, Madhyamam Azhchapadippu, Time, India Today (Malayalam) etc. Fortnightly Periodicals - Magic Pot, Fortune etc. Monthly Periodicals like Tell me Why, School Master (IX &X) Basha Poshini, National Geographic, Competition Success Review, Science Refreshner, P.C.M Childrens Magazine, Competiton Refreshioner, G.K refreshner, Hoot &Toot Pallikkodam, India Today (Hindi) Champak, Gokulam, Out look (Hindi), Yathra, Sports magazine (Mathrubhumi), Children’s Digest, Tinkle, India Today (Malayalam) etc. make the world come in to the hands of our children. News Papers - The Hindu, Indian express, mathrubhumi, Malayala Manorama, Deshabhimani and Decan Chronicle make the students well informed and the peaceful atmosphere in the library sets a an ideal enviorment for reading.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "laboratory",
    title: "Laboratary",
    shortDesc: "Science is different from other subjects. To learn science is to do science. It is different because...",
    fullDesc: "Science is different from other subjects. To learn science is to do science. It is different because the answers to scientific questions are not found in a textbook is through pondering high and lofty thoughts. The lab is a place of careful collection and analysis of laboratory evidence.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "physics-lab",
    title: "Physics Lab",
    shortDesc: "Our school has well equipped physics lab. This covers an area of 30x20 square feet...",
    fullDesc: "Our school has well equipped physics lab. This covers an area of 30x20 square feet.",
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "biology-lab",
    title: "Biology Lab",
    shortDesc: "The intent of the laboratory is to provide students a lab with a purpose. Therefore a well equipped...",
    fullDesc: "The intent of the laboratory is to provide students a lab with a purpose. Therefore a well equipped and well aerated laboratory measuring 30x20 sq feet can accommodate 30 students at a time to do experiments.\nThe lab is provided with six concrete and tiled slabs, to wooden stools, running water taps and sinks, tiled floor, cupboards and a whiteboard.\nThe laboratory has a wide and varied collection of preserved specimens, slides stuffed specimens, chart, models etc. The equipments include compound microscope, dissection microscope and glass apparatus.",
    image: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "chemistry-lab",
    title: "Chemistry Lab",
    shortDesc: "Chemistry lab is spread over an area of 50x20 sq. Feet and it includes a separate store where the chemicals...",
    fullDesc: "Chemistry lab is spread over an area of 50x20 sq. Feet and it includes a separate store where the chemicals and all other equipment are kept safely. A weighing table is also provided from where the students can understand the intricacies of Chemistry as a subject and make use of Chemical Balance, Electronic Balance and the like during the analysis. The lab is very spacious and well equipped that almost 30 students can do experiment at a time. All the reagents required for the analysis are placed on wooden racks arranged on their work place itself. Separate gas burners, water taps and sinks are also provided in their places.\n\nThis lab provides controlled conditions in which scientific research experiments and measurements may be performed. It is a place where students learn to practice the activities of scientists-asking questions, performing procedures, collecting data, analyzing data, answering questions and think of innovative methods to explore. The hope is that as students progress through the course they would improve their documentation, presentation, reporting and scientific skills through laboratory activities.",
    image: "https://images.unsplash.com/photo-1603126857599-f6e15782782b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "computer-lab",
    title: "Computer Lab",
    shortDesc: "A computer lab is a room which contains many networked computers for public use. In our school we have...",
    fullDesc: "A computer lab is a room which contains many networked computers for public use. In our school we have two well furnished computer labs, one for the lower classes with 10 systems and the other with 20 systems for the higher classes. We have all the facilities so that the children can utilize it well. There is a server system which has internet connection and all other systems are shared.\nChildren can utilize lab for their academic purposes. All the necessary softwares are installed in each systems and all the systems are working properly.\nSmart class facility is also available for the better learning. At present we have four smart class rooms which provides interactive learning and the children are very interested to attend smart class.",
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "sports",
    title: "Sports",
    shortDesc: "M.S.S. Public School gives much importance to physical activities like sports and athletics. We are providing...",
    fullDesc: "M.S.S. Public School gives much importance to physical activities like sports and athletics. We are providing ample opportunities for our students and encourage them to cover this area as well.\n\nTwo play grounds attached to the school give enough space for sports activities. Play equipments for small children and a playroom for them are also provided. Our students participate in all interschool athletic meets and they have won numerous accolades too. Football camps, volleyball, cricket, chess camps, and swimming camps are conducted here regularly.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "amenities",
    title: "Other Amenities",
    shortDesc: "Three school buses are plying in different directions, for the purpose of student's travel. We are...",
    fullDesc: "Three school buses are plying in different directions, for the purpose of student's travel. We are committed to providing safe and convenient transportation for our students.",
    image: "https://images.unsplash.com/photo-1557223562-6c77ef16210f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

const Facilities = () => {
  return (
    <div className="facilities-page">
      <div className="facilities-hero">
        <div className="facilities-hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Facilities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The School is situated in a serene and calm area in Mavilikkadavu 8 km away from Calicut city, functioning in a three storied building with 60 rooms. We provide all the basic facilities which a standard school should possess.
          </motion.p>
        </div>
      </div>

      <div className="facilities-container">
        <div className="facilities-grid">
          {facilitiesData.map((facility, index) => (
            <motion.div 
              className="facility-card"
              key={facility.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="facility-image-wrapper">
                <img src={facility.image} alt={facility.title} className="facility-image" />
                <div className="facility-overlay"></div>
              </div>
              <div className="facility-content">
                <h3>{facility.title}</h3>
                <p>{facility.shortDesc}</p>
                <Link 
                  className="read-more-btn"
                  to={`/facilities/${facility.id}`}
                >
                  Read More <FaArrowRight className="btn-icon" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
