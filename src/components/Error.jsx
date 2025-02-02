import { NavLink } from "react-router-dom";
import { SideBarContext } from "../context/SideBarContext";
import { useContext } from "react";
const Error = () => {
  const { setIsSidebarOpen } = useContext(SideBarContext);

  return (
    <main
      className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8"
      onClick={() => setIsSidebarOpen(false)}
    >
      <div className="text-center">
        <p className="text-base font-semibold text-main">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#252E69] sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <NavLink
            to="/"
            className="rounded-md bg-main px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back to dashboard
          </NavLink>
        </div>
      </div>
    </main>
  );
};

export default Error;
