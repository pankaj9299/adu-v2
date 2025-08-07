import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/common/Header";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;
