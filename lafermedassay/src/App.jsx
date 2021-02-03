import { Reset } from "styled-reset";

import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Reset />
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
