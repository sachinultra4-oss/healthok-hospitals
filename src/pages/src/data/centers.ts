export interface Doctor {
  name: string;
  qualification: string;
  registration?: string;
  address: string;
  mobile: string;
  active: boolean;
  city: string;
  district: string;
  tahsil?: string;
  village?: string;
  image?: string;
}

export interface Center {
  city: string;
  doctorsCount: number;
  whatsappNumber: string;
  fullAddress: string;
  doctors: Doctor[];
}

const COMMON_NUMBER = "+917588517991";

// ============================================================
// SAKRI DOCTORS
// ============================================================
const sakriDoctors: Doctor[] = [
  { name: "Dr. Chandrakant Shinde", qualification: "BAMS, CCH", registration: "I-51329-A", address: "Shree Samarth Clinic, Santoshi Mata Chauk, Vanjara Galli, Sakri", mobile: COMMON_NUMBER, active: true, city: "Sakri", district: "Dhule", image: "/doctors/dr_chandrakant_shinde.jpg" },
  { name: "Dr. Kamlesh Patil", qualification: "BAMS", address: "Bhatai Clinic, Nijampur, Sakri", mobile: COMMON_NUMBER, active: true, city: "Sakri", district: "Dhule", image: "/doctors/dr_kamlesh_patil.jpg" },
  { name: "Dr. Malik Mansuri", qualification: "BAMS, CCH", address: "Seva Clinic, Bus Stand Road, Mhasdi, Sakri", mobile: COMMON_NUMBER, active: true, city: "Sakri", district: "Dhule", image: "/doctors/dr_malik_mansuri.jpg" }
];

// ============================================================
// NAMPUR DOCTORS
// ============================================================
const nampurDoctors: Doctor[] = [
  { name: "Dr. Kiran Borse", qualification: "BAMS", address: "Ma Santoshi Clinic, Jaykheda, Nampur", mobile: COMMON_NUMBER, active: true, city: "Nampur", district: "Nashik", image: "/doctors/dr_kiran_borse.jpg" },
  { name: "Dr. Kishor Kapadnis", qualification: "BAMS", address: "Manjulai Clinic, Opp. Marathi Shala, Askheda, Nampur", mobile: COMMON_NUMBER, active: true, city: "Nampur", district: "Nashik", image: "/doctors/dr_kishor_kapadnis.jpg" },
  { name: "Dr. Ganesh Shivade", qualification: "BHMS, CCMP (MUHS)", address: "Shree Samarth Hospital, Nampur", mobile: COMMON_NUMBER, active: true, city: "Nampur", district: "Nashik", image: "/doctors/dr_ganesh_shivade.jpg" },
  { name: "Dr. Harshal Bhamre", qualification: "", address: "Nampur", mobile: COMMON_NUMBER, active: true, city: "Nampur", district: "Nashik", image: "/doctors/dr_harshal_bhamre.jpg" },
  { name: "Dr. Yogesh Pagar", qualification: "BHMS", registration: "42379", address: "Yashwant Clinic, Damodar Complex, Nampur", mobile: COMMON_NUMBER, active: false, city: "Nampur", district: "Nashik", image: "/doctors/dr_yogesh_pagar.jpg" }
];

// ============================================================
// SHIRPUR DOCTORS
// ============================================================
const shirpurDoctors: Doctor[] = [
  { name: "Dr. Atul Badgujar", qualification: "B.A.M.S.(C.C.H.), (F.I.S.H.)", registration: "I-34317-A-1", address: "Vyankatesh Clinic, Near Nagarpalika, Shirpur", mobile: COMMON_NUMBER, active: true, city: "Shirpur", district: "Dhule", image: "/doctors/dr_atul_badgujar.jpg" },
  { name: "Dr. Ashish Patil", qualification: "BAMS", registration: "I-37965A-1", address: "Seva Clinic, A.B. Road, Dahivad, Shirpur", mobile: COMMON_NUMBER, active: true, city: "Shirpur", district: "Dhule", image: "/doctors/dr_ashish_patil.jpg" },
  { name: "Dr. Rajesh Deore", qualification: "BHMS", address: "Samarth Clinic, Khanderao Mandir, Shirpur", mobile: COMMON_NUMBER, active: true, city: "Shirpur", district: "Dhule", image: "/doctors/dr_rajesh_deore.jpg" },
  { name: "Dr. Yogesh Jadhav", qualification: "B.A.M.S.(C.C.H.), (C.G.O.)", registration: "35989", address: "Pratap Clinic, Near Balaji Mandir, Khalache Gaon, Shirpur", mobile: COMMON_NUMBER, active: true, city: "Shirpur", district: "Dhule", image: "/doctors/dr_yogesh_jadhav.jpg" },
  { name: "Dr. Vijay Suryavanshi", qualification: "B.A.M.S.", registration: "I-58828-A-1", address: "Mangalmurti Clinic, Badgujar Complex, Karwand Naka Road, Shirpur", mobile: COMMON_NUMBER, active: true, city: "Shirpur", district: "Dhule", image: "/doctors/dr_vijay_suryavanshi.jpg" },
  { name: "Dr. Sisodiya Pratikkumar", qualification: "BAMS", registration: "I-42414 A-1", address: "Niramay Clinic, Melane Road, Near Over Bridge, Nardana, Shirpur", mobile: COMMON_NUMBER, active: true, city: "Shirpur", district: "Dhule", image: "/doctors/dr_sisodiya_pratikkumar.jpg" }
];

// ============================================================
// DONDAICHA DOCTORS
// ============================================================
const dondaichaDoctors: Doctor[] = [
  { name: "Dr. Kunal Bachhav", qualification: "M.S.", registration: "I-60021-A", address: "Shree Rajratna Surgical and General Hospital, Dondaicha", mobile: COMMON_NUMBER, active: true, city: "Dondaicha", district: "Dhule", image: "/doctors/dr_kunal_bachhav.jpg" },
  { name: "Dr. Kunal Thorat", qualification: "BHMS, CCMP", registration: "54085", address: "Dattasai Clinic, Shop No 60, Indira Market, Bajarpeth, Dondaicha", mobile: COMMON_NUMBER, active: true, city: "Dondaicha", district: "Dhule", image: "/doctors/dr_kunal_thorat.jpg" },
  { name: "Dr. Swati Sonawane", qualification: "BAMS", registration: "I-41242", address: "Sonawane Hospital, Station Road, Dondaicha", mobile: COMMON_NUMBER, active: true, city: "Dondaicha", district: "Dhule", image: "/doctors/dr_swati_sonawane.jpg" },
  { name: "Dr. Sham Thakur", qualification: "BAMS", address: "Mhasavad, Dondaicha", mobile: COMMON_NUMBER, active: true, city: "Dondaicha", district: "Dhule", image: "/doctors/dr_sham_thakur.jpg" },
  { name: "Dr. Anil Dhangar", qualification: "BHMS, CCMP", registration: "37686", address: "Shree Clinic, Near Om Shanti Mandir, Opp Hasti School, Indira Market, Bajarpeth, Dondaicha", mobile: COMMON_NUMBER, active: true, city: "Dondaicha", district: "Dhule", image: "/doctors/dr_anil_dhangar.jpg" }
];

// ============================================================
// PAROLA DOCTORS
// ============================================================
const parolaDoctors: Doctor[] = [
  { name: "Dr. Aanant Pawar", qualification: "B.A.M.S.", address: "Prasad Hospital, Talav Galli, Bajar Peth, Parola", mobile: COMMON_NUMBER, active: true, city: "Parola", district: "Jalgaon", image: "/doctors/dr_aanant_pawar.jpg" },
  { name: "Dr. Gopal Shimpi", qualification: "BAMS", address: "Savitrinagar, Balaji Park, Parola", mobile: COMMON_NUMBER, active: true, city: "Parola", district: "Jalgaon", image: "/doctors/dr_gopal_shimpi.jpg" },
  { name: "Dr. Suresh Patil", qualification: "BAMS, CCH", registration: "I-35541-A1", address: "Shraddha Hospital, Kajgaon Road, Bhadgaon Naka, Parola", mobile: COMMON_NUMBER, active: true, city: "Parola", district: "Jalgaon", image: "/doctors/dr_suresh_patil.jpg" },
  { name: "Dr. Chetan Karodpati", qualification: "BAMS", address: "Umang Hospital, Kajgaon Road, Bhadgaon Naka, Parola", mobile: COMMON_NUMBER, active: true, city: "Parola", district: "Jalgaon", image: "/doctors/dr_chetan_karodpati.jpg" },
  { name: "Dr. Purshottam Patil", qualification: "B.A.M.S.", registration: "I-59566-A", address: "Nityanand Hospital, Tambe Nagar, Karanjgaon Road, Parola", mobile: COMMON_NUMBER, active: true, city: "Parola", district: "Jalgaon", image: "/doctors/dr_purshottam_patil.jpg" },
  { name: "Dr. Pravin Patil", qualification: "B.A.M.S.", address: "Shree Sailils Hospital, Chorvad Road, Parola", mobile: COMMON_NUMBER, active: true, city: "Parola", district: "Jalgaon", image: "/doctors/dr_pravin_patil.jpg" }
];

// ============================================================
// CHALISGAON DOCTORS
// ============================================================
const chalisgaonDoctors: Doctor[] = [
  { name: "Dr. Pankaj Patil", qualification: "BAMS, D.Y.A., C.S.D.", registration: "I-66014-A", address: "Sharda Clinic, L-47/48, Nagarpalika Shopping Complex, Opp. Rashtriy Mahavidyalay, Hirapur Road, Chalisgaon", mobile: COMMON_NUMBER, active: true, city: "Chalisgaon", district: "Jalgaon", image: "/doctors/dr_pankaj_patil.jpg" },
  { name: "Dr. Ketan Patil", qualification: "", address: "Chalisgaon", mobile: COMMON_NUMBER, active: true, city: "Chalisgaon", district: "Jalgaon", image: "/doctors/dr_ketan_patil.jpg" },
  { name: "Dr. Amit Shitole", qualification: "BAMS, PGDEMS", registration: "I-57163A", address: "Shitole Hospital, Anandsmruti, Near Bus Stand, Patnadevi, Chalisgaon", mobile: COMMON_NUMBER, active: true, city: "Chalisgaon", district: "Jalgaon", image: "/doctors/dr_amit_shitole.jpg" },
  { name: "Dr. Sarang Patil", qualification: "", address: "Chalisgaon", mobile: COMMON_NUMBER, active: true, city: "Chalisgaon", district: "Jalgaon", image: "/doctors/dr_sarang_patil.jpg" },
  { name: "Dr. Premanand Bhosale", qualification: "", address: "Chalisgaon", mobile: COMMON_NUMBER, active: true, city: "Chalisgaon", district: "Jalgaon", image: "/doctors/dr_premanand_bhosale.jpg" },
  { name: "Dr. Pushkar Ghate", qualification: "BAMS", address: "Ghate Clinic, Captain Corner, Chalisgaon", mobile: COMMON_NUMBER, active: true, city: "Chalisgaon", district: "Jalgaon", image: "/doctors/dr_pushkar_ghate.jpg" },
  { name: "Dr. Smita Ghate", qualification: "BAMS", registration: "I33101 A-1", address: "Ghate Clinic, Captain Corner, Chalisgaon", mobile: COMMON_NUMBER, active: true, city: "Chalisgaon", district: "Jalgaon", image: "/doctors/dr_smita_ghate.jpg" },
  { name: "Dr. Nitin Chavan", qualification: "", address: "Chalisgaon", mobile: COMMON_NUMBER, active: true, city: "Chalisgaon", district: "Jalgaon", image: "/doctors/dr_nitin_chavan.jpg" },
  { name: "Dr. Nitin Salunkhe", qualification: "BAMS", registration: "62217-A", address: "Aayush Clinic, Behind Sadanand Hotel, Chaudharivada, Chalisgaon", mobile: COMMON_NUMBER, active: true, city: "Chalisgaon", district: "Jalgaon", image: "/doctors/dr_nitin_salunkhe.jpg" }
];

// ============================================================
// AMALNER DOCTORS
// ============================================================
const amalnerDoctors: Doctor[] = [
  { name: "Dr. Vijaykumar Thakare", qualification: "BHMS", address: "Siddhivinayak Clinic, A/P Wavde, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon", image: "/doctors/dr_vijaykumar_thakare.jpg" },
  { name: "Dr. Pranjal Kadam", qualification: "BHMS/CCMP", address: "Sparsh Clinic, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon", image: "/doctors/dr_pranjal_kadam.jpg" },
  { name: "Dr. Devyani Badgujar", qualification: "BHMS", registration: "40301", address: "General Physician, Shalam Nagar, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon", image: "/doctors/dr_devyani_badgujar.jpg" },
  { name: "Dr. Hemant Kadam", qualification: "BAMS", address: "Tuljai Hospital, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon", image: "/doctors/dr_hemant_kadam.jpg" },
  { name: "Dr. Rajendra Thakre", qualification: "BAMS, M.D.", address: "Thakare Balrugnalay, Opp. Bus Stand, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon", image: "/doctors/dr_rajendra_thakre.jpg" },
  { name: "Dr. Anjali Chauhan", qualification: "BHMS, CCH", registration: "A-1-15625", address: "Rugna Seva Hospital, Opp. Bus Stand, Bhagvat Road, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon", image: "/doctors/dr_anjali_chauhan.jpg" },
  { name: "Dr. Deepali Salunke", qualification: "BHMS, CCMP", address: "Tejas Skin & Hair Clinic, Kranti Chowk, Shivaji Nagar, Near Shirur Naka, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon", image: "/doctors/dr_deepali_salunke.jpg" },
  { name: "Dr. Milind Patil", qualification: "BHMS, CCMP (MUHS)", registration: "51244", address: "Nirmal Clinic, Janve, Tal Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon", image: "/doctors/dr_milind_patil.jpg" },
  { name: "Dr. Chandrashekhar Patil", qualification: "B.A.M.S., C.C.H., C.G.O.", registration: "I-36822A", address: "Om Clinic, Krushi Nagar, Dheku Sim Road, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon", image: "/doctors/dr_chandrashekhar_patil.jpg" },
  { name: "Dr. Dinesh Patil", qualification: "BAMS", address: "Dhanwantari Hospital, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon", image: "/doctors/dr_dinesh_patil.jpg" },
  { name: "Dr. Ghanshyam Patil", qualification: "BAMS", registration: "I-62805-A", address: "Sarvajna Clinic, Saptashrungi Colony, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon", image: "/doctors/dr_ghanshyam_patil.jpg" },
  { name: "Dr. Vishal Badgujar", qualification: "BAMS", registration: "I-49131-A", address: "Arodyam Hospital, Opp. Swami Samarth Kendra, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon", image: "/doctors/dr_vishal_badgujar.jpg" },
  { name: "Dr. Mahemood Shaikh", qualification: "BAMS, C.C.H., C.G.O.", registration: "I-96166-A", address: "Madar Clinic, Shalam Nagar, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon", image: "/doctors/dr_mahemood_shaikh.jpg" },
  { name: "Dr. Pooja Waghule Panjwani", qualification: "B.A.M.S.", address: "Sadguru Clinic, Shivshakti Chowk, Near Gajanan Medical, Tambepura, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon", image: "/doctors/dr_pooja_waghule.jpg" },
  { name: "Dr. Chetan Patil", qualification: "", address: "Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon", image: "/doctors/dr_chetan_patil.jpg" },
  { name: "Dr. Sachin Patil", qualification: "", address: "Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon", image: "/doctors/dr_sachin_patil_amalner.jpg" }
];

// ============================================================
// MALEGAON DOCTORS
// ============================================================
const malegaonDoctors: Doctor[] = [
  { name: "Dr. Abasaheb Jagtap", qualification: "BHMS, MUHS", registration: "44076", address: "Suyash Hospital, Yesgaon Bk, Tal Malegaon, Nashik", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik", image: "/doctors/dr_abasaheb_jagtap.jpg" },
  { name: "Dr. Alishan Hire", qualification: "BAMS", registration: "I 46742 A", address: "Vidhyvasini Hospital, Karanjgavhan, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik", image: "/doctors/dr_alishan_hire.jpg" },
  { name: "Dr. Pallavi Hire", qualification: "BHMS, CCH, CGO", registration: "55647", address: "Vidhyvasini Hospital, Karanjgavhan, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik", image: "/doctors/dr_pallavi_hire.jpg" },
  { name: "Dr. Madhuri Suryavanshi", qualification: "BHMS", registration: "60661", address: "Suryawanshi Homeopathy Clinic, DK Chowk, Soyegaon, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik", image: "/doctors/dr_madhuri_suryavanshi.jpg" },
  { name: "Dr. Ravindra Hire", qualification: "BAMS", address: "Samarth Clinic, Bank Colony, Soyegaon, Satana Road, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik", image: "/doctors/dr_ravindra_hire.jpg" },
  { name: "Dr. Sachin Surana", qualification: "BAMS", registration: "A/34619/A/1", address: "Chhaya Clinic, Pruthvi Apartment, Front Kathwala Market, Satana Naka, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik", image: "/doctors/dr_sachin_surana.jpg" },
  { name: "Dr. Tushar Prakash Shelar", qualification: "BAMS", address: "Ashirvad Clinic, Pushpatai Hire Nagar, Bhayegaon Road, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik", image: "/doctors/dr_tushar_shelar.jpg" },
  { name: "Dr. Yogendra Pawar", qualification: "BAMS", address: "Yashvant Clinic, Karanjgavhan, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik", image: "/doctors/dr_yogendra_pawar.jpg" },
  { name: "Dr. Ramesh Gavhane", qualification: "DHMS/CCMP", address: "Nimgaon Sai Samarth Clinic, Nimgaon, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik", image: "/doctors/dr_ramesh_gavhane.jpg" },
  { name: "Dr. Hemangi Suryavanshi", qualification: "BHMS", address: "Shriram Clinic, Saundane, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik", image: "/doctors/dr_hemangi_suryavanshi.jpg" },
  { name: "Dr. Rupali Pagar", qualification: "BHMS/CCMP", address: "Vithai Clinic, Panchganga, Nanavati Petrol Pump, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik", image: "/doctors/dr_rupali_pagar.jpg" },
  { name: "Dr. Sagar Kakde", qualification: "BAMS", address: "Sukhkarta Clinic, Krushinagar, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik", image: "/doctors/dr_sagar_kakde.jpg" },
  { name: "Dr. Pravin Salunke", qualification: "BAMS", address: "Mauli Hospital, A/P Savkar Wadi, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik", image: "/doctors/dr_pravin_salunke.jpg" },
  { name: "Dr. Seema Salunke", qualification: "BAMS", address: "Mauli Hospital, A/P Savkar Wadi, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik", image: "/doctors/dr_seema_salunke.jpg" },
  { name: "Dr. Harish Ahire", qualification: "BAMS", address: "Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik", image: "/doctors/dr_harish_ahire.jpg" },
  { name: "Dr. Sujata Patil", qualification: "BHMS", address: "Jyoti Nagar, Sangameshwar, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik", image: "/doctors/dr_sujata_patil.jpg" },
  { name: "Dr. Rakesh Deore", qualification: "BHMS", address: "Rameshwar, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik", image: "/doctors/dr_rakesh_deore.jpg" }
];

// ============================================================
// JALGAON DOCTORS
// ============================================================
const jalgaonDoctors: Doctor[] = [
  { name: "Dr. Minakshi Patil", qualification: "BAMS", address: "Mauli Maternity & Nursing Home, Walmic Nagar, Asoda Road, Jalgaon", mobile: COMMON_NUMBER, active: true, city: "Jalgaon", district: "Jalgaon", image: "/doctors/dr_minakshi_patil.jpg" },
  { name: "Dr. Digambar D Ugale", qualification: "BAMS", registration: "I-21340-A1", address: "Dhanwantari Clinic, 33/A, Sant Gulab Baba Colony, Meharun Road, Jalgaon", mobile: COMMON_NUMBER, active: true, city: "Jalgaon", district: "Jalgaon", image: "/doctors/dr_digambar_ugale.jpg" },
  { name: "Dr. Nitin Patil", qualification: "", address: "Shree Sai Clinic, Khote Nagar Stop, Sant Mirabai Nagar Road, Jalgaon", mobile: COMMON_NUMBER, active: true, city: "Jalgaon", district: "Jalgaon", image: "/doctors/dr_nitin_patil.jpg" },
  { name: "Dr. Snehal Chaudhari", qualification: "BAMS", address: "Swasth Clinic, Indraprasth Nagar, Near Riksha Stop, Federation Road, Jalgaon", mobile: COMMON_NUMBER, active: true, city: "Jalgaon", district: "Jalgaon", image: "/doctors/dr_snehal_chaudhari.jpg" },
  { name: "Dr. Sandeep Chaudhari", qualification: "BHMS", address: "Swasth Clinic, Indraprasth Nagar, Federation Road, Jalgaon", mobile: COMMON_NUMBER, active: true, city: "Jalgaon", district: "Jalgaon", image: "/doctors/dr_sandeep_chaudhari.jpg" },
  { name: "Dr. Shrikrishna Chaudhari", qualification: "BAMS, FEM, CCH, CGO", registration: "I-101451-A", address: "Narayani Clinic, Vedant Medical, Swatantrya Chowk, Nashirabad, Jalgaon", mobile: COMMON_NUMBER, active: true, city: "Jalgaon", district: "Jalgaon", image: "/doctors/dr_shrikrishna_chaudhari.jpg" },
  { name: "D
