import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/common/Header";
import AppRoutes from "./AppRoutes";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <div id="page-top"></div>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
