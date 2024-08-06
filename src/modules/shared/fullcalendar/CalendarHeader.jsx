/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Tooltip } from "@mui/material";
import CalendarViewMenu from "./CalendarViewMenu";

const CalendarHeader = (props) => {
  const { calendarRef, currentDate } = props;

  const calendarApi = () => calendarRef.current?.getApi();
  return (
    <div className="flex w-full justify-between pb-6 xl:flex-row flex-col items-center gap-4 font-rubik">
      <CalendarViewMenu calendarApi={calendarApi} />

      <div className="flex items-center">
        <p className="text-[16px] font-medium whitespace-nowrap leading-[26.4px] text-[#424242]">
          {currentDate?.view.title}
        </p>
      </div>

      <div className="flex items-center space-x-2">
        <Tooltip title="Previous">
          <div
            onClick={() => calendarApi().prev()}
            className="px-[18px] py-[13px] border border-[#D9D9D9] rounded-[8px] cursor-pointer active:bg-[#242e690f] transition"
          >
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.7461 12.9178L1.8561 8.02784C1.2786 7.45034 1.2786 6.50534 1.8561 5.92784L6.7461 1.03784"
                stroke="#232323"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Tooltip>

        <Tooltip title="Today">
          <div
            onClick={() => calendarApi().today()}
            className="bg-[#242E69] rounded-[8px] text-[#FFFFFF] font-semibold text-[14px] leading-[24px] py-[9px] px-[20.5px] select-none hover:opacity-75 transition cursor-pointer"
          >
            Today
          </div>
        </Tooltip>

        <Tooltip title="Next">
          <div
            onClick={() => calendarApi().next()}
            className="px-[18px] py-[13px] border border-[#D9D9D9] rounded-[8px] cursor-pointer active:bg-[#242e690f] transition"
          >
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.17859 12.9178L6.06859 8.02784C6.64609 7.45034 6.64609 6.50534 6.06859 5.92784L1.17859 1.03784"
                stroke="#232323"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default CalendarHeader;
