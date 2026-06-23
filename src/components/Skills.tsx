"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

export default function Skills() {
    return (
        <section
            id="skills"
            className="
                py-24
                md:py-32

                px-5
                md:px-6
            "
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}

                <div className="mb-16 md:mb-20">
                    <p
                        className="
                            text-zinc-500
                            uppercase
                            tracking-[0.3em]
                            text-xs
                            mb-4
                        "
                    >
                        Skills
                    </p>

                    <h2
                        className="
                            text-4xl
                            sm:text-5xl
                            md:text-6xl

                            font-bold

                            leading-tight
                            max-w-4xl
                        "
                    >
                        Technologies I Use to Build
                        <span
                            className="
                                block

                                bg-gradient-to-r
                                from-white
                                via-zinc-300
                                to-zinc-600

                                bg-clip-text
                                text-transparent
                            "
                        >
                            Modern Products
                        </span>
                    </h2>

                    <p
                        className="
                            mt-6

                            max-w-2xl

                            text-zinc-500

                            text-base
                            md:text-lg
                        "
                    >
                        From distributed backend systems and cloud-native
                        infrastructure to AI engineering and developer
                        productivity tooling.
                    </p>
                </div>

                {/* Categories */}

                <div
                    className="
                        grid

                        grid-cols-1
                        lg:grid-cols-2

                        gap-6
                    "
                >
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: categoryIndex * 0.08,
                            }}
                            className="
                                    group

                                    relative

                                    overflow-hidden

                                    rounded-3xl

                                    border
                                    border-zinc-800

                                    bg-zinc-900/20

                                    backdrop-blur-sm

                                    p-6
                                    md:p-8

                                    hover:border-zinc-700

                                    transition-all
                                    duration-300
                                "
                        >
                            {/* Glow */}

                            <div
                                className="
                                        absolute

                                        inset-0

                                        opacity-0
                                        group-hover:opacity-100

                                        transition

                                        bg-gradient-to-br
                                        from-blue-500/5
                                        via-transparent
                                        to-purple-500/5

                                        pointer-events-none
                                    "
                            />

                            {/* Title */}

                            <div className="relative z-10">
                                <h3
                                    className="
                                            text-xl
                                            md:text-2xl

                                            font-semibold

                                            mb-6
                                        "
                                >
                                    {category.title}
                                </h3>

                                {/* Skills */}

                                <div
                                    className="
                                            flex
                                            flex-wrap

                                            gap-2
                                            md:gap-3
                                        "
                                >
                                    {category.skills.map((skill) => {
                                        const Icon = skill.icon;

                                        return (
                                            <motion.div
                                                key={skill.name}
                                                whileHover={{
                                                    y: -3,
                                                    scale: 1.03,
                                                }}
                                                transition={{
                                                    duration: 0.15,
                                                }}
                                                className="
                                                            flex
                                                            items-center

                                                            gap-2

                                                            px-3
                                                            md:px-4

                                                            py-2

                                                            rounded-xl

                                                            border
                                                            border-zinc-800

                                                            bg-black/30

                                                            hover:border-zinc-600
                                                            hover:bg-zinc-900/70

                                                            transition-all
                                                        "
                                            >
                                                <Icon
                                                    size={16}
                                                    className="
                                                                text-zinc-300
                                                                shrink-0
                                                            "
                                                />

                                                <span
                                                    className="
                                                                text-xs
                                                                md:text-sm

                                                                text-zinc-300
                                                            "
                                                >
                                                    {skill.name}
                                                </span>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
