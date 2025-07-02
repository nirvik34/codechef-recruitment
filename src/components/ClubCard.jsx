import React from "react";

// Example clubs to display
const exampleClubs = [
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
  }
];

const ClubCard = ({ name, description, category, president, faculty, onClick }) => (
  <div className="bg-white shadow rounded p-4 hover:shadow-lg transition cursor-pointer" onClick={onClick}>
    <h3 className="text-xl font-bold mb-2">{name}</h3>
    {description && <p className="text-gray-600 mb-2">{description}</p>}
    <div className="text-sm text-gray-500 mb-1">Category: {category}</div>
    <div className="text-sm text-gray-500 mb-1">President: {president}</div>
    <div className="text-sm text-gray-500 mb-1">Faculty: {faculty}</div>
  </div>
);

// Demo rendering a few clubs below the export (remove this in production)
export const ClubCardDemo = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {exampleClubs.map((club, idx) => (
      <ClubCard key={idx} {...club} />
    ))}
  </div>
);

export default ClubCard;
