import Link from "next/link";
import Logo from "../../components/Logo";

export default function Page() {
    return (
        <div>
            <Logo />
            <p id="aboutme1" className="mb-4"><span>Hello</span>, my name is Quentin Juskowiak, I am 21 years old <br></br> and a first-year student at the IT school Enigma,<br></br> based in Lille, France.<br></br>
            I love video-games, series, music and coding, and my career goal<br></br> is to be a professional programmer even if I don&apos;t know with which language yet.<br></br>
            <br></br>
            About this website, this is my first website I am deploying ever on the internet, it&apos;s so exciting yet so scary at the same time,<br></br> so please don&apos;t be too harsh on me if it&apos;s far from perfect, we all start somewhere !<br></br>
            If my profile and my website creation skills interest you, I am looking for an internship starting June, 10 of 2024 with 2 months minimum,<br></br> but it can last 3 months if you want.<br></br><br></br>
            You can contact me at this <a id="mailAboutPage" href="mailto:Quentin.JUSKOWIAK@enigma-school.com">mail address</a>.
            <br></br>
            <br></br>
            Again, I hope you will like your visit on my website and I would love to have some tips to get better in my websites creation journey,<br></br> so feel free to message me ! <span>Bye !</span></p>
        </div>
    );
};