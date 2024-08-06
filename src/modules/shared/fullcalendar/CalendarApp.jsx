import { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import CalendarHeader from "./CalendarHeader";
import EventContent from "./EventContent";
import "./calendar.css";
import { events } from "../../../utils/contants";

function CalendarApp() {
  const [currentDate, setCurrentDate] = useState();
  const calendarRef = useRef();

  const handleDates = (rangeInfo) => {
    setCurrentDate(rangeInfo);
  };

  return (
    <div className="root bg-[#FFFFFF] border border-[#D9D9D9] sm:p-5 p-3 rounded-[12px] font-rubik">
      <CalendarHeader calendarRef={calendarRef} currentDate={currentDate} />
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={false}
        initialView="timeGridDay"
        editable
        selectable
        selectMirror
        dayMaxEvents
        weekends
        datesSet={handleDates}
        events={events}
        eventContent={(eventInfo) => <EventContent eventInfo={eventInfo} />}
        initialDate={new Date()}
        ref={calendarRef}
        allDaySlot={false}
        droppable={false}
      />
    </div>
  );
}

export default CalendarApp;
