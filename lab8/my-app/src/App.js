import {BrowserRouter, Switch, Link, Route} from "react-router-dom";
import Characters from "./pages/characters_page_main/characters";
import StartPage from "./pages/StartPage";

function App() {

  return (
      <BrowserRouter basename="/" >
        <div>
          <ul>
            <li>
              <Link to="/">Старт</Link>
            </li>
            <li>
              <Link to="/list">Список</Link>
            </li>
            <li>
              <Link to="/new">Хочу на страницу с чем-то новеньким</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/" element={<h1>Добро пожаловать на стартовую страницу</h1>}>
              <h1>Добро пожаловать на стартовую страницу</h1>
            </Route>
            <Route exact path="/list" component={StartPage}/>
            <Route path="/new" component={Characters}/>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
