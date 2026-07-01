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
  Stethoscope,
} from "lucide-react";
import { getAllDoctors, type Doctor } from "@/data/centers";
import logo from "@/assets/logo.png.asset.json";
import { DoctorAvatar } from "@/components/DoctorAvatar";

const WHATSAPP = "https://wa.me/917030666321";
const COMMON = "+917030666321";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Our Doctor Network — Health OK Hospitals" },
      {
        name: "description",
        content:
          "Browse 100+ verified BAMS, BHMS & MBBS doctors across Nashik, Jalgaon, Dhule and nearby towns. Search by name, city, qualification or clinic.",
      },
      { property: "og:title", content: "Our Doctor Network — Health OK Hospitals" },
      {
        property: "og:description",
        content: "Find verified doctors near you across Maharashtra towns.",
      },
    ],
  }),
  component: DoctorsPage,
});

function DoctorsPage() {
  // Only expose active doctors on the public site
  const allDoctors = useMemo(() => getAllDoctors().filter((d) => d.active), []);
  const [searchTerm, setSearchTerm] = useState("");
  const [cityFilter, setCityFilter] = useState<string>("all");

  // Grouped city list: known regional grouping first, then any extras
  const cities = useMemo(() => {
    const preferredOrder = [
      "Nashik", "Malegaon", "Nampur",
      "Jalgaon", "Chalisgaon", "Amalner", "Parola",
      "Dhule", "Shirpur", "Dondaicha", "Sakri",
      "Thane",
    ];
    const present = new Set(allDoctors.map((d) => d.city));
    // Ensure Thane always available in the dropdown even if no doctors yet
    present.add("Thane");
    const ordered = preferredOrder.filter((c) => present.has(c));
    const extras = Array.from(present).filter((c) => !preferredOrder.includes(c)).sort();
    return ["all", ...ordered, ...extras];
  }, [allDoctors]);

  const filtered = useMemo(() => {
    const q = searchTerm.toLowerCase().trim();
    return allDoctors.filter((doc) => {
      const matchesSearch =
        !q ||
        doc.name.toLowerCase().includes(q) ||
        doc.qualification.toLowerCase().includes(q) ||
        doc.address.toLowerCase().includes(q) ||
        doc.city.toLowerCase().includes(q);
      const matchesCity = cityFilter === "all" || doc.city === cityFilter;
      return matchesSearch && matchesCity;
    });
  }, [allDoctors, searchTerm, cityFilter]);

  const handleContact = (doc: Doctor) => {
    const msg = encodeURIComponent(
      `Hi, I'd like to book an appointment with ${doc.name} at ${doc.address || doc.city}. Please assist.`,
    );
    window.open(`https://wa.me/91${COMMON.replace(/[^0-9]/g, "").slice(-10)}?text=${msg}`, "_blank");
  };

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
            <Link
              to="/doctors"
              className="text-sm font-medium text-primary"
              activeProps={{ className: "text-sm font-medium text-primary" }}
            >
              Doctors
            </Link>
          </nav>
          <a
            href={WHATSAPP}
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
                Our <span className="text-primary">Doctor Network</span>
              </h1>
              <p className="mt-3 text-muted-foreground max-w-2xl">
                {allDoctors.length}+ verified doctors across {cities.length - 1} towns in
                Maharashtra. Filter by city or search by name & clinic.
              </p>
            </div>
            <div className="flex gap-3">
              <Stat n={allDoctors.length} l="Doctors" />
              <Stat n={cities.length - 1} l="Cities" />
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="container-px mx-auto max-w-7xl px-4 py-8">
        <div className="grid md:grid-cols-2 gap-3 mb-6">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by name, clinic, qualification..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <select
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
            className="px-3 py-2.5 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="all">All Cities</option>
            <optgroup label="Nashik District">
              {cities.filter((c) => ["Nashik", "Malegaon", "Nampur"].includes(c)).map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </optgroup>
            <optgroup label="Jalgaon District">
              {cities.filter((c) => ["Jalgaon", "Chalisgaon", "Amalner", "Parola"].includes(c)).map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </optgroup>
            <optgroup label="Dhule District">
              {cities.filter((c) => ["Dhule", "Shirpur", "Dondaicha", "Sakri"].includes(c)).map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </optgroup>
            <optgroup label="Thane District">
              {cities.filter((c) => ["Thane"].includes(c)).map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </optgroup>
            {cities.filter((c) => c !== "all" && !["Nashik","Malegaon","Nampur","Jalgaon","Chalisgaon","Amalner","Parola","Dhule","Shirpur","Dondaicha","Sakri","Thane"].includes(c)).length > 0 && (
              <optgroup label="Other">
                {cities.filter((c) => c !== "all" && !["Nashik","Malegaon","Nampur","Jalgaon","Chalisgaon","Amalner","Parola","Dhule","Shirpur","Dondaicha","Sakri","Thane"].includes(c)).map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </optgroup>
            )}
          </select>
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          Showing <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "doctor" : "doctors"}
        </p>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            No doctors match your filters.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((doc, idx) => (
              <article
                key={`${doc.name}-${idx}`}
                className="rounded-2xl border border-border bg-card p-5 flex flex-col shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <DoctorAvatar name={doc.name} image={doc.image} size={64} />
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <CheckCircle className="w-3 h-3" /> Verified
                  </span>
                </div>
                <h3 className="font-bold text-base leading-tight">{doc.name}</h3>
                {doc.qualification && (
                  <p className="mt-1 text-xs text-primary font-medium inline-flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5" /> {doc.qualification}
                  </p>
                )}
                {doc.registration && (
                  <p className="mt-0.5 text-xs text-muted-foreground">Reg: {doc.registration}</p>
                )}
                <p className="mt-3 text-sm text-foreground/80 flex gap-1.5 leading-snug">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-muted-foreground" />
                  <span>{doc.address}</span>
                </p>
                <div className="mt-2 text-xs text-muted-foreground">
                  {doc.city} • {doc.district}
                </div>
                <div className="mt-4 pt-4 border-t border-border flex gap-2">
                  <button
                    onClick={() => handleContact(doc)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary text-primary-foreground px-3 py-2 text-sm font-semibold hover:opacity-90"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </button>
                  <a
                    href={`tel:${COMMON}`}
                    className="inline-flex items-center justify-center rounded-lg border border-border px-3 py-2 text-sm font-semibold hover:bg-muted"
                    aria-label="Call"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <footer className="border-t border-border mt-8">
        <div className="container-px mx-auto max-w-7xl px-4 py-6 text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Health OK Hospitals · +91 7030666321
        </div>
      </footer>
    </div>
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
