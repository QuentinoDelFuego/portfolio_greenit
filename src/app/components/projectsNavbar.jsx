import React from "react";
import Link from "next/link";

const projectsNavbar = () => {
    return (
        <nav>
            <div className="flex flex-row" id="projectsNavbar">
                    <button className="hover:text-amber-400 bg-white inline-block">
                        <Link href={"http://localhost:3000/portfolioSections/aboutSection"}>About me</Link>
                    </button>
                    <button className="hover:text-amber-400 bg-white inline-block">
                        <Link href={"http://localhost:3000/portfolioSections/ecoSection"}>Eco-friendly website</Link>
                    </button>
            </div>
        </nav>
    );
};

export default projectsNavbar;