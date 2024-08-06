import { Routes, Route, Navigate } from "react-router-dom";
import Error from "./components/Error";
import CalendarMain from "./modules/calendar/CalendarMain";
import Header from "./components/Header";
import { SideBarProvider } from "./context/SideBarContext";

function App() {
  return (
    <>
      <AppContent />
    </>
  );
}

function AppContent() {
  return (
    <>
      <SideBarProvider>
        <Header />
        <main
          className={`sm:pt-[13vh] pt-[17vh] sm:pl-[16vh] pl-[18px] pr-[18px] !bg-white`}
        >
          <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/" element={<Navigate to="/calendar" />} />
            <Route path="/calendar" element={<CalendarMain />} />
          </Routes>
        </main>
      </SideBarProvider>
    </>
  );
}

export default App;
