import Navigation from "./Navigation/Navigation";
import SocialMedia from "./SocialMedia/SocialMedia";
import Copyright from "./Copyright/Copyright";
import Links from "./SocialMedia/Links";
import instagram from "../../assets/instagram.svg"
import twitter from "../../assets/twitter.svg"
import youtube from "../../assets/youtube.svg"
import "./Footer.css"
function Footer() {
    return (
        <footer className="footer flex-elem">
            <div className="footer__info flex-elem">
            <Copyright/>
            <Navigation/>
            </div>
            <div className="footer__media flex-elem">
            <SocialMedia/>
            <nav className="footer__nav flex-elem">
            <Links img={instagram}/>
            <Links img={twitter}/>
            <Links img={youtube}/>
            </nav>
            </div>
            </footer>
    )
}

export default Footer;
