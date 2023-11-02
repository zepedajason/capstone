import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar/NavigationBar.js";
import AppRoute from "./AppRoute";
import Footer from "./Components/Footer/Footer.js";
import { SavedJobsProvider } from "./Components/SavedJobsProvider";

function App() {
  return (
    <SavedJobsProvider>
      <div className="App">
        <BrowserRouter>
          <header>
            <NavigationBar />
          </header>

          <main>
            <AppRoute />
          </main>

          <footer>
            <Footer />
          </footer>
        </BrowserRouter>
      </div>
    </SavedJobsProvider>
  );
}

export default App;
