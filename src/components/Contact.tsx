import { FiMail, FiGithub, FiLinkedin, FiArrowRight } from "react-icons/fi";

import { FaXTwitter, FaMedium } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";

export default function Contact() {
    return (
        <section
            id="contact"
            className="
                py-16
                md:py-24

                px-4
                md:px-6
            "
        >
            <div className="max-w-7xl mx-auto">
                <div
                    className="
                        relative
                        overflow-hidden

                        rounded-3xl
                        md:rounded-[2rem]

                        border
                        border-zinc-800

                        bg-gradient-to-b
                        from-zinc-900
                        to-black

                        p-6
                        sm:p-8
                        md:p-16
                    "
                >
                    {/* Glow */}

                    <div
                        className="
                            absolute
                            top-0
                            left-1/2

                            -translate-x-1/2

                            h-48
                            w-48

                            md:h-64
                            md:w-64

                            rounded-full

                            bg-blue-500/10

                            blur-[120px]
                        "
                    />

                    <div className="relative z-10">
                        {/* Heading */}

                        <h2
                            className="
                                text-3xl
                                sm:text-4xl
                                md:text-6xl

                                font-bold
                                leading-tight
                            "
                        >
                            Let&apos;s Build
                            <br />
                            Something Exceptional.
                        </h2>

                        {/* Description */}

                        <p
                            className="
                                mt-5
                                md:mt-6

                                text-base
                                md:text-lg

                                text-zinc-400

                                max-w-2xl

                                leading-7
                                md:leading-8
                            "
                        >
                            I enjoy building scalable products, backend
                            platforms, AI-powered applications and distributed
                            systems that solve real business problems.
                        </p>

                        {/* CTA + Socials */}

                        <div
                            className="
                                flex
                                flex-col
                                lg:flex-row

                                lg:items-center

                                gap-4

                                mt-8
                                md:mt-10
                            "
                        >
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=maitrekpatel1612@gmail.com"
                                className="
                                    inline-flex
                                    items-center
                                    justify-center

                                    gap-3

                                    w-full
                                    sm:w-fit

                                    px-6
                                    py-4

                                    rounded-xl

                                    bg-white
                                    text-black

                                    font-medium

                                    hover:opacity-90

                                    transition
                                "
                            >
                                <FiMail />
                                Get In Touch
                                <FiArrowRight />
                            </a>

                            {/* Social Icons */}

                            <div
                                className="
                                    flex
                                    flex-wrap

                                    gap-3
                                "
                            >
                                {[
                                    {
                                        href: "https://github.com/maitrekpatel1612",
                                        icon: <FiGithub size={20} />,
                                    },
                                    {
                                        href: "https://www.linkedin.com/in/maitrek-patel-3428a9258/",
                                        icon: <FiLinkedin size={20} />,
                                    },
                                    {
                                        href: "https://x.com/MaitrekP97201",
                                        icon: <FaXTwitter size={20} />,
                                    },
                                    {
                                        href: "https://medium.com/@newsletter1612",
                                        icon: <FaMedium size={20} />,
                                    },
                                    {
                                        href: "https://substack.com/@maitrek",
                                        icon: <SiSubstack size={20} />,
                                    },
                                ].map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            flex
                                            items-center
                                            justify-center

                                            h-12
                                            w-12

                                            rounded-xl

                                            border
                                            border-zinc-700

                                            hover:border-zinc-500
                                            hover:bg-zinc-900

                                            transition
                                        "
                                    >
                                        {item.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Info Cards */}

                        <div
                            className="
                                grid

                                grid-cols-1
                                sm:grid-cols-2
                                lg:grid-cols-3

                                gap-4
                                md:gap-6

                                mt-12
                                md:mt-16
                            "
                        >
                            <div
                                className="
                                    rounded-2xl

                                    border
                                    border-zinc-800

                                    bg-zinc-900/30

                                    p-5
                                "
                            >
                                <p className="text-zinc-500 text-sm">
                                    Location
                                </p>

                                <p className="mt-2 font-medium">
                                    Himmatnagar, Gujarat, India
                                </p>
                            </div>

                            <div
                                className="
                                    rounded-2xl

                                    border
                                    border-zinc-800

                                    bg-zinc-900/30

                                    p-5
                                "
                            >
                                <p className="text-zinc-500 text-sm">
                                    Education
                                </p>

                                <p className="mt-2 font-medium">
                                    PDPM IIITDM Jabalpur CSE (2022-26)
                                </p>
                            </div>

                            <div
                                className="
                                    rounded-2xl

                                    border
                                    border-zinc-800

                                    bg-zinc-900/30

                                    p-5
                                "
                            >
                                <p className="text-zinc-500 text-sm">Focus</p>

                                <p className="mt-2 font-medium">
                                    Full Stack • AI Engineer • Distributed
                                    Systems
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
