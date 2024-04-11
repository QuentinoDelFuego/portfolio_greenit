import React from "react";
import Link from "next/link";

const ecoNavbar = () => {
    return (
        <nav>
            <div className="flex flex-row" id="ecoNavbar">
                    <button className="hover:text-amber-400 bg-white inline-block">
                        <Link href={"http://localhost:3000/portfolioSections/aboutSection"}>About me</Link>
                    </button>
                    <button className="hover:text-amber-400 bg-white inline-block">
                        <Link href={"http://localhost:3000/portfolioSections/projectsSection"}>My projects</Link>
                    </button>
            </div>
        </nav>
    );
};

export default ecoNavbar;