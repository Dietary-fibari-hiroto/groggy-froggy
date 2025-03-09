import { HashRouter as Router } from "react-router-dom";

import "./App.css";
import "./assets/styles/fonts.css";
import "./assets/styles/CustomSet.css";
import "./assets/styles/AnimationSet.css";
import RoutesSetting from "./routes/RoutesSetting";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <RoutesSetting />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
