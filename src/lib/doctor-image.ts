import doctorImagesRaw from "@/data/doctor-images.json";

const doctorImages = doctorImagesRaw as Record<string, string>;

function normalise(input: string): string {
  return input
    .toLowerCase()
    .replace(/\.jpg$|\.jpeg$|\.png$/i, "")
    .replace(/^dr\.?\s*/i, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

// Build lookup once (normalised filename -> url)
const lookup: Record<string, string> = {};
for (const [key, url] of Object.entries(doctorImages)) {
  lookup[normalise(key)] = url;
}

// Manual aliases for spelling variants between the doctor DB and image files.
const aliases: Record<string, string> = {
  "atul badgujar": "atul badjugar",
  "yogesh jadhav": "yogesh jadhav",
  "rajesh deore": "dr rajesh deore",
  "sisodiya pratikkumar": "pratikkumar sisodiya",
  "sisodiya pratik kumar": "pratikkumar sisodiya",
  "vijay suryavanshi": "vijay suryawanhi",
  "vijay suryawanshi": "vijay suryawanhi",
  "pramod suryavanshi": "pramod suryawanhi",
  "madhuri suryavanshi": "madhuri suryawanshi",
  "hemangi suryavanshi": "hemangi suryawanshi",
  "kunal bachhav": "kunal bachchav",
  "sham thakur": "shyan thakur",
  "shyam thakur": "shyan thakur",
  "smita ghate": "samita ghate",
  "sachin ghate": "samita ghate",
  "digambar d ugale": "digambar ugle",
  "digambar diu ugale": "digambar ugle",
  "amit shitole": "amit shitode",
  "purshottam patil": "puroshattam patil",
  "premanand bhosale": "premanand bhosle",
  "chetan karodpati": "chetan kardopati",
  "aanant pawar": "anant pawar",
  "vijaykumar thakare": "vijay thakur",
  "vijay kumar thakre": "vijay thakur",
  "mahemood shaikh": "mehmood shaikh",
  "mahmud shekh": "mehmood shaikh",
  "pooja waghule panjwani": "pooja panjawani",
  "pooja wadhnepejawani": "pooja panjawani",
  "harish ahire": "harish aher",
  "harish aher": "harish aher",
  "rajdeep g shimpi": "gopal shimpi",
  "rajadeep shimpi": "gopal shimpi",
  "shrikrishna chaudhari": "shreekrushna chaudhari",
  "seema salunke": "seema salunke",
  "c sima salunke": "seema salunke",
  "yogesh gangurde": "",
  "yogesh ganude": "",
  "gyaneshwar borade": "",
  "dnyaneshwar borade": "",
  "dnyankishor thorat": "dnyankishor thorat",
  "gyanikishore dhorat": "dnyankishor thorat",
  "kishor thorat": "dnyankishor thorat",
  "shekhar thanage": "",
  "shekhar thapane": "",
  "kiran borase": "kiran borse",
  "roshan kumavat": "roshan kumawat",
  "rohit devre": "rohit deore",
  "rahul balwant devre": "rahul deore",
  "rahul devre": "rahul deore",
  "vandana aher": "vandana aaher",
  "sunaina bhujbal": "sunaina bhujbal",
  "palhuvi hire": "pallavi hire",
  "palhuvi patil": "pallavi patil",
  "sachin patil": "pallavi patil",
  "nita patil": "",
  "nitin patil": "",
  "vipul chavhan": "nitin chavhan",
  "nitin chavan": "nitin chavhan",
  "nitin jagtap": "",
  "nilesh jagtap": "",
  "rajdeep shimpi": "gopal shimpi",
  "shrinal firke": "",
  "parag mehta": "",
  "prakash phatkar": "",
  "p t chajed": "",
  "pavan dhoke": "",
  "dinesh padwal": "",
  "haridas bankar": "haridas bankar",
  "madhura kulkarni": "madhura kulkarni",
  "mina seth": "",
  "kailas shinde": "kailash shinde",
  "vijay prakash rao": "vijay rai",
  "amrut salunke": "amrut salunkhe",
  "sunita salunke": "sunita salunkhe",
  "rashmi mane": "rashmi manek",
  "rupali chandane": "rupali chandalne",
  "shalesh chandane": "shailesh chandane",
  "dipali salunke": "deepali salunkhe",
  "deepali salunke": "deepali salunkhe",
  "dipak patil": "deepak patil",
  "sandip harne": "sandeep harne",
  "sandip chaudhari": "sandeep chaudhari",
  "bhushan rajendra bafna": "bhushan bafna",
  "abasaheb jagtap": "abasahed jagtap",
  "prashant p patil": "prashant patil",
  "kalpesh sahebrao chaudhari": "kalpesh chaudhari",
  "pramod girharji suryavanshi": "pramod suryawanhi",
  "prakash ashok chaudhari": "prakash chaudhari",
  "ravindra bhatu badgujar": "ravindra badgujar",
  "nandulal n chaudhari": "nandulal chaudhari",
  "dinesh vasantrao bhamare": "dinesh bhamare",
  "tuhar prakash shelar": "tushar shelar",
  "tushar prakash shelar": "tushar shelar",
  "ganesh shivde": "ganesh shivde",
  "ganesh shivade": "ganesh shivde",
};

/** Resolve doctor image URL by name (case/spelling tolerant). */
export function getDoctorImage(name: string, override?: string): string {
  if (override) return override;
  const key = normalise(name);
  const aliasTo = aliases[key];
  if (aliasTo === "") return ""; // explicitly no image
  const target = aliasTo ? normalise(aliasTo) : key;
  return lookup[target] ?? "";
}
