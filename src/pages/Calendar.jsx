import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// Example events with details
const clubEvents = [
	{
		date: new Date(2025, 10, 19),
		title: "Coding Club Hackathon",
		club: "Coding Club",
		faculty: "Dr. Meena",
		president: "Arjun",
		coordinators: ["Sneha", "Priya"],
	},
	{
		date: new Date(2025, 10, 20),
		title: "Dance Club Workshop",
		club: "Dance Club",
		faculty: "Dr. Ramesh",
		president: "Sneha",
		coordinators: ["Rahul"],
	},
	{
		date: new Date(2025, 10, 20),
		title: "Robotics Club Demo",
		club: "Robotics Club",
		faculty: "Dr. Gupta",
		president: "Priya",
		coordinators: ["Amit"],
	},
	{
		date: new Date(2025, 10, 25),
		title: "Music Club Concert",
		club: "Music Club",
		faculty: "Dr. Sara",
		president: "Vikram",
		coordinators: ["Sara"],
	},
	// Demo events
	{
		date: new Date(2025, 10, 21),
		title: "Business Innovation Meetup",
		club: "Business Innovation Community (BiC)",
		faculty: "Dr. Adams",
		president: "David Grey",
		coordinators: ["Amit", "Sara"],
	},
	{
		date: new Date(2025, 10, 22),
		title: "Fine Arts Exhibition",
		club: "Fine Arts Club",
		faculty: "Dr. Gupta",
		president: "Sara",
		coordinators: ["Priya"],
	},
	{
		date: new Date(2025, 10, 25),
		title: "Quiz Club Trivia Night",
		club: "Quiz Club",
		faculty: "Dr. Meena",
		president: "Sneha",
		coordinators: ["Vikram"],
	},
	{
		date: new Date(2025, 10, 27),
		title: "Sports Club Football Finals",
		club: "Sports Club",
		faculty: "Dr. Ramesh",
		president: "Rahul",
		coordinators: ["Arjun", "Sara"],
	},
	{
		date: new Date(2025, 10, 28),
		title: "Literary Club Poetry Slam",
		club: "Literary Club",
		faculty: "Dr. Gupta",
		president: "Priya",
		coordinators: ["Sneha"],
	},
];

const CalendarPage = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());

	// Get events for the selected date
	const eventsForDate = clubEvents.filter(
		(e) =>
			e.date.getFullYear() === selectedDate.getFullYear() &&
			e.date.getMonth() === selectedDate.getMonth() &&
			e.date.getDate() === selectedDate.getDate()
	);

	// Highlight days with events
	const tileClassName = ({ date, view }) => {
		if (
			view === "month" &&
			clubEvents.some(
				(e) =>
					e.date.getFullYear() === date.getFullYear() &&
					e.date.getMonth() === date.getMonth() &&
					e.date.getDate() === date.getDate()
			)
		) {
			return "!bg-blue-100 !text-blue-700 font-bold border-2 border-blue-400";
		}
		return null;
	};

	return (
		<div className="flex min-h-screen bg-[#F0F7F7]">
			<Sidebar />
			<div className="flex-1 ml-56">
				<div className="w-full max-w-4xl mx-auto px-4 py-12">
					<h1 className="text-4xl font-extrabold text-gray-800 mb-6 drop-shadow-lg tracking-tight">
						Calendar
					</h1>
					<div className="h-1 w-24 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 rounded-full mb-8"></div>
					<div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row gap-12 w-full min-h-[500px]">
						<div className="flex-1 flex items-center justify-center">
							<Calendar
								onChange={setSelectedDate}
								value={selectedDate}
								tileClassName={tileClassName}
								className="border-none shadow-none w-full max-w-md bg-white/80 rounded-2xl p-6 text-lg calendar-modern"
							/>
						</div>
						<div className="flex-1 flex flex-col justify-center">
							<h2 className="text-2xl font-bold mb-4 text-cyan-700">
								Events on {selectedDate.toDateString()}
							</h2>
							{eventsForDate.length > 0 ? (
								<ul className="space-y-6">
									{eventsForDate.map((e, i) => (
										<li
											key={i}
											className="bg-gradient-to-r from-blue-100 via-cyan-100 to-teal-100 rounded-xl p-4 shadow"
										>
											<div className="text-xl font-bold text-gray-800 mb-1">
												{e.title}
											</div>
											<div className="text-gray-600 mb-1">
												Club:{" "}
												<span className="font-semibold">{e.club}</span>
											</div>
											<div className="text-gray-600 mb-1">
												Faculty:{" "}
												<span className="font-semibold">{e.faculty}</span>
											</div>
											<div className="text-gray-600 mb-1">
												President:{" "}
												<span className="font-semibold">{e.president}</span>
											</div>
											<div className="text-gray-600">
												Coordinators:{" "}
												<span className="font-semibold">
													{e.coordinators.join(", ")}
												</span>
											</div>
										</li>
									))}
								</ul>
							) : (
								<div className="text-gray-400 text-lg">
									No events for this date.
								</div>
							)}
						</div>
					</div>
				</div>
				<style>{`
          .calendar-modern .react-calendar__tile--active {
            background: linear-gradient(to right, #38bdf8, #06b6d4, #2dd4bf);
            color: white;
            border-radius: 1rem;
          }
          .calendar-modern .react-calendar__tile--now {
            background: #e0f2fe;
            border-radius: 1rem;
          }
          .calendar-modern .react-calendar__tile {
            font-size: 1.1rem;
            border-radius: 1rem;
            transition: background 0.2s;
          }
          .calendar-modern .react-calendar__tile:enabled:hover {
            background: #bae6fd;
          }
          .calendar-modern .react-calendar__navigation button {
            font-weight: bold;
            color: #0e7490;
          }
        `}</style>
			</div>
		</div>
	);
};

export default CalendarPage;
