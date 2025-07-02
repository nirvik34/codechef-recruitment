import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Members = () => {
  const [searchType, setSearchType] = useState("club");
  const [regNumber, setRegNumber] = useState("");
  const [results, setResults] = useState(null);

  // Placeholder data for demonstration
  const clubs = {
    C001: [
      { name: "Alice", reg: "23BRS1365" },
      { name: "Bob", reg: "S002" },
    ],
    C002: [
      { name: "Charlie", reg: "S003" },
      { name: "Alice", reg: "23BRS1365" },
    ],
  };
  const students = {
    "23BRS1365": ["C001", "C002"],
    S002: ["C001"],
    S003: ["C002"],
  };

  // --- Club Data ---
  const technicalClubs = [
    { name: "AEROSPAC CLUB", president: "John Doe", faculty: "Dr. Smith" },
    { name: "ANDROID CLUB", president: "Jane Doe", faculty: "Dr. Johnson" },
    { name: "AUTOMONOUS UNMANNED VEHICLE CLUB", president: "Alice Brown", faculty: "Dr. Lee" },
    { name: "AUTOVIT", president: "Bob White", faculty: "Dr. Kim" },
    { name: "BIONARY CLUB", president: "Charlie Black", faculty: "Dr. Green" },
    { name: "BUSINESS INNOVATION COMMUNITY (BiC)", president: "David Grey", faculty: "Dr. Adams" },
    { name: "CAD CLUB", president: "Eve Blue", faculty: "Dr. Clark" },
    { name: "CIVITEK", president: "Frank Red", faculty: "Dr. Lewis" },
    { name: "CLOUD COMPUTING CLUB", president: "Grace Pink", faculty: "Dr. Walker" },
    { name: "CODE Y-GEN", president: "Hank Gold", faculty: "Dr. Hall" },
    { name: "CODECHEF – VIT", president: "Ivy Silver", faculty: "Dr. Young" },
    { name: "CYSCOM", president: "Jack Brown", faculty: "Dr. King" },
    { name: "DAO COMMUNITY", president: "Kara White", faculty: "Dr. Wright" },
    { name: "DATA ANALYTICS CLUB", president: "Leo Black", faculty: "Dr. Scott" },
    { name: "DREAM MERCHANTS", president: "Mona Grey", faculty: "Dr. Baker" },
    { name: "ENERGY AND FUEL USER’S ASSOCIATION (ENFUSE)", president: "Nina Blue", faculty: "Dr. Nelson" },
    { name: "ENTREPRENEURSHIP CELL (E-CELL)", president: "Oscar Red", faculty: "Dr. Carter" },
    { name: "ENVIRONMENT & ENERGY PROTECTION CLUB (E2 PC)", president: "Paul Pink", faculty: "Dr. Mitchell" },
    { name: "GAME DEVELOPMENT CLUB", president: "Quinn Gold", faculty: "Dr. Perez" },
    { name: "GOOGLE DEVELOPER STUDENT CLUB (GDSC)", president: "Rita Silver", faculty: "Dr. Roberts" },
    { name: "HUMANOID CLUB", president: "Sam Brown", faculty: "Dr. Turner" },
    { name: "INTERNET OF THINGS COMMUNITY (IOTHINC)", president: "Tina White", faculty: "Dr. Phillips" },
    { name: "LINUX CLUB", president: "Uma Black", faculty: "Dr. Campbell" },
    { name: "MATHEMATICS CLUB", president: "Vera Grey", faculty: "Dr. Parker" },
    { name: "MICROSOFT INNOVATION CLUB", president: "Will Blue", faculty: "Dr. Evans" },
    { name: "NEWTON SCHOOL CODING CLUB", president: "Xena Red", faculty: "Dr. Edwards" },
    { name: "OPEN SOURCE PROGRAMMING CLUB", president: "Yara Pink", faculty: "Dr. Collins" },
    { name: "ROBOTICS CLUB", president: "Zane Gold", faculty: "Dr. Stewart" },
    { name: "SEDS ANTARIKSH CHAPTER", president: "Amy Silver", faculty: "Dr. Sanchez" },
    { name: "TECH RESEARCHERS CLUB (TRC)", president: "Ben Brown", faculty: "Dr. Morris" },
    { name: "THE HACK CLUB", president: "Cara White", faculty: "Dr. Rogers" },
    { name: "THE INDIAN SOCIETY OF HEATING, REFRIGERATING AND AIR CONDITIONING ENGINEERS (ISHRAE)", president: "Dan Black", faculty: "Dr. Reed" },
    { name: "VIRTUAL REALITY CLUB", president: "Ella Grey", faculty: "Dr. Cook" },
    { name: "VITARAM", president: "Finn Blue", faculty: "Dr. Morgan" },
    { name: "ZERO BUGS CLUB", president: "Gina Red", faculty: "Dr. Bell" }
  ];
  
  const culturalClubs = [
    { name: "CITAAA STUDENT CHAPTER", president: "John Doe", faculty: "Dr. Smith" },
    { name: "ENACTUS VIT CHENNAI", president: "Jane Doe", faculty: "Dr. Johnson" },
    { name: "FRATERNITY OF YOUNG INNOVATORS (FYI)", president: "Alice Brown", faculty: "Dr. Lee" },
    { name: "HEALTH CLUB", president: "Bob White", faculty: "Dr. Kim" },
    { name: "NATIONAL SERVICE SCHEME (NSS)", president: "Charlie Black", faculty: "Dr. Green" },
    { name: "NEXSEED", president: "David Grey", faculty: "Dr. Adams" },
    { name: "RED RIBBON CLUB", president: "Eve Blue", faculty: "Dr. Clark" },
    { name: "ROTARACT CLUB", president: "Frank Red", faculty: "Dr. Lewis" },
    { name: "SAHAYATHA", president: "Grace Pink", faculty: "Dr. Walker" },
    { name: "SERAPHIC STUDENT CHAPTER", president: "Hank Gold", faculty: "Dr. Hall" },
    { name: "THE WHITE HELMETS", president: "Ivy Silver", faculty: "Dr. Young" },
    { name: "UDDESHYA", president: "Jack Brown", faculty: "Dr. King" },
    { name: "VITC DEBATE SOCIETY", president: "Kara White", faculty: "Dr. Wright" },
    { name: "VITEACH", president: "Leo Black", faculty: "Dr. Scott" },
    { name: "YOUTH RED CROSS (YRC)", president: "Mona Grey", faculty: "Dr. Baker" },
    { name: "YUVA", president: "Nina Blue", faculty: "Dr. Nelson" },
    { name: "ANIMATION CLUB", president: "Oscar Red", faculty: "Dr. Carter" },
    { name: "ARIGNAR ANNA TAMIL MANDRAM", president: "Paul Pink", faculty: "Dr. Mitchell" },
    { name: "BENGALI LITERARY ASSOCIATION", president: "Quinn Gold", faculty: "Dr. Perez" },
    { name: "BIOSPHERE CLUB", president: "Rita Silver", faculty: "Dr. Roberts" },
    { name: "CULINARY CLUB", president: "Sam Brown", faculty: "Dr. Turner" },
    { name: "CULTURE IT", president: "Tina White", faculty: "Dr. Phillips" },
    { name: "DANCE CLUB", president: "Uma Black", faculty: "Dr. Campbell" },
    { name: "DESIGNERS CLUB", president: "Vera Grey", faculty: "Dr. Parker" },
    { name: "DRAMATICS CLUB", president: "Will Blue", faculty: "Dr. Evans" },
    { name: "ENGLISH LITERARY ASSOCIATION", president: "Xena Red", faculty: "Dr. Edwards" },
    { name: "EVENT MANAGERS CLUB", president: "Yara Pink", faculty: "Dr. Collins" },
    { name: "FINE ARTS CLUB (TFAC)", president: "Zane Gold", faculty: "Dr. Stewart" },
    { name: "FITNESS CLUB", president: "Amy Silver", faculty: "Dr. Sanchez" },
    { name: "GIRL UP", president: "Ben Brown", faculty: "Dr. Morris" },
    { name: "GUJARATI LITERARY ASSOCIATION", president: "Cara White", faculty: "Dr. Rogers" },
    { name: "HINDI LITERARY ASSOCIATION", president: "Dan Black", faculty: "Dr. Reed" },
    { name: "KANNADA LITERARY ASSOCIATION", president: "Ella Grey", faculty: "Dr. Cook" },
    { name: "MAHATH MITHILA CLUB", president: "Finn Blue", faculty: "Dr. Morgan" },
    { name: "MALAYALAM LITERARY ASSOCIATION", president: "Gina Red", faculty: "Dr. Bell" },
    { name: "MARATHI LITERARY ASSOCIATION", president: "Henry White", faculty: "Dr. Foster" },
    { name: "MHARO RAJASTAN", president: "Iris Black", faculty: "Dr. Simmons" },
    { name: "MUSIC CLUB", president: "Jake Grey", faculty: "Dr. Bryant" },
    { name: "NATURE LOVERS CLUB", president: "Kylie Blue", faculty: "Dr. Griffin" },
    { name: "NUTRITION CLUB", president: "Liam Red", faculty: "Dr. Russell" },
    { name: "ODIA LITERARY ASSOCIATION – KALINGA JYOTI", president: "Maya Pink", faculty: "Dr. Alexander" },
    { name: "PLACEXP", president: "Nate Gold", faculty: "Dr. Griffin" },
    { name: "POP CULTURE CLUB", president: "Olive Silver", faculty: "Dr. Bryant" },
    { name: "QUIZ CLUB", president: "Paul Brown", faculty: "Dr. Simmons" },
    { name: "RESOURCEXP", president: "Quinn White", faculty: "Dr. Foster" },
    { name: "SANGAM CLUB", president: "Rhea Black", faculty: "Dr. Russell" },
    { name: "SHORT FILM CLUB", president: "Sam Grey", faculty: "Dr. Alexander" },
    { name: "SOCRATES", president: "Tara Blue", faculty: "Dr. Griffin" },
    { name: "SPORTS CLUB", president: "Uma Red", faculty: "Dr. Bryant" },
    { name: "TEDXVIT", president: "Vikram Pink", faculty: "Dr. Simmons" },
    { name: "TELUGU LITERARY ASSOCIATION", president: "Wendy Gold", faculty: "Dr. Foster" },
    { name: "THE CAPSULE – VIT NEWSLETTER CLUB", president: "Xander Silver", faculty: "Dr. Russell" },
    { name: "THE COMEDY CLUB", president: "Yasmin Brown", faculty: "Dr. Alexander" },
    { name: "THE PHOTOGRAPHY CLUB", president: "Zara White", faculty: "Dr. Griffin" },
    { name: "TREKKING CLUB", president: "Ava Black", faculty: "Dr. Bryant" },
    { name: "VIT FINANCE AND MANAGEMENT CLUB", president: "Ben Grey", faculty: "Dr. Simmons" },
    { name: "VITC FILM SOCIETY", president: "Cara Blue", faculty: "Dr. Foster" },
    { name: "VOICE-IT VIT CHENNAI’S RADIO", president: "Derek Red", faculty: "Dr. Russell" },
    { name: "WOMAN DEVELOPMENT CELL", president: "Ella Pink", faculty: "Dr. Alexander" },
    { name: "YOGA CLUB", president: "Finn Gold", faculty: "Dr. Griffin" }
  ];
  
  const allClubs = [...technicalClubs, ...culturalClubs];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchType === "club") {
      // Search by club name (case-insensitive, partial match)
      const found = allClubs.filter(club =>
        club.name.toLowerCase().includes(regNumber.trim().toLowerCase())
      );
      setResults(found);
    } else {
      setResults(students[regNumber] || []);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F0F7F7]">
      <Sidebar />
      <div className="flex-1">
        <Topbar className="ml-64" />
        <main className="p-8 ml-64">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10 gap-4">
            <div>
              <h1 className="text-5xl font-extrabold text-gray-800 mb-2 drop-shadow-lg tracking-tight">
                Members
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 rounded-full mb-2"></div>
              <div className="text-gray-400 text-sm font-medium">
                Search and manage club members
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="bg-white/70 backdrop-blur-md border border-white/40 rounded-3xl shadow-xl p-8 flex flex-col gap-6 min-w-0">
              <form className="flex flex-col gap-4" onSubmit={handleSearch}>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block mb-1 font-semibold">Search By</label>
                    <select
                      className="border rounded-full px-4 py-2 w-full"
                      value={searchType}
                      onChange={(e) => setSearchType(e.target.value)}
                    >
                      <option value="club">
                        Club (by Club Registration Number)
                      </option>
                      <option value="student">
                        Student (by Student Registration Number)
                      </option>
                    </select>
                  </div>
                  <div className="flex-1">
                    <label className="block mb-1 font-semibold">
                      Registration Number
                    </label>
                    <input
                      className="border rounded-full px-4 py-2 w-full"
                      type="text"
                      value={regNumber}
                      onChange={(e) => setRegNumber(e.target.value)}
                      placeholder={
                        searchType === "club"
                          ? "Enter Club Reg. No."
                          : "Enter Student Reg. No."
                      }
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 text-white px-6 py-3 rounded-full font-bold shadow-xl  hover:shadow-2xl transition-all duration-200 text-lg"
                >
                  Search
                </button>
              </form>
            </div>
            <div className="bg-white/70 backdrop-blur-md border border-white/40 rounded-3xl shadow-xl p-8 flex flex-col gap-4 min-w-0">
              {results === null && (
                <div className="text-gray-500 text-lg">
                  This is the Members page. View and manage club members here.
                </div>
              )}
              {results && searchType === "club" && (
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-green-700">Club Details</h2>
                  {results.length === 0 ? (
                    <div className="text-gray-400">No clubs found matching that name.</div>
                  ) : (
                    <ul className="list-disc pl-6 space-y-2">
                      {results.map((club, idx) => (
                        <li key={idx} className="text-gray-700 font-medium">
                          <span className="font-semibold">{club.name}</span><br/>
                          <span className="text-gray-500">President: {club.president}</span><br/>
                          <span className="text-gray-500">Faculty: {club.faculty}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
              {results && searchType === "student" && (
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-green-700">
                    Student's Clubs
                  </h2>
                  {results.length === 0 ? (
                    <div className="text-gray-400">
                      No clubs found for this student.
                    </div>
                  ) : (
                    <ul className="list-disc pl-6 space-y-1">
                      {results.map((club, idx) => (
                        <li key={idx} className="text-gray-700 font-medium">
                          Club Reg. No.:{" "}
                          <span className="text-gray-600">{club}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Members;
