import "./App.css";
import { Footer, Header } from "./components/export.js";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="bg-[f7fafc]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
