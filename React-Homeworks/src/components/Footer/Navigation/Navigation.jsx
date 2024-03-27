import { footerNavigation } from "../../../__mocks__/testData";
import "./Navigation.css";
function Navigation() {
    return (
        <nav className="footer__nav flex-elem">
                {footerNavigation.map((item) => (
                    <div className="flex-elem" key={item.id}>
                        {item.content.map((content) => (
                            <p className={content === item.content[0] ? "footer_p black" : "footer__p"} key={content}>{content}</p>
                        ))}
                    </div>
                ))}
        </nav>
    )
}

export default Navigation