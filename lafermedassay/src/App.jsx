import { Reset } from "styled-reset";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Evenements from "./components/Evenements";
import AddEvenements from "./components/AddEventForm";
import InscriptionAtelier from "./components/InscriptionAtelier";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Reset />
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/evenements" component={Evenements} />
        <Route path="/admin" component={AddEvenements} />
        <Route path="/inscription" component={InscriptionAtelier} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
