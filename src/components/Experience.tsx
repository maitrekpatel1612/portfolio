"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

export default function Experience() {
    return (
        <section
            id="experience"
            className="
                py-20
                md:py-32

                px-4
                md:px-6
            "
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
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
                    }}
                    className="mb-8"
                >
                

                    <h2
                        className="
                            text-4xl
                            sm:text-5xl
                            md:text-6xl

                            font-bold

                            leading-tight
                        "
                    >
                        Professional Journey
                    </h2>

                    
                </motion.div>

                

                {/* Experience Cards */}

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={`${exp.company}-${index}`}
                            initial={{
                                opacity: 0,
                                y: 20,
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
                                delay: index * 0.08,
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
                                md:p-10

                                hover:border-zinc-700

                                hover:shadow-[0_0_40px_rgba(59,130,246,0.08)]

                                transition-all
                                duration-300
                            "
                        >
                            {/* Hover Glow */}

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

                            <div
                                className="
                                    relative

                                    grid

                                    lg:grid-cols-[320px_1fr]

                                    gap-8
                                    lg:gap-12
                                "
                            >
                                {/* Left Section */}

                                <div>
                                    

                                    <h3
                                        className="
                                            mt-5

                                            text-2xl
                                            md:text-3xl

                                            font-semibold
                                        "
                                    >
                                        {exp.role}
                                    </h3>

                                    <p
                                        className="
                                            mt-2

                                            text-zinc-400
                                            text-xl
                                        "
                                    >
                                        {exp.company}
                                    </p>

                                    <div
                                        className="
                                            mt-4

                                            inline-flex

                                            px-4
                                            py-2

                                            rounded-full

                                            border
                                            border-zinc-600

                                            text-sm
                                            text-zinc-200
                                        "
                                    >
                                        {exp.duration}
                                    </div>
                                </div>

                                {/* Right Section */}

                                <div>
                                    {/* Impact Metrics */}

                                    {exp.impact && (
                                        <div
                                            className="
                                                grid

                                                grid-cols-2
                                                md:grid-cols-3

                                                gap-4

                                                mb-8
                                            "
                                        >
                                            {exp.impact.map((item) => (
                                                <div
                                                    key={item.label}
                                                    className="
                                                        rounded-2xl

                                                        border
                                                        border-zinc-800

                                                        bg-black/30

                                                        p-4
                                                    "
                                                >
                                                    <h4
                                                        className="
                                                            text-2xl
                                                            md:text-3xl

                                                            font-bold
                                                        "
                                                    >
                                                        {item.value}
                                                    </h4>

                                                    <p
                                                        className="
                                                            mt-1

                                                            text-sm

                                                            text-zinc-500
                                                        "
                                                    >
                                                        {item.label}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Achievements */}

                                    <div className="space-y-4">
                                        {exp.achievements.map((achievement) => (
                                            <div
                                                key={achievement}
                                                className="
                                                        flex
                                                        items-start

                                                        gap-3
                                                    "
                                            >
                                                <div
                                                    className="
                                                            mt-3

                                                            h-2
                                                            w-2

                                                            rounded-full

                                                            bg-zinc-500

                                                            shrink-0
                                                        "
                                                />

                                                <p
                                                    className="
                                                            text-zinc-300

                                                            leading-7
                                                        "
                                                >
                                                    {achievement}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tech Stack */}

                                    {exp.technologies && (
                                        <div
                                            className="
                                                flex
                                                flex-wrap

                                                gap-2

                                                mt-8
                                            "
                                        >
                                            {exp.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="
                                                            whitespace-nowrap

                                                            px-3
                                                            py-2

                                                            rounded-full

                                                            border
                                                            border-zinc-800

                                                            bg-black/40

                                                            text-sm
                                                            text-zinc-300
                                                        "
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
