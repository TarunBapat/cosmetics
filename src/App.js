import "./styles.css";
import About from "./components/About";
import Store from "./components/Store";
import Home from "./components/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/store" exact component={Store} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

//https://fortnite-api.com/v2/cosmetics/br/
//https://fortnite-api.com/v2/cosmetics/br/CID_A_263_Athena_Commando_M_HeadbandS
