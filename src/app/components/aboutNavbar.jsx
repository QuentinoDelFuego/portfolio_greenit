import React from "react";
import Link from "next/link";

const aboutNavbar = () => {
    return (
        <nav>
            <div className="flex flex-row" id="aboutNavbar">
                <button className="hover:text-amber-400 bg-white inline-block">
                    <Link href={"http://localhost:3000/portfolioSections/ecoSection"}>Eco-friendly website</Link>
                </button>
                <button className="hover:text-amber-400 bg-white inline-block">
                    <Link href={"http://localhost:3000/portfolioSections/projectsSection"}>My projects</Link>
                </button>
            </div>
        </nav>
    );
};

export default aboutNavbar;