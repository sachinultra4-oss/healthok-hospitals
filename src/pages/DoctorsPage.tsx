import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Phone, MapPin, GraduationCap, CheckCircle, XCircle } from 'lucide-react';
import { getAllDoctors } from '../data/centers';
import toast from 'react-hot-toast';

export const DoctorsPage = () => {
  const allDoctors = getAllDoctors();
  const [searchTerm, setSearchTerm] = useState('');
  const [cityFilter, setCityFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const cities = ['all', ...new Set(allDoctors.map(d => d.city))];

  const filteredDoctors = allDoctors.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doc.qualification.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doc.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = cityFilter === 'all' || doc.city === cityFilter;
    const matchesStatus = statusFilter === 'all' || (statusFilter === 'active' ? doc.active : !doc.active);
    return matchesSearch && matchesCity && matchesStatus;
  });

  const handleContact = (mobile: string) => {
    if (mobile && mobile !== "+917588517991") {
      window.open(`https://wa.me/${mobile.replace(/[^0-9]/g, '')}`, '_blank');
    } else {
      toast.error('Direct WhatsApp not available. Please call the centre helpline.');
    }
  };

  return (
    <div className="min-h-screen bg-dark pt-28 pb-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-cream">Our <span className="text-gold">Doctor Network</span></h1>
          <p className="text-silver mt-2">{allDoctors.length} registered doctors across Maharashtra</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex-1 min-w-[200px] relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-silver" />
            <input
              type="text"
              placeholder="Search by name, qualification, or address..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-card border border-gold/30 rounded-xl py-3 pl-10 pr-4 text-cream placeholder-silver focus:border-gold outline-none"
            />
          </div>
          <select
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
            className="bg-card border border-gold/30 rounded-xl px-4 py-3 text-cream focus:border-gold outline-none"
          >
            {cities.map(city => <option key={city} value={city}>{city === 'all' ? 'All Cities' : city}</option>)}
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-card border border-gold/30 rounded-xl px-4 py-3 text-cream focus:border-gold outline-none"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Results Count */}
        <p className="text-silver mb-4">Showing {filteredDoctors.length} doctors</p>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredDoctors.map((doctor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.02 }}
              className="bg-card rounded-2xl p-5 border border-gold/20 hover:border-gold/50 transition-all"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-cream">{doctor.name}</h3>
                  <p className="text-gold text-sm">{doctor.qualification || "General Physician"}</p>
                </div>
                {doctor.active ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500" />
                )}
              </div>
              
              {/* Doctor Photo */}
              {doctor.image && (
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-gold mx-auto my-3"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              )}
              
              <div className="mt-2 space-y-2 text-sm text-silver">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{doctor.address || `${doctor.city}, ${doctor.district}`}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>{doctor.city} · {doctor.district}</span>
                </div>
              </div>
              
              <button
                onClick={() => handleContact(doctor.mobile)}
                className="mt-4 w-full bg-gold/20 text-gold py-2 rounded-full text-sm font-semibold hover:bg-gold hover:text-dark transition flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> Contact Doctor
              </button>
            </motion.div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-silver">No doctors match your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};
