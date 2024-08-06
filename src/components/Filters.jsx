// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { cities, make, model } from "../utils/contants";
import Select from "@mui/material/Select";
import { useState } from "react";

const Filters = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [showMore, setShowMore] = useState(true);

  const handleChangeMake = (event) => {
    setSelectedYear(event.target.value);
  };
  const handleChangeModel = (event) => {
    setSelectedModel(event.target.value);
  };
  const handleChangeCity = (event) => {
    setSelectedCity(event.target.value);
  };
  return (
    <>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12">
          <label className="font-normal text-4 leading-[19px] text-black">
            Search
          </label>
          <div className="flex sm:flex-row flex-col sm:gap-[27px] gap-[10px]">
            <input
              type="search"
              placeholder="Search By Customer Name, Vehicle..."
              className="bg-white w-full h-[43px] border border-[#D9D9D9] focus:outline-none rounded-[10px] text-[#808080] leading-[19px] text-4 font-normal px-[13.3px] py-[11.16px]"
            />
            <div className="bg-[#242E69] rounded-[10px] py-[11px] text-center text-white text-[18px] font-medium leading-[21px] xl:w-[173.72px] lg:w-[160px] md:w-[140px] w-[120px] cursor-pointer hover:opacity-75 transition">
              Search
            </div>
          </div>
        </div>
        {showMore && (
          <>
            <div className="col-span-12 lg:col-span-3 md:col-span-6">
              <div className="">
                <label className="font-normal text-4 leading-[19px] text-black">
                  Make
                </label>
                <Select
                  value={selectedYear}
                  displayEmpty
                  onChange={handleChangeMake}
                  variant="standard"
                  disableUnderline
                  inputProps={{ "aria-label": "Without label" }}
                  sx={{
                    backgroundColor: "white",
                    width: "100%",
                    height: "43px",
                    border: "1px solid #D9D9D9",
                    borderRadius: "10px",
                    color: "#9CA3AF",
                    fontSize: "16px",
                    fontWeight: "400",
                    padding: "11.16px 13.3px",
                    lineHeight: "19px",
                    "& .MuiSelect-select": {
                      padding: "0",
                      display: "flex",
                      alignItems: "center",
                      background: "white !important",
                    },
                  }}
                >
                  <MenuItem value="" disabled>
                    Select
                  </MenuItem>
                  {make.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-3 md:col-span-6">
              <div className="">
                <label className="font-normal text-4 leading-[19px] text-black">
                  Model
                </label>
                <Select
                  value={selectedModel}
                  displayEmpty
                  onChange={handleChangeModel}
                  variant="standard"
                  disableUnderline
                  inputProps={{ "aria-label": "Without label" }}
                  sx={{
                    backgroundColor: "white",
                    width: "100%",
                    height: "43px",
                    border: "1px solid #D9D9D9",
                    borderRadius: "10px",
                    color: "#9CA3AF",
                    fontSize: "16px",
                    fontWeight: "400",
                    padding: "11.16px 13.3px",
                    lineHeight: "19px",
                    "& .MuiSelect-select": {
                      padding: "0",
                      display: "flex",
                      alignItems: "center",
                      background: "white !important",
                    },
                  }}
                >
                  <MenuItem value="" disabled>
                    Select
                  </MenuItem>
                  {model.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-3 md:col-span-6">
              <label className="font-normal text-4 leading-[19px] text-black">
                Zip/Postal Code
              </label>
              <input
                type="text"
                placeholder="Text Here"
                className="bg-white w-full h-[43px] border border-[#D9D9D9] focus:outline-none rounded-[10px] text-[#808080] leading-[19px] text-4 font-normal px-[13.3px] py-[11.16px]"
              />
            </div>
            <div className="col-span-12 lg:col-span-3 md:col-span-6">
              <label className="font-normal text-4 leading-[19px] text-black">
                City
              </label>
              <Select
                value={selectedCity}
                displayEmpty
                onChange={handleChangeCity}
                variant="standard"
                disableUnderline
                inputProps={{ "aria-label": "Without label" }}
                sx={{
                  backgroundColor: "white",
                  width: "100%",
                  height: "43px",
                  border: "1px solid #D9D9D9",
                  borderRadius: "10px",
                  color: "#9CA3AF",
                  fontSize: "16px",
                  fontWeight: "400",
                  padding: "11.16px 13.3px",
                  lineHeight: "19px",
                  "& .MuiSelect-select": {
                    padding: "0",
                    display: "flex",
                    alignItems: "center",
                    background: "white !important",
                  },
                }}
              >
                <MenuItem value="" disabled>
                  Select
                </MenuItem>
                {cities.map((item) => (
                  <MenuItem key={item.value} value={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </>
        )}
        <div className="col-span-12">
          <p
            onClick={() => setShowMore(!showMore)}
            className="select-none underline text-[16px] leading-[19px] font-normal text-black cursor-pointer hover:opacity-65 transition"
          >
            Show Less
          </p>
        </div>
      </div>
    </>
  );
};

export default Filters;
