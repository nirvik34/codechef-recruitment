import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiUsers, FiUserCheck, FiCalendar, FiSettings, FiLogOut } from "react-icons/fi";

const navLinks = [
	{ to: "/dashboard", label: "Dashboard", icon: <FiHome /> },
	{ to: "/clubs", label: "Clubs", icon: <FiUsers /> },
	{ to: "/members", label: "Members", icon: <FiUserCheck /> },
	{ to: "/roles", label: "Roles", icon: <FiSettings /> },
	{ to: "/calendar", label: "Calendar", icon: <FiCalendar /> },
];

const Sidebar = () => {
	const location = useLocation();
	return (
		<aside className="h-screen w-56 bg-white shadow-xl flex flex-col justify-between fixed left-0 top-0 z-40 border-r border-gray-100">
			<div>
				<div className="flex items-center gap-2 px-4 py-4">
					<span className="text-2xl font-extrabold text-blue-600 tracking-tight">
						CCR
					</span>
				</div>
				<nav className="flex flex-col gap-1 mt-2 px-1">
					{navLinks.map((link) => (
						<Link
							key={link.to}
							to={link.to}
							className={`flex items-center gap-3 px-3 py-2 rounded-lg font-semibold text-gray-700 hover:bg-blue-50 transition ${
								location.pathname === link.to
									? "bg-blue-100 text-blue-700"
									: ""
							}`}
						>
							<span className="text-lg">{link.icon}</span>
							{link.label}
						</Link>
					))}
				</nav>
			</div>
			<div className="px-4 py-4 flex flex-col gap-3 border-t border-gray-100">
				<div className="flex items-center gap-2">
					<div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center font-bold text-blue-700">
						A
					</div>
					<div>
						<div className="font-semibold text-gray-800">Admin</div>
						<div className="text-xs text-gray-400">Super Admin</div>
					</div>
				</div>
				<button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition font-semibold">
					<FiLogOut /> Logout
				</button>
			</div>
		</aside>
	);
};

export default Sidebar;
