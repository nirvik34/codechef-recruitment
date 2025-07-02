import React from "react";
import { FiUsers, FiUserCheck, FiUser, FiAward } from "react-icons/fi";

const statCards = [
  {
    label: "Total Clubs",
    icon: <FiAward className="text-blue-500" />,
    color: "bg-blue-100 text-blue-700",
    valueKey: "clubsCount",
  },
  {
    label: "Total Members",
    icon: <FiUsers className="text-cyan-500" />,
    color: "bg-cyan-100 text-cyan-700",
    valueKey: "membersCount",
  },
  {
    label: "Active Faculty Coordinators",
    icon: <FiUserCheck className="text-teal-500" />,
    color: "bg-teal-100 text-teal-700",
    valueKey: "facultyCount",
  },
  {
    label: "Active Presidents",
    icon: <FiUser className="text-purple-500" />,
    color: "bg-purple-100 text-purple-700",
    valueKey: "presidentsCount",
  },
];

const DashboardStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {statCards.map(card => (
        <div
          key={card.label}
          className={`rounded-2xl shadow-lg p-6 flex flex-col items-start gap-3 ${card.color} bg-opacity-80 backdrop-blur-md`}
        >
          <div className="text-3xl mb-2">{card.icon}</div>
          <div className="text-4xl font-extrabold">{stats[card.valueKey]}</div>
          <div className="text-sm font-semibold text-gray-600">{card.label}</div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
