import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/common/Header";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <Router>
      <Header />
      <AppRoutes />
    </Router>
  );
}

export default App;
