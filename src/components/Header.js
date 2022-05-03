import email from "../images/Icon.svg"
import linkedIn from "../images/Vector.svg"

export default function Header(){
    return (
        <header>
            <h1 className="header--title">Paul Melton</h1>
            <p className="header--job__title">Frontend Developer</p>
            <a className="header--website" href="https://movelistcreator.netlify.app/">PaulMelton.com</a>
            <div className="btn--group">
                <button className="btn btn--secondary"><img className="email-icon icon" src={email} alt=""/> <a href="#">Email</a></button>
                <button className="btn btn--lb"><img className="linkedin-icon icon" src={linkedIn} alt=""/> <a href="#">LinkedIn</a></button>
            </div>
        </header>
    )
}