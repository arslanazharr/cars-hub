import ActivityInfo from "../../components/ActivityInfo";
import Filters from "../../components/Filters";
import CalendarApp from "../shared/fullcalendar/CalendarApp";
import RecentActivity from "../../components/RecentActivity";
import { SideBarContext } from "../../context/SideBarContext";
import { useContext } from "react";

const CalendarMain = () => {
  const { setIsSidebarOpen } = useContext(SideBarContext);
  return (
    <>
      <div onClick={() => setIsSidebarOpen(false)}>
        <section className="bg-[#F9F9F9] border border-[#D9D9D9] sm:px-[48px] px-5 sm:py-[31px] py-5 rounded-[10px] transition mb-[30px] font-rubik">
          <Filters />
        </section>
        <section className="w-full flex justify-end pb-[11px]">
          <p className="font-normal text-[#808080] text-[18px] underline leading-[21.33px] select-none cursor-pointer transition hover:opacity-65">
            Export
          </p>
        </section>
        <section className="bg-[#F9F9F9] border border-[#D9D9D9] p-5 rounded-[10px] transition min-h-full font-rubik">
          <div className="grid grid-cols-12 gap-3 ">
            <div className="lg:col-span-8 col-span-12">
              <CalendarApp />
            </div>
            <div className="lg:col-span-4 col-span-12 flex flex-col lg:gap-4 gap-3">
              <ActivityInfo />
              <RecentActivity />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CalendarMain;
