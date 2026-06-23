"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

interface Heading {
    id: string;
    text: string;
    level: number;
}

export default function TableOfContents() {
    const [headings, setHeadings] = useState<Heading[]>([]);
    const [activeId, setActiveId] = useState("");
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const elements = Array.from(
            document.querySelectorAll(
                ".markdown-content h1, .markdown-content h2, .markdown-content h3",
            ),
        );

        const items = elements.map((el) => ({
            id: el.id,
            text: el.textContent || "",
            level: Number(el.tagName.replace("H", "")),
        }));

        setHeadings(items);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-20% 0px -70% 0px",
            },
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    if (!headings.length) return null;

    const TocContent = () => (
        <>
            <div
                className="
                    flex
                    items-center
                    justify-between
                    mb-5
                "
            >
                <p
                    className="
                        text-xs
                        uppercase
                        tracking-[0.3em]
                        text-zinc-500
                    "
                >
                    Contents
                </p>
            </div>

            <div
                className="
                    overflow-y-auto
                    max-h-[70vh]
                    pr-2

                    [&::-webkit-scrollbar]:w-1
                    [&::-webkit-scrollbar-track]:bg-transparent
                    [&::-webkit-scrollbar-thumb]:bg-zinc-700
                    [&::-webkit-scrollbar-thumb]:rounded-full
                "
            >
                <div className="space-y-2">
                    {headings.map((heading) => (
                        <a
                            key={heading.id}
                            href={`#${heading.id}`}
                            className={`
                                block
                                text-sm
                                transition-all
                                duration-200

                                ${
                                    activeId === heading.id
                                        ? `
                                            text-white
                                            border-l-2
                                            border-white/50
                                            pl-3
                                            font-medium
                                        `
                                        : `
                                            text-zinc-500
                                            hover:text-zinc-300
                                            pl-4
                                        `
                                }

                                ${heading.level === 2 ? "ml-2" : ""}

                                ${heading.level === 3 ? "ml-6 text-xs" : ""}
                            `}
                        >
                            {heading.text}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );

    return (
        <>
            {/* Desktop */}

            <aside className="hidden xl:block sticky top-24 h-[80vh] w-75 shrink-0">
                <div
                    className="
                        h-full

                        rounded-3xl
                        border
                        border-zinc-800

                        bg-zinc-950/60
                        backdrop-blur-xl

                        p-6

                        shadow-[0_0_40px_rgba(0,0,0,0.4)]
                    "
                >
                    <TocContent />
                </div>
            </aside>

            {/* Mobile Floating Button */}

            <button
                onClick={() => setMobileOpen(true)}
                className="
                    xl:hidden

                    fixed
                    bottom-6
                    right-6

                    z-50

                    p-4
                    rounded-full

                    bg-white
                    text-black

                    shadow-xl
                "
            >
                <Menu size={20} />
            </button>

            {/* Mobile Drawer */}

            {mobileOpen && (
                <div
                    className="
                        xl:hidden

                        fixed
                        inset-0
                        z-50

                        bg-black/70
                        backdrop-blur-sm
                    "
                >
                    <div
                        className="
                            absolute
                            right-0
                            top-0

                            h-full
                            w-[90%]
                            max-w-sm

                            bg-zinc-950
                            border-l
                            border-zinc-800

                            p-6
                        "
                    >
                        <div
                            className="
                                flex
                                justify-between
                                items-center
                                mb-6
                            "
                        >
                            <h3 className="font-semibold">Contents</h3>

                            <button onClick={() => setMobileOpen(false)}>
                                <X size={22} />
                            </button>
                        </div>

                        <div onClick={() => setMobileOpen(false)}>
                            <TocContent />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
