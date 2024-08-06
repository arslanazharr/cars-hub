import { recentActivity } from "../utils/contants";
import { Tooltip } from "@mui/material";

const RecentActivity = () => {
  return (
    <div className="p-5 bg-white border border-[#D9D9D9] rounded-[12px] overflow-auto h-full">
      <p className="pb-4 text-[14px] leading-[23.8px] text-[#232323] font-semibold">
        Recent Activity
      </p>

      <div>
        <ul className="space-y-[9px]">
          {recentActivity.map((item) => (
            <li key={item.id} className="flex space-x-[14px] cursor-default">
              <div className="flex flex-col items-center">
                <img src={item.img} alt={item.name} className="h-8 w-8" />
                <div className="vertical-dashed-line"></div>
              </div>

              <div className="space-y-[2px]">
                <p className="text-[12px] text-[#232323] leading-[20.4px] font-medium">
                  <Tooltip title={item.title} placement="top">
                    {item.title}
                  </Tooltip>
                </p>
                <p className="text-[12px] text-[#707070] leading-[20.4px] font-normal ml-[2px]">
                  <Tooltip title={item.date} placement="right">
                    {item.date}
                  </Tooltip>
                </p>

                <p className="text-[10px] text-[#707070] leading-[16px] font-normal">
                  <Tooltip title={item.name} placement="right">
                    {item.name}
                  </Tooltip>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentActivity;
