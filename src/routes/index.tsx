import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  Stethoscope, MapPin, Phone, MessageCircle, ShieldCheck, Clock, HeartPulse,
  Users, Award, Wallet, Wifi, Calendar, Search, ArrowRight, Star,
  ChevronDown, Mail, Send, Volume2, VolumeX,
} from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import banner from "@/assets/banner.jpg.asset.json";
import doctor1 from "@/assets/doctor1.mp4.asset.json";
import doctor2 from "@/assets/doctor2.mp4.asset.json";
import doctor3 from "@/assets/doctor3.mp4.asset.json";
import { getAllDoctors } from "@/data/centers";
import { DoctorAvatar } from "@/components/DoctorAvatar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Health OK Hospitals — Trusted Maharashtra Health Initiative" },
      { name: "description", content: "Standard, ethical & efficient healthcare across Maharashtra. 100+ doctors, zero hidden fees, super-specialist consultations." },
    ],
  }),
  component: Index,
});

const CARE_NUMBER = "7030666321";
const WHATSAPP = `https://wa.me/91${CARE_NUMBER}`;
const PHONE = `tel:+91${CARE_NUMBER}`;
// REPLACE_WITH_WHATSAPP_COMMUNITY_LINK
const WHATSAPP_COMMUNITY = "https://chat.whatsapp.com/REPLACE_WITH_HEALTH_OK_COMMUNITY_INVITE";
const waMsg = (msg: string) => `${WHATSAPP}?text=${encodeURIComponent(msg)}`;
const WA = {
  patientCare: waMsg("Hello Health OK Hospitals, I would like to consult a specialist. Please help me find the right doctor."),
  callback: waMsg("Hello Health OK Hospitals! I would like to book a callback. Please contact me at your earliest convenience."),
  generic: waMsg("Hello, I need assistance from Health OK Hospitals."),
  doctorNetwork: waMsg("Hello Health OK Hospitals, I am a doctor and would like to know more about joining the Health OK Doctor Network."),
};
// DUAL_NOTIFY: also send to individual doctor number — implement when backend is ready.
const waForDoctor = (_name: string, _clinic?: string, city?: string) => {
  const body = `Health OK Appointment Request\nName: [patient will fill]\nPreferred Centre: ${city ?? "[CITY]"}\nMessage: I'd like to book an appointment. Please share available slots.`;
  return `${WHATSAPP}?text=${encodeURIComponent(body)}`;
};

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Mission />
        <DualEngagement />
        <PatientTrust />
        <DoctorBenefits />
        <Impact />
        <HowItWorks />
        <DoctorVideos />
        <Testimonials />
        <FeaturedDoctors />
        <ExploreCTA />
        <Resources />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Home", href: "/" },
    { label: "Centres", href: "/centres" },
    { label: "Doctors", href: "/doctors" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border">
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo.url} alt="Health OK Hospitals" className="h-10 w-auto rounded-md" />
          <span className="hidden sm:block font-display font-bold text-base leading-tight">
            Health OK <span className="block text-xs font-medium text-muted-foreground">Hospitals</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            l.href.startsWith("/") ? (
              <Link key={l.href} to={l.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition">{l.label}</Link>
            ) : (
              <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition">{l.label}</a>
            )
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={PHONE} className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-primary">
            <Phone className="w-4 h-4" /> 7030666321
          </a>
          <a href={WA.callback} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:opacity-90 transition">
            <MessageCircle className="w-4 h-4" /> Book Callback
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
            <div className="space-y-1.5">
              <span className="block w-5 h-0.5 bg-foreground"></span>
              <span className="block w-5 h-0.5 bg-foreground"></span>
              <span className="block w-5 h-0.5 bg-foreground"></span>
            </div>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-px mx-auto py-3 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium py-1">{l.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="home" className="relative overflow-hidden gradient-hero text-primary-foreground">
      <div className="container-px mx-auto max-w-7xl py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 py-1.5 text-xs font-semibold ring-1 ring-white/20">
            <ShieldCheck className="w-3.5 h-3.5" /> Maharashtra's Trusted Healthcare Network
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05]">
            Standard, Ethical & Efficient Healthcare, <span className="text-secondary">Close to You.</span>
          </h1>
          <p className="mt-3 text-secondary text-sm md:text-base font-semibold italic">
            Trusted Healthcare Network For India... By Indians...
          </p>
          <p className="mt-5 text-base md:text-lg text-white/85 max-w-xl">
            Delivering transparent, specialized medical expertise to rural and semi-urban communities — 150+ centres, zero hidden fees, and 24/7 consultant backup.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={WA.callback} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-5 py-3 font-semibold hover:opacity-90 transition shadow-card">
              <Calendar className="w-4 h-4" /> Book Appointment · 7030666321
            </a>
            <a href={WA.patientCare} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white ring-1 ring-white/30 backdrop-blur px-5 py-3 font-semibold hover:bg-white/20 transition">
              <MessageCircle className="w-4 h-4" /> Consult on WhatsApp
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
            {[
              ["150+", "Centres"],
              ["0", "Hidden Charges"],
              ["20+", "Cities & Towns"],
              ["24/7", "Consultant Backup"],
            ].map(([n, l]) => (
              <div key={l} className="rounded-xl bg-white/10 ring-1 ring-white/15 backdrop-blur px-3 py-3">
                <dt className="text-2xl font-extrabold text-secondary">{n}</dt>
                <dd className="text-xs text-white/80 mt-0.5">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-card ring-4 ring-white/30">
            <img src={banner.url} alt="Health OK doctor consulting a patient" className="w-full h-full object-cover aspect-[4/5] md:aspect-[4/4]" />
          </div>
          <div className="absolute -bottom-5 -left-3 sm:left-6 bg-white rounded-2xl shadow-card px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"><Stethoscope className="w-5 h-5" /></div>
            <div>
              <p className="text-xs text-muted-foreground">Verified Network</p>
              <p className="text-sm font-bold">MBBS · BAMS · BHMS</p>
            </div>
          </div>
          <div className="absolute -top-3 -right-2 sm:right-6 bg-secondary text-secondary-foreground rounded-2xl shadow-card px-4 py-3">
            <p className="text-xs font-medium">Customer Care</p>
            <p className="text-sm font-extrabold">+91 7030666321</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Mission ---------------- */
function Mission() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-px mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider">Our Mission</p>
        <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">Redefining Community Healthcare Across India</h2>
        <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
          Health OK Hospitals is a dedicated community healthcare initiative making standard, ethical, and efficient medical care accessible across India — especially in rural, semi-urban, and underserved regions of Maharashtra. By bridging the gap between local clinics and trusted specialist guidance, we ensure you receive fast, honest care without traveling to distant metropolitan centers.
        </p>
        <a href="#about" className="mt-7 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
          Learn More About Us <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

/* ---------------- Dual Engagement ---------------- */
function DualEngagement() {
  const cards = [
    {
      tag: "FOR PATIENTS",
      title: "Trusted Medical Care, Close to You",
      points: ["Standard, ethical, efficient healthcare", "Genuine, qualified doctors", "Affordable & simple costs", "Online + Offline support", "Personalized family care plans"],
      cta: "Explore Patient Care",
      accent: "primary",
    },
    {
      tag: "FOR DOCTORS",
      title: "Be More Than Just a Practitioner",
      points: ["Supportive network of qualified doctors", "Clinical training & workshops", "24*7 Consultant Backup", "Practice flow enhancement", "Brand visibility"],
      cta: "Explore Doctor Network",
      accent: "secondary",
    },
  ];
  return (
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Our Core Engagement</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">A Dual-Sided Healthcare Initiative</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {cards.map(c => (
            <div key={c.tag} className="group relative rounded-3xl bg-card p-8 shadow-card border border-border hover:-translate-y-1 transition">
              <span className={`inline-block text-xs font-bold tracking-widest px-3 py-1 rounded-full ${c.accent === "primary" ? "bg-secondary text-secondary-foreground" : "bg-secondary text-secondary-foreground"}`}>{c.tag}</span>
              <h3 className="mt-4 text-2xl md:text-3xl font-extrabold">{c.title}</h3>
              <ul className="mt-6 space-y-3">
                {c.points.map(p => (
                  <li key={p} className="flex items-start gap-3 text-sm">
                    <span className={`mt-1 w-1.5 h-1.5 rounded-full ${c.accent === "primary" ? "bg-primary" : "bg-secondary"}`} />
                    {p}
                  </li>
                ))}
              </ul>
              <a href={c.accent === "primary" ? WA.patientCare : WA.doctorNetwork} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">{c.cta} <ArrowRight className="w-4 h-4" /></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Patient trust ---------------- */
function PatientTrust() {
  const items = [
    { i: Award, t: "Expert-Trained Doctors", d: "Local MBBS, BAMS, BHMS mentored by senior specialists." },
    { i: Wallet, t: "Affordable & Transparent", d: "No hidden charges or unnecessary tests — clear pricing." },
    { i: Wifi, t: "Online + Offline Care", d: "International quality healthcare available locally — visit clinics or get tele-care from your home." },
    { i: HeartPulse, t: "Personalized Care Plans", d: "Tailored care plans for every member of your family — from kids to adults, for chronic and acute conditions." },
    { i: Stethoscope, t: "Standard Health Services", d: "ECG, diagnostics, and clinical emergency support." },
    { i: MessageCircle, t: "WhatsApp Health Support", d: "Free guidance, follow-ups, and wellness content." },
  ];
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">For Patients</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">Why Patients Trust Health OK</h2>
          </div>
          <a href={PHONE} className="text-sm font-semibold text-primary">Customer Care · 7030666321 →</a>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ i: Icon, t, d }) => (
            <div key={t} className="rounded-2xl bg-card p-6 border border-border shadow-soft hover:shadow-card transition">
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center"><Icon className="w-5 h-5" /></div>
              <h3 className="mt-4 text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-3xl gradient-hero p-8 md:p-10 text-primary-foreground flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <div className="flex items-center gap-2 text-secondary"><Clock className="w-5 h-5" /> <span className="text-xs font-bold tracking-widest">24×7 CONSULTANT BACKUP</span></div>
            <h3 className="mt-2 text-2xl md:text-3xl font-extrabold">Round-the-clock access to senior consultants</h3>
            <p className="mt-2 text-white/85 text-sm md:text-base max-w-2xl">For emergencies and second opinions — anytime, any day. Expanding network — available across Maharashtra and growing rapidly.</p>
          </div>
          <a href={WA.patientCare} target="_blank" rel="noreferrer" className="shrink-0 inline-flex items-center gap-2 bg-secondary text-secondary-foreground rounded-full px-5 py-3 font-semibold">
            <MessageCircle className="w-4 h-4" /> Talk to a Consultant
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Doctor benefits ---------------- */
function DoctorBenefits() {
  const items = [
    "Regular Training & Workshops",
    "24*7 Consultant Backup",
    "Practice Enhancement Support",
    "Clinical Upgradation",
    "Online & Offline Ecosystem",
    "Experience the Journey from GP to Consultant Level Practice with Health OK Hospitals — 100% Success Rate of Journey From GP to Consultant Level Practice",
    "Brand Trust & Visibility",
    "Dedicated Support Team",
  ];
  return (
    <section className="py-20 md:py-28 bg-muted/40">
      <div className="container-px mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">For Doctors</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">Why 100 + Doctors Have Joined Health OK</h2>
          <p className="mt-4 text-muted-foreground">Build a stronger practice with mentorship, specialist backup, and trusted brand visibility.</p>
          <a href={WA.doctorNetwork} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 font-semibold shadow-card">
            <Stethoscope className="w-4 h-4" /> Join Our Doctor Network
          </a>
        </div>
        <ul className="grid sm:grid-cols-2 gap-3">
          {items.map((it, i) => (
            <li key={it} className="flex items-start gap-3 rounded-xl bg-card p-4 border border-border shadow-soft">
              <span className="shrink-0 w-7 h-7 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xs font-extrabold">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm font-semibold">{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Impact ---------------- */
function Impact() {
  const stats = [
    { n: "150+", l: "Centres" },
    { n: "20+", l: "Cities & Towns Covered" },
    { n: "7,500+", l: "Patients Impacted Daily" },
    { n: "100+", l: "Verified Doctors" },
  ];
  return (
    <section className="py-16 md:py-20">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Our Growing Impact</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">Building trusted healthcare access across Maharashtra</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(s => (
            <div key={s.l} className="rounded-2xl bg-card border border-border p-6 text-center shadow-soft">
              <div className="text-4xl md:text-5xl font-extrabold text-primary">{s.n}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- How it works ---------------- */
function HowItWorks() {
  const steps = [
    { n: "01", t: "Find a Doctor", d: "Search by town or symptom, consult our support team, or call us directly." },
    { n: "02", t: "Book a Consultation", d: "Online or walk into a partner clinic — your choice, your convenience." },
    { n: "03", t: "Get Genuine Care", d: "Specialist-backed primary medicine with WhatsApp follow-up." },
  ];
  return (
    <section className="py-20 md:py-28 bg-muted/40">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">How It Works</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">Clear, Honest Workflows</h2>
          <p className="mt-3 text-muted-foreground">Designed transparently for both patient recovery and clinical doctor support.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-5 relative">
          {steps.map(s => (
            <div key={s.n} className="rounded-2xl bg-card p-7 border border-border shadow-soft relative">
              <div className="text-6xl font-extrabold text-secondary/70 leading-none">{s.n}</div>
              <h3 className="mt-3 text-xl font-bold">STEP {s.n} · {s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Doctor videos ---------------- */
function DoctorVideos() {
  const vids = [
    { src: doctor1.url, name: "Dr Pushkar Ghate, Chalisgaon", sub: "MBBS · Thane" },
    { src: doctor2.url, name: "Dr kishor kapadnis,Nampur", sub: "B.A.M.S · Malegaon" },
    { src: doctor3.url, name: "Dr aabasaheb Jagtap", sub: "MBBS · Malegaon" },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Doctor Video Reviews</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">Hear It From Our Doctors</h2>
          <p className="mt-3 text-muted-foreground">Real video reviews from doctors across our Maharashtra network. Tap any video to unmute.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {vids.map(v => <VideoCard key={v.src} {...v} />)}
        </div>
      </div>
    </section>
  );
}

function VideoCard({ src, name, sub }: { src: string; name: string; sub: string }) {
  const [muted, setMuted] = useState(true);
  return (
    <div className="group relative rounded-3xl overflow-hidden bg-black aspect-[9/14] shadow-card">
      <video
        src={src}
        muted={muted}
        loop
        autoPlay
        playsInline
        onClick={() => setMuted(m => !m)}
        className="w-full h-full object-cover cursor-pointer"
      />
      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
        <p className="font-bold">{name}</p>
        <p className="text-xs text-white/80">{sub}</p>
      </div>
      <button
        onClick={() => setMuted(m => !m)}
        className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/50 backdrop-blur text-white flex items-center justify-center"
        aria-label={muted ? "Unmute" : "Mute"}
      >
        {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>
    </div>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const items = [
    { q: "डॉ. अमृत साळुंखे यांच्या उपचाराने माझ्या डोळ्यांची समस्या दूर झाली. क्लिनिक सुद्धा स्वच्छ आणि आधुनिक आहे. धन्यवाद!", n: "स्मिता जोशी", c: "ठाणे" },
    { q: "डॉ. माधुरी सूर्यवंशी यांनी माझ्या हृदयाच्या समस्येवर योग्य मार्गदर्शन केले. त्यांचा रुग्णांप्रती असलेला संवेदनशील दृष्टिकोन उत्तम आहे.", n: "अनिल महाजन", c: "मालेगाव" },
    { q: "डॉ. स्वाती सोनवणे यांनी गर्भधारणेदरम्यान खूप चांगली काळजी घेतली. त्यांचे संपूर्ण टीम अतिशय व्यावसायिक आहे.", n: "मीना जाधव", c: "धुळे" },
    { q: "Health OK च्या 24/7 consultant backup ने मध्यरात्री माझ्या आईच्या आपत्कालीन स्थितीत त्वरित मदत केली. आम्ही कायम आभारी राहू.", n: "सुरेश भामरे", c: "जळगाव" },
    { q: "डॉ. मौना सेठ यांच्या मार्गदर्शनाने माझ्या त्वचेच्या समस्येपासून आराम मिळाला. ऑनलाइन सल्ला सुद्धा सोयीचा आहे.", n: "प्रियांका शिंदे", c: "मुंबई" },
  ];
  return (
    <section className="py-20 md:py-28 bg-muted/40">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Testimonials</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">What Our Patients Say</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <figure key={i} className="rounded-2xl bg-card p-6 border border-border shadow-soft flex flex-col">
              <div className="flex gap-0.5 text-secondary">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90 flex-1">"{t.q}"</blockquote>
              <figcaption className="mt-5 pt-4 border-t border-border">
                <p className="font-bold text-sm">{t.n}</p>
                <p className="text-xs text-muted-foreground">{t.c} · Patient</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Featured doctors ---------------- */
function FeaturedDoctors() {
  const docs = getAllDoctors().filter(d => d.image && d.active).slice(0, 9);
  return (
    <section id="doctors" className="py-20 md:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Featured Doctors</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">Meet Some of Our Verified Doctors</h2>
          <p className="mt-3 text-muted-foreground">Real practitioners from the Health OK network across Maharashtra.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {docs.map(d => (
            <div key={d.name} className="rounded-2xl bg-card p-6 border border-border shadow-soft flex items-center gap-4 hover:shadow-card transition">
              <DoctorAvatar name={d.name} image={d.image} size={64} />
              <div className="flex-1 min-w-0">
                <p className="font-bold truncate">{d.name}</p>
                {d.qualification && <p className="text-xs text-primary font-semibold truncate">{d.qualification}</p>}
                <p className="mt-0.5 text-xs text-muted-foreground flex items-center gap-1"><MapPin className="w-3 h-3" /> {d.city}, {d.district}</p>
              </div>
              <a href={waForDoctor(d.name, d.address, d.city)} target="_blank" rel="noreferrer" aria-label={`Book ${d.name}`} className="shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="/doctors" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 font-semibold shadow-card">
            View All Doctors <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}


/* ---------------- Explore CTA ---------------- */
function ExploreCTA() {
  const cards = [
    { icon: MapPin, t: "Explore all Health OK Centres", d: "Find locations, doctors, and appointment booking — all on our unified doctors page.", cta: "View centres", href: "/doctors" },
    { icon: Search, t: "Search the Doctors Network", d: "Browse every registered doctor by name, qualification, clinic or city.", cta: "Find a doctor", href: "/doctors" },
  ] as const;
  return (
    <section id="centres" className="py-16 md:py-20 bg-muted/40">
      <div className="container-px mx-auto max-w-7xl grid md:grid-cols-2 gap-5">
        {cards.map(({ icon: Icon, t, d, cta, href }) => (
          <Link
            key={t}
            to={href}
            className="rounded-3xl bg-card p-8 border border-border shadow-soft flex flex-col md:flex-row md:items-center gap-5 hover:shadow-card transition"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center"><Icon className="w-6 h-6" /></div>
            <div className="flex-1">
              <h3 className="text-xl font-bold">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
            <span className="inline-flex items-center gap-2 text-primary font-semibold">{cta} <ArrowRight className="w-4 h-4" /></span>
          </Link>
        ))}
        {/* Centres map preview */}
        <div className="md:col-span-2 rounded-3xl overflow-hidden border border-border shadow-soft bg-card">
          <div className="aspect-[16/8] w-full">
            {/* REPLACE_WITH_EMBED_URL — Google Maps embed of all Health OK centres */}
            <iframe
              title="Health OK Centres map"
              src="https://www.google.com/maps?q=Maharashtra+India&output=embed&z=7"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Resources ---------------- */
function Resources() {
  const posts = [
    { tag: "Chronic Care", read: "5 min", t: "Managing Diabetes in Rural India: Simple Steps", d: "Living far from major city hospitals doesn't mean you cannot manage glycemic levels. Discover simple eating habits and local clinic checkups." },
    { tag: "Community Health", read: "4 min", t: "How to Find a Trusted Doctor in Your Local Town", d: "Not all clinics have equal standards. Learn how to identify qualified practitioners, look for ethical pricing, and verify credentials near home." },
    { tag: "Patient Rights", read: "6 min", t: "Why Ethical Healthcare Matters for Your Family", d: "Hidden hospital fees and excessive medical tests can ruin rural families. Discover the peace of mind that transparent primary healthcare brings." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Resources</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">Health Tips & Articles</h2>
          <p className="mt-3 text-muted-foreground">Educational wellness guides on chronic disease tracking, ethical local medicine, and family wellness.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {posts.map(p => (
            <article key={p.t} className="rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-card transition flex flex-col">
              <div className="flex items-center gap-2 text-xs">
                <span className="rounded-full bg-primary/10 text-primary font-semibold px-2.5 py-1">{p.tag}</span>
                <span className="text-muted-foreground">★ {p.read} read</span>
              </div>
              <h3 className="mt-4 text-lg font-bold leading-snug">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{p.d}</p>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-primary font-semibold text-sm">Read Full Article <ArrowRight className="w-4 h-4" /></a>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          {/* TODO: replace with official Health OK WhatsApp Community link */}
          <a href={WHATSAPP_COMMUNITY} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-success text-white px-5 py-3 font-semibold shadow-card">
            <MessageCircle className="w-4 h-4" /> Chat for Daily Health Tips on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs: { q: string; a: React.ReactNode }[] = [
    {
      q: "How do I book an appointment?",
      a: (
        <div className="space-y-3">
          <p>We encourage you to find a suitable Health OK Center near you. You can book an appointment before visiting or directly walk into the center. We always encourage direct consultation over online consultation.</p>
          <p>If you still prefer an online consultation, you can:</p>
          <ol className="list-decimal ml-5 space-y-1">
            <li>Request an online consultation</li>
            <li>Proceed with payment</li>
            <li>You will receive consultation details after payment</li>
            <li>Make sure you have a good network connection</li>
          </ol>
          <p>For any appointment-related issues, call: <a href="tel:+917030666321" className="text-primary font-semibold">7030666321</a>.</p>
        </div>
      ),
    },
    { q: "Are the doctors qualified and verified?", a: "Yes. Every doctor in our network holds a valid MBBS, BAMS, or BHMS qualification and is verified by our clinical team before joining." },
    { q: "Do you offer 24×7 consultant backup?", a: "Absolutely — senior consultants are reachable round the clock for emergencies and second opinions." },
    { q: "Is online consultation available?", a: "Yes, you can book tele-consultations on WhatsApp, video, or audio call — same trusted doctors, from home." },
    { q: "What number should I call for any enquiry?", a: "Please call or WhatsApp +91 7030666321 — our care team responds within hours." },
    { q: "Are there any hidden charges?", a: "No. We follow a strict zero-hidden-fee policy. All consultation costs are shared upfront." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 md:py-28 bg-muted/40">
      <div className="container-px mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">Frequently Asked Questions</h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="rounded-2xl bg-card border border-border shadow-soft overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                <span className="font-semibold pr-4">{f.q}</span>
                <ChevronDown className={`w-5 h-5 shrink-0 transition ${open === i ? "rotate-180 text-primary" : "text-muted-foreground"}`} />
              </button>
              {open === i && <div className="px-5 pb-5 text-sm text-muted-foreground -mt-1">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container-px mx-auto max-w-7xl grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Contact · Smart Inquiry Form</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">Book a callback or send us a question</h2>
          <p className="mt-3 text-muted-foreground">Our care team responds within hours.</p>
          <div className="mt-8 space-y-4">
            {[
              { i: Calendar, t: "Appointment Booking", v: "+91 7030 666 321", href: PHONE },
              { i: Phone, t: "Customer Care", v: "+91 7030 666 321", href: PHONE },
              { i: MessageCircle, t: "Online Consultation", v: "+91 7030 666 321", href: WHATSAPP },
              { i: Mail, t: "Email", v: "care@healthokhospitals.com\n\n", href: "mailto:care@healthokhospitals.com" },
              { i: Clock, t: "Office Hours", v: "Mon–Sat, 9:00 AM – 6:00 PM IST" },
            ].map(({ i: Icon, t, v, href }) => {
              const Inner = (
                <>
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center"><Icon className="w-5 h-5" /></div>
                  <div>
                    <p className="text-xs text-muted-foreground">{t}</p>
                    <p className="font-semibold">{v}</p>
                  </div>
                </>
              );
              return href ? (
                <a key={t} href={href} className="flex items-center gap-4 rounded-2xl bg-card p-4 border border-border shadow-soft hover:shadow-card transition">{Inner}</a>
              ) : (
                <div key={t} className="flex items-center gap-4 rounded-2xl bg-card p-4 border border-border shadow-soft">{Inner}</div>
              );
            })}
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 rounded-full bg-success text-white px-5 py-3 font-semibold shadow-card">
              <MessageCircle className="w-4 h-4" /> Chat Instantly on WhatsApp
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", city: "", role: "patient", question: "" });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `New inquiry from Health OK website:\n\nName: ${form.name}\nPhone: ${form.phone}\nCity: ${form.city}\nRole: ${form.role}\n\n${form.question}`
    );
    window.open(`https://wa.me/917030666321?text=${text}`, "_blank");
    setSent(true);
  };
  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-card p-7 border border-border shadow-card">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Full Name *">
          <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring" />
        </Field>
        <Field label="Phone Number *">
          <input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
            className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring" />
        </Field>
        <Field label="City / गाव *">
          <input required value={form.city} onChange={e => setForm({ ...form, city: e.target.value })}
            className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring" />
        </Field>
        <Field label="I am a *">
          <select value={form.role} onChange={e => setForm({ ...form, role: e.target.value })}
            className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring">
            <option value="patient">Patient (Seeking Consultation)</option>
            <option value="doctor">Doctor (Want to Join)</option>
          </select>
        </Field>
      </div>
      <Field label="Your Symptom or Question" className="mt-4">
        <textarea rows={4} value={form.question} onChange={e => setForm({ ...form, question: e.target.value })}
          className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring resize-none" />
      </Field>
      <button type="submit" className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 font-semibold shadow-card hover:opacity-90 transition">
        <Send className="w-4 h-4" /> Send Message / कॉल-बॅक बुक करा
      </button>
      {sent && <p className="mt-3 text-sm text-success text-center">Opening WhatsApp — please send the message to confirm.</p>}
    </form>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-xs font-semibold text-foreground/80 mb-1.5">{label}</span>
      {children}
    </label>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.03_240)] text-white pt-16 pb-8">
      <div className="container-px mx-auto max-w-7xl grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Health OK" className="h-10 w-auto rounded-md" />
            <div>
              <p className="font-display font-extrabold text-lg leading-none">Health OK Hospitals</p>
              <p className="text-xs text-white/60 mt-1">Standard · Ethical · Efficient</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/70 max-w-md">
            Maharashtra's fastest-growing healthcare network — making trusted, transparent care accessible to every community.
          </p>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-success px-5 py-2.5 text-sm font-semibold">
            <MessageCircle className="w-4 h-4" /> WhatsApp Care Channel
          </a>
        </div>
        <div>
          <p className="text-sm font-bold tracking-widest text-secondary">COMPANY</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li><a href="#about" className="hover:text-secondary">About Us</a></li>
            <li><a href="#doctors" className="hover:text-secondary">Our Doctors</a></li>
            <li><a href={WHATSAPP} className="hover:text-secondary">Join as Doctor</a></li>
            <li><a href="#contact" className="hover:text-secondary">Contact</a></li>
            <li><a href="/admin" className="hover:text-secondary">Admin Dashboard</a></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-bold tracking-widest text-secondary">CONTACT</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>Appointment <br /><a href={PHONE} className="text-white font-semibold">+91 7030 666 321</a></li>
            <li>Customer Care <br /><a href={PHONE} className="text-white font-semibold">+91 7030 666 321</a></li>
            <li><a href="mailto:care@healthokhospitals.com" className="hover:text-secondary whitespace-pre-wrap">care@healthokhospitals.com\n\n</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-white/10 container-px mx-auto max-w-7xl flex flex-col md:flex-row gap-3 justify-between text-xs text-white/50">
        <p>© 2026 Health OK Hospitals. All rights reserved. Registered medical partner network across Maharashtra.</p>
        <div className="flex gap-5"><a href="#" className="hover:text-secondary">Privacy Policy</a><a href="#" className="hover:text-secondary">Terms</a></div>
      </div>
    </footer>
  );
}

/* ---------------- Floating WhatsApp ---------------- */
function FloatingWhatsApp() {
  return (
    <a href={WHATSAPP} target="_blank" rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-success text-white shadow-card flex items-center justify-center hover:scale-105 transition"
      aria-label="WhatsApp">
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
