import Header from "./components/Header"
import headshot from "./images/rectangle90.png"

export default function App(){
    return (
        <div className="container">
            <img className="headshot" src={headshot} alt="A picture of an individual smiling" />
            <Header />


        </div>
    )
}
