import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { SideBarProvider } from "./context/SideBarContext";
import Header from "./components/Header";
import Loader from "./components/Loader";

const Error = React.lazy(() => import("./components/Error"));
const CalendarMain = React.lazy(() =>
  import("./modules/calendar/CalendarMain")
);

function App() {
  return <AppContent />;
}

function AppContent() {
  return (
    <SideBarProvider>
      <Header />
      <main
        className={`sm:pt-[13vh] pt-[17vh] sm:pl-[16vh] pl-[18px] pr-[18px] !bg-white`}
      >
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/" element={<Navigate to="/calendar" />} />
            <Route path="/calendar" element={<CalendarMain />} />
          </Routes>
        </Suspense>
      </main>
    </SideBarProvider>
  );
}

export default App;
