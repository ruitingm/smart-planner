import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
export default function Calendar() {
  return (
    <div id="calander-view" className="py-5 px-5">
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />;
    </div>
  );
}
