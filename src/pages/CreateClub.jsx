import React, { useState } from "react";
import { useClubs } from "../context/ClubContext";
import { useNavigate } from "react-router-dom";

const categories = ["Technical", "Cultural", "Sports", "Literary"];
const presidents = ["Arjun", "Sneha", "Priya", "Rahul"];
const facultyList = ["Dr. Meena", "Dr. Ramesh", "Dr. Gupta"];

const CreateClub = ({ role = "admin" }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: categories[0],
    president: presidents[0],
    faculty: facultyList[0]
  });
  const [errors, setErrors] = useState({});
  const { clubs, addClub } = useClubs();
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Club name is required.";
    if (clubs.some(c => c.name.toLowerCase() === form.name.trim().toLowerCase())) errs.name = "Club name must be unique.";
    if (!form.description.trim()) errs.description = "Description is required.";
    if (!form.president) errs.president = "President is required.";
    if (!form.faculty) errs.faculty = "Faculty is required.";
    // Ensure no duplicate president/faculty
    if (clubs.some(c => c.president === form.president)) errs.president = "President already assigned to another club.";
    if (clubs.some(c => c.faculty === form.faculty)) errs.faculty = "Faculty already assigned to another club.";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      addClub(form);
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-50 py-8">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-10 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Create Club</h2>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-700">Club Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
            required
          />
          {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 ${errors.description ? 'border-red-400' : 'border-gray-200'}`}
            rows={3}
            required
          />
          {errors.description && <div className="text-red-500 text-xs mt-1">{errors.description}</div>}
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-700">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg border-gray-200"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        {role === "admin" && (
          <>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-700">Assign President</label>
              <select
                name="president"
                value={form.president}
                onChange={handleChange}
                className={`w-full border p-3 rounded-lg ${errors.president ? 'border-red-400' : 'border-gray-200'}`}
              >
                {presidents.map((pres) => (
                  <option key={pres} value={pres}>{pres}</option>
                ))}
              </select>
              {errors.president && <div className="text-red-500 text-xs mt-1">{errors.president}</div>}
            </div>
            <div className="mb-8">
              <label className="block mb-2 text-sm font-medium text-gray-700">Assign Faculty</label>
              <select
                name="faculty"
                value={form.faculty}
                onChange={handleChange}
                className={`w-full border p-3 rounded-lg ${errors.faculty ? 'border-red-400' : 'border-gray-200'}`}
              >
                {facultyList.map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
              {errors.faculty && <div className="text-red-500 text-xs mt-1">{errors.faculty}</div>}
            </div>
          </>
        )}
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full font-semibold text-lg shadow hover:bg-blue-700 transition">Create Club</button>
      </form>
    </div>
  );
};

export default CreateClub;
