import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Search,
  Phone,
  MapPin,
  GraduationCap,
  CheckCircle,
  MessageCircle,
  ArrowLeft,
  Users,
} from "lucide-react";
import { getAllDoctors, type Doctor } from "@/data/centers";
import logo from "@/assets/logo.png.asset.json";
import { DoctorAvatar } from "@/components/DoctorAvatar";

const CARE = "7030666321";
const WHATSAPP = `https://wa.me/91${CARE}`;
const WA_CALLBACK = `${WHATSAPP}?text=${encodeURIComponent(
  "Hello Health OK Hospitals! I would like to book a callback. Please contact me at your earliest convenience.",
)}`;

// DUAL_NOTIFY: also send to individual doctor number — implement when backend is ready.
function waForDoctor(city: string) {
  const body = `Health OK Appointment Request\nName: [patient will fill]\nPreferred Centre: ${city}\nMessage: I'd like to book an appointment. Please share available slots.`;
  return `${WHATSAPP}?text=${encodeURIComponent(body)}`;
}

// District → sub-cities hierarchy
const DISTRICT_TREE: Record<string, string[]> = {
  Dhule: ["Sakri", "Dondaicha", "Shirpur", "Shahada"],
  Nashik: ["Nashik", "Malegaon", "Nampur"],
  Jalgaon: ["Jalgaon", "Parola", "Chalisgaon", "Amalner", "Pachora", "Bhadgaon"],
  Thane: ["Thane"],
};
const DISTRICTS = Object.keys(DISTRICT_TREE);

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Health OK Centres & Doctors — Verified Network Across Maharashtra" },
      {
        name: "description",
        content:
          "Find your nearest Health OK Centre and doctor. 150+ centres, 100+ verified BAMS, BHMS & MBBS doctors across Dhule, Jalgaon, Nashik & Thane.",
      },
    ],
  }),
  component: DoctorsPage,
});

function DoctorsPage() {
  const allDoctors = useMemo(() => getAllDoctors().filter((d) => d.active), []);

  const [searchTerm, setSearchTerm] = useState("");
  const [districtFilter, setDistrictFilter] = useState<string>("all");
  const [cityFilter, setCityFilter] = useState<string>("all");

  const filtered = useMemo(() => {
    const q = searchTerm.toLowerCase().trim();
    return allDoctors.filter((doc) => {
      const matchesSearch =
        !q ||
        doc.name.toLowerCase().includes(q) ||
        doc.qualification.toLowerCase().includes(q) ||
        doc.address.toLowerCase().includes(q) ||
        (doc.clinic ?? "").toLowerCase().includes(q) ||
        doc.city.toLowerCase().includes(q);
      const matchesDistrict = districtFilter === "all" || doc.district === districtFilter;
      const matchesCity = cityFilter === "all" || doc.city === cityFilter;
      return matchesSearch && matchesDistrict && matchesCity;
    });
  }, [allDoctors, searchTerm, districtFilter, cityFilter]);

  const uniqueCities = new Set(allDoctors.map((d) => d.city));
  const totalCities = uniqueCities.size;

  const subCities = districtFilter === "all" ? [] : DISTRICT_TREE[districtFilter] ?? [];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border">
        <div className="container-px mx-auto max-w-7xl flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo.url} alt="Health OK Hospitals" className="h-10 w-auto rounded-md" />
            <span className="hidden sm:block font-display font-bold text-base leading-tight">
              Health OK{" "}
              <span className="block text-xs font-medium text-muted-foreground">Hospitals</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-primary">
              Home
            </Link>
            <Link to="/doctors" className="text-sm font-medium text-primary">
              Centres & Doctors
            </Link>
          </nav>
          <a
            href={WA_CALLBACK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:opacity-90"
          >
            <MessageCircle className="w-4 h-4" /> Book Callback
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container-px mx-auto max-w-7xl px-4 py-12 md:py-16">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                Verified Network
              </p>
              <h1 className="mt-2 text-3xl md:text-5xl font-extrabold">
                Our <span className="text-primary">Centres & Doctors</span>
              </h1>
              <p className="mt-3 text-muted-foreground max-w-2xl">
                {allDoctors.length}+ verified doctors across {totalCities} towns in Maharashtra.
                Filter by district & city, or search by name & clinic.
              </p>
            </div>
            <div className="flex gap-3">
              <Stat n={150} l="Centres" />
              <Stat n={allDoctors.length} l="Doctors" />
              <Stat n={totalCities} l="Cities" />
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="container-px mx-auto max-w-7xl px-4 py-8">
        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-xl">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by name, clinic, qualification..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* District row (horizontally scrollable) */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            District
          </p>
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
            <FilterChip
              active={districtFilter === "all"}
              onClick={() => {
                setDistrictFilter("all");
                setCityFilter("all");
              }}
              label="All Cities"
              size="lg"
            />
            {DISTRICTS.map((d) => (
              <FilterChip
                key={d}
                active={districtFilter === d}
                onClick={() => {
                  setDistrictFilter(d);
                  setCityFilter("all");
                }}
                label={d}
                size="lg"
              />
            ))}
          </div>
        </div>

        {/* Sub-cities appear when a district is selected */}
        {subCities.length > 0 && (
          <div className="mb-6">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              {districtFilter} — Sub-cities
            </p>
            <div className="flex flex-wrap gap-2">
              <FilterChip
                active={cityFilter === "all"}
                onClick={() => setCityFilter("all")}
                label={`All of ${districtFilter}`}
              />
              {subCities.map((sc) => (
                <FilterChip
                  key={sc}
                  active={cityFilter === sc}
                  onClick={() => setCityFilter(sc)}
                  label={sc}
                />
              ))}
            </div>
          </div>
        )}

        <p className="text-sm text-muted-foreground mb-4">
          Showing <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "doctor" : "doctors"}
        </p>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            <Users className="w-10 h-10 mx-auto mb-3 opacity-50" />
            No doctors match your filters yet. Details being updated soon.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((doc, idx) => (
              <DoctorCard key={`${doc.name}-${idx}`} doc={doc} />
            ))}
          </div>
        )}
      </section>

      <footer className="border-t border-border mt-8">
        <div className="container-px mx-auto max-w-7xl px-4 py-6 text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Health OK Hospitals · +91 {CARE}
        </div>
      </footer>
    </div>
  );
}

function DoctorCard({ doc }: { doc: Doctor }) {
  const incomplete = !doc.address || doc.address.toLowerCase() === doc.city.toLowerCase();
  return (
    <article className="rounded-2xl border border-border bg-card p-5 flex flex-col shadow-sm hover:shadow-md transition">
      <div className="flex items-start justify-between gap-2 mb-3">
        <DoctorAvatar name={doc.name} image={doc.image} size={64} />
        <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
          <CheckCircle className="w-3 h-3" /> Verified
        </span>
      </div>
      <h3 className="font-bold text-base leading-tight">{doc.name}</h3>
      {doc.tag && (
        <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-secondary-foreground bg-secondary inline-block px-2 py-0.5 rounded-full">
          {doc.tag}
        </p>
      )}
      {doc.qualification && (
        <p className="mt-1 text-xs text-primary font-medium inline-flex items-center gap-1">
          <GraduationCap className="w-3.5 h-3.5" /> {doc.qualification}
        </p>
      )}
      {doc.specialization && (
        <p className="mt-0.5 text-xs text-foreground/70">{doc.specialization}</p>
      )}
      {doc.registration && (
        <p className="mt-0.5 text-xs text-muted-foreground">Reg: {doc.registration}</p>
      )}
      {doc.clinic && <p className="mt-2 text-sm font-semibold text-foreground">{doc.clinic}</p>}
      {incomplete ? (
        <p className="mt-2 text-xs italic text-muted-foreground">Details being updated</p>
      ) : (
        <p className="mt-1 text-sm text-foreground/80 flex gap-1.5 leading-snug">
          <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-muted-foreground" />
          <span>{doc.address}</span>
        </p>
      )}
      <div className="mt-2 text-xs text-muted-foreground">
        {doc.city} • {doc.district}
      </div>
      <div className="mt-4 pt-4 border-t border-border flex gap-2">
        <a
          href={waForDoctor(doc.city)}
          target="_blank"
          rel="noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary text-primary-foreground px-3 py-2 text-sm font-semibold hover:opacity-90"
        >
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
        <a
          href={`tel:+91${CARE}`}
          className="inline-flex items-center justify-center rounded-lg border border-border px-3 py-2 text-sm font-semibold hover:bg-muted"
          aria-label="Call"
        >
          <Phone className="w-4 h-4" />
        </a>
      </div>
    </article>
  );
}

function FilterChip({
  active,
  onClick,
  label,
  size = "md",
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  size?: "md" | "lg";
}) {
  const pad = size === "lg" ? "px-5 py-2 text-sm" : "px-3.5 py-1.5 text-xs";
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 rounded-full font-semibold border transition ${pad} ${
        active
          ? "bg-primary text-primary-foreground border-primary shadow-sm"
          : "bg-card text-foreground/80 border-border hover:border-primary hover:text-primary"
      }`}
    >
      {label}
    </button>
  );
}

function Stat({ n, l }: { n: number; l: string }) {
  return (
    <div className="rounded-xl border border-border bg-card px-4 py-2 text-center">
      <div className="text-xl font-extrabold text-primary leading-none">{n}+</div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{l}</div>
    </div>
  );
}
