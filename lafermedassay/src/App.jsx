import { Reset } from "styled-reset";

import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Evenements from "./components/Evenements";
import AddEvenements from "./components/AddEventForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Reset />
      <Header />
      <AddEvenements />
      <Footer />
    </div>
  );
}

export default App;
