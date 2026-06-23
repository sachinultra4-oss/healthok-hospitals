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
  { name: "Dr. Chandrakant Shinde", qualification: "BAMS, CCH", registration: "I-51329-A", address: "Shree Samarth Clinic, Santoshi Mata Chauk, Vanjara Galli, Sakri", mobile: COMMON_NUMBER, active: true, city: "Sakri", district: "Dhule" },
  { name: "Dr. Kamlesh Patil", qualification: "BAMS", address: "Bhatai Clinic, Nijampur, Sakri", mobile: COMMON_NUMBER, active: true, city: "Sakri", district: "Dhule" },
  { name: "Dr. Malik Mansuri", qualification: "BAMS, CCH", address: "Seva Clinic, Bus Stand Road, Mhasdi, Sakri", mobile: COMMON_NUMBER, active: true, city: "Sakri", district: "Dhule" }
];

// ============================================================
// NAMPUR DOCTORS
// ============================================================
const nampurDoctors: Doctor[] = [
  { name: "Dr. Kiran Borse", qualification: "BAMS", address: "Ma Santoshi Clinic, Jaykheda, Nampur", mobile: COMMON_NUMBER, active: true, city: "Nampur", district: "Nashik" },
  { name: "Dr. Kishor Kapadnis", qualification: "BAMS", address: "Manjulai Clinic, Opp. Marathi Shala, Askheda, Nampur", mobile: COMMON_NUMBER, active: true, city: "Nampur", district: "Nashik" },
  { name: "Dr. Ganesh Shivade", qualification: "BHMS, CCMP (MUHS)", address: "Shree Samarth Hospital, Nampur", mobile: COMMON_NUMBER, active: true, city: "Nampur", district: "Nashik" },
  { name: "Dr. Harshal Bhamre", qualification: "", address: "Nampur", mobile: COMMON_NUMBER, active: true, city: "Nampur", district: "Nashik" },
  { name: "Dr. Yogesh Pagar", qualification: "BHMS", registration: "42379", address: "Yashwant Clinic, Damodar Complex, Nampur", mobile: COMMON_NUMBER, active: false, city: "Nampur", district: "Nashik" }
];

// ============================================================
// SHIRPUR DOCTORS
// ============================================================
const shirpurDoctors: Doctor[] = [
  { name: "Dr. Atul Badgujar", qualification: "B.A.M.S.(C.C.H.), (F.I.S.H.)", registration: "I-34317-A-1", address: "Vyankatesh Clinic, Near Nagarpalika, Shirpur", mobile: COMMON_NUMBER, active: true, city: "Shirpur", district: "Dhule" },
  { name: "Dr. Ashish Patil", qualification: "BAMS", registration: "I-37965A-1", address: "Seva Clinic, A.B. Road, Dahivad, Shirpur", mobile: COMMON_NUMBER, active: true, city: "Shirpur", district: "Dhule" },
  { name: "Dr. Rajesh Deore", qualification: "BHMS", address: "Samarth Clinic, Khanderao Mandir, Shirpur", mobile: COMMON_NUMBER, active: true, city: "Shirpur", district: "Dhule" },
  { name: "Dr. Yogesh Jadhav", qualification: "B.A.M.S.(C.C.H.), (C.G.O.)", registration: "35989", address: "Pratap Clinic, Near Balaji Mandir, Khalache Gaon, Shirpur", mobile: COMMON_NUMBER, active: true, city: "Shirpur", district: "Dhule" },
  { name: "Dr. Vijay Suryavanshi", qualification: "B.A.M.S.", registration: "I-58828-A-1", address: "Mangalmurti Clinic, Badgujar Complex, Karwand Naka Road, Shirpur", mobile: COMMON_NUMBER, active: true, city: "Shirpur", district: "Dhule" },
  { name: "Dr. Sisodiya Pratikkumar", qualification: "BAMS", registration: "I-42414 A-1", address: "Niramay Clinic, Melane Road, Near Over Bridge, Nardana, Shirpur", mobile: COMMON_NUMBER, active: true, city: "Shirpur", district: "Dhule" }
];

// ============================================================
// DONDAICHA DOCTORS
// ============================================================
const dondaichaDoctors: Doctor[] = [
  { name: "Dr. Kunal Bachhav", qualification: "M.S.", registration: "I-60021-A", address: "Shree Rajratna Surgical and General Hospital, Dondaicha", mobile: COMMON_NUMBER, active: true, city: "Dondaicha", district: "Dhule" },
  { name: "Dr. Kunal Thorat", qualification: "BHMS, CCMP", registration: "54085", address: "Dattasai Clinic, Shop No 60, Indira Market, Bajarpeth, Dondaicha", mobile: COMMON_NUMBER, active: true, city: "Dondaicha", district: "Dhule" },
  { name: "Dr. Swati Sonawane", qualification: "BAMS", registration: "I-41242", address: "Sonawane Hospital, Station Road, Dondaicha", mobile: COMMON_NUMBER, active: true, city: "Dondaicha", district: "Dhule" },
  { name: "Dr. Sham Thakur", qualification: "BAMS", address: "Mhasavad, Dondaicha", mobile: COMMON_NUMBER, active: true, city: "Dondaicha", district: "Dhule" },
  { name: "Dr. Anil Dhangar", qualification: "BHMS, CCMP", registration: "37686", address: "Shree Clinic, Near Om Shanti Mandir, Opp Hasti School, Indira Market, Bajarpeth, Dondaicha", mobile: COMMON_NUMBER, active: true, city: "Dondaicha", district: "Dhule" }
];

// ============================================================
// PAROLA DOCTORS
// ============================================================
const parolaDoctors: Doctor[] = [
  { name: "Dr. Aanant Pawar", qualification: "B.A.M.S.", address: "Prasad Hospital, Talav Galli, Bajar Peth, Parola", mobile: COMMON_NUMBER, active: true, city: "Parola", district: "Jalgaon" },
  { name: "Dr. Gopal Shimpi", qualification: "BAMS", address: "Savitrinagar, Balaji Park, Parola", mobile: COMMON_NUMBER, active: true, city: "Parola", district: "Jalgaon" },
  { name: "Dr. Suresh Patil", qualification: "BAMS, CCH", registration: "I-35541-A1", address: "Shraddha Hospital, Kajgaon Road, Bhadgaon Naka, Parola", mobile: COMMON_NUMBER, active: true, city: "Parola", district: "Jalgaon" },
  { name: "Dr. Chetan Karodpati", qualification: "BAMS", address: "Umang Hospital, Kajgaon Road, Bhadgaon Naka, Parola", mobile: COMMON_NUMBER, active: true, city: "Parola", district: "Jalgaon" },
  { name: "Dr. Purshottam Patil", qualification: "B.A.M.S.", registration: "I-59566-A", address: "Nityanand Hospital, Tambe Nagar, Karanjgaon Road, Parola", mobile: COMMON_NUMBER, active: true, city: "Parola", district: "Jalgaon" },
  { name: "Dr. Pravin Patil", qualification: "B.A.M.S.", address: "Shree Sailils Hospital, Chorvad Road, Parola", mobile: COMMON_NUMBER, active: true, city: "Parola", district: "Jalgaon" }
];

// ============================================================
// CHALISGAON DOCTORS
// ============================================================
const chalisgaonDoctors: Doctor[] = [
  { name: "Dr. Pankaj Patil", qualification: "BAMS, D.Y.A., C.S.D.", registration: "I-66014-A", address: "Sharda Clinic, L-47/48, Nagarpalika Shopping Complex, Opp. Rashtriy Mahavidyalay, Hirapur Road, Chalisgaon", mobile: COMMON_NUMBER, active: true, city: "Chalisgaon", district: "Jalgaon" },
  { name: "Dr. Ketan Patil", qualification: "", address: "Chalisgaon", mobile: COMMON_NUMBER, active: true, city: "Chalisgaon", district: "Jalgaon" },
  { name: "Dr. Amit Shitole", qualification: "BAMS, PGDEMS", registration: "I-57163A", address: "Shitole Hospital, Anandsmruti, Near Bus Stand, Patnadevi, Chalisgaon", mobile: COMMON_NUMBER, active: true, city: "Chalisgaon", district: "Jalgaon" },
  { name: "Dr. Sarang Patil", qualification: "", address: "Chalisgaon", mobile: COMMON_NUMBER, active: true, city: "Chalisgaon", district: "Jalgaon" },
  { name: "Dr. Premanand Bhosale", qualification: "", address: "Chalisgaon", mobile: COMMON_NUMBER, active: true, city: "Chalisgaon", district: "Jalgaon" },
  { name: "Dr. Pushkar Ghate", qualification: "BAMS", address: "Ghate Clinic, Captain Corner, Chalisgaon", mobile: COMMON_NUMBER, active: true, city: "Chalisgaon", district: "Jalgaon" },
  { name: "Dr. Smita Ghate", qualification: "BAMS", registration: "I33101 A-1", address: "Ghate Clinic, Captain Corner, Chalisgaon", mobile: COMMON_NUMBER, active: true, city: "Chalisgaon", district: "Jalgaon" },
  { name: "Dr. Nitin Chavan", qualification: "", address: "Chalisgaon", mobile: COMMON_NUMBER, active: true, city: "Chalisgaon", district: "Jalgaon" },
  { name: "Dr. Nitin Salunkhe", qualification: "BAMS", registration: "62217-A", address: "Aayush Clinic, Behind Sadanand Hotel, Chaudharivada, Chalisgaon", mobile: COMMON_NUMBER, active: true, city: "Chalisgaon", district: "Jalgaon" }
];

// ============================================================
// AMALNER DOCTORS
// ============================================================
const amalnerDoctors: Doctor[] = [
  { name: "Dr. Vijaykumar Thakare", qualification: "BHMS", address: "Siddhivinayak Clinic, A/P Wavde, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon" },
  { name: "Dr. Pranjal Kadam", qualification: "BHMS/CCMP", address: "Sparsh Clinic, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon" },
  { name: "Dr. Devyani Badgujar", qualification: "BHMS", registration: "40301", address: "General Physician, Shalam Nagar, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon" },
  { name: "Dr. Hemant Kadam", qualification: "BAMS", address: "Tuljai Hospital, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon" },
  { name: "Dr. Rajendra Thakre", qualification: "BAMS, M.D.", address: "Thakare Balrugnalay, Opp. Bus Stand, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon" },
  { name: "Dr. Anjali Chauhan", qualification: "BHMS, CCH", registration: "A-1-15625", address: "Rugna Seva Hospital, Opp. Bus Stand, Bhagvat Road, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon" },
  { name: "Dr. Deepali Salunke", qualification: "BHMS, CCMP", address: "Tejas Skin & Hair Clinic, Kranti Chowk, Shivaji Nagar, Near Shirur Naka, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon" },
  { name: "Dr. Milind Patil", qualification: "BHMS, CCMP (MUHS)", registration: "51244", address: "Nirmal Clinic, Janve, Tal Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon" },
  { name: "Dr. Chandrashekhar Patil", qualification: "B.A.M.S., C.C.H., C.G.O.", registration: "I-36822A", address: "Om Clinic, Krushi Nagar, Dheku Sim Road, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon" },
  { name: "Dr. Dinesh Patil", qualification: "BAMS", address: "Dhanwantari Hospital, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon" },
  { name: "Dr. Ghanshyam Patil", qualification: "BAMS", registration: "I-62805-A", address: "Sarvajna Clinic, Saptashrungi Colony, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon" },
  { name: "Dr. Vishal Badgujar", qualification: "BAMS", registration: "I-49131-A", address: "Arodyam Hospital, Opp. Swami Samarth Kendra, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon" },
  { name: "Dr. Mahemood Shaikh", qualification: "BAMS, C.C.H., C.G.O.", registration: "I-96166-A", address: "Madar Clinic, Shalam Nagar, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon" },
  { name: "Dr. Pooja Waghule Panjwani", qualification: "B.A.M.S.", address: "Sadguru Clinic, Shivshakti Chowk, Near Gajanan Medical, Tambepura, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon" },
  { name: "Dr. Chetan Patil", qualification: "", address: "Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon" },
  { name: "Dr. Sachin Patil", qualification: "", address: "Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon" }
];

// ============================================================
// MALEGAON DOCTORS
// ============================================================
const malegaonDoctors: Doctor[] = [
  { name: "Dr. Abasaheb Jagtap", qualification: "BHMS, MUHS", registration: "44076", address: "Suyash Hospital, Yesgaon Bk, Tal Malegaon, Nashik", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik" },
  { name: "Dr. Alishan Hire", qualification: "BAMS", registration: "I 46742 A", address: "Vidhyvasini Hospital, Karanjgavhan, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik" },
  { name: "Dr. Pallavi Hire", qualification: "BHMS, CCH, CGO", registration: "55647", address: "Vidhyvasini Hospital, Karanjgavhan, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik" },
  { name: "Dr. Madhuri Suryavanshi", qualification: "BHMS", registration: "60661", address: "Suryawanshi Homeopathy Clinic, DK Chowk, Soyegaon, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik" },
  { name: "Dr. Ravindra Hire", qualification: "BAMS", address: "Samarth Clinic, Bank Colony, Soyegaon, Satana Road, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik" },
  { name: "Dr. Sachin Surana", qualification: "BAMS", registration: "A/34619/A/1", address: "Chhaya Clinic, Pruthvi Apartment, Front Kathwala Market, Satana Naka, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik" },
  { name: "Dr. Tushar Prakash Shelar", qualification: "BAMS", address: "Ashirvad Clinic, Pushpatai Hire Nagar, Bhayegaon Road, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik" },
  { name: "Dr. Yogendra Pawar", qualification: "BAMS", address: "Yashvant Clinic, Karanjgavhan, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik" },
  { name: "Dr. Ramesh Gavhane", qualification: "DHMS/CCMP", address: "Nimgaon Sai Samarth Clinic, Nimgaon, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik" },
  { name: "Dr. Hemangi Suryavanshi", qualification: "BHMS", address: "Shriram Clinic, Saundane, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik" },
  { name: "Dr. Rupali Pagar", qualification: "BHMS/CCMP", address: "Vithai Clinic, Panchganga, Nanavati Petrol Pump, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik" },
  { name: "Dr. Sagar Kakde", qualification: "BAMS", address: "Sukhkarta Clinic, Krushinagar, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik" },
  { name: "Dr. Pravin Salunke", qualification: "BAMS", address: "Mauli Hospital, A/P Savkar Wadi, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik" },
  { name: "Dr. Seema Salunke", qualification: "BAMS", address: "Mauli Hospital, A/P Savkar Wadi, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik" },
  { name: "Dr. Harish Ahire", qualification: "BAMS", address: "Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik" },
  { name: "Dr. Sujata Patil", qualification: "BHMS", address: "Jyoti Nagar, Sangameshwar, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik" },
  { name: "Dr. Rakesh Deore", qualification: "BHMS", address: "Rameshwar, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik" }
];

// ============================================================
// JALGAON DOCTORS
// ============================================================
const jalgaonDoctors: Doctor[] = [
  { name: "Dr. Minakshi Patil", qualification: "BAMS", address: "Mauli Maternity & Nursing Home, Walmic Nagar, Asoda Road, Jalgaon", mobile: COMMON_NUMBER, active: true, city: "Jalgaon", district: "Jalgaon" },
  { name: "Dr. Digambar D Ugale", qualification: "BAMS", registration: "I-21340-A1", address: "Dhanwantari Clinic, 33/A, Sant Gulab Baba Colony, Meharun Road, Jalgaon", mobile: COMMON_NUMBER, active: true, city: "Jalgaon", district: "Jalgaon" },
  { name: "Dr. Nitin Patil", qualification: "", address: "Shree Sai Clinic, Khote Nagar Stop, Sant Mirabai Nagar Road, Jalgaon", mobile: COMMON_NUMBER, active: true, city: "Jalgaon", district: "Jalgaon" },
  { name: "Dr. Snehal Chaudhari", qualification: "BAMS", address: "Swasth Clinic, Indraprasth Nagar, Near Riksha Stop, Federation Road, Jalgaon", mobile: COMMON_NUMBER, active: true, city: "Jalgaon", district: "Jalgaon" },
  { name: "Dr. Sandeep Chaudhari", qualification: "BHMS", address: "Swasth Clinic, Indraprasth Nagar, Federation Road, Jalgaon", mobile: COMMON_NUMBER, active: true, city: "Jalgaon", district: "Jalgaon" },
  { name: "Dr. Shrikrishna Chaudhari", qualification: "BAMS, FEM, CCH, CGO", registration: "I-101451-A", address: "Narayani Clinic, Vedant Medical, Swatantrya Chowk, Nashirabad, Jalgaon", mobile: COMMON_NUMBER, active: true, city: "Jalgaon", district: "Jalgaon" },
  { name: "Dr. Rajdeep G Shimpi", qualification: "BAMS, PGDEMS, CGO, CCH, CSV", registration: "I-96847-A", address: "Parth Clinic Day Care Center, Jalgaon", mobile: COMMON_NUMBER, active: true, city: "Jalgaon", district: "Jalgaon" },
  { name: "Dr. Nilesh Jagtap", qualification: "", address: "Jalgaon", mobile: COMMON_NUMBER, active: true, city: "Jalgaon", district: "Jalgaon" },
  { name: "Dr. Sonali Mantri", qualification: "BAMS, Pune", registration: "I-34544 A-1", address: "Shree Clinic, Mehrun Near D-Mart, Shirsoli Naka, Jalgaon", mobile: COMMON_NUMBER, active: true, city: "Jalgaon", district: "Jalgaon" },
  { name: "Dr. Vinod Patil", qualification: "BAMS", registration: "I-35653-A-1", address: "Mauli Maternity & Nursing Home, Walmic Nagar, Asoda Road, Jalgaon", mobile: COMMON_NUMBER, active: true, city: "Jalgaon", district: "Jalgaon" }
];

// ============================================================
// NASHIK DOCTORS
// ============================================================
const nashikDoctors: Doctor[] = [
  { name: "Dr. Sunaina Bhujbal", qualification: "BAMS", address: "Harmika Clinic, Samangaon Road, Near Indraprast Lawn, Nashik Road, Nashik", mobile: COMMON_NUMBER, active: true, city: "Nashik", district: "Nashik" },
  { name: "Dr. Rekha Chakote", qualification: "BAMS", address: "Ashirvad Clinic, Saras Darshan, Nashik Road, Nashik", mobile: COMMON_NUMBER, active: true, city: "Nashik", district: "Nashik" },
  { name: "Dr. Yogesh Gangurde", qualification: "BHMS (MUHS), P.G.D.E.M.S", address: "Seva Clinic, Sansari Gaon, Devlali Camp, Nashik", mobile: COMMON_NUMBER, active: true, city: "Nashik", district: "Nashik" },
  { name: "Dr. Roshan Kumawat", qualification: "BAMS, MD(AM), MUHS", address: "Kumawat Clinic, Jaganath Apartment, Jatra Hotel, Adgaon Naka, Nashik", mobile: COMMON_NUMBER, active: true, city: "Nashik", district: "Nashik" },
  { name: "Dr. Suhas Kadam", qualification: "BAMS", address: "Shree Clinic, Shop No.5, Kadam Park, Pathardi Road, Nashik", mobile: COMMON_NUMBER, active: true, city: "Nashik", district: "Nashik" },
  { name: "Dr. Vrushali Patil", qualification: "BAMS", registration: "42278-A1", address: "Atharv Clinic, Shop No.1, Ashoka Road, Nashik", mobile: COMMON_NUMBER, active: true, city: "Nashik", district: "Nashik" },
  { name: "Dr. Dnyaneshwar Borade", qualification: "BAMS", address: "Om Clinic, Jail Road, Nashik Road, Nashik", mobile: COMMON_NUMBER, active: true, city: "Nashik", district: "Nashik" },
  { name: "Dr. Shekhar Thanage", qualification: "BAMS", registration: "I-32641A-1", address: "OM Clinic, 9, Guruvandana, Near Octrol Naka No 6, Lam Road, Deolali Camp, Nashik", mobile: COMMON_NUMBER, active: true, city: "Nashik", district: "Nashik" },
  { name: "Dr. Kishor Thorat", qualification: "BAMS", address: "Manjuprabha Nursing Home, Hanesh Nagar, Amrutdham, Panchvati, Nashik", mobile: COMMON_NUMBER, active: true, city: "Nashik", district: "Nashik" },
  { name: "Dr. Vandana Aher", qualification: "BAMS", address: "Nashik", mobile: COMMON_NUMBER, active: true, city: "Nashik", district: "Nashik" }
];

export const getAllDoctors = (): Doctor[] => [
  ...sakriDoctors,
  ...nampurDoctors,
  ...shirpurDoctors,
  ...dondaichaDoctors,
  ...parolaDoctors,
  ...chalisgaonDoctors,
  ...amalnerDoctors,
  ...malegaonDoctors,
  ...jalgaonDoctors,
  ...nashikDoctors,
];

