import { motion } from 'framer-motion';
import { MapPin, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { centers } from '../data/centers';

export const OurCentres = () => {
  return (
    <section id="centres" className="py-20 bg-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-gold text-sm uppercase font-bold">Our Network</span>
          <h2 className="section-title">Health OK <span className="text-gold">Centres</span></h2>
          <p className="text-silver">12+ centres across Maharashtra with 150+ associated doctors</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {centers.map((center, idx) => (
            <motion.div
              key={center.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-card rounded-2xl p-5 border border-gold/20 hover:border-gold/50 transition-all"
            >
              <Link to={`/centre/${encodeURIComponent(center.city)}`} className="block">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-cream">{center.city}</h3>
                    <p className="text-silver text-sm flex items-center gap-1">
                      <Users className="w-3 h-3" /> {center.doctorsCount} doctors
                    </p>
                    <p className="text-silver text-xs mt-1">{center.fullAddress}</p>
                  </div>
                  <MapPin className="w-6 h-6 text-gold flex-shrink-0" />
                </div>
                <button className="mt-4 w-full bg-gold/20 text-gold py-2 rounded-full text-sm font-semibold hover:bg-gold hover:text-dark transition flex items-center justify-center gap-2">
                  View Details <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
