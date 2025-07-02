import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Sidebar from "../components/Sidebar";

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

const ClubList = ({ clubs, color, nameBg }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <ul className="mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
      {clubs.map((club, idx) => (
        <li
          key={club.name}
          className={`py-1 px-2 bg-${color}-50 rounded hover:bg-${color}-100 transition cursor-pointer`}
          onClick={() => handleToggle(idx)}
        >
          <div className="flex items-center gap-2">
            <span className={`font-medium px-2 py-1 rounded bg-${nameBg}-200 text-${nameBg}-900 transition`}>{club.name}</span>
            <FaChevronDown
              className={`transition-transform duration-200 ${openIndex === idx ? "rotate-180" : "rotate-0"}`}
            />
          </div>
          {openIndex === idx && (
            <div className="mt-1 text-sm text-gray-700">
              <div>
                <span className="font-semibold">President:</span> {club.president}
              </div>
              <div>
                <span className="font-semibold">Faculty:</span> {club.faculty}
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

const Clubs = () => (
  <div className="flex min-h-screen bg-[#F0F7F7]">
    <Sidebar />
    <div className="flex-1 ml-56 p-8">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-800 drop-shadow-lg tracking-tight">Clubs</h1>
      <div className="h-1 w-24 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 rounded-full mb-8"></div>
      <div className="flex flex-col gap-8">
        <div className="bg-green-100/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8">
          <h2 className="text-2xl font-semibold mb-2 text-green-700">Technical Clubs</h2>
          <ClubList clubs={technicalClubs} color="green" nameBg="green" />
        </div>
        <div className="bg-pink-100/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8">
          <h2 className="text-2xl font-semibold mb-2 text-pink-700">Cultural Clubs</h2>
          <ClubList clubs={culturalClubs} color="pink" nameBg="pink" />
        </div>
      </div>
    </div>
  </div>
);

export default Clubs;
