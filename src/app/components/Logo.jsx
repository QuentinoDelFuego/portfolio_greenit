import React from "react";
import Link from "next/link";

const Logo = () => {
    return (
        <Link className="flex flex-wrap items-center justify-between mx-auto p-8 text-4xl hover:text-amber-400" href={"/"}>
            QJ
        </Link>
    );
};

export default Logo;