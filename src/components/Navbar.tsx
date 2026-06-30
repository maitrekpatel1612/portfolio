"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Always show at the top
            if (currentScrollY < 20) {
                setVisible(true);
            }
            // Hide when scrolling down
            else if (currentScrollY > lastScrollY) {
                setVisible(false);
            }
            // Show when scrolling up
            else {
                setVisible(true);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.header
                    initial={{
                        y: -100,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    exit={{
                        y: -100,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 0.35,
                        ease: "easeInOut",
                    }}
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

                            px-5
                            md:px-6

                            py-3

                            rounded-full

                            border
                            border-zinc-800

                            bg-black/60
                            backdrop-blur-xs
                            shadow-lg

                            w-fit
                            max-w-[95vw]
                        "
                    >
                        {/* Home */}

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
                            {[
                                "about",
                                "experience",
                                "projects",
                                "skills",
                                "contact",
                            ].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item}`}
                                    className="
                                        shrink-0

                                        transition-all
                                        duration-300

                                        hover:text-white
                                    "
                                >
                                    {item.charAt(0).toUpperCase() +
                                        item.slice(1)}
                                </a>
                            ))}
                        </nav>
                    </div>
                </motion.header>
            )}
        </AnimatePresence>
    );
}
