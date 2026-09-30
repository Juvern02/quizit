import "./activeGame.css";
import Logo from "../../assets/desktop/images/logo.png"
import RandomImage from "../../assets/desktop/images/randomImage.jpg"
import RedAnswer from "../../assets/desktop/images/redAnswer.png"
import YellowAnswer from "../../assets/desktop/images/yellowAnswer.png"
import GreenAnswer from "../../assets/desktop/images/greenAnswer.png"
import BlueAnswer from "../../assets/desktop/images/blueAnswer.png"

function ActiveGameBackground({ children }) {
    return (
        <div className="active-game-background">
            {children}
            <div className="activeGameHeader">
                <p className="playerCount">23 Players</p>
                <p className="quizName">Quiz Name</p>
            </div>
            <div className="question">
                <div className="questionBox">
                    <p className="questionText">What is this of that?</p>
                </div>
                <img className="questionImage" src={RandomImage}/>
            </div>
            <div className="answerButtons">
                <button className="redButton">
                    <img src={RedAnswer} alt="Red answer" />
                </button>
                <button className="yellowButton">
                    <img src={YellowAnswer} alt="Yellow answer" />
                </button>
                <button className="greenButton">
                    <img src={GreenAnswer} alt="Green answer" />
                </button>
                <button className="blueButton">
                    <img src={BlueAnswer} alt="Blue answer" />
                </button>

                <img className="activeGameLogo" src={Logo}/>
                <div className="questionNumber"> <p>Question 1</p></div>
            </div>
        </div>
    );
}

export default ActiveGameBackground;