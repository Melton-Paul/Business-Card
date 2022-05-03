import github from "../images/GitHubIcon.svg"
import facebook from "../images/FacebookIcon.svg"
import twitter from "../images/TwitterIcon.svg"
import instagram from "../images/InstagramIcon.svg"

export default function SocialsBar(){
    return (
        <div className="social--bar">
            <a href="https://twitter.com"><img src={twitter}></img></a>
            <a href="https://facebook.com"><img src={facebook}></img></a>
            <a href="https://instagram.com"><img src={instagram}></img></a>
            <a href="https://github.com"><img src={github}></img></a>
        </div>
    )
}