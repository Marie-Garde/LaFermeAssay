import { Reset } from "styled-reset";

import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Evenements from "./components/Evenements";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Reset />
      <Header />
      <Evenements />
      <Footer />
    </div>
  );
}

export default App;
