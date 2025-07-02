import React, { useState } from "react";
import MemberList from "../components/MemberList";

// Example club data (replace with real data/fetch in production)
const initialClub = {
  name: "Coding Club",
  description: "A club for coding enthusiasts.",
  category: "Technical",
  president: "Arjun",
  faculty: "Dr. Meena",
  members: ["Arjun", "Priya", "Rahul", "Sneha"]
};

const allUsers = ["Arjun", "Priya", "Rahul", "Sneha", "Amit", "Sara", "Vikram"];
const allFaculty = ["Dr. Meena", "Dr. Ramesh", "Dr. Gupta"];

const ClubDetails = () => {
  const [club, setClub] = useState(initialClub);
  const [newMember, setNewMember] = useState("");

  const handleAddMember = () => {
    if (newMember && !club.members.includes(newMember)) {
      setClub({ ...club, members: [...club.members, newMember] });
      setNewMember("");
    }
  };

  const handleRemoveMember = (member) => {
    setClub({ ...club, members: club.members.filter((m) => m !== member) });
  };

  const handleUpdate = (field, value) => {
    setClub({ ...club, [field]: value });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow mt-8">
      <h2 className="text-2xl font-bold mb-4">{club.name} Details</h2>
      <div className="mb-4">
        <div className="mb-2"><span className="font-semibold">Description:</span> {club.description}</div>
        <div className="mb-2"><span className="font-semibold">Category:</span> {club.category}</div>
        <div className="mb-2">
          <span className="font-semibold">President:</span>
          <select
            className="ml-2 border p-1 rounded"
            value={club.president}
            onChange={e => handleUpdate("president", e.target.value)}
          >
            {allUsers.map(u => <option key={u} value={u}>{u}</option>)}
          </select>
        </div>
        <div className="mb-2">
          <span className="font-semibold">Faculty:</span>
          <select
            className="ml-2 border p-1 rounded"
            value={club.faculty}
            onChange={e => handleUpdate("faculty", e.target.value)}
          >
            {allFaculty.map(f => <option key={f} value={f}>{f}</option>)}
          </select>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Members</h3>
        <div className="flex mb-2">
          <select
            className="border p-2 rounded mr-2"
            value={newMember}
            onChange={e => setNewMember(e.target.value)}
          >
            <option value="">Select member to add</option>
            {allUsers.filter(u => !club.members.includes(u)).map(u => (
              <option key={u} value={u}>{u}</option>
            ))}
          </select>
          <button
            type="button"
            className="bg-green-600 text-white px-4 py-2 rounded"
            onClick={handleAddMember}
          >Add</button>
        </div>
        <MemberList members={club.members} onRemove={handleRemoveMember} />
      </div>
    </div>
  );
};

export default ClubDetails;
