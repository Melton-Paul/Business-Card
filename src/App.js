import Header from "./components/Header"
import Body from "./components/Body"
import Socials from "./components/Socials"
import headshot from "./images/rectangle90.png"

export default function App(){
    return (
        <div className="container">
            <img className="headshot" src={headshot} alt="A picture of an individual smiling" />
            <div className="card--container">
                <Header />
                <Body />
            </div>
            <Socials />
        </div>
    )
}
