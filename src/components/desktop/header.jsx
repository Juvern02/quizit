import "./header.css"
import logo from "../../assets/desktop/images/logo2.png"

function Header() {
    return (
        <header className="header">
            <img src={logo} className="logo" alt="QuizIt" />

            <input
                className="quizSearchBar"
                placeholder="Search for a quiz or questions"
            />

            <button className="startButton">
                Play
            </button>
        </header>
    );
}

export default Header;