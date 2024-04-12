import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="flex flex-row" id="Navbar">
                    <button className="hover:text-amber-400 bg-white inline-block font-extrabold">
                        <Link href={"https://strong-fairy-f76f3a.netlify.app/portfolioSections/aboutSection"}>About me</Link>
                    </button>
                    <button className="hover:text-amber-400 bg-white inline-block font-extrabold">
                        <Link href={"https://strong-fairy-f76f3a.netlify.app/portfolioSections/ecoSection"}>Eco-friendly website</Link>
                    </button>
                    <button className="hover:text-amber-400 bg-white inline-block font-extrabold">
                        <Link href={"https://strong-fairy-f76f3a.netlify.app/portfolioSections/projectsSection"}>My projects</Link>
                    </button>
            </div>
        </nav>
    );
};

export default Navbar;