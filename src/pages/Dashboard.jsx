// pages/Dashboard.jsx
import React, { useState } from "react";
import { useClubs } from "../context/ClubContext";
import { useNavigate, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardStats from "../components/DashboardStats";

const categories = ["Technical", "Cultural", "Sports", "Literary"];
const presidents = ["Arjun", "Sneha", "Priya", "Rahul"];
const allStudents = ["Arjun", "Sneha", "Priya", "Rahul", "Amit", "Sara", "Vikram"];
const allFaculty = ["Dr. Meena", "Dr. Ramesh", "Dr. Gupta"];

// Sample clubs for dashboard (6 technical + 6 cultural)
const dashboardClubs = [
  // Technical
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
  // Cultural
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
];

const Dashboard = () => {
  const { clubs, editClub, deleteClub } = useClubs();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [editIdx, setEditIdx] = useState(null);
  const [editForm, setEditForm] = useState(null);
  const [deleteIdx, setDeleteIdx] = useState(null);
  const [manageIdx, setManageIdx] = useState(null);
  const [roleIdx, setRoleIdx] = useState(null);
  const [memberSearch, setMemberSearch] = useState("");
  const [newMember, setNewMember] = useState("");
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Filtered clubs
  const filteredClubs = clubs.filter(club =>
    club.name.toLowerCase().includes(search.toLowerCase()) &&
    (category ? club.category === category : true)
  );

  const categoriesList = Array.from(new Set(clubs.map(c => c.category)));

  // Edit modal handlers
  const openEdit = (idx) => {
    setEditIdx(idx);
    setEditForm({ ...clubs[idx] });
  };
  const closeEdit = () => {
    setEditIdx(null);
    setEditForm(null);
  };
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleEditSubmit = (e) => {
    e.preventDefault();
    editClub(editIdx, editForm);
    closeEdit();
  };

  // Delete modal handlers
  const openDelete = (idx) => setDeleteIdx(idx);
  const closeDelete = () => setDeleteIdx(null);
  const handleDelete = () => {
    deleteClub(deleteIdx);
    closeDelete();
  };

  // Manage Members modal handlers
  const openManage = (idx) => {
    setManageIdx(idx);
    setMemberSearch("");
    setNewMember("");
  };
  const closeManage = () => setManageIdx(null);
  const handleAddMember = () => {
    if (!newMember) return;
    const club = clubs[manageIdx];
    if (!club.members) club.members = [];
    if (!club.members.includes(newMember)) {
      editClub(manageIdx, { members: [...(club.members || []), newMember] });
      setNewMember("");
    }
  };
  const handleRemoveMember = (member) => {
    const club = clubs[manageIdx];
    editClub(manageIdx, { members: club.members.filter((m) => m !== member) });
  };

  // Role Assignment modal handlers
  const openRole = (idx) => setRoleIdx(idx);
  const closeRole = () => setRoleIdx(null);
  const handleAssignRole = (role, value) => {
    editClub(roleIdx, { [role]: value });
  };

  // Dashboard stats calculation
  const stats = {
    clubsCount: clubs.length,
    membersCount: clubs.reduce((acc, c) => acc + (c.members ? c.members.length : 0), 0),
    facultyCount: new Set(clubs.map(c => c.faculty).filter(Boolean)).size,
    presidentsCount: new Set(clubs.map(c => c.president).filter(Boolean)).size,
  };

  return (
    <div className="flex min-h-screen bg-[#F0F7F7]">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="flex-1 flex flex-col"> {/* Added flex flex-col here */}
        <Topbar onMenuClick={() => setIsSidebarOpen(true)} className="lg:ml-56" />
        <main className="p-8 lg:ml-56 flex-1 overflow-y-auto"> {/* Added flex-1 and overflow-y-auto */}
          <DashboardStats stats={stats} />
          {/* Header */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10 gap-4">
            <div>
              <h1 className="text-5xl font-extrabold text-gray-800 mb-2 drop-shadow-lg tracking-tight">Dashboard</h1>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 rounded-full mb-2"></div>
              <div className="text-gray-400 text-sm font-medium">Jun 1 - Aug 31, 2025</div>
            </div>
            <div className="flex gap-4 items-center bg-white/70 backdrop-blur-md rounded-full px-4 py-2 shadow-lg">
              <input
                type="text"
                placeholder="Search clubs..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="rounded-full px-4 py-2 text-sm bg-transparent focus:bg-white/90 border-none outline-none transition w-40 md:w-56 placeholder-gray-400"
              />
              <select
                value={category}
                onChange={e => setCategory(e.target.value)}
                className="rounded-full px-4 py-2 text-sm bg-transparent focus:bg-white/90 border-none outline-none transition w-36 placeholder-gray-400"
              >
                <option value="">All Categories</option>
                {categoriesList.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
          {/* Quick Actions */}
          <div className="mb-8 flex gap-4">
            <Link to="/create" className="bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 text-white px-6 py-3 rounded-full font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-lg">+ Create Club</Link>
          </div>
          {/* Clubs Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {filteredClubs.map((club, idx) => (
              <div key={idx} className="bg-white/70 backdrop-blur-lg border border-white/40 rounded-3xl shadow-xl p-8 flex flex-col gap-3 min-w-0 hover:scale-[1.025] hover:shadow-2xl transition-all duration-200 cursor-pointer">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
                  <div className="text-2xl font-extrabold text-gray-800 break-words drop-shadow-sm">{club.name}</div>
                  <div className="flex gap-2 flex-wrap">
                    <button className="text-blue-500 hover:underline text-xs font-semibold" onClick={() => openEdit(clubs.indexOf(club))}>Edit</button>
                    <button className="text-red-500 hover:underline text-xs font-semibold" onClick={() => openDelete(clubs.indexOf(club))}>Delete</button>
                  </div>
                </div>
                <div className="text-gray-600 text-base mb-1 break-words font-medium">{club.description}</div>
                <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-2 font-semibold">
                  <span className="bg-cyan-100 px-2 py-1 rounded-full">Category: {club.category}</span>
                  <span className="bg-blue-100 px-2 py-1 rounded-full">President: {club.president}</span>
                  <span className="bg-teal-100 px-2 py-1 rounded-full">Faculty: {club.faculty}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <button className="text-blue-600 text-xs hover:underline font-semibold" onClick={() => openManage(clubs.indexOf(club))}>Manage Members</button>
                  <button className="text-green-600 text-xs hover:underline font-semibold" onClick={() => openRole(clubs.indexOf(club))}>Assign Roles</button>
                </div>
              </div>
            ))}
          </div>

          {/* Edit Club Modal */}
          {editIdx !== null && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
              <form onSubmit={handleEditSubmit} className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Edit Club</h2>
                <label className="block mb-2 text-sm font-medium text-gray-700">Club Name</label>
                <input
                  type="text"
                  name="name"
                  value={editForm.name}
                  onChange={handleEditChange}
                  className="w-full border p-2 rounded mb-4"
                  required
                />
                <label className="block mb-2 text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={editForm.description}
                  onChange={handleEditChange}
                  className="w-full border p-2 rounded mb-4"
                  rows={3}
                  required
                />
                <label className="block mb-2 text-sm font-medium text-gray-700">Category</label>
                <select
                  name="category"
                  value={editForm.category}
                  onChange={handleEditChange}
                  className="w-full border p-2 rounded mb-4"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                <label className="block mb-2 text-sm font-medium text-gray-700">Assign President</label>
                <input
                  type="text"
                  name="president"
                  value={editForm.president}
                  onChange={handleEditChange}
                  className="w-full border p-2 rounded mb-4"
                  required
                />
                <label className="block mb-2 text-sm font-medium text-gray-700">Assign Faculty</label>
                <input
                  type="text"
                  name="faculty"
                  value={editForm.faculty}
                  onChange={handleEditChange}
                  className="w-full border p-2 rounded mb-6"
                  required
                />
                <div className="flex justify-end gap-2">
                  <button type="button" className="px-4 py-2 rounded bg-gray-200" onClick={closeEdit}>Cancel</button>
                  <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">Save</button>
                </div>
              </form>
            </div>
          )}

          {/* Delete Club Modal */}
          {deleteIdx !== null && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm">
                <h2 className="text-xl font-bold mb-4">Delete Club</h2>
                <p className="mb-6">Are you sure you want to delete <span className="font-semibold">{clubs[deleteIdx].name}</span>?</p>
                <div className="flex justify-end gap-2">
                  <button className="px-4 py-2 rounded bg-gray-200" onClick={closeDelete}>Cancel</button>
                  <button className="px-4 py-2 rounded bg-red-600 text-white" onClick={handleDelete}>Delete</button>
                </div>
              </div>
            </div>
          )}

          {/* Manage Members Modal */}
          {manageIdx !== null && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Manage Members</h2>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Search students..."
                    value={memberSearch}
                    onChange={e => setMemberSearch(e.target.value)}
                    className="w-full border p-2 rounded mb-2"
                  />
                  <select
                    className="w-full border p-2 rounded mb-2"
                    value={newMember}
                    onChange={e => setNewMember(e.target.value)}
                  >
                    <option value="">Select student to add</option>
                    {allStudents.filter(s =>
                      (!clubs[manageIdx].members || !clubs[manageIdx].members.includes(s)) &&
                      s.toLowerCase().includes(memberSearch.toLowerCase())
                    ).map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <button
                    className="bg-blue-600 text-white px-4 py-2 rounded w-full font-semibold mb-2"
                    onClick={handleAddMember}
                  >Add Member</button>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Current Members</h3>
                  <ul className="divide-y divide-gray-200">
                    {(clubs[manageIdx].members || []).map(member => (
                      <li key={member} className="flex items-center justify-between py-2">
                        <span>{member}</span>
                        <button
                          className="text-red-600 hover:underline text-xs"
                          onClick={() => handleRemoveMember(member)}
                        >Remove</button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <button className="px-4 py-2 rounded bg-gray-200" onClick={closeManage}>Close</button>
                </div>
              </div>
            </div>
          )}

          {/* Role Assignment Modal */}
          {roleIdx !== null && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Assign Roles</h2>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-700">President</label>
                  <input
                    type="text"
                    className="w-full border p-2 rounded mb-4"
                    value={clubs[roleIdx].president}
                    onChange={e => handleAssignRole("president", e.target.value)}
                  />
                  <label className="block mb-2 text-sm font-medium text-gray-700">Faculty Coordinator</label>
                  <input
                    type="text"
                    className="w-full border p-2 rounded mb-4"
                    value={clubs[roleIdx].faculty}
                    onChange={e => handleAssignRole("faculty", e.target.value)}
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button className="px-4 py-2 rounded bg-gray-200" onClick={closeRole}>Close</button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
