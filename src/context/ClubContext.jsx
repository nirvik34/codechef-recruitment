import React, { createContext, useContext, useState } from "react";

const ClubContext = createContext();

const initialClubs = [
  {
    name: "Coding Club",
    description: "A club for coding enthusiasts.",
    category: "Technical",
    president: "Arjun",
    faculty: "Dr. Meena"
  },
  {
    name: "Dance Club",
    description: "A club for dance lovers.",
    category: "Cultural",
    president: "Sneha",
    faculty: "Dr. Ramesh"
  },
  {
    name: "Robotics Club",
    description: "Building and programming robots.",
    category: "Technical",
    president: "Priya",
    faculty: "Dr. Gupta"
  },
  {
    name: "Music Club",
    description: "For students passionate about music and performance.",
    category: "Cultural",
    president: "Amit",
    faculty: "Dr. Sara"
  },
  {
    name: "Business Innovation Community (BiC)",
    description: "Fostering entrepreneurship and innovation.",
    category: "Technical",
    president: "Vikram",
    faculty: "Dr. Meena"
  },
  {
    name: "Fine Arts Club",
    description: "A club for art and creativity.",
    category: "Cultural",
    president: "Sara",
    faculty: "Dr. Gupta"
  },
  {
    name: "Game Development Club",
    description: "Design and develop games collaboratively.",
    category: "Technical",
    president: "Rahul",
    faculty: "Dr. Ramesh"
  },
  {
    name: "Quiz Club",
    description: "For students who love quizzing and trivia.",
    category: "Cultural",
    president: "Sneha",
    faculty: "Dr. Meena"
  },
  {
    name: "Photography Club",
    description: "Capture moments and learn photography skills.",
    category: "Technical",
    president: "Amit",
    faculty: "Dr. Gupta"
  },
  {
    name: "Drama Club",
    description: "For students interested in acting and theatre.",
    category: "Cultural",
    president: "Priya",
    faculty: "Dr. Ramesh"
  }
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
