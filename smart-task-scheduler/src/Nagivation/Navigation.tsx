import {
  CalendarDays,
  ListTodo,
  Settings,
  User,
  ChartColumnIncreasing,
} from "lucide-react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router";
export default function NavigationBar() {
  const { pathname } = useLocation();
  const navLinks = [
    { label: "todo", path: "/main/todo", icon: ListTodo },
    { label: "calendar", path: "/main/calendar", icon: CalendarDays },
    { label: "analysis", path: "/main/analysis", icon: ChartColumnIncreasing },
    { label: "profile", path: "/main/profile", icon: User },
    { label: "settings", path: "/main/settings", icon: Settings },
  ];
  return (
    <aside
      id="navigation"
      className="bg-white fixed left-0 h-full w-16 flex flex-col justify-between items-center py-8"
    >
      <nav className="flex flex-col items-center space-y-8 py-8">
        {navLinks.map((link) => {
          const isActive = pathname.includes(link.label);
          return (
            <Link
              key={link.label}
              to={link.path}
              className={`p-2 rounded-sm ${
                isActive ? "bg-gray-100" : "hover:bg-gray-100"
              }`}
            >
              <link.icon size={28} className="text-gray-500" />
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
