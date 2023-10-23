import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import AppRoute from "./AppRoute";
import Footer from "./Components/Footer";
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
