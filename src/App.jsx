import "./App.css";
import Home from "./home";
import About from "./About";
import Remedies from "./remedies";
import Limitations from "./limitations";
function App() {
  return (
    <main className="main-page">
      <Home />
      <About />
      <Remedies />
      <Limitations />
    </main>
  );
}

export default App;
