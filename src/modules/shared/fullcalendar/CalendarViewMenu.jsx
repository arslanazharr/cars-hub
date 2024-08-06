/* eslint-disable react/prop-types */
import { Tooltip } from "@mui/material";
import { useState } from "react";

const CalendarViewMenu = (props) => {
  const { calendarApi } = props;
  const [activeTab, setActiveTab] = useState("Day");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <ul className="flex flex-wrap leading-[20.4px] text-[12px] font-medium text-center bg-[#F9F9F9] rounded-[12px] p-1">
        <Tooltip title="Month">
          <li className="me-2">
            <a
              className={`inline-block px-4 py-3 rounded-[10px] select-none cursor-pointer ${
                activeTab === "Month"
                  ? "!bg-[#FFFFFF] !text-[#424242] hover:!bg-white hover:!text-[#424242]"
                  : "hover:!bg-white hover:!text-[#424242]"
              }`}
              onClick={() => {
                handleTabClick("Month");
                calendarApi().changeView("dayGridMonth");
              }}
              aria-current={activeTab === "Month" ? "page" : undefined}
            >
              Month
            </a>
          </li>
        </Tooltip>
        <Tooltip title="Week">
          <li className="me-2">
            <a
              className={`inline-block px-4 py-3 rounded-[10px] select-none cursor-pointer ${
                activeTab === "Week"
                  ? "!bg-[#FFFFFF] !text-[#424242] hover:!bg-white hover:!text-[#424242]"
                  : "hover:!bg-white hover:!text-[#424242]"
              }`}
              onClick={() => {
                handleTabClick("Week");
                calendarApi().changeView("timeGridWeek");
              }}
            >
              Week
            </a>
          </li>
        </Tooltip>
        <Tooltip title="Day">
          <li className="me-2">
            <a
              className={`inline-block px-4 py-3 rounded-[10px] select-none cursor-pointer ${
                activeTab === "Day"
                  ? "!bg-[#FFFFFF] !text-[#424242] hover:!bg-white hover:!text-[#424242]"
                  : "hover:!bg-white hover:!text-[#424242]"
              }`}
              onClick={() => {
                handleTabClick("Day");
                calendarApi().changeView("timeGridDay");
              }}
            >
              Day
            </a>
          </li>
        </Tooltip>
      </ul>
    </div>
  );
};

export default CalendarViewMenu;
