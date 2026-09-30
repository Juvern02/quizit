import "./home.css";import 
{ useEffect, useState } from "react";
import Header from "./header";
import HomePage from "./homePage";
import HomePage2 from "./homePage2";

function Home() {
    const [page, setPage] = useState(1);

    useEffect(() => {
        const handleWheel = (event) => {
            if (event.deltaY > 0) {
                setPage(2);
            } else if (event.deltaY < 0) {
                setPage(1);
            }
        };

        window.addEventListener("wheel", handleWheel);

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, []);

    return (
        <div className="home">
            <Header />
            <div className="background">
                {page === 1 && <HomePage />}
                {page === 2 && <HomePage2 />}
            </div>
        </div>
    );
}

export default Home;