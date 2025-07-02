import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

// Mock data for demonstration. Replace with real data or fetch from API/context.
const clubsData = [
  {
    regNumber: "CIMP001",
    name: "Tech Club",
    facultyCoordinator: "Dr. Smith",
    president: "Alice Johnson",
    incharges: {
      socialMedia: "Bob Lee",
      technical: "Carol White",
      management: "David Kim",
      cultural: "Eva Green",
      events: "Frank Black"
    }
  },
  {
    regNumber: "CIMP002",
    name: "Cultural Club",
    facultyCoordinator: "Dr. Brown",
    president: "John Doe",
    incharges: {
      socialMedia: "Grace Park",
      technical: "Henry Ford",
      management: "Ivy Chen",
      cultural: "Jack Ma",
      events: "Kelly Blue"
    }
  }
  // ...add more clubs as needed
];

const Roles = () => {
  const [search, setSearch] = useState("");
  const [club, setClub] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const found = clubsData.find(
      (c) => c.regNumber.toLowerCase() === search.trim().toLowerCase()
    );
    setClub(found || null);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1">
        <Topbar className="ml-0 lg:ml-64" onMenuClick={() => setSidebarOpen(true)} />
        <main className="p-2 sm:p-4 md:p-8 lg:ml-64">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 md:mb-10 gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-2 drop-shadow-lg tracking-tight">Roles</h1>
              <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 rounded-full mb-2"></div>
              <div className="text-gray-400 text-xs sm:text-sm font-medium">Search and view club roles</div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 mb-10">
            <div className="bg-white border border-gray-100 rounded-3xl shadow-2xl p-4 sm:p-8 flex flex-col gap-6 min-w-0">
              <form className="flex flex-col gap-4" onSubmit={handleSearch}>
                <label className="block mb-1 font-semibold text-sm sm:text-base">Club Registration Number</label>
                <input
                  className="border border-gray-200 rounded-full px-4 py-2 w-full focus:ring-2 focus:ring-blue-200 outline-none transition text-sm sm:text-base"
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Enter Club Reg. No."
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-base sm:text-lg"
                >
                  Search
                </button>
              </form>
            </div>
            <div className="bg-white border border-gray-100 rounded-3xl shadow-2xl p-4 sm:p-8 flex flex-col gap-4 min-w-0">
              {club ? (
                <>
                  <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-800 mb-4 text-center drop-shadow-sm">{club.name}</div>
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                    <span className="bg-teal-50 px-3 sm:px-5 py-2 rounded-full text-sm sm:text-base font-semibold text-teal-700 shadow-sm">Reg #: {club.regNumber}</span>
                    <span className="bg-blue-50 px-3 sm:px-5 py-2 rounded-full text-sm sm:text-base font-semibold text-blue-700 shadow-sm">Faculty: {club.facultyCoordinator}</span>
                    <span className="bg-green-50 px-3 sm:px-5 py-2 rounded-full text-sm sm:text-base font-semibold text-green-700 shadow-sm">President: {club.president}</span>
                  </div>
                  <div className="mt-2">
                    <h3 className="font-bold mb-2 sm:mb-4 text-center text-lg sm:text-2xl text-green-700">Incharges</h3>
                    <div className="grid grid-cols-1 gap-2 sm:gap-4 sm:grid-cols-2">
                      <span className="bg-cyan-100 px-3 sm:px-5 py-2 rounded-xl text-sm sm:text-base font-semibold text-cyan-800 shadow-sm">Social Media: {club.incharges.socialMedia}</span>
                      <span className="bg-purple-100 px-3 sm:px-5 py-2 rounded-xl text-sm sm:text-base font-semibold text-purple-800 shadow-sm">Technical: {club.incharges.technical}</span>
                      <span className="bg-yellow-100 px-3 sm:px-5 py-2 rounded-xl text-sm sm:text-base font-semibold text-yellow-800 shadow-sm">Management: {club.incharges.management}</span>
                      <span className="bg-pink-100 px-3 sm:px-5 py-2 rounded-xl text-sm sm:text-base font-semibold text-pink-800 shadow-sm">Cultural: {club.incharges.cultural}</span>
                      <span className="bg-orange-100 px-3 sm:px-5 py-2 rounded-xl text-sm sm:text-base font-semibold text-orange-800 shadow-sm">Events: {club.incharges.events}</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-gray-500 text-base sm:text-lg">Search for a club by registration number to view roles.</div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Roles;
