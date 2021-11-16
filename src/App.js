import "./styles.css";
import About from "./components/About";
import Store from "./components/Store";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/about" component={About} />
        <Route path="/store" component={Store} />
      </div>
    </BrowserRouter>
  );
}

//https://fortnite-api.com/v2/cosmetics/br/
//https://fortnite-api.com/v2/cosmetics/br/CID_A_263_Athena_Commando_M_HeadbandS
