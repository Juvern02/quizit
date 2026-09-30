import "./homePage.css";
import Header from "./header";
import HomePageLogo from "../../assets/desktop/images/homePageLogo.png"
import Slogan from "../../assets/desktop/images/slogan.png"

function HomePage({ children }) {
    return (
        <div className="background">
            <div className="main">
                <div className="mainElements">

                    <div className="mainContent">
                        <img
                            className="slogan"
                            src={Slogan}
                            alt="QuizIt"
                        />

                        <input
                            className="lobbySearchBar"
                            placeholder="Enter Lobby Code"
                        />
                    </div>

                    <div className="mainLogo">
                        <img
                            className="homePageLogo"
                            src={HomePageLogo}
                            alt="QuizIt"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HomePage;