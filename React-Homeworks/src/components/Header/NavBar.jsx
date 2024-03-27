import "./styles.css";

function NavBar({ elements }) {
    return (
        <nav className = "header__nav">
            {elements}
        </nav>
    );
  }

export default NavBar;

