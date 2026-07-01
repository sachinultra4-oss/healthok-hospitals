import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { MapPin, MessageCircle, ArrowLeft, Users, Search } from "lucide-react";
import { getAllDoctors } from "@/data/centers";
import logo from "@/assets/logo.png.asset.json";

const CARE = "7030666321";
const WHATSAPP = `https://wa.me/91${CARE}`;

interface Centre {
  city: string;
  district: string;
  doctors: number;
  // TODO: replace with real lat/lng for this center
  lat: number;
  lng: number;
}

export const Route = createFileRoute("/centres")({
  head: () => ({
    meta: [
      { title: "Health OK Centres — Locations Across Maharashtra" },
      {
        name: "description",
        content:
          "Find your nearest Health OK Centre. 150+ centres across Nashik, Jalgaon, Dhule, Thane and nearby districts.",
      },
    ],
  }),
  component: CentresPage,
});

function CentresPage() {
  const centres = useMemo<Centre[]>(() => {
    // TODO: replace with real lat/lng for each centre
    const CITY_COORDS: Record<string, [number, number]> = {
      Nashik: [19.9975, 73.7898],
      Malegaon: [20.5537, 74.5288],
      Nampur: [20.4167, 74.35],
      Jalgaon: [21.0077, 75.5626],
      Chalisgaon: [20.4586, 75.0182],
      Amalner: [21.0333, 75.05],
      Parola: [20.8833, 75.1167],
      Dhule: [20.9042, 74.7749],
      Shirpur: [21.35, 74.8833],
      Dondaicha: [21.3242, 74.5731],
      Sakri: [20.9833, 74.3167],
      Thane: [19.2183, 72.9781],
    };
    const grouped = new Map<string, Centre>();
    for (const d of getAllDoctors().filter((d) => d.active)) {
      const coord = CITY_COORDS[d.city] ?? [19.7515, 75.7139]; // Maharashtra centroid fallback
      const existing = grouped.get(d.city);
      if (existing) existing.doctors += 1;
      else grouped.set(d.city, { city: d.city, district: d.district, doctors: 1, lat: coord[0], lng: coord[1] });
    }
    return Array.from(grouped.values()).sort((a, b) => a.city.localeCompare(b.city));
  }, []);

  const [search, setSearch] = useState("");
  const filtered = centres.filter(
    (c) =>
      !search ||
      c.city.toLowerCase().includes(search.toLowerCase()) ||
      c.district.toLowerCase().includes(search.toLowerCase()),
  );

  const mapQuery = encodeURIComponent(
    filtered.map((c) => `${c.city}, ${c.district}, Maharashtra`).slice(0, 8).join(" | "),
  );
  const mapSrc = `https://www.google.com/maps?q=Maharashtra+India&output=embed&z=7`;

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border">
        <div className="container-px mx-auto max-w-7xl flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo.url} alt="Health OK Hospitals" className="h-10 w-auto rounded-md" />
            <span className="hidden sm:block font-display font-bold text-base leading-tight">
              Health OK <span className="block text-xs font-medium text-muted-foreground">Hospitals</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium">Home</Link>
            <Link to="/centres" className="text-sm font-medium text-primary">Centres</Link>
            <Link to="/doctors" className="text-sm font-medium">Doctors</Link>
          </nav>
          <a href={WHATSAPP} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold">
            <MessageCircle className="w-4 h-4" /> Book
          </a>
        </div>
      </header>

      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container-px mx-auto max-w-7xl px-4 py-12">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Our Network</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold">
            Health OK <span className="text-primary">Centres</span>
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Find your nearest Health OK Centre across Maharashtra. {centres.length} cities served.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl px-4 py-8">
        {/* Map */}
        <div className="rounded-3xl overflow-hidden border border-border shadow-soft mb-8 bg-card">
          <div className="aspect-[16/9] w-full">
            <iframe
              title="Health OK Centres map"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>
          <div className="p-4 text-xs text-muted-foreground text-center">
            Overview map — Maharashtra. Tap a centre below to open it in Google Maps.
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-6 max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by city or district..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* List */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((c) => {
            const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Health OK ${c.city} ${c.district} Maharashtra`)}`;
            const wa = `${WHATSAPP}?text=${encodeURIComponent(`Hi, I'd like to visit the Health OK Centre in ${c.city}. Please share details.`)}`;
            return (
              <article key={c.city} className="rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition flex flex-col">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-lg">{c.city}</h3>
                    <p className="text-xs text-muted-foreground">{c.district} District</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    <Users className="w-3 h-3" /> {c.doctors} doctors
                  </span>
                </div>
                <p className="mt-3 text-xs text-muted-foreground flex items-center gap-1.5">
                  {/* TODO: replace with real lat/lng for this center */}
                  <MapPin className="w-3.5 h-3.5" /> {c.lat.toFixed(3)}, {c.lng.toFixed(3)}
                </p>
                <div className="mt-4 pt-4 border-t border-border flex gap-2">
                  <a href={wa} target="_blank" rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary text-primary-foreground px-3 py-2 text-sm font-semibold">
                    <MessageCircle className="w-4 h-4" /> Book
                  </a>
                  <a href={mapUrl} target="_blank" rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm font-semibold hover:bg-muted">
                    <MapPin className="w-4 h-4" /> Map
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">No centres match your search.</div>
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
