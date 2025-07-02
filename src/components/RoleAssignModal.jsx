import React from "react";

const RoleAssignModal = ({ isOpen, onClose, title, options, value, onChange, onSave }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded shadow-lg p-6 w-full max-w-sm">
        <h3 className="text-lg font-bold mb-4">{title}</h3>
        <select
          className="w-full border p-2 rounded mb-4"
          value={value}
          onChange={e => onChange(e.target.value)}
        >
          {options.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <div className="flex justify-end gap-2">
          <button className="px-4 py-2 rounded bg-gray-200" onClick={onClose}>Cancel</button>
          <button className="px-4 py-2 rounded bg-blue-600 text-white" onClick={onSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default RoleAssignModal;
