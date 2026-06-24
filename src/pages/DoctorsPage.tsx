import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Phone, MapPin, GraduationCap, CheckCircle, XCircle, Stethoscope } from 'lucide-react';
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

  const handleContact = (mobile: string, name: string) => {
    if (mobile && mobile !== "+917588517991") {
      window.open(`https://wa.me/${mobile.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello Dr. ${name}, I want to book an appointment.`)}`, '_blank');
    } else {
      toast.error('Please call the centre helpline: 7588517991');
    }
  };

  return (
    <div className="min-h-screen bg-dark pt-28 pb-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Stethoscope className="w-8 h-8 text-gold" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-cream">Our <span className="text-gold">Doctor Network</span></h1>
          <p className="text-silver mt-2">{allDoctors.length} registered doctors across Maharashtra</p>
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <div className="bg-card px-4 py-2 rounded-full border border-gold/20">
            <span className="text-gold font-bold">{allDoctors.length}</span>
            <span className="text-silver ml-1">Total Doctors</span>
          </div>
          <div className="bg-card px-4 py-2 rounded-full border border-green-500/20">
            <span className="text-green-400 font-bold">{allDoctors.filter(d => d.active).length}</span>
            <span className="text-silver ml-1">Active</span>
          </div>
          <div className="bg-card px-4 py-2 rounded-full border border-red-500/20">
            <span className="text-red-400 font-bold">{allDoctors.filter(d => !d.active).length}</span>
            <span className="text-silver ml-1">Inactive</span>
          </div>
          <div className="bg-card px-4 py-2 rounded-full border border-gold/20">
            <span className="text-gold font-bold">{new Set(allDoctors.map(d => d.city)).size}</span>
            <span className="text-silver ml-1">Cities</span>
          </div>
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
            className="bg-card border border-gold/30 rounded-xl px-4 py-3 text-cream focus:border-gold outline-none min-w-[140px]"
          >
            {cities.map(city => <option key={city} value={city}>{city === 'all' ? 'All Cities' : city}</option>)}
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-card border border-gold/30 rounded-xl px-4 py-3 text-cream focus:border-gold outline-none min-w-[140px]"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Results Count */}
        <p className="text-silver mb-4">
          Showing <span className="text-gold font-bold">{filteredDoctors.length}</span> doctors
          {searchTerm && <span className="ml-1">matching "<span className="text-cream">{searchTerm}</span>"</span>}
        </p>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredDoctors.map((doctor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.02 }}
              className="bg-card rounded-2xl p-5 border border-gold/20 hover:border-gold/50 transition-all hover:shadow-xl hover:shadow-gold/5"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-cream">{doctor.name}</h3>
                  <p className="text-gold text-sm">{doctor.qualification || "General Physician"}</p>
                </div>
                {doctor.active ? (
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                )}
              </div>
              
              {/* Doctor Photo */}
              {doctor.image && (
                <div className="flex justify-center my-3">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-gold"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              )}
              
              <div className="mt-2 space-y-2 text-sm text-silver">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold" />
                  <span>{doctor.address || `${doctor.city}, ${doctor.district}`}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-gold" />
                  <span>{doctor.city} · {doctor.district}</span>
                </div>
                {doctor.registration && (
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-silver">Reg: {doctor.registration}</span>
                  </div>
                )}
              </div>
              
              <button
                onClick={() => handleContact(doctor.mobile, doctor.name)}
                className="mt-4 w-full bg-gold/20 text-gold py-2 rounded-full text-sm font-semibold hover:bg-gold hover:text-dark transition flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> Contact Doctor
              </button>
            </motion.div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-silver text-lg">No doctors match your filters.</p>
            <button 
              onClick={() => { setSearchTerm(''); setCityFilter('all'); setStatusFilter('all'); }}
              className="mt-4 text-gold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
