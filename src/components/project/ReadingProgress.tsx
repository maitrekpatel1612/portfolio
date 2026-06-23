"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ReadingProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const article = document.querySelector(
                ".markdown-content",
            ) as HTMLElement | null;

            if (!article) return;

            const articleTop = article.offsetTop;
            const articleHeight = article.offsetHeight;

            const viewportHeight = window.innerHeight;

            const scrollPosition = window.scrollY - articleTop;

            const totalScrollableDistance = articleHeight - viewportHeight;

            const percentage = (scrollPosition / totalScrollableDistance) * 100;

            setProgress(Math.max(0, Math.min(100, percentage)));
        };

        updateProgress();

        window.addEventListener("scroll", updateProgress, {
            passive: true,
        });

        window.addEventListener("resize", updateProgress);

        return () => {
            window.removeEventListener("scroll", updateProgress);

            window.removeEventListener("resize", updateProgress);
        };
    }, []);

    return (
        <div
            className="
                fixed
                bottom-0
                left-0
                right-0

                z-50

                h-[8px]

                bg-zinc-600/90
                backdrop-blur-xl

        
            "
        >
            <motion.div
                className="
                    h-full

                    bg-gradient-to-r
                    from-zinc-200
                    via-white
                    to-zinc-300

                    shadow-[0_0_20px_rgba(255,255,255,0.45)]

                    relative

                    after:absolute
                    after:right-0
                    after:top-1/2
                    after:-translate-y-1/2

                    after:h-4
                    after:w-4

                    after:rounded-full

                    after:bg-white

                    after:shadow-[0_0_25px_rgba(255,255,255,0.8)]
                "
                animate={{
                    width: `${progress}%`,
                }}
                transition={{
                    ease: "easeOut",
                    duration: 0.15,
                }}
            />
        </div>
    );
}
