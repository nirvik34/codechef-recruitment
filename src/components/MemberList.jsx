import React from "react";

const MemberList = ({ members, onRemove }) => (
  <ul className="divide-y divide-gray-200">
    {members.map((member) => (
      <li key={member} className="flex items-center justify-between py-2">
        <span>{member}</span>
        {onRemove && (
          <button
            type="button"
            className="text-red-600 hover:underline text-sm"
            onClick={() => onRemove(member)}
          >
            Remove
          </button>
        )}
      </li>
    ))}
  </ul>
);

export default MemberList;
