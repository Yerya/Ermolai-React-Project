import MainMenu from "./MenuServices/MenuServices";
import Hero from "./HeroComponent/Hero";
import "./Main.css";

const Main = () => (
  <main className="main flex-elem">
    <MainMenu />
    <Hero />
  </main>
);

export default Main;
