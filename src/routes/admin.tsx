import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Users, Plus, Trash2, Edit2, Save, X, MapPin, Phone,
  GraduationCap, Search, Download, Shield, LogOut, LogIn,
} from "lucide-react";
import { toast, Toaster } from "sonner";
import { getAllDoctors, type Doctor } from "@/data/centers";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard — Health OK Hospitals" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

interface Center {
  city: string;
  doctorsCount: number;
  whatsappNumber: string;
  fullAddress: string;
}

const ADMIN_PASS = "healthok2026";
const STORAGE_KEY = "healthok_admin_auth";
const DOCTORS_KEY = "healthok_doctors_override";
const CENTERS_KEY = "healthok_centers_override";

function deriveCenters(doctors: Doctor[]): Center[] {
  const map = new Map<string, Center>();
  for (const d of doctors) {
    const c = map.get(d.city);
    if (c) c.doctorsCount += 1;
    else
      map.set(d.city, {
        city: d.city,
        doctorsCount: 1,
        whatsappNumber: d.mobile,
        fullAddress: `${d.city}, ${d.district}`,
      });
  }
  return Array.from(map.values()).sort((a, b) => a.city.localeCompare(b.city));
}

function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY) === "1") {
      setAuthed(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASS) {
      localStorage.setItem(STORAGE_KEY, "1");
      setAuthed(true);
      toast.success("Welcome back, admin");
    } else {
      toast.error("Invalid password");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setAuthed(false);
    toast.success("Logged out");
  };

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <Toaster position="top-center" richColors />
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm bg-card border border-border rounded-2xl p-8 shadow-lg"
        >
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-6 h-6 text-primary" />
            <h1 className="text-2xl font-bold">Admin Login</h1>
          </div>
          <label className="text-sm font-medium text-muted-foreground">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            className="mt-1 w-full bg-background border border-border rounded-lg px-4 py-3 focus:border-primary outline-none"
            placeholder="Enter admin password"
          />
          <button
            type="submit"
            className="mt-4 w-full bg-primary text-primary-foreground rounded-lg py-3 font-semibold hover:opacity-90 transition flex items-center justify-center gap-2"
          >
            <LogIn className="w-4 h-4" /> Sign in
          </button>
          <p className="mt-4 text-xs text-muted-foreground text-center">
            Authorized personnel only.
          </p>
        </form>
      </div>
    );
  }

  return <Dashboard onLogout={handleLogout} />;
}

function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState<"doctors" | "centers">("doctors");
  const [searchTerm, setSearchTerm] = useState("");
  const [doctorList, setDoctorList] = useState<Doctor[]>([]);
  const [centerList, setCenterList] = useState<Center[]>([]);
  const [editingDoctor, setEditingDoctor] = useState<Doctor | null>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingCenter, setEditingCenter] = useState<Center | null>(null);
  const [editingCenterIdx, setEditingCenterIdx] = useState<number | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const [newDoctor, setNewDoctor] = useState<Partial<Doctor>>({
    name: "", qualification: "", address: "", mobile: "+917030666321",
    city: "", district: "", active: true, image: "",
  });
  const [newCenter, setNewCenter] = useState<Partial<Center>>({
    city: "", fullAddress: "", whatsappNumber: "+917030666321",
  });

  useEffect(() => {
    const savedDocs = localStorage.getItem(DOCTORS_KEY);
    const savedCenters = localStorage.getItem(CENTERS_KEY);
    const baseDoctors = savedDocs ? (JSON.parse(savedDocs) as Doctor[]) : getAllDoctors();
    setDoctorList(baseDoctors);
    setCenterList(savedCenters ? (JSON.parse(savedCenters) as Center[]) : deriveCenters(baseDoctors));
  }, []);

  const persistDoctors = (list: Doctor[]) => {
    setDoctorList(list);
    localStorage.setItem(DOCTORS_KEY, JSON.stringify(list));
  };
  const persistCenters = (list: Center[]) => {
    setCenterList(list);
    localStorage.setItem(CENTERS_KEY, JSON.stringify(list));
  };

  const filteredDoctors = useMemo(() => {
    const q = searchTerm.toLowerCase();
    return doctorList
      .map((d, i) => ({ d, i }))
      .filter(({ d }) =>
        d.name.toLowerCase().includes(q) ||
        d.city.toLowerCase().includes(q) ||
        (d.qualification || "").toLowerCase().includes(q),
      );
  }, [doctorList, searchTerm]);

  const filteredCenters = useMemo(() => {
    const q = searchTerm.toLowerCase();
    return centerList
      .map((c, i) => ({ c, i }))
      .filter(({ c }) => c.city.toLowerCase().includes(q) || c.fullAddress.toLowerCase().includes(q));
  }, [centerList, searchTerm]);

  // Doctor actions
  const handleAddDoctor = () => {
    if (!newDoctor.name || !newDoctor.city) {
      toast.error("Name and city are required");
      return;
    }
    const doctor: Doctor = {
      name: newDoctor.name!,
      qualification: newDoctor.qualification || "",
      address: newDoctor.address || "",
      mobile: newDoctor.mobile || "+917030666321",
      active: true,
      city: newDoctor.city!,
      district: newDoctor.district || "",
      image: newDoctor.image || "",
    };
    persistDoctors([...doctorList, doctor]);
    toast.success(`Added ${newDoctor.name}`);
    setIsAdding(false);
    setNewDoctor({ name: "", qualification: "", address: "", mobile: "+917030666321", city: "", district: "", active: true, image: "" });
  };

  const handleSaveDoctor = () => {
    if (editingDoctor == null || editingIndex == null) return;
    const updated = [...doctorList];
    updated[editingIndex] = editingDoctor;
    persistDoctors(updated);
    toast.success(`Updated ${editingDoctor.name}`);
    setEditingDoctor(null);
    setEditingIndex(null);
  };

  const handleDeleteDoctor = (idx: number) => {
    const d = doctorList[idx];
    if (!window.confirm(`Delete ${d.name}?`)) return;
    persistDoctors(doctorList.filter((_, i) => i !== idx));
    toast.success(`Deleted ${d.name}`);
  };

  // Center actions
  const handleAddCenter = () => {
    if (!newCenter.city) {
      toast.error("City name is required");
      return;
    }
    const center: Center = {
      city: newCenter.city!,
      doctorsCount: 0,
      whatsappNumber: newCenter.whatsappNumber || "+917030666321",
      fullAddress: newCenter.fullAddress || "",
    };
    persistCenters([...centerList, center]);
    toast.success(`Added ${newCenter.city} center`);
    setIsAdding(false);
    setNewCenter({ city: "", fullAddress: "", whatsappNumber: "+917030666321" });
  };

  const handleSaveCenter = () => {
    if (editingCenter == null || editingCenterIdx == null) return;
    const updated = [...centerList];
    updated[editingCenterIdx] = editingCenter;
    persistCenters(updated);
    toast.success(`Updated ${editingCenter.city}`);
    setEditingCenter(null);
    setEditingCenterIdx(null);
  };

  const handleDeleteCenter = (idx: number) => {
    const c = centerList[idx];
    if (!window.confirm(`Delete ${c.city} center?`)) return;
    persistCenters(centerList.filter((_, i) => i !== idx));
    toast.success(`Deleted ${c.city}`);
  };

  const handleExport = () => {
    const data = { doctors: doctorList, centers: centerList, exportedAt: new Date().toISOString() };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `health-ok-data-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Exported data");
  };

  const handleReset = () => {
    if (!window.confirm("Reset all local changes back to original data?")) return;
    localStorage.removeItem(DOCTORS_KEY);
    localStorage.removeItem(CENTERS_KEY);
    const fresh = getAllDoctors();
    setDoctorList(fresh);
    setCenterList(deriveCenters(fresh));
    toast.success("Reset to original data");
  };

  return (
    <div className="min-h-screen bg-background pt-10 pb-12">
      <Toaster position="top-center" richColors />
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center gap-3 mb-8">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          </div>
          <div className="flex gap-2 flex-wrap">
            <button onClick={handleExport} className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-lg hover:bg-accent transition text-sm">
              <Download className="w-4 h-4" /> Export
            </button>
            <button onClick={handleReset} className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-lg hover:bg-accent transition text-sm">
              Reset
            </button>
            <button onClick={onLogout} className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-lg hover:bg-accent transition text-sm">
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 bg-card rounded-xl p-1 border border-border">
          <button
            onClick={() => { setActiveTab("doctors"); setSearchTerm(""); }}
            className={`flex-1 py-2 rounded-lg transition text-sm font-medium ${activeTab === "doctors" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            <Users className="w-4 h-4 inline mr-2" /> Doctors ({doctorList.length})
          </button>
          <button
            onClick={() => { setActiveTab("centers"); setSearchTerm(""); }}
            className={`flex-1 py-2 rounded-lg transition text-sm font-medium ${activeTab === "centers" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            <MapPin className="w-4 h-4 inline mr-2" /> Centers ({centerList.length})
          </button>
        </div>

        {/* Search + Add */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="flex-1 min-w-[200px] relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={`Search ${activeTab}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-card border border-border rounded-lg py-2.5 pl-10 pr-4 focus:border-primary outline-none text-sm"
            />
          </div>
          <button onClick={() => setIsAdding(true)} className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg hover:opacity-90 transition flex items-center gap-2 text-sm font-medium">
            <Plus className="w-4 h-4" /> Add New
          </button>
        </div>

        {/* Doctors List */}
        {activeTab === "doctors" && (
          <div className="space-y-3">
            {filteredDoctors.map(({ d: doctor, i: idx }) => (
              <div key={idx} className="bg-card rounded-xl p-4 border border-border hover:border-primary/40 transition">
                {editingIndex === idx && editingDoctor ? (
                  <div className="space-y-3">
                    <div className="grid sm:grid-cols-2 gap-2">
                      {(["name","qualification","address","mobile","city","district","image"] as const).map((field) => (
                        <input
                          key={field}
                          type="text"
                          value={(editingDoctor as any)[field] || ""}
                          onChange={(e) => setEditingDoctor({ ...editingDoctor, [field]: e.target.value })}
                          className="bg-background border border-border rounded-lg px-3 py-2 focus:border-primary outline-none text-sm"
                          placeholder={field}
                        />
                      ))}
                      <label className="flex items-center gap-2 px-3 py-2 text-sm">
                        <input type="checkbox" checked={editingDoctor.active} onChange={(e) => setEditingDoctor({ ...editingDoctor, active: e.target.checked })} />
                        Active
                      </label>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={handleSaveDoctor} className="bg-primary text-primary-foreground px-4 py-2 rounded-lg flex items-center gap-2 text-sm">
                        <Save className="w-4 h-4" /> Save
                      </button>
                      <button onClick={() => { setEditingDoctor(null); setEditingIndex(null); }} className="border border-border px-4 py-2 rounded-lg text-sm">
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      {doctor.image ? (
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="w-12 h-12 rounded-full object-cover border border-border shrink-0"
                          onError={(e) => (e.currentTarget.style.display = "none")}
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center font-semibold shrink-0">
                          {doctor.name.replace(/^Dr\.?\s*/, "").charAt(0)}
                        </div>
                      )}
                      <div className="min-w-0">
                        <h3 className="text-base font-semibold truncate">{doctor.name}</h3>
                        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground mt-1">
                          <span className="flex items-center gap-1"><GraduationCap className="w-3 h-3" /> {doctor.qualification || "N/A"}</span>
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {doctor.city}</span>
                          <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {doctor.mobile}</span>
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${doctor.active ? "bg-green-500/15 text-green-600 dark:text-green-400" : "bg-red-500/15 text-red-600 dark:text-red-400"}`}>
                            {doctor.active ? "Active" : "Inactive"}
                          </span>
                        </div>
                        {doctor.address && <p className="text-xs text-muted-foreground mt-1 truncate">{doctor.address}</p>}
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <button onClick={() => { setEditingDoctor({ ...doctor }); setEditingIndex(idx); }} className="text-primary hover:bg-primary/10 p-2 rounded-lg transition">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDeleteDoctor(idx)} className="text-red-500 hover:bg-red-500/10 p-2 rounded-lg transition">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
            {filteredDoctors.length === 0 && (
              <p className="text-muted-foreground text-center py-12">No doctors found.</p>
            )}
          </div>
        )}

        {/* Centers List */}
        {activeTab === "centers" && (
          <div className="space-y-3">
            {filteredCenters.map(({ c: center, i: idx }) => (
              <div key={idx} className="bg-card rounded-xl p-4 border border-border hover:border-primary/40 transition">
                {editingCenterIdx === idx && editingCenter ? (
                  <div className="space-y-3">
                    <div className="grid sm:grid-cols-2 gap-2">
                      <input type="text" value={editingCenter.city} onChange={(e) => setEditingCenter({ ...editingCenter, city: e.target.value })} className="bg-background border border-border rounded-lg px-3 py-2 outline-none text-sm" placeholder="City" />
                      <input type="text" value={editingCenter.whatsappNumber} onChange={(e) => setEditingCenter({ ...editingCenter, whatsappNumber: e.target.value })} className="bg-background border border-border rounded-lg px-3 py-2 outline-none text-sm" placeholder="WhatsApp" />
                      <input type="text" value={editingCenter.fullAddress} onChange={(e) => setEditingCenter({ ...editingCenter, fullAddress: e.target.value })} className="bg-background border border-border rounded-lg px-3 py-2 outline-none text-sm sm:col-span-2" placeholder="Full address" />
                    </div>
                    <div className="flex gap-2">
                      <button onClick={handleSaveCenter} className="bg-primary text-primary-foreground px-4 py-2 rounded-lg flex items-center gap-2 text-sm">
                        <Save className="w-4 h-4" /> Save
                      </button>
                      <button onClick={() => { setEditingCenter(null); setEditingCenterIdx(null); }} className="border border-border px-4 py-2 rounded-lg text-sm">
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold">{center.city}</h3>
                      <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground mt-1">
                        <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {center.doctorsCount} doctors</span>
                        <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {center.whatsappNumber}</span>
                      </div>
                      {center.fullAddress && <p className="text-xs text-muted-foreground mt-1">{center.fullAddress}</p>}
                    </div>
                    <div className="flex gap-1">
                      <button onClick={() => { setEditingCenter({ ...center }); setEditingCenterIdx(idx); }} className="text-primary hover:bg-primary/10 p-2 rounded-lg transition">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDeleteCenter(idx)} className="text-red-500 hover:bg-red-500/10 p-2 rounded-lg transition">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
            {filteredCenters.length === 0 && (
              <p className="text-muted-foreground text-center py-12">No centers found.</p>
            )}
          </div>
        )}

        {/* Add Modal */}
        {isAdding && (
          <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={() => setIsAdding(false)}>
            <div className="bg-card rounded-2xl max-w-lg w-full p-6 border border-border max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Add New {activeTab === "doctors" ? "Doctor" : "Center"}</h3>
                <button onClick={() => setIsAdding(false)} className="text-muted-foreground hover:text-foreground">
                  <X className="w-5 h-5" />
                </button>
              </div>
              {activeTab === "doctors" ? (
                <div className="space-y-3">
                  {[
                    ["name", "Full Name *"],
                    ["qualification", "Qualification"],
                    ["address", "Address"],
                    ["mobile", "Mobile"],
                    ["city", "City *"],
                    ["district", "District"],
                    ["image", "Image path (e.g. /Dr Name.jpg)"],
                  ].map(([key, label]) => (
                    <input
                      key={key}
                      type="text"
                      placeholder={label}
                      value={(newDoctor as any)[key] || ""}
                      onChange={(e) => setNewDoctor({ ...newDoctor, [key]: e.target.value })}
                      className="w-full bg-background border border-border rounded-lg px-4 py-2.5 focus:border-primary outline-none text-sm"
                    />
                  ))}
                  <button onClick={handleAddDoctor} className="w-full bg-primary text-primary-foreground rounded-lg py-3 font-semibold hover:opacity-90 transition">
                    Add Doctor
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <input type="text" placeholder="City Name *" value={newCenter.city} onChange={(e) => setNewCenter({ ...newCenter, city: e.target.value })} className="w-full bg-background border border-border rounded-lg px-4 py-2.5 focus:border-primary outline-none text-sm" />
                  <input type="text" placeholder="Full Address" value={newCenter.fullAddress} onChange={(e) => setNewCenter({ ...newCenter, fullAddress: e.target.value })} className="w-full bg-background border border-border rounded-lg px-4 py-2.5 focus:border-primary outline-none text-sm" />
                  <input type="text" placeholder="WhatsApp Number" value={newCenter.whatsappNumber} onChange={(e) => setNewCenter({ ...newCenter, whatsappNumber: e.target.value })} className="w-full bg-background border border-border rounded-lg px-4 py-2.5 focus:border-primary outline-none text-sm" />
                  <button onClick={handleAddCenter} className="w-full bg-primary text-primary-foreground rounded-lg py-3 font-semibold hover:opacity-90 transition">
                    Add Center
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
