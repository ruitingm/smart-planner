import { Routes, Route, Navigate } from "react-router-dom";
import NavigationBar from "../Nagivation/Navigation";
import Todo from "../Todo/Todo";
import Profile from "../Profile/Profile";
import Analysis from "../Analysis/Analysis";
import Calendar from "../Calendar/Calendar";
import Setting from "../Setting/Setting";

export default function MainPage() {
  return (
    <div id="main-page" className="min-h-screen items-start border">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Navigate to="todo" />} />
        <Route path="settings" element={<Setting />} />
        <Route path="analysis" element={<Analysis />} />
        <Route path="profile" element={<Profile />} />
        <Route path="todo" element={<Todo />} />
        <Route path="calendar" element={<Calendar />} />
      </Routes>
    </div>
  );
}
