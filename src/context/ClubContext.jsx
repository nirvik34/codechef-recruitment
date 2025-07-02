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
