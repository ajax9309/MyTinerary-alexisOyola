import { useEffect } from "react";
import Footer from "../components/footer/Footer";
import NavbarMain from "../components/navbar/NavbarMain";
import "../layouts/mainlayout.css";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/header/Header";

const MainLayout = () => {
  const nav = useNavigate();
  const loc = useLocation();

  useEffect(() => {
    if (loc.pathname === "/") nav("/Home");
  }, []);

  return (
    
      <div className="mainlayout">
        <Header/>
        <main className="appmain">
        <Outlet />
        </main>
        <footer className="appfooter">
          <Footer />
        </footer>
      </div>
    
  );
};

export default MainLayout;
