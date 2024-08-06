/* eslint-disable react/prop-types */
import { Tooltip } from "@mui/material";

const EventContent = (props) => {
  const { eventInfo } = props;

  return (
    <div
      className={`flex items-center w-full rounded-4 h-22 text-black px-1 py-[6px] border-l-[2px] h-full`}
      style={{
        backgroundColor: eventInfo.backgroundColor || "#FFFFFF",
        borderLeftColor: eventInfo.borderColor || "#000000",
      }}
    >
      <div>
        <Tooltip title={eventInfo.event.title} placement="top">
          <p className="text-[12px] leading-[20px] font-semibold text-black">
            {eventInfo.event.title}
          </p>
        </Tooltip>
        <Tooltip title={eventInfo.event.extendedProps.state} placement="right">
          <p className="text-[12px] leading-[20px] font-normal text-black">
            {eventInfo.event.extendedProps.state}
          </p>
        </Tooltip>
        <Tooltip
          title={eventInfo.event.extendedProps.zipCode}
          placement="right"
        >
          <p className="text-[12px] leading-[20px] font-normal text-black">
            {eventInfo.event.extendedProps.zipCode}
          </p>
        </Tooltip>
        <Tooltip
          title={eventInfo.event.extendedProps.customerName}
          placement="bottom"
        >
          <p className="text-[12px] leading-[20px] font-normal text-black">
            {eventInfo.event.extendedProps.customerName}
          </p>
        </Tooltip>
      </div>
    </div>
  );
};

export default EventContent;
