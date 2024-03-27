import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const navList = ["Menu", "SearchBar", "Else"];

  const items = (//реакт элемент
    <ul className="nav-list flex-elem">
      {navList.map((elem, i) => (
        <li key={uuidv4()} className="li">
          {elem}
        </li>
      ))}
    </ul>
  );
  return (
    <div className="wrapper flex-elem">
      <Header elements={items} />
      <Main />
      <Footer elements={items} />
    </div>
  );
}

export default App;
