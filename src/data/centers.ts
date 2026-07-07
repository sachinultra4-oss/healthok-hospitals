import { getDoctorImage } from "@/lib/doctor-image";

export interface Doctor {
  name: string;
  qualification: string;
  registration?: string;
  address: string;
  /** Doctor's own contact number (used for dual WhatsApp notify). */
  mobile: string;
  active: boolean;
  city: string;
  district: string;
  tahsil?: string;
  village?: string;
  image?: string;
  specialization?: string;
  clinic?: string;
  tag?: string;
}

export interface Center {
  city: string;
  doctorsCount: number;
  whatsappNumber: string;
  fullAddress: string;
  doctors: Doctor[];
}

type D = Omit<Doctor, "active" | "image"> & { image?: string; active?: boolean };
const make = (d: D): Doctor => ({
  ...d,
  active: d.active ?? true,
  image: getDoctorImage(d.name, d.image),
});

// ============================================================
// DHULE — Head Office
// ============================================================
const dhuleHeadOffice: Doctor[] = [
  make({
    name: "Dr. Bhupesh P. Patil",
    qualification: "MBBS, FCPS (Medicine), AFIH",
    specialization: "ICU Intensivist",
    clinic: "Shree Ram Hospital",
    address: "68, Saraswati Colony, Datta Mandir Chauk, Deopur, Dhule 424001",
    mobile: "+917588517991",
    city: "Dhule",
    district: "Dhule",
    tag: "Head Office · Founder",
    image: "/__l5e/assets-v1/6dea5c28-d323-41bf-bac5-f44f81336b8c/Dr Bhupesh Patil.jpg",
  }),
  make({
    name: "Dr. Shital Patil",
    qualification: "MBBS, DGO",
    specialization: "Gynaecologist",
    clinic: "Shree Ram Hospital",
    address: "68, Saraswati Colony, Datta Mandir Chauk, Deopur, Dhule",
    mobile: "+917588517990",
    city: "Dhule",
    district: "Dhule",
    tag: "Head Office",
  }),
];

// ============================================================
// DHULE — Shirpur
// ============================================================
const shirpurDoctors: Doctor[] = [
  make({ name: "Dr. Atul Badgujar", qualification: "BAMS, CCH, FISH", registration: "I-34317A-1", clinic: "Vyankatesh Clinic", address: "Nagarpalika Javal, Shirpur", mobile: "9422793271", city: "Shirpur", district: "Dhule" }),
  make({ name: "Dr. Yogesh Jadhav", qualification: "BAMS, CCH, CGO", registration: "35989", clinic: "Pratap Clinic", address: "Balaji Mandir Javal, Khalche Gaon, Shirpur", mobile: "9822821085", city: "Shirpur", district: "Dhule" }),
  make({ name: "Dr. Rajesh Devre", qualification: "BHMS", registration: "38411", clinic: "Samarth Clinic", address: "Khanderao Mandir, Shirpur", mobile: "7588734438", city: "Shirpur", district: "Dhule" }),
  make({ name: "Dr. Ashish Patil", qualification: "BAMS", registration: "I-37965A-1", clinic: "Seva Clinic", address: "AB Road, Dahivad, Shirpur", mobile: "9822781814", city: "Shirpur", district: "Dhule" }),
  make({ name: "Dr. Vijay Suryavanshi", qualification: "BAMS", registration: "I-58828A-1", clinic: "Mangalmoorti Clinic", address: "Badgujar Complex, Karavand Naka Road, Shirpur", mobile: "8805626375", city: "Shirpur", district: "Dhule" }),
];

// ============================================================
// DHULE — Nardana
// ============================================================
const nardanaDoctors: Doctor[] = [
  make({ name: "Dr. Sisodiya Pratik Kumar", qualification: "BAMS", registration: "I-42414A-1", clinic: "Niramay Clinic", address: "Melane Road, Over Bridge Javal, Nardana", mobile: "9158196396", city: "Nardana", district: "Dhule" }),
];

// ============================================================
// DHULE — Shahada (Nandurbar administrative but grouped under Dhule per client)
// ============================================================
const shahadaDoctors: Doctor[] = [
  make({ name: "Dr. Dinesh Vasantrao Bhamare", qualification: "BAMS", clinic: "Dhanvantari Clinic", address: "Main Bazaar, Sarkheda, Ta. Shahada, Dist. Nandurbar", mobile: "9421530348", city: "Shahada", district: "Dhule" }),
  make({ name: "Dr. Nandulal N. Chaudhari", qualification: "BAMS", registration: "I-38522 A-1", clinic: "Maatoshri Hospital", address: "Badali, Ta. Shahada, Dist. Nandurbar", mobile: "9422280755", city: "Shahada", district: "Dhule" }),
  make({ name: "Dr. Ravindra Bhatu Badgujar", qualification: "DHMS", clinic: "Om Shanti Clinic", address: "Sarkheda, Ta. Shahada, Dist. Nandurbar", mobile: "7798790855", city: "Shahada", district: "Dhule" }),
  make({ name: "Dr. Panpatil", qualification: "BAMS", clinic: "Life Care Hospital", address: "Shahada, Shirpur Road, Ta. Shahada, Dist. Nandurbar", mobile: "9405772001", city: "Shahada", district: "Dhule" }),
  make({ name: "Dr. Bhushan Rajendra Bafna", qualification: "BHMS", clinic: "Mahadev Clinic", address: "Mhasavad", mobile: "9405311835", city: "Shahada", district: "Dhule" }),
  make({ name: "Dr. Dipak Patil", qualification: "BHMS", clinic: "Dadaji Clinic", address: "Kalmadi, Ta. Shahada, Dist. Nandurbar", mobile: "8849928711", city: "Shahada", district: "Dhule" }),
  make({ name: "Dr. Prashant P. Patil", qualification: "BAMS", registration: "I-100168-A", clinic: "Devskhi Clinic", address: "Bhoysane School Javal, Juna Mohida Road, Shahada", mobile: "8010759247", city: "Shahada", district: "Dhule" }),
  make({ name: "Dr. Prakash Ashok Chaudhari", qualification: "BHMS", registration: "49040", clinic: "Vaatoli Clinic", address: "Budhkari, Ta. Shahada, Dist. Nandurbar", mobile: "9503425271", city: "Shahada", district: "Dhule" }),
  make({ name: "Dr. Pramod Girharji Suryavanshi", qualification: "BHMS", registration: "23941", clinic: "Swastik Health Care Clinic", address: "Subhash Chowk, Khetiya, Ta. Parsemaal, Dist. Badwani", mobile: "9425678143", city: "Shahada", district: "Dhule" }),
  make({ name: "Dr. Kalpesh Sahebrao Chaudhari", qualification: "BAMS", registration: "59544", clinic: "Siddhivinayak Clinic", address: "Ashok Road, Khetiya, Ta. Parsemaal, Dist. Badwani", mobile: "7030301254", city: "Shahada", district: "Dhule" }),
];

// ============================================================
// DHULE — Dondaicha
// ============================================================
const dondaichaDoctors: Doctor[] = [
  make({ name: "Dr. Swati Sonavane", qualification: "BAMS", registration: "I-41242", clinic: "Sonavane Hospital", address: "Station Road, Dondaicha", mobile: "8007042400", city: "Dondaicha", district: "Dhule" }),
  make({ name: "Dr. Kunal Bachchav", qualification: "MS", registration: "I-60021-A", clinic: "Shree Rajaran Surgical & General Hospital", address: "Saraswati Colony, Nirmal Hospital Javal, Dondaicha", mobile: "7768082282", city: "Dondaicha", district: "Dhule" }),
  make({ name: "Dr. Anil Dhangar", qualification: "BHMS, CCMP", registration: "37686", clinic: "Shri Clinic", address: "Omshanti Mandir Javal, Hasta Speed, Indira Market, Bazarpeth, Dondaicha", mobile: "9421532630", city: "Dondaicha", district: "Dhule" }),
  make({ name: "Dr. Kunal Thorat", qualification: "BHMS, CCMP", registration: "54085", clinic: "Dattasai Clinic", address: "Indira Market, Bazarpeth, Dondaicha", mobile: "9960566282", city: "Dondaicha", district: "Dhule" }),
  make({ name: "Dr. Shyam Thakur", qualification: "BAMS", specialization: "RBSK Medical Officer Rural Hospital", clinic: "Rural Hospital", address: "Mhasavad, Dondaicha", mobile: "9423722005", city: "Dondaicha", district: "Dhule" }),
];

// ============================================================
// DHULE — Sakri (data pending)
// ============================================================
const sakriDoctors: Doctor[] = [];

// ============================================================
// JALGAON — Jalgaon
// ============================================================
const jalgaonDoctors: Doctor[] = [
  make({ name: "Dr. Digambar Diu Ugale", qualification: "BAMS", registration: "I-21340 A1", clinic: "Dhanvantari Clinic", address: "33/A, Sant Gulab Baba Colony, Mehrun Road, Jalgaon", mobile: "9423939963", city: "Jalgaon", district: "Jalgaon" }),
  make({ name: "Dr. Sonali Mantri", qualification: "BAMS", registration: "I-34544-A1", address: "Mahadev Mandir Chowk, Mehrun, Jalgaon", mobile: "9422224202", city: "Jalgaon", district: "Jalgaon" }),
  make({ name: "Dr. Minakshi Patil", qualification: "BAMS", clinic: "Mauli Maternity & Nursing Home", address: "Valmiki Nagar, Asoda Road, Jalgaon", mobile: "9422223243", city: "Jalgaon", district: "Jalgaon" }),
  make({ name: "Dr. Snehal Chaudhari", qualification: "BAMS", clinic: "Shree Sai Clinic", address: "Khotenagar Stop, Sant Mirabai Nagar Road, Shriram Samarth Colony, Jalgaon", mobile: "9284719059", city: "Jalgaon", district: "Jalgaon" }),
  make({ name: "Dr. Shrikrishna Chaudhari", qualification: "BAMS (MUHS)", clinic: "Narayani Clinic", address: "Swatantrya Chowk, Nishirabad, Jalgaon", mobile: "8007443191", city: "Jalgaon", district: "Jalgaon" }),
  make({ name: "Dr. Sandip Chaudhari", qualification: "BHMS", clinic: "Swasthya Clinic", address: "Indraprastha Nagar, Riksha Stop Javal, Federation Road, Jalgaon", mobile: "8275518710", city: "Jalgaon", district: "Jalgaon" }),
  make({ name: "Dr. Rajadeep Shimpi", qualification: "BAMS", registration: "I-96847-A", clinic: "Parth Clinic", address: "Kharjai Tarwale Road, Chalisgaon, Dist. Jalgaon", mobile: "9028902311", city: "Jalgaon", district: "Jalgaon" }),
  make({ name: "Dr. Nitin Jagtap", qualification: "", address: "Jalgaon", mobile: "9028461136", city: "Jalgaon", district: "Jalgaon" }),
  make({ name: "Dr. Nitin Patil", qualification: "", address: "Jalgaon", mobile: "9665324386", city: "Jalgaon", district: "Jalgaon" }),
  make({ name: "Dr. Vinod Patil", qualification: "BAMS", registration: "I-35653-A-1", address: "Jalgaon", mobile: "9422223241", city: "Jalgaon", district: "Jalgaon" }),
];

// ============================================================
// JALGAON — Amalner
// ============================================================
const amalnerDoctors: Doctor[] = [
  make({ name: "Dr. Hemant Kadam", qualification: "BAMS", clinic: "Tuljai Hospital", address: "Amalner", mobile: "9766241128", city: "Amalner", district: "Jalgaon" }),
  make({ name: "Dr. Pranjal Kadam", qualification: "BHMS, CCMP", clinic: "Sparsh Clinic", address: "Amalner", mobile: "9021753772", city: "Amalner", district: "Jalgaon" }),
  make({ name: "Dr. Vijay Kumar Thakre", qualification: "BHMS", clinic: "Siddhivinayak Clinic", address: "Mu./Po. Savde, Amalner", mobile: "9975647246", city: "Amalner", district: "Jalgaon" }),
  make({ name: "Dr. Chandrashekhar Patil", qualification: "BAMS, CCH, CGO", registration: "I-36822A", clinic: "Om Clinic", address: "Kubhi Nagar, Deokusin Road, Amalner", mobile: "9923298662", city: "Amalner", district: "Jalgaon" }),
  make({ name: "Dr. Devyani Badgujar", qualification: "BHMS", registration: "40301", specialization: "General Physician", address: "Shalom Nagar, Amalner", mobile: "9423488750", city: "Amalner", district: "Jalgaon" }),
  make({ name: "Dr. Dipali Salunke", qualification: "BHMS, CCMP", clinic: "Tejas Niman aani Hear Clinic", address: "Kranti Chowk, Shivaji Nagar, Shirpur Nakajaval, Amalner", mobile: "9766699822", city: "Amalner", district: "Jalgaon" }),
  make({ name: "Dr. Pooja Wadhnepejawani", qualification: "BAMS", clinic: "Sadguru Clinic", address: "Vitthalji Chowk, Gajanan Medical Javal, Tanhepur, Amalner", mobile: "9130002676", city: "Amalner", district: "Jalgaon" }),
  make({ name: "Dr. Nirja Maheshwari Mandm", qualification: "MD (Homeopathy)", registration: "57992", clinic: "Glosam Homeopathy Clinic", address: "Bhavat Road, Amalner", mobile: "9561572734", city: "Amalner", district: "Jalgaon" }),
  make({ name: "Dr. Mahmud Shekh", qualification: "BAMS, CCH, CGO", registration: "I-96166-A", clinic: "Madaar Clinic", address: "Shalom Nagar, Amalner", mobile: "8830563870", city: "Amalner", district: "Jalgaon" }),
  make({ name: "Dr. Ghanshyam Patil", qualification: "BAMS", registration: "I-62805-A", clinic: "Sarva Clinic & Cardio Care Center", address: "Sasubhuni Colony, Amalner", mobile: "9860902765", city: "Amalner", district: "Jalgaon" }),
  make({ name: "Dr. Dinesh Patil", qualification: "BAMS", clinic: "Dhanvantari Hospital", address: "Amalner", mobile: "985099805", city: "Amalner", district: "Jalgaon" }),
];

// ============================================================
// JALGAON — data-pending sub-cities kept empty
// ============================================================
const parolaDoctors: Doctor[] = [];
const chalisgaonDoctors: Doctor[] = [];
const pachoraDoctors: Doctor[] = [];
const bhadgaonDoctors: Doctor[] = [];

// ============================================================
// NASHIK — Nashik
// ============================================================
const nashikDoctors: Doctor[] = [
  make({ name: "Dr. Sunaina Bhujbal", qualification: "BAMS", clinic: "Vishuddhi Ayurvedic Wellness Center", address: "Samangaon Road, Indraprasth Line Javal, Nashik Road, Nashik", mobile: "9226366004", city: "Nashik", district: "Nashik" }),
  make({ name: "Dr. Vrushali Patil", qualification: "BAMS", registration: "42278-A1", clinic: "Avchit Clinic", address: "Pradhan Apartment, Dukan No. 1, Ashoka Road, Nashik", mobile: "9373943082", city: "Nashik", district: "Nashik" }),
  make({ name: "Dr. Suhas Kadam", qualification: "BAMS", clinic: "Shri Clinic", address: "Dukan No. 5, Kadam Park, Pithardi Naka, Nashik", mobile: "9665493225", city: "Nashik", district: "Nashik" }),
  make({ name: "Dr. Gyanikishore Dhorat", qualification: "BAMS", clinic: "Anjupraba Nursing Home", address: "Hanesh Nagar Amupgaon, Panchvati, Nashik", mobile: "9822851867", city: "Nashik", district: "Nashik" }),
  make({ name: "Dr. Rekha Chakote", qualification: "BAMS", clinic: "Ashirwad Clinic", address: "Saras Darshan, Anandnagar, Nashik Road, Nashik", mobile: "9420234386", city: "Nashik", district: "Nashik" }),
  make({ name: "Dr. Vandana Aher", qualification: "BAMS", clinic: "Icchamani Hospital", address: "Jail Road, Nashik Road, Nashik", mobile: "9403647871", city: "Nashik", district: "Nashik" }),
  make({ name: "Dr. Rohan Kumavat", qualification: "BAMS, MD (AM), MUHS", clinic: "Kumavat Clinic", address: "Jagadhsath Apartment, Juna Hotel, Nandur Naka Link Road, Nashik", mobile: "9403156049", city: "Nashik", district: "Nashik" }),
  make({ name: "Dr. Sachin Patil", qualification: "BHMS", clinic: "Shreeram Clinic", address: "Ganeshwadi, Sindkho, Nashik", mobile: "9823117812", city: "Nashik", district: "Nashik" }),
  make({ name: "Dr. Palhuvi Patil", qualification: "BHMS", clinic: "Sai Krupa Clinic", address: "Shri Bhakti Ro House 4, Adhar Nagar, Jail Road, Nashik Road, Nashik", mobile: "9370706662", city: "Nashik", district: "Nashik" }),
  make({ name: "Dr. Nita Patil", qualification: "", address: "Nashik", mobile: "9423150556", city: "Nashik", district: "Nashik" }),
  make({ name: "Dr. Rohit Devre", qualification: "BAMS", clinic: "Shri Sainath Clinic", address: "Nashik", mobile: "8007381928", city: "Nashik", district: "Nashik" }),
  make({ name: "Dr. Vipul Chavhan", qualification: "BAMS", registration: "I-116896-A", address: "Nashik", mobile: "9850815619", city: "Nashik", district: "Nashik" }),
  make({ name: "Dr. Shekhar Thapane", qualification: "BAMS", registration: "I-32641A-1", clinic: "Om Clinic", address: "Devlawadi Camp, Laam Road, Nashik", mobile: "9890902228", city: "Nashik", district: "Nashik" }),
  make({ name: "Dr. Smita Thapane", qualification: "BAMS", clinic: "Om Clinic", address: "Samangaon Road, Nashik", mobile: "9822678805", city: "Nashik", district: "Nashik" }),
  make({ name: "Dr. Yogesh Ganude", qualification: "BHMS (MUHS), PG DEMS", clinic: "Reva Clinic", address: "Sansari Gaon, Devalali Camp, Nashik", mobile: "9850883191", city: "Nashik", district: "Nashik" }),
  make({ name: "Dr. Ganesh Shivde", qualification: "BHMS, CCMP (MUHS)", clinic: "Shri Samarth Hospital", address: "Nashik", mobile: "9689158611", city: "Nashik", district: "Nashik" }),
  make({ name: "Dr. Gyaneshwar Borade", qualification: "BAMS", clinic: "Om Clinic", address: "Jail Road, Nashik Road, Nashik", mobile: "9850688489", city: "Nashik", district: "Nashik" }),
];

// ============================================================
// NASHIK — Malegaon
// ============================================================
const malegaonDoctors: Doctor[] = [
  make({ name: "Dr. Sachin Surana", qualification: "BAMS", registration: "A/34619/A/1", clinic: "Chaya Clinic", address: "Prithvi Apartment, Kachavahan Market Samor, Sadana Naka, Malegaon", mobile: "9423566229", city: "Malegaon", district: "Nashik" }),
  make({ name: "Dr. Ravindra Hire", qualification: "BAMS", registration: "I-41387-1", clinic: "Samarth Clinic", address: "Bank Colony, Sonagaon, Sadana Road, Malegaon", mobile: "9890376871", city: "Malegaon", district: "Nashik" }),
  make({ name: "Dr. Tuhar Prakash Shelar", qualification: "BAMS", clinic: "Aashirwad Clinic", address: "Pumpatai Hire Nagar, Bhavgaon Road, Malegaon", mobile: "7020287165", city: "Malegaon", district: "Nashik" }),
  make({ name: "Dr. Harish Aher", qualification: "BAMS", address: "Malegaon", mobile: "9922250625", city: "Malegaon", district: "Nashik" }),
  make({ name: "Dr. Abasaheb Jagtap", qualification: "BHMS, MUHS", registration: "44076", clinic: "Sudha Hospital", address: "Ram Mandirjaval, Yesgaon Bike, Sa. Mandirjaval, Sa. Nashik", mobile: "9921626243", city: "Malegaon", district: "Nashik" }),
  make({ name: "Dr. Madhuri Suryavanshi", qualification: "BAMS", registration: "60661", clinic: "Suryavanshi Homeopathy Clinic", address: "Dike Chowk, Sonagaon, Malegaon", mobile: "9923766549", city: "Malegaon", district: "Nashik" }),
  make({ name: "Dr. Hemangi Suryavanshi", qualification: "BHMS", clinic: "Shreeram Clinic", address: "Samor, Nanavati Petrol Pump, Pancheshwari, Malegaon", mobile: "9403517050", city: "Malegaon", district: "Nashik" }),
  make({ name: "Dr. Rupali Pagar", qualification: "BHMS, CCMP", clinic: "Vithai Clinic", address: "Panchganga, Nanavati Petrol Pump, Malegaon", mobile: "8329299945", city: "Malegaon", district: "Nashik" }),
  make({ name: "Dr. C. Sima Salunke", qualification: "BAMS (MUHS)", registration: "I-81120-A", clinic: "Mauli Hospital", address: "Mu./Po. Sakarkawadi, Malegaon 423208", mobile: "9552548333", city: "Malegaon", district: "Nashik" }),
  make({ name: "Dr. Pravin Salunke", qualification: "BAMS (MUHS)", registration: "I-56721-A", clinic: "Mauli Hospital", address: "Mu./Po. Sakarkawadi, Malegaon 423208", mobile: "9552548333", city: "Malegaon", district: "Nashik" }),
  make({ name: "Dr. Sagar Kakde", qualification: "BAMS", clinic: "Sukhakar Clinic", address: "Kushinagar, Dabhadi Road, Malegaon", mobile: "7020382634", city: "Malegaon", district: "Nashik" }),
  make({ name: "Dr. Rahul Balwant Devre", qualification: "BAMS", specialization: "Primary Health Care", address: "Malegaon", mobile: "9921502717", city: "Malegaon", district: "Nashik" }),
  make({ name: "Dr. Alishan Hire", qualification: "BAMS", registration: "I-46742-A", clinic: "Vidyalayajawali Hospital", address: "Kusumba Road, Karanjakhaan, Malegaon", mobile: "9923123347", city: "Malegaon", district: "Nashik" }),
  make({ name: "Dr. Palhuvi Hire", qualification: "BHMS, CGO", registration: "I-55647-A", clinic: "Vidyalayajawali Hospital", address: "Kusumba Road, Karanjakhaan, Malegaon", mobile: "9923123347", city: "Malegaon", district: "Nashik" }),
  make({ name: "Dr. Yogendra Pawar", qualification: "BAMS", clinic: "Yashwant Clinic", address: "Karanjakhaan, Malegaon", mobile: "9730366005", city: "Malegaon", district: "Nashik" }),
];

// ============================================================
// NASHIK — Nampur
// ============================================================
const nampurDoctors: Doctor[] = [
  make({ name: "Dr. Ganesh Shivde", qualification: "BHMS, CCMP (MUHS)", clinic: "Shri Samarth Hospital", address: "Nampur", mobile: "9689158611", city: "Nampur", district: "Nashik" }),
  make({ name: "Dr. Kiran Borase", qualification: "BAMS", clinic: "Mai Santoshi Clinic", address: "Jaikheda, Nampur", mobile: "9421502132", city: "Nampur", district: "Nashik" }),
  make({ name: "Dr. Kishor Kapadnis", qualification: "BAMS", clinic: "Manjulai Clinic", address: "Marathi Shala Samor, Aaskheda, Nampur", mobile: "9730777734", city: "Nampur", district: "Nashik" }),
];

// ============================================================
// THANE — Thane
// ============================================================
const thaneDoctors: Doctor[] = [
  make({ name: "Dr. Divyata Mokal", qualification: "BHMS", clinic: "Dhanvantari Clinic", address: "Suvidhanagar, Vitawa, Thane", mobile: "9324982363", city: "Thane", district: "Thane" }),
  make({ name: "Dr. Mina Seth", qualification: "BHMS", address: "Dhanpan Chowk, Gurudwar (P), Thane", mobile: "9892722823", city: "Thane", district: "Thane" }),
  make({ name: "Dr. Rashmi Mane", qualification: "BAMS", clinic: "Dr. Rashmi Ganesh Clinic", address: "Om Sagar Sahakari Sanstha, Thane", mobile: "8650352356", city: "Thane", district: "Thane" }),
  make({ name: "Dr. Sunita Bhagat", qualification: "BAMS, MD", address: "Pinnacle Tower Chowk, Thane", mobile: "7718965225", city: "Thane", district: "Thane" }),
  make({ name: "Dr. Rupali Chandane", qualification: "DHMS, CCMP", registration: "21564", clinic: "Sai Janaki Clinic", address: "Shive No. 1, Sarkar Mandir Samor, Kasawa Road, Thane", mobile: "9322869548", city: "Thane", district: "Thane" }),
  make({ name: "Dr. Shalesh Chandane", qualification: "DHMS (CCH), CCMP", address: "Pramod Niwas Cooperative, Shankar Mandir Samor, Juna Belapur Road, Thane", mobile: "9897117550", city: "Thane", district: "Thane" }),
  make({ name: "Dr. Sachin Ghate", qualification: "BAMS, PHC", registration: "I-25678-A1", clinic: "Vaital Dispensary", address: "Tagorewadi, Phish Mandir Javal, Kalvan(P), Thane", mobile: "9821419571", city: "Thane", district: "Thane" }),
  make({ name: "Dr. Pavan Dhoke", qualification: "BAMS", clinic: "Shivnhat Clinic", address: "Kopari, Thane", mobile: "7367803352", city: "Thane", district: "Thane" }),
  make({ name: "Dr. Dinesh Padwal", qualification: "BAMS", registration: "I-25742A-1", clinic: "Dhanvantari Clinic", address: "Shikawa, Belapur Road, Thane", mobile: "9822266342", city: "Thane", district: "Thane" }),
  make({ name: "Dr. P.T. Chajed", qualification: "DHMS, CCMP", clinic: "Prasara Clinic", address: "Ginjer Hatdon Samor, Thane", mobile: "9821442272", city: "Thane", district: "Thane" }),
  make({ name: "Dr. Sandip Harne", qualification: "BAMS (MUHS)", registration: "I-45992-A", clinic: "Sona Clinic", address: "Kadambari Residence, Thane", mobile: "9833442744", city: "Thane", district: "Thane" }),
  make({ name: "Dr. Prakash Phatkar", qualification: "BHMS, CGO", registration: "26200", address: "Dhanvantari Tower, Shakarnagar Naka, Thane", mobile: "9223271951", city: "Thane", district: "Thane" }),
  make({ name: "Dr. Jayshri Patil", qualification: "BAMS", registration: "I-28276-A1", clinic: "Shri Clinic", address: "Thane", mobile: "9882205674", city: "Thane", district: "Thane" }),
  make({ name: "Dr. Atul Nerkar", qualification: "BAMS", registration: "I-41383-A-1", clinic: "Pahaway Clinic", address: "Pokharno Road, Thane", mobile: "8291375375", city: "Thane", district: "Thane" }),
  make({ name: "Dr. Parag Mehta", qualification: "BAMS", registration: "I-41383-A-1", clinic: "Dr. Parag Mehta Clinic", address: "Pokharno Road, Thane", mobile: "9892370052", city: "Thane", district: "Thane" }),
  make({ name: "Dr. Sukanya Joshi", qualification: "DHMS (Mumbai)", address: "Thane", mobile: "8104042473", city: "Thane", district: "Thane" }),
  make({ name: "Dr. Haridas Bankar", qualification: "BAMS", clinic: "Sanjeevani Clinic", address: "Kabwa, Thane", mobile: "9667965874", city: "Thane", district: "Thane" }),
  make({ name: "Dr. Dhananjay Patil", qualification: "DHMS", registration: "23677", clinic: "Shri Clinic", address: "Thane", mobile: "9769915970", city: "Thane", district: "Thane" }),
  make({ name: "Dr. Vaishali Vasule", qualification: "BAMS", clinic: "Darshan Clinic", address: "Vatsulamonde Complex, Thane", mobile: "9224729284", city: "Thane", district: "Thane" }),
  make({ name: "Dr. Shrinal Firke", qualification: "BAMS", clinic: "Aditya Clinic", address: "Thane", mobile: "9833272900", city: "Thane", district: "Thane" }),
  // Kalwa, Thane
  make({ name: "Dr. Madhura Kulkarni", qualification: "MDS", clinic: "Bhuja Clinic", address: "Kopanali Tower, 3 Vitthalji Road, Thane", mobile: "9892444924", city: "Thane", district: "Thane" }),
  make({ name: "Dr. Sunita Salunke", qualification: "BAMS", registration: "I-22442-A1", address: "Hirabai Niwas, Ravindra Hotel Complex Javal, Khargaon, Thane", mobile: "9869942893", city: "Thane", district: "Thane" }),
  make({ name: "Dr. Amrut Salunke", qualification: "BAMS, MD (Shalakya Opth & ENT)", registration: "I-10879-A1", address: "Hirabai Niwas, Ravindra Hotel Javal, Khargaon, Thane", mobile: "9819133017", city: "Thane", district: "Thane" }),
  make({ name: "Dr. Kailas Shinde", qualification: "BAMS", clinic: "Shri Siddhivinayak Clinic", address: "Kalwa, Thane", mobile: "9920153265", city: "Thane", district: "Thane" }),
  make({ name: "Dr. Vijay Prakash Rao", qualification: "BAMS", clinic: "Saraswati Clinic", address: "Filsatuwada, AR Road, Pavai, Mumbai", mobile: "9819397630", city: "Thane", district: "Thane" }),
];

// ============================================================
// EXPORTS
// ============================================================
export const getAllDoctors = (): Doctor[] => [
  ...dhuleHeadOffice,
  ...shirpurDoctors,
  ...nardanaDoctors,
  ...shahadaDoctors,
  ...dondaichaDoctors,
  ...sakriDoctors,
  ...jalgaonDoctors,
  ...amalnerDoctors,
  ...parolaDoctors,
  ...chalisgaonDoctors,
  ...pachoraDoctors,
  ...bhadgaonDoctors,
  ...nashikDoctors,
  ...malegaonDoctors,
  ...nampurDoctors,
  ...thaneDoctors,
];
