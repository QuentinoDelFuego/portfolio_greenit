import Link from "next/link";
import Logo from "../../components/Logo";

export default function Page() {
    return (
        <div>
            <Logo/>
            <div id="IntroEcoSection">
                <p><span>This</span> section has been particularly made for my Green IT teacher, mister Froidure,<br></br>
                but you can of course read it if this topic interests you. I will talk about how NextJS<br></br>
                can help you to create an eco-friendly website in the first part,<br></br> and in the second part how I did it
                for my website <span>concretely</span>.</p>
            </div>
            <div id="nextjsIsEco">
                <p id="nextWays"><span>NextJS</span> help you create an eco-friendly website in many ways : </p>
                <br></br>
                <ul>
                    <li>First, NextJS gives you the app routeur, which gives you an efficient way <br></br>to create new pages 
                    by simply make a new folder and your page inside it,<br></br> which reduce the code.</li>
                    <br></br>
                    <li>Secondly, the loading is differed; it means that it will only load the <br></br>Javascript components you need at the moment,<br></br> 
                    which reduce the loading time and the amount of ressources used.</li>
                    <br></br>
                    <li>As I mentionned just before, NextJS use autonomous and reusable<br></br> components, which helps reduce code duplication <br></br>
                    and optimize the Javascript files size.</li>
                    <br></br>
                    <li>For the fourth advantage of NextJs, it have integrated tools to help you <br></br>optimize your images,
                    reducing the size of these images.</li>
                    <br></br>
                    <li>For the fifth and last advantage, NextJS help you have a better <br></br>Search Engine Optimization more easily,
                    which reduce the amount of<br></br><span>marketing</span> campaigns you will need later.</li>
                </ul>
            </div>
            <div id="myWebsiteIsEco">
                <p id="myWebsiteWays">For my website, I will give you 5 ways I used to make it more <span>eco-friendly</span> : </p>
                <br></br>
                <ul>
                    <li>The first thing I did was to use the app-routeur, which gives me as I said in the part above <br></br>
                    an eficient and fast way to create more pages, with less code.</li>
                    <br></br>
                    <li>The second thing is that I didn't use useless images and animations to make <br></br>my website "shiny and beautiful",
                    I go straight to the point and the only "animation" <br></br>I did is a hover animation just so you know you can click there.</li>
                    <br></br>
                    <li>The logo in the top left corner of each page and the navbar helps simplify and <br></br>optimize the visit of the user
                    on my website to make you not wasting time<br></br> and go where you want easily and fast, which reduce<br></br>the time on the website.</li>
                    <br></br>
                    <li>For the fourth way, I will speak about the links I put on various pages so the user doesn't have <br></br>
                    to open new tabs and manually go to Github or the mailbox to send me a message,<br></br>which reduce the ressources used.</li>
                    <br></br>
                    <li>And last, I used basic font to not download extra ressources<br></br>that are not essentials for the <span>website</span>.</li>
                </ul>
            </div>
        </div>
    )
}