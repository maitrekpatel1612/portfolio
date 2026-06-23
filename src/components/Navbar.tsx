import Link from "next/link";

export default function Navbar() {
    return (
        <header
            className="
                fixed
                top-10
                left-1/2
                -translate-x-1/2
                z-50
            "
        >
            <div
                className="
                    flex
                    items-center

                    gap-4
                    md:gap-8

                    px-4
                    md:px-6

                    py-2

                    rounded-full

                    border
                    border-zinc-800

                    bg-black/40
                    backdrop-blur-xl

                    shadow-lg

                    w-fit
                    max-w-[95vw]
                "
            >
                {/* Logo */}

                <Link
                    href="/"
                    className="
                        font-semibold

                        text-xs
                        md:text-sm

                        text-white

                        shrink-0
                    "
                >
                    Home
                </Link>

                {/* Navigation */}

                <nav
                    className="
                        flex
                        items-center

                        gap-3
                        md:gap-6

                        text-[10px]
                        md:text-sm

                        text-zinc-400

                        whitespace-nowrap

                        overflow-x-auto

                        max-w-[60vw]
                        sm:max-w-[70vw]
                        md:max-w-none

                        scrollbar-none

                        [-ms-overflow-style:none]
                        [scrollbar-width:none]

                        [&::-webkit-scrollbar]:hidden
                    "
                >
                    <a
                        href="#about"
                        className="
                            shrink-0
                            hover:text-white
                            transition-colors
                        "
                    >
                        About
                    </a>

                    <a
                        href="#experience"
                        className="
                            shrink-0
                            hover:text-white
                            transition-colors
                        "
                    >
                        Experience
                    </a>

                    <a
                        href="#projects"
                        className="
                            shrink-0
                            hover:text-white
                            transition-colors
                        "
                    >
                        Projects
                    </a>

                    <a
                        href="#skills"
                        className="
                            shrink-0
                            hover:text-white
                            transition-colors
                        "
                    >
                        Skills
                    </a>

                    <a
                        href="#contact"
                        className="
                            shrink-0
                            hover:text-white
                            transition-colors
                        "
                    >
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
}
