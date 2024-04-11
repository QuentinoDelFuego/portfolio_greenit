import Link from "next/link";
import Logo from "../../components/Logo";

export default function Page() {
    return (
        <div>
            <Logo />
            <p id="skillsText" className="mb-4"><span>In</span> this part, I will talk to you about the skills that I acquired and the projects I did during this first year.
                <br></br>
                At Enigma we learn a lot of different fields of the IT : first, we learned multiple programming languages like<br></br>
                Python where we had to do the "Life's game", C with projects like a Hangman or the Brick Breaker game,<br></br> 
                Java with the battleship game and the basic web-development stack "HTML/CSS/Javascript"<br></br> 
                where we had to do a unit converter on a browser page.<br></br>
                <br></br>
                But as I said, we didn't do only programming languages : we also had database classes where we learned <br></br>
                SQL and I learned to use mySQL.<br></br>
                <br></br>
                And that's not all ! We also do network courses and we are in training to get our CCNA certification from CISCO.<br></br>
                <br></br>
                I learned so much since I first came to Enigma and I still will for a while ! In fact this website you are looking at<br></br>
                has been made with NextJs, the React framework, and I did not have a clue of it before my teacher asked me<br></br>
                to use it to create this website, like not even a month ago.<br></br>
                <br></br>
                If you want to check some of the projects I did, you can go to my <a id="githubLinkProjectsPage"href="https://github.com/QuentinoDelFuego"><span>Github</span></a>.
            </p>
        </div>
    );
};