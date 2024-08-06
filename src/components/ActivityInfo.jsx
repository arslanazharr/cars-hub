import { activityLabels } from "../utils/contants";
import { Tooltip } from "@mui/material";

const ActivityInfo = () => {
  return (
    <div className="bg-white border border-[#D9D9D9] p-4 rounded-[12px]">
      <p className="pb-4 text-[#232323] font-semibold text-[14px] leading-6">
        Activity Information
      </p>

      {activityLabels.map((item) => (
        <div key={item.value} className="flex !items-center space-x-2 mb-2">
          <div
            style={{ backgroundColor: item.color }}
            className="w-[14px] h-[14px] rounded-full"
          />
          <Tooltip title={item.label} placement="right">
            <span className="text-[#232323] font-normal text-[12px] leading-5 cursor-default">
              {item.label}
            </span>
          </Tooltip>
        </div>
      ))}
    </div>
  );
};

export default ActivityInfo;
