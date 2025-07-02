import React, { createContext, useContext, useState } from "react";

const ClubContext = createContext();

// All technical and cultural clubs from Clubs.jsx
const initialClubs = [
  // Technical Clubs
  { name: "AEROSPAC CLUB", category: "Technical", president: "John Doe", faculty: "Dr. Smith" },
  { name: "ANDROID CLUB", category: "Technical", president: "Jane Doe", faculty: "Dr. Johnson" },
  { name: "AUTOMONOUS UNMANNED VEHICLE CLUB", category: "Technical", president: "Alice Brown", faculty: "Dr. Lee" },
  { name: "AUTOVIT", category: "Technical", president: "Bob White", faculty: "Dr. Kim" },
  { name: "BIONARY CLUB", category: "Technical", president: "Charlie Black", faculty: "Dr. Green" },
  { name: "BUSINESS INNOVATION COMMUNITY (BiC)", category: "Technical", president: "David Grey", faculty: "Dr. Adams" },
  { name: "CAD CLUB", category: "Technical", president: "Eve Blue", faculty: "Dr. Clark" },
  { name: "CIVITEK", category: "Technical", president: "Frank Red", faculty: "Dr. Lewis" },
  { name: "CLOUD COMPUTING CLUB", category: "Technical", president: "Grace Pink", faculty: "Dr. Walker" },
  { name: "CODE Y-GEN", category: "Technical", president: "Hank Gold", faculty: "Dr. Hall" },
  { name: "CODECHEF – VIT", category: "Technical", president: "Ivy Silver", faculty: "Dr. Young" },
  { name: "CYSCOM", category: "Technical", president: "Jack Brown", faculty: "Dr. King" },
  { name: "DAO COMMUNITY", category: "Technical", president: "Kara White", faculty: "Dr. Wright" },
  { name: "DATA ANALYTICS CLUB", category: "Technical", president: "Leo Black", faculty: "Dr. Scott" },
  { name: "DREAM MERCHANTS", category: "Technical", president: "Mona Grey", faculty: "Dr. Baker" },
  { name: "ENERGY AND FUEL USER’S ASSOCIATION (ENFUSE)", category: "Technical", president: "Nina Blue", faculty: "Dr. Nelson" },
  { name: "ENTREPRENEURSHIP CELL (E-CELL)", category: "Technical", president: "Oscar Red", faculty: "Dr. Carter" },
  { name: "ENVIRONMENT & ENERGY PROTECTION CLUB (E2 PC)", category: "Technical", president: "Paul Pink", faculty: "Dr. Mitchell" },
  { name: "GAME DEVELOPMENT CLUB", category: "Technical", president: "Quinn Gold", faculty: "Dr. Perez" },
  { name: "GOOGLE DEVELOPER STUDENT CLUB (GDSC)", category: "Technical", president: "Rita Silver", faculty: "Dr. Roberts" },
  { name: "HUMANOID CLUB", category: "Technical", president: "Sam Brown", faculty: "Dr. Turner" },
  { name: "INTERNET OF THINGS COMMUNITY (IOTHINC)", category: "Technical", president: "Tina White", faculty: "Dr. Phillips" },
  { name: "LINUX CLUB", category: "Technical", president: "Uma Black", faculty: "Dr. Campbell" },
  { name: "MATHEMATICS CLUB", category: "Technical", president: "Vera Grey", faculty: "Dr. Parker" },
  { name: "MICROSOFT INNOVATION CLUB", category: "Technical", president: "Will Blue", faculty: "Dr. Evans" },
  { name: "NEWTON SCHOOL CODING CLUB", category: "Technical", president: "Xena Red", faculty: "Dr. Edwards" },
  { name: "OPEN SOURCE PROGRAMMING CLUB", category: "Technical", president: "Yara Pink", faculty: "Dr. Collins" },
  { name: "ROBOTICS CLUB", category: "Technical", president: "Zane Gold", faculty: "Dr. Stewart" },
  { name: "SEDS ANTARIKSH CHAPTER", category: "Technical", president: "Amy Silver", faculty: "Dr. Sanchez" },
  { name: "TECH RESEARCHERS CLUB (TRC)", category: "Technical", president: "Ben Brown", faculty: "Dr. Morris" },
  { name: "THE HACK CLUB", category: "Technical", president: "Cara White", faculty: "Dr. Rogers" },
  { name: "THE INDIAN SOCIETY OF HEATING, REFRIGERATING AND AIR CONDITIONING ENGINEERS (ISHRAE)", category: "Technical", president: "Dan Black", faculty: "Dr. Reed" },
  { name: "VIRTUAL REALITY CLUB", category: "Technical", president: "Ella Grey", faculty: "Dr. Cook" },
  { name: "VITARAM", category: "Technical", president: "Finn Blue", faculty: "Dr. Morgan" },
  { name: "ZERO BUGS CLUB", category: "Technical", president: "Gina Red", faculty: "Dr. Bell" },
  // Cultural Clubs
  { name: "CITAAA STUDENT CHAPTER", category: "Cultural", president: "John Doe", faculty: "Dr. Smith" },
  { name: "ENACTUS VIT CHENNAI", category: "Cultural", president: "Jane Doe", faculty: "Dr. Johnson" },
  { name: "FRATERNITY OF YOUNG INNOVATORS (FYI)", category: "Cultural", president: "Alice Brown", faculty: "Dr. Lee" },
  { name: "HEALTH CLUB", category: "Cultural", president: "Bob White", faculty: "Dr. Kim" },
  { name: "NATIONAL SERVICE SCHEME (NSS)", category: "Cultural", president: "Charlie Black", faculty: "Dr. Green" },
  { name: "NEXSEED", category: "Cultural", president: "David Grey", faculty: "Dr. Adams" },
  { name: "RED RIBBON CLUB", category: "Cultural", president: "Eve Blue", faculty: "Dr. Clark" },
  { name: "ROTARACT CLUB", category: "Cultural", president: "Frank Red", faculty: "Dr. Lewis" },
  { name: "SAHAYATHA", category: "Cultural", president: "Grace Pink", faculty: "Dr. Walker" },
  { name: "SERAPHIC STUDENT CHAPTER", category: "Cultural", president: "Hank Gold", faculty: "Dr. Hall" },
  { name: "THE WHITE HELMETS", category: "Cultural", president: "Ivy Silver", faculty: "Dr. Young" },
  { name: "UDDESHYA", category: "Cultural", president: "Jack Brown", faculty: "Dr. King" },
  { name: "VITC DEBATE SOCIETY", category: "Cultural", president: "Kara White", faculty: "Dr. Wright" },
  { name: "VITEACH", category: "Cultural", president: "Leo Black", faculty: "Dr. Scott" },
  { name: "YOUTH RED CROSS (YRC)", category: "Cultural", president: "Mona Grey", faculty: "Dr. Baker" },
  { name: "YUVA", category: "Cultural", president: "Nina Blue", faculty: "Dr. Nelson" },
  { name: "ANIMATION CLUB", category: "Cultural", president: "Oscar Red", faculty: "Dr. Carter" },
  { name: "ARIGNAR ANNA TAMIL MANDRAM", category: "Cultural", president: "Paul Pink", faculty: "Dr. Mitchell" },
  { name: "BENGALI LITERARY ASSOCIATION", category: "Cultural", president: "Quinn Gold", faculty: "Dr. Perez" },
  { name: "BIOSPHERE CLUB", category: "Cultural", president: "Rita Silver", faculty: "Dr. Roberts" },
  { name: "CULINARY CLUB", category: "Cultural", president: "Sam Brown", faculty: "Dr. Turner" },
  { name: "CULTURE IT", category: "Cultural", president: "Tina White", faculty: "Dr. Phillips" },
  { name: "DANCE CLUB", category: "Cultural", president: "Uma Black", faculty: "Dr. Campbell" },
  { name: "DESIGNERS CLUB", category: "Cultural", president: "Vera Grey", faculty: "Dr. Parker" },
  { name: "DRAMATICS CLUB", category: "Cultural", president: "Will Blue", faculty: "Dr. Evans" },
  { name: "ENGLISH LITERARY ASSOCIATION", category: "Cultural", president: "Xena Red", faculty: "Dr. Edwards" },
  { name: "EVENT MANAGERS CLUB", category: "Cultural", president: "Yara Pink", faculty: "Dr. Collins" },
  { name: "FINE ARTS CLUB (TFAC)", category: "Cultural", president: "Zane Gold", faculty: "Dr. Stewart" },
  { name: "FITNESS CLUB", category: "Cultural", president: "Amy Silver", faculty: "Dr. Sanchez" },
  { name: "GIRL UP", category: "Cultural", president: "Ben Brown", faculty: "Dr. Morris" },
  { name: "GUJARATI LITERARY ASSOCIATION", category: "Cultural", president: "Cara White", faculty: "Dr. Rogers" },
  { name: "HINDI LITERARY ASSOCIATION", category: "Cultural", president: "Dan Black", faculty: "Dr. Reed" },
  { name: "KANNADA LITERARY ASSOCIATION", category: "Cultural", president: "Ella Grey", faculty: "Dr. Cook" },
  { name: "MAHATH MITHILA CLUB", category: "Cultural", president: "Finn Blue", faculty: "Dr. Morgan" },
  { name: "MALAYALAM LITERARY ASSOCIATION", category: "Cultural", president: "Gina Red", faculty: "Dr. Bell" },
  { name: "MARATHI LITERARY ASSOCIATION", category: "Cultural", president: "Henry White", faculty: "Dr. Foster" },
  { name: "MHARO RAJASTAN", category: "Cultural", president: "Iris Black", faculty: "Dr. Simmons" },
  { name: "MUSIC CLUB", category: "Cultural", president: "Jake Grey", faculty: "Dr. Bryant" },
  { name: "NATURE LOVERS CLUB", category: "Cultural", president: "Kylie Blue", faculty: "Dr. Griffin" },
  { name: "NUTRITION CLUB", category: "Cultural", president: "Liam Red", faculty: "Dr. Russell" },
  { name: "ODIA LITERARY ASSOCIATION – KALINGA JYOTI", category: "Cultural", president: "Maya Pink", faculty: "Dr. Alexander" },
  { name: "PLACEXP", category: "Cultural", president: "Nate Gold", faculty: "Dr. Griffin" },
  { name: "POP CULTURE CLUB", category: "Cultural", president: "Olive Silver", faculty: "Dr. Bryant" },
  { name: "QUIZ CLUB", category: "Cultural", president: "Paul Brown", faculty: "Dr. Simmons" },
  { name: "RESOURCEXP", category: "Cultural", president: "Quinn White", faculty: "Dr. Foster" },
  { name: "SANGAM CLUB", category: "Cultural", president: "Rhea Black", faculty: "Dr. Russell" },
  { name: "SHORT FILM CLUB", category: "Cultural", president: "Sam Grey", faculty: "Dr. Alexander" },
  { name: "SOCRATES", category: "Cultural", president: "Tara Blue", faculty: "Dr. Griffin" },
  { name: "SPORTS CLUB", category: "Cultural", president: "Uma Red", faculty: "Dr. Bryant" },
  { name: "TEDXVIT", category: "Cultural", president: "Vikram Pink", faculty: "Dr. Simmons" },
  { name: "TELUGU LITERARY ASSOCIATION", category: "Cultural", president: "Wendy Gold", faculty: "Dr. Foster" },
  { name: "THE CAPSULE – VIT NEWSLETTER CLUB", category: "Cultural", president: "Xander Silver", faculty: "Dr. Russell" },
  { name: "THE COMEDY CLUB", category: "Cultural", president: "Yasmin Brown", faculty: "Dr. Alexander" },
  { name: "THE PHOTOGRAPHY CLUB", category: "Cultural", president: "Zara White", faculty: "Dr. Griffin" },
  { name: "TREKKING CLUB", category: "Cultural", president: "Ava Black", faculty: "Dr. Bryant" },
  { name: "VIT FINANCE AND MANAGEMENT CLUB", category: "Cultural", president: "Ben Grey", faculty: "Dr. Simmons" },
  { name: "VITC FILM SOCIETY", category: "Cultural", president: "Cara Blue", faculty: "Dr. Foster" },
  { name: "VOICE-IT VIT CHENNAI’S RADIO", category: "Cultural", president: "Derek Red", faculty: "Dr. Russell" },
  { name: "WOMAN DEVELOPMENT CELL", category: "Cultural", president: "Ella Pink", faculty: "Dr. Alexander" },
  { name: "YOGA CLUB", category: "Cultural", president: "Finn Gold", faculty: "Dr. Griffin" }
];

export const ClubProvider = ({ children }) => {
  const [clubs, setClubs] = useState(initialClubs);

  const addClub = (club) => setClubs((prev) => [...prev, club]);

  const editClub = (index, updatedClub) => {
    setClubs((prev) => prev.map((club, i) => (i === index ? { ...club, ...updatedClub } : club)));
  };

  const deleteClub = (index) => {
    setClubs((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <ClubContext.Provider value={{ clubs, addClub, editClub, deleteClub }}>
      {children}
    </ClubContext.Provider>
  );
};

export const useClubs = () => useContext(ClubContext);
