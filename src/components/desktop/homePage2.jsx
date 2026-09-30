import "./homePage2.css";
import Header from "./header";
// import HomePageLogo from "../../assets/desktop/images/homePageLogo.png"
// import Slogan from "../../assets/desktop/images/slogan.png"

function HomePage2({ children }) {
    return (
        <div className="background">
            <div className="main">
                <button className="dailyQuiz">Daily Quiz</button>
                <button className="create">Create</button>
                <button className="play">Play</button>
                <button className="discover">Discover</button>
            </div>
        </div>
    );
}

export default HomePage2;