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

const COMMON_NUMBER = "+917030666321";

// ============================================================
// SAKRI DOCTORS
// ============================================================
const sakriDoctors: Doctor[] = [
  { name: "Dr. Chandrakant Shinde", qualification: "BAMS, CCH", registration: "I-51329-A", address: "Shree Samarth Clinic, Santoshi Mata Chauk, Vanjara Galli, Sakri", mobile: COMMON_NUMBER, active: true, city: "Sakri", district: "Dhule", image: "" },
  { name: "Dr. Kamlesh Patil", qualification: "BAMS", address: "Bhatai Clinic, Nijampur, Sakri", mobile: COMMON_NUMBER, active: true, city: "Sakri", district: "Dhule", image: "" },
  { name: "Dr. Malik Mansuri", qualification: "BAMS, CCH", address: "Seva Clinic, Bus Stand Road, Mhasdi, Sakri", mobile: COMMON_NUMBER, active: true, city: "Sakri", district: "Dhule", image: "" }
];

// ============================================================
// NAMPUR DOCTORS
// ============================================================
const nampurDoctors: Doctor[] = [
  { name: "Dr. Kiran Borse", qualification: "BAMS", address: "Ma Santoshi Clinic, Jaykheda, Nampur", mobile: COMMON_NUMBER, active: true, city: "Nampur", district: "Nashik", image: "/__l5e/assets-v1/51a606f9-dc62-4f96-946b-da67463456cc/Dr Kiran Borse.jpg" },
  { name: "Dr. Kishor Kapadnis", qualification: "BAMS", address: "Manjulai Clinic, Opp. Marathi Shala, Askheda, Nampur", mobile: COMMON_NUMBER, active: true, city: "Nampur", district: "Nashik", image: "/__l5e/assets-v1/1d5fe06e-1b1d-4f41-85ff-869351d79edb/Dr Kishor Kapadnis.jpg" },
  { name: "Dr. Ganesh Shivade", qualification: "BHMS, CCMP (MUHS)", address: "Shree Samarth Hospital, Nampur", mobile: COMMON_NUMBER, active: true, city: "Nampur", district: "Nashik", image: "/__l5e/assets-v1/5f06b855-6343-4858-96ad-e3681c147ce9/Dr Ganesh Shivde.jpg" },
  { name: "Dr. Harshal Bhamre", qualification: "", address: "Nampur", mobile: COMMON_NUMBER, active: true, city: "Nampur", district: "Nashik", image: "" },
  { name: "Dr. Yogesh Pagar", qualification: "BHMS", registration: "42379", address: "Yashwant Clinic, Damodar Complex, Nampur", mobile: COMMON_NUMBER, active: false, city: "Nampur", district: "Nashik", image: "" }
];

// ============================================================
// SHIRPUR DOCTORS
// ============================================================
const shirpurDoctors: Doctor[] = [
  { name: "Dr. Atul Badgujar", qualification: "B.A.M.S.(C.C.H.), (F.I.S.H.)", registration: "I-34317-A-1", address: "Vyankatesh Clinic, Near Nagarpalika, Shirpur", mobile: COMMON_NUMBER, active: true, city: "Shirpur", district: "Dhule", image: "/__l5e/assets-v1/a804f5b3-bc33-41dc-853f-e920c2a62b5d/Dr Atul Badjugar.jpg" },
  { name: "Dr. Ashish Patil", qualification: "BAMS", registration: "I-37965A-1", address: "Seva Clinic, A.B. Road, Dahivad, Shirpur", mobile: COMMON_NUMBER, active: true, city: "Shirpur", district: "Dhule", image: "/__l5e/assets-v1/81f1027f-f0a2-44be-96a2-58cdd258d6cf/Dr Ashish Patil.jpg" },
  { name: "Dr. Rajesh Deore", qualification: "BHMS", address: "Samarth Clinic, Khanderao Mandir, Shirpur", mobile: COMMON_NUMBER, active: true, city: "Shirpur", district: "Dhule", image: "/__l5e/assets-v1/5d1e96a9-e312-4f18-a596-b2346b787cb7/Dr Dr Rajesh Deore.jpg" },
  { name: "Dr. Yogesh Jadhav", qualification: "B.A.M.S.(C.C.H.), (C.G.O.)", registration: "35989", address: "Pratap Clinic, Near Balaji Mandir, Khalache Gaon, Shirpur", mobile: COMMON_NUMBER, active: true, city: "Shirpur", district: "Dhule", image: "/__l5e/assets-v1/a7c6bd83-d8d2-4083-a052-75d8f8a54c71/Dr Yogesh jadhav.jpg" },
  { name: "Dr. Vijay Suryavanshi", qualification: "B.A.M.S.", registration: "I-58828-A-1", address: "Mangalmurti Clinic, Badgujar Complex, Karwand Naka Road, Shirpur", mobile: COMMON_NUMBER, active: true, city: "Shirpur", district: "Dhule", image: "/__l5e/assets-v1/cb1bc585-ef21-4196-8d8b-e69f5ce48af4/Dr Vijay Suryawanhi.jpg" },
  { name: "Dr. Sisodiya Pratikkumar", qualification: "BAMS", registration: "I-42414 A-1", address: "Niramay Clinic, Melane Road, Near Over Bridge, Nardana, Shirpur", mobile: COMMON_NUMBER, active: true, city: "Shirpur", district: "Dhule", image: "/__l5e/assets-v1/f15e76dc-639e-4b0d-8a0e-d98d71a6528a/Dr Pratikkumar Sisodiya.jpg" }
];

// ============================================================
// DONDAICHA DOCTORS
// ============================================================
const dondaichaDoctors: Doctor[] = [
  { name: "Dr. Kunal Bachhav", qualification: "M.S.", registration: "I-60021-A", address: "Shree Rajratna Surgical and General Hospital, Dondaicha", mobile: COMMON_NUMBER, active: true, city: "Dondaicha", district: "Dhule", image: "/__l5e/assets-v1/3edba1ec-26d5-449c-a687-6890fa54b672/Dr Kunal Bachchav.jpg" },
  { name: "Dr. Kunal Thorat", qualification: "BHMS, CCMP", registration: "54085", address: "Dattasai Clinic, Shop No 60, Indira Market, Bajarpeth, Dondaicha", mobile: COMMON_NUMBER, active: true, city: "Dondaicha", district: "Dhule", image: "/__l5e/assets-v1/7867f4e0-6181-4dd3-b48b-6a6d2d24c9b6/Dr Kunal Thorat.jpg" },
  { name: "Dr. Swati Sonawane", qualification: "BAMS", registration: "I-41242", address: "Sonawane Hospital, Station Road, Dondaicha", mobile: COMMON_NUMBER, active: true, city: "Dondaicha", district: "Dhule", image: "/__l5e/assets-v1/9eb5e104-f9e9-4e5e-8f14-1c4e327bdeef/Dr Swati Sonawane.jpg" },
  { name: "Dr. Sham Thakur", qualification: "BAMS", address: "Mhasavad, Dondaicha", mobile: COMMON_NUMBER, active: true, city: "Dondaicha", district: "Dhule", image: "/__l5e/assets-v1/95a68b3e-5d05-4ce3-ba23-b760f6bfc007/Dr Shyan Thakur.jpg" },
  { name: "Dr. Anil Dhangar", qualification: "BHMS, CCMP", registration: "37686", address: "Shree Clinic, Near Om Shanti Mandir, Opp Hasti School, Indira Market, Bajarpeth, Dondaicha", mobile: COMMON_NUMBER, active: true, city: "Dondaicha", district: "Dhule", image: "/__l5e/assets-v1/723c054f-2227-4d80-a239-b101d3d4e757/Dr Anil Dhangar.jpg" }
];

// ============================================================
// PAROLA DOCTORS
// ============================================================
const parolaDoctors: Doctor[] = [
  { name: "Dr. Aanant Pawar", qualification: "B.A.M.S.", address: "Prasad Hospital, Talav Galli, Bajar Peth, Parola", mobile: COMMON_NUMBER, active: true, city: "Parola", district: "Jalgaon", image: "/__l5e/assets-v1/efda21d6-71b2-4960-ba47-708dfb25788b/Dr Anant Pawar.jpg" },
  { name: "Dr. Gopal Shimpi", qualification: "BAMS", address: "Savitrinagar, Balaji Park, Parola", mobile: COMMON_NUMBER, active: true, city: "Parola", district: "Jalgaon", image: "/__l5e/assets-v1/bb55f80f-ad3e-4985-aae2-0d2582c4e69d/Dr Gopal Shimpi.jpg" },
  { name: "Dr. Suresh Patil", qualification: "BAMS, CCH", registration: "I-35541-A1", address: "Shraddha Hospital, Kajgaon Road, Bhadgaon Naka, Parola", mobile: COMMON_NUMBER, active: true, city: "Parola", district: "Jalgaon", image: "/__l5e/assets-v1/f9c35341-7ca9-4e78-88d9-a65711561d02/Dr Suresh Patil.jpg" },
  { name: "Dr. Chetan Karodpati", qualification: "BAMS", address: "Umang Hospital, Kajgaon Road, Bhadgaon Naka, Parola", mobile: COMMON_NUMBER, active: true, city: "Parola", district: "Jalgaon", image: "/__l5e/assets-v1/6658b0bb-363b-4cad-afe6-af727496a17a/Dr Chetan Kardopati.jpg" },
  { name: "Dr. Purshottam Patil", qualification: "B.A.M.S.", registration: "I-59566-A", address: "Nityanand Hospital, Tambe Nagar, Karanjgaon Road, Parola", mobile: COMMON_NUMBER, active: true, city: "Parola", district: "Jalgaon", image: "/__l5e/assets-v1/a4a59cea-b90f-4de2-a4a1-4fa9300034a0/Dr Puroshattam Patil.jpg" },
  { name: "Dr. Pravin Patil", qualification: "B.A.M.S.", address: "Shree Sailils Hospital, Chorvad Road, Parola", mobile: COMMON_NUMBER, active: true, city: "Parola", district: "Jalgaon", image: "/__l5e/assets-v1/ca8720fb-5832-4516-826c-c00ceec9c695/Dr Pravin Patil.jpg" }
];

// ============================================================
// CHALISGAON DOCTORS
// ============================================================
const chalisgaonDoctors: Doctor[] = [
  { name: "Dr. Pankaj Patil", qualification: "BAMS, D.Y.A., C.S.D.", registration: "I-66014-A", address: "Sharda Clinic, L-47/48, Nagarpalika Shopping Complex, Opp. Rashtriy Mahavidyalay, Hirapur Road, Chalisgaon", mobile: COMMON_NUMBER, active: true, city: "Chalisgaon", district: "Jalgaon", image: "/__l5e/assets-v1/db421f16-5cf9-4d20-bf44-fe407d553b8b/Dr Pankaj Patil.jpg" },
  { name: "Dr. Ketan Patil", qualification: "", address: "Chalisgaon", mobile: COMMON_NUMBER, active: true, city: "Chalisgaon", district: "Jalgaon", image: "" },
  { name: "Dr. Amit Shitole", qualification: "BAMS, PGDEMS", registration: "I-57163A", address: "Shitole Hospital, Anandsmruti, Near Bus Stand, Patnadevi, Chalisgaon", mobile: COMMON_NUMBER, active: true, city: "Chalisgaon", district: "Jalgaon", image: "/__l5e/assets-v1/c6cfe700-e750-4f2a-8c55-8b10412fddbd/Dr Amit Shitode.jpg" },
  { name: "Dr. Sarang Patil", qualification: "", address: "Chalisgaon", mobile: COMMON_NUMBER, active: true, city: "Chalisgaon", district: "Jalgaon", image: "/__l5e/assets-v1/5fe43373-9061-4f57-8ab4-ad38f494344f/Dr Sarang Patil.jpg" },
  { name: "Dr. Premanand Bhosale", qualification: "", address: "Chalisgaon", mobile: COMMON_NUMBER, active: true, city: "Chalisgaon", district: "Jalgaon", image: "/__l5e/assets-v1/b9027938-fa4e-412b-876c-e8194dfe35ff/Dr Premanand Bhosle.jpg" },
  { name: "Dr. Pushkar Ghate", qualification: "BAMS", address: "Ghate Clinic, Captain Corner, Chalisgaon", mobile: COMMON_NUMBER, active: true, city: "Chalisgaon", district: "Jalgaon", image: "/__l5e/assets-v1/3ca6f7f2-41d6-4ad2-bebf-c135443c85e2/Dr Pushkar Ghate.jpg" },
  { name: "Dr. Smita Ghate", qualification: "BAMS", registration: "I33101 A-1", address: "Ghate Clinic, Captain Corner, Chalisgaon", mobile: COMMON_NUMBER, active: true, city: "Chalisgaon", district: "Jalgaon", image: "/__l5e/assets-v1/da5eacba-6941-40b7-bb56-f52336ba3acd/Dr Samita Ghate.jpg" },
  { name: "Dr. Nitin Chavan", qualification: "", address: "Chalisgaon", mobile: COMMON_NUMBER, active: true, city: "Chalisgaon", district: "Jalgaon", image: "/__l5e/assets-v1/571c9cd3-ac33-4ddb-99ca-554267c192f7/Dr nitin Chavhan.jpg" },
  { name: "Dr. Nitin Salunkhe", qualification: "BAMS", registration: "62217-A", address: "Aayush Clinic, Behind Sadanand Hotel, Chaudharivada, Chalisgaon", mobile: COMMON_NUMBER, active: true, city: "Chalisgaon", district: "Jalgaon", image: "/__l5e/assets-v1/62eb4b05-fb94-4a37-957d-6f97f77722f7/Dr nitin Salunkhe.jpg" }
];

// ============================================================
// AMALNER DOCTORS
// ============================================================
const amalnerDoctors: Doctor[] = [
  { name: "Dr. Vijaykumar Thakare", qualification: "BHMS", address: "Siddhivinayak Clinic, A/P Wavde, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon", image: "/__l5e/assets-v1/4622275f-6fed-4188-bd04-a30df83989f6/Dr Vijay Thakur.jpg" },
  { name: "Dr. Pranjal Kadam", qualification: "BHMS/CCMP", address: "Sparsh Clinic, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon", image: "/__l5e/assets-v1/9d8b8780-bf46-45a6-b129-10604103bb28/Dr Pranjal Kadam.jpg" },
  { name: "Dr. Devyani Badgujar", qualification: "BHMS", registration: "40301", address: "General Physician, Shalam Nagar, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon", image: "/__l5e/assets-v1/86ac9fdf-d4cd-4f2f-a4a8-bb97658e7ca4/Dr Devyani Badgujar.jpg" },
  { name: "Dr. Hemant Kadam", qualification: "BAMS", address: "Tuljai Hospital, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon", image: "/__l5e/assets-v1/278374d6-d5dc-4c83-be1e-52eb568ea72a/Dr Hemant Kadam.jpg" },
  { name: "Dr. Rajendra Thakre", qualification: "BAMS, M.D.", address: "Thakare Balrugnalay, Opp. Bus Stand, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon", image: "" },
  { name: "Dr. Anjali Chauhan", qualification: "BHMS, CCH", registration: "A-1-15625", address: "Rugna Seva Hospital, Opp. Bus Stand, Bhagvat Road, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon", image: "" },
  { name: "Dr. Deepali Salunke", qualification: "BHMS, CCMP", address: "Tejas Skin & Hair Clinic, Kranti Chowk, Shivaji Nagar, Near Shirur Naka, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon", image: "/__l5e/assets-v1/86f3a647-7364-4ef6-9b34-bc655723fea6/Dr Deepali Salunkhe.jpg" },
  { name: "Dr. Milind Patil", qualification: "BHMS, CCMP (MUHS)", registration: "51244", address: "Nirmal Clinic, Janve, Tal Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon", image: "" },
  { name: "Dr. Chandrashekhar Patil", qualification: "B.A.M.S., C.C.H., C.G.O.", registration: "I-36822A", address: "Om Clinic, Krushi Nagar, Dheku Sim Road, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon", image: "/__l5e/assets-v1/e930c5bb-4e0e-46fd-bd1b-b66e96285162/Dr Chandrashekhar Patil.jpg" },
  { name: "Dr. Dinesh Patil", qualification: "BAMS", address: "Dhanwantari Hospital, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon", image: "/__l5e/assets-v1/1db45f2b-28d8-43f4-826e-4f86f76cec78/Dr Dinesh Patil.jpg" },
  { name: "Dr. Ghanshyam Patil", qualification: "BAMS", registration: "I-62805-A", address: "Sarvajna Clinic, Saptashrungi Colony, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon", image: "/__l5e/assets-v1/10b439df-0f37-4e52-9e18-ab8e33c846bb/Dr Ghanshyam Patil.jpg" },
  { name: "Dr. Vishal Badgujar", qualification: "BAMS", registration: "I-49131-A", address: "Arodyam Hospital, Opp. Swami Samarth Kendra, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon", image: "" },
  { name: "Dr. Mahemood Shaikh", qualification: "BAMS, C.C.H., C.G.O.", registration: "I-96166-A", address: "Madar Clinic, Shalam Nagar, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon", image: "/__l5e/assets-v1/1116c40d-9af9-4b38-9e58-66f144eb1757/Dr Mehmood Shaikh.jpg" },
  { name: "Dr. Pooja Waghule Panjwani", qualification: "B.A.M.S.", address: "Sadguru Clinic, Shivshakti Chowk, Near Gajanan Medical, Tambepura, Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon", image: "/__l5e/assets-v1/17073474-7465-48fe-ae16-4f66da052450/Dr Pooja Panjawani.jpg" },
  { name: "Dr. Chetan Patil", qualification: "", address: "Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon", image: "" },
  { name: "Dr. Sachin Patil", qualification: "", address: "Amalner", mobile: COMMON_NUMBER, active: true, city: "Amalner", district: "Jalgaon", image: "" }
];

// ============================================================
// MALEGAON DOCTORS
// ============================================================
const malegaonDoctors: Doctor[] = [
  { name: "Dr. Abasaheb Jagtap", qualification: "BHMS, MUHS", registration: "44076", address: "Suyash Hospital, Yesgaon Bk, Tal Malegaon, Nashik", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik", image: "/__l5e/assets-v1/928c3b1c-8625-4f85-acfa-613b7bcedcb2/Dr Abasahed Jagtap.jpg" },
  { name: "Dr. Alishan Hire", qualification: "BAMS", registration: "I 46742 A", address: "Vidhyvasini Hospital, Karanjgavhan, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik", image: "/__l5e/assets-v1/4ff71265-431e-4405-a672-be6364849e62/Dr Alishan Hire.jpg" },
  { name: "Dr. Pallavi Hire", qualification: "BHMS, CCH, CGO", registration: "55647", address: "Vidhyvasini Hospital, Karanjgavhan, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik", image: "/__l5e/assets-v1/01ee98ff-54da-4d46-b1f9-a034a3ce6865/Dr Pallavi Hire.jpg" },
  { name: "Dr. Madhuri Suryavanshi", qualification: "BHMS", registration: "60661", address: "Suryawanshi Homeopathy Clinic, DK Chowk, Soyegaon, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik", image: "/__l5e/assets-v1/6d556e89-e8ff-4f98-8d7a-1b53e49f1b86/Dr Madhuri Suryawanshi.jpg" },
  { name: "Dr. Ravindra Hire", qualification: "BAMS", address: "Samarth Clinic, Bank Colony, Soyegaon, Satana Road, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik", image: "/__l5e/assets-v1/22577af2-fae4-4ab4-a708-baf83228faa2/Dr Ravindra Hire.jpg" },
  { name: "Dr. Sachin Surana", qualification: "BAMS", registration: "A/34619/A/1", address: "Chhaya Clinic, Pruthvi Apartment, Front Kathwala Market, Satana Naka, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik", image: "/__l5e/assets-v1/1f20945c-52b0-4509-ae99-6f38edd0d264/Dr Sachin Surana.jpg" },
  { name: "Dr. Tushar Prakash Shelar", qualification: "BAMS", address: "Ashirvad Clinic, Pushpatai Hire Nagar, Bhayegaon Road, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik", image: "/__l5e/assets-v1/afee12d2-f7f2-4aa0-aa03-2f36b7dadf27/Dr Tushar Shelar.jpg" },
  { name: "Dr. Yogendra Pawar", qualification: "BAMS", address: "Yashvant Clinic, Karanjgavhan, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik", image: "/__l5e/assets-v1/d4bcd2a4-3b74-4379-a7c7-44fba3975617/Dr Yogendra Pawar.jpg" },
  { name: "Dr. Ramesh Gavhane", qualification: "DHMS/CCMP", address: "Nimgaon Sai Samarth Clinic, Nimgaon, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik", image: "" },
  { name: "Dr. Hemangi Suryavanshi", qualification: "BHMS", address: "Shriram Clinic, Saundane, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik", image: "/__l5e/assets-v1/863c1f7b-53cc-4a52-9f4f-7791680edc18/Dr Hemangi Suryawanshi.jpg" },
  { name: "Dr. Rupali Pagar", qualification: "BHMS, CCH, CGO, CCMP", address: "Vithai Clinic, Panchganga, Nanavati Petrol Pump, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik", image: "/__l5e/assets-v1/1dde800a-caea-41a6-b67a-49683d46968a/Dr Rupali Pagar.jpg" },
  { name: "Dr. Sagar Kakde", qualification: "BAMS", address: "Sukhkarta Clinic, Krushinagar, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik", image: "/__l5e/assets-v1/779882c2-4c28-4c34-a47a-9b4641b51121/Dr Sagar Kakde.jpg" },
  { name: "Dr. Pravin Salunke", qualification: "BAMS", address: "Mauli Hospital, A/P Savkar Wadi, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik", image: "/__l5e/assets-v1/613b8296-816e-4a06-bff7-b937639cc6a9/Dr Pravin Salunkhe.jpg" },
  { name: "Dr. Seema Salunke", qualification: "BAMS", address: "Mauli Hospital, A/P Savkar Wadi, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik", image: "/__l5e/assets-v1/84036e97-f064-45b2-8ff0-bb00e5b205f3/Dr Seema Salunke.jpg" },
  { name: "Dr. Harish Ahire", qualification: "BAMS", address: "Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik", image: "/__l5e/assets-v1/5b8ffb2c-a799-4d2d-9129-b79981c05db2/Dr Harish Aher.jpg" },
  { name: "Dr. Sujata Patil", qualification: "BHMS", address: "Jyoti Nagar, Sangameshwar, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik", image: "" },
  { name: "Dr. Rakesh Deore", qualification: "BHMS", address: "Rameshwar, Malegaon", mobile: COMMON_NUMBER, active: true, city: "Malegaon", district: "Nashik", image: "" }
];

// ============================================================
// JALGAON DOCTORS
// ============================================================
const jalgaonDoctors: Doctor[] = [
  { name: "Dr. Minakshi Patil", qualification: "BAMS", address: "Mauli Maternity & Nursing Home, Walmic Nagar, Asoda Road, Jalgaon", mobile: COMMON_NUMBER, active: true, city: "Jalgaon", district: "Jalgaon", image: "/__l5e/assets-v1/11ffd8c7-7e55-448c-8dc9-c53a5f0e83c4/Dr Minakshi Patil.jpg" },
  { name: "Dr. Digambar D Ugale", qualification: "BAMS", registration: "I-21340-A1", address: "Dhanwantari Clinic, 33/A, Sant Gulab Baba Colony, Meharun Road, Jalgaon", mobile: COMMON_NUMBER, active: true, city: "Jalgaon", district: "Jalgaon", image: "/__l5e/assets-v1/7af9822f-51f0-4b9f-b358-8b0f67ed44e6/Dr Digambar Ugle.jpg" },
  { name: "Dr. Nitin Patil", qualification: "", address: "Shree Sai Clinic, Khote Nagar Stop, Sant Mirabai Nagar Road, Jalgaon", mobile: COMMON_NUMBER, active: true, city: "Jalgaon", district: "Jalgaon", image: "" },
  { name: "Dr. Snehal Chaudhari", qualification: "BAMS", address: "Shree Sai Clinic, Khotenagar Stop, Sant Mirabai Nagar Road, Jalgaon", mobile: COMMON_NUMBER, active: true, city: "Jalgaon", district: "Jalgaon", image: "/__l5e/assets-v1/012269a0-155e-4059-ab64-542ac84cad04/Dr Snehal Chaudhari.jpg" },
  { name: "Dr. Sandeep Chaudhari", qualification: "BHMS", address: "Swasth Clinic, Indraprasth Nagar, Federation Road, Jalgaon", mobile: COMMON_NUMBER, active: true, city: "Jalgaon", district: "Jalgaon", image: "/__l5e/assets-v1/1c7ff3aa-d78f-4834-b98a-2ff39df62e7e/Dr Sandeep Chaudhari.jpg" },
  { name: "Dr. Shrikrishna Chaudhari", qualification: "BAMS, FEM, CCH, CGO", registration: "I-101451-A", address: "Narayani Clinic, Vedant Medical, Swatantrya Chowk, Nashirabad, Jalgaon", mobile: COMMON_NUMBER, active: true, city: "Jalgaon", district: "Jalgaon", image: "/__l5e/assets-v1/bbe46e1a-a6d9-45a2-a688-d9d05daee104/Dr Shreekrushna Chaudhari.jpg" },
  { name: "Dr. Rajdeep G Shimpi", qualification: "BAMS, PGDEMS, CGO, CCH, CSV", registration: "I-96847-A", address: "Parth Clinic Day Care Center, Jalgaon", mobile: COMMON_NUMBER, active: true, city: "Jalgaon", district: "Jalgaon", image: "" },
  { name: "Dr. Nilesh Jagtap", qualification: "", address: "Jalgaon", mobile: COMMON_NUMBER, active: true, city: "Jalgaon", district: "Jalgaon", image: "" },
  { name: "Dr. Sonali Mantri", qualification: "BAMS, Pune", registration: "I-34544 A-1", address: "Shree Clinic, Mehrun Near D-Mart, Shirsoli Naka, Jalgaon", mobile: COMMON_NUMBER, active: true, city: "Jalgaon", district: "Jalgaon", image: "/__l5e/assets-v1/3cad9c05-94c8-47aa-8729-89b548e09983/Dr Sonali Mantri.jpg" },
  { name: "Dr. Vinod Patil", qualification: "BAMS", registration: "I-35653-A-1", address: "Mauli Maternity & Nursing Home, Walmic Nagar, Asoda Road, Jalgaon", mobile: COMMON_NUMBER, active: true, city: "Jalgaon", district: "Jalgaon", image: "/__l5e/assets-v1/fa33cbdd-02b4-4f70-b727-a26c675e9e0a/Dr Vinod Patil.jpg" }
];

// ============================================================
// NASHIK DOCTORS
// ============================================================
const nashikDoctors: Doctor[] = [
  { name: "Dr. Sunaina Bhujbal", qualification: "BAMS", address: "Harmika Clinic, Samangaon Road, Near Indraprast Lawn, Nashik Road, Nashik", mobile: COMMON_NUMBER, active: true, city: "Nashik", district: "Nashik", image: "/__l5e/assets-v1/f70120a8-069f-402a-9544-2604ff1476f9/Dr Sunaina Bhujbal.jpg" },
  { name: "Dr. Rekha Chakote", qualification: "BAMS", address: "Ashirvad Clinic, Saras Darshan, Nashik Road, Nashik", mobile: COMMON_NUMBER, active: true, city: "Nashik", district: "Nashik", image: "/__l5e/assets-v1/53786283-0559-487d-b52c-a0848b2eb0de/Dr Rekha Chakote.jpg" },
  { name: "Dr. Yogesh Gangurde", qualification: "BHMS (MUHS), P.G.D.E.M.S", address: "Seva Clinic, Sansari Gaon, Devlali Camp, Nashik", mobile: COMMON_NUMBER, active: true, city: "Nashik", district: "Nashik", image: "" },
  { name: "Dr. Roshan Kumawat", qualification: "BAMS, MD(AM), MUHS", address: "Kumawat Clinic, Jaganath Apartment, Jatra Hotel, Adgaon Naka, Nashik", mobile: COMMON_NUMBER, active: true, city: "Nashik", district: "Nashik", image: "/__l5e/assets-v1/d4e92598-1268-4d00-892b-08cf5e397370/Dr Roshan Kumawat.jpg" },
  { name: "Dr. Suhas Kadam", qualification: "BAMS", address: "Shree Clinic, Shop No.5, Kadam Park, Pathardi Road, Nashik", mobile: COMMON_NUMBER, active: true, city: "Nashik", district: "Nashik", image: "/__l5e/assets-v1/d4d967cc-bca4-4495-9353-76836aa078cf/Dr Suhash Kadam.jpg" },
  { name: "Dr. Vrushali Patil", qualification: "BAMS", registration: "42278-A1", address: "Atharv Clinic, Shop No.1, Ashoka Road, Nashik", mobile: COMMON_NUMBER, active: true, city: "Nashik", district: "Nashik", image: "/__l5e/assets-v1/2591279e-8f45-41ec-8f29-e18329929bd6/Dr Vrushali Patil.jpg" },
  { name: "Dr. Dnyaneshwar Borade", qualification: "BAMS", address: "Om Clinic, Jail Road, Nashik Road, Nashik", mobile: COMMON_NUMBER, active: true, city: "Nashik", district: "Nashik", image: "" },
  { name: "Dr. Shekhar Thanage", qualification: "BAMS", registration: "I-32641A-1", address: "OM Clinic, 9, Guruvandana, Near Octrol Naka No 6, Lam Road, Deolali Camp, Nashik", mobile: COMMON_NUMBER, active: true, city: "Nashik", district: "Nashik", image: "" },
  { name: "Dr. Kishor Thorat", qualification: "BAMS", address: "Manjuprabha Nursing Home, Hanesh Nagar, Amrutdham, Panchvati, Nashik", mobile: COMMON_NUMBER, active: true, city: "Nashik", district: "Nashik", image: "" },
  { name: "Dr. Vandana Aher", qualification: "BAMS", address: "Nashik", mobile: COMMON_NUMBER, active: true, city: "Nashik", district: "Nashik", image: "/__l5e/assets-v1/a20778e1-824c-4793-87fe-e070ab9ce301/Dr Vandana Aaher.jpg" }
];

// ============================================================
// NEWLY ADDED DOCTORS (Network)
// ============================================================
const networkDoctors: Doctor[] = [
  { name: "Dr. Vijay Rai", qualification: "BAMS", address: "Health OK Network Clinic", mobile: COMMON_NUMBER, active: true, city: "Network", district: "Maharashtra", image: "/__l5e/assets-v1/6e0a15fe-eec6-426f-89ff-e9a2fb15b114/Dr Vijay Rai.jpg" },
  { name: "Dr. Vaishali Vasude", qualification: "BAMS", address: "Health OK Network Clinic", mobile: COMMON_NUMBER, active: true, city: "Network", district: "Maharashtra", image: "/__l5e/assets-v1/5052d80a-4103-49ff-a476-27cf56128f00/Dr Vaishali Vasude.jpg" },
  { name: "Dr. Sunita Salunkhe", qualification: "BAMS", address: "Health OK Network Clinic", mobile: COMMON_NUMBER, active: true, city: "Network", district: "Maharashtra", image: "/__l5e/assets-v1/129183fc-21c5-4bf5-bb53-c077fea9df14/Dr Sunita Salunkhe.jpg" },
  { name: "Dr. Sunita Bhagat", qualification: "BAMS", address: "Health OK Network Clinic", mobile: COMMON_NUMBER, active: true, city: "Network", district: "Maharashtra", image: "/__l5e/assets-v1/ea723d7a-b2e3-4ba9-8798-25625790c415/Dr Sunita Bhagat.jpg" },
  { name: "Dr. Sukanya Joshi", qualification: "BAMS", address: "Health OK Network Clinic", mobile: COMMON_NUMBER, active: true, city: "Network", district: "Maharashtra", image: "/__l5e/assets-v1/ab15bd3a-7118-422c-9d37-dac143b014e0/Dr Sukanya Joshi.jpg" },
  { name: "Dr. Shailesh Chandane", qualification: "BAMS", address: "Health OK Network Clinic", mobile: COMMON_NUMBER, active: true, city: "Network", district: "Maharashtra", image: "/__l5e/assets-v1/52cf2b52-a46b-40ba-9f4d-251cd64d6fe2/Dr Shailesh Chandane.jpg" },
  { name: "Dr. Sandeep Harne", qualification: "BAMS", address: "Health OK Network Clinic", mobile: COMMON_NUMBER, active: true, city: "Network", district: "Maharashtra", image: "/__l5e/assets-v1/fc8ce2b4-4820-49e9-a359-7098edee858b/Dr Sandeep Harne.jpg" },
  { name: "Dr. Sachine Mhatre", qualification: "BAMS", address: "Health OK Network Clinic", mobile: COMMON_NUMBER, active: true, city: "Network", district: "Maharashtra", image: "/__l5e/assets-v1/06ad439f-d7df-4339-98cf-e702d8483328/Dr Sachine Mhatre.jpg" },
  { name: "Dr. Rupali Chandalne", qualification: "BAMS", address: "Health OK Network Clinic", mobile: COMMON_NUMBER, active: true, city: "Network", district: "Maharashtra", image: "/__l5e/assets-v1/dc72d88d-bc97-461c-8c35-ab4bde22236f/Dr Rupali Chandalne.jpg" },
  { name: "Dr. Rashmi Manek", qualification: "BAMS", address: "Health OK Network Clinic", mobile: COMMON_NUMBER, active: true, city: "Network", district: "Maharashtra", image: "/__l5e/assets-v1/44d7a628-07f0-4f78-9280-545c8167920c/Dr Rashmi Manek.jpg" }
];

// ============================================================
// THANE DOCTORS
// ============================================================
const thaneDoctors: Doctor[] = [
  { name: "Dr. Bhupesh Patil", qualification: "BAMS", address: "Health OK Clinic, Thane", mobile: COMMON_NUMBER, active: true, city: "Thane", district: "Thane", image: "/__l5e/assets-v1/202b330e-b24b-411b-906e-68e79ea7b7da/Dr Bhupesh Patil.jpg" }
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
  ...thaneDoctors,
  ...networkDoctors,
];

