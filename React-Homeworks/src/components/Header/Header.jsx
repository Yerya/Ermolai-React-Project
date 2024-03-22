import NavBar from "./NavBar";
import "./styles.css";

function Header({ elements }) {
  return (
    <header className="header flex-elem">
      <NavBar elements={elements} />
    </header>
  );
}

export default Header;