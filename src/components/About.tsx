"use client";

import { motion } from "framer-motion";

const focusAreas = [
    "Distributed Systems",
    "AI Agents",
    "RAG",
    "System Design",
    "Microservices",
    "Cloud Infrastructure",
    "Observability",
    "Developer Experience",
    "Kafka",
    "Redis",
    "Platform Engineering",
    "Scalable SaaS",
];

export default function About() {
    return (
        <section
            id="about"
            className="
                py-20
                md:py-32

                px-4
                md:px-6
            "
        >
            <motion.div
                className="max-w-7xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                {/* Heading */}

                <div className="max-w-5xl">
                    <h2
                        className="
                            text-4xl
                            sm:text-5xl
                            md:text-6xl
                            lg:text-7xl

                            font-bold
                            leading-[1.05]
                            tracking-tight
                        "
                    >
                        Building products at the intersection of
                        <span
                            className="
                                block

                                bg-linear-to-r
                                from-white
                                via-zinc-300
                                to-zinc-600

                                bg-clip-text
                                text-transparent
                            "
                        >
                            Software, AI & Infrastructure
                        </span>
                    </h2>
                </div>

                {/* Focus Areas */}

                <div
                    className="
                        flex
                        flex-wrap

                        gap-2
                        md:gap-3

                        mt-8
                        md:mt-10
                    "
                >
                    {focusAreas.map((item) => (
                        <span
                            key={item}
                            className="
                                px-3
                                md:px-4

                                py-2

                                rounded-full

                                border
                                border-zinc-800

                                bg-zinc-900/50

                                text-zinc-300

                                text-xs
                                md:text-sm
                            "
                        >
                            {item}
                        </span>
                    ))}
                </div>

                {/* Content */}

                <div
                    className="
                        mt-12
                        md:mt-16

                        max-w-4xl

                        space-y-6
                        md:space-y-8
                    "
                >
                    <p
                        className="
                            text-lg
                            sm:text-xl
                            md:text-2xl

                            leading-relaxed

                            text-zinc-300
                        "
                    >
                        I&apos;m{" "}
                        <span className="text-white font-semibold">
                            Maitrek Patel
                        </span>
                        , a Full Stack Engineer passionate about building
                        scalable products, distributed systems and AI-powered
                        applications that continue to perform as products, users
                        and business requirements grow.
                    </p>

                    <p
                        className="
                            text-base
                            md:text-lg

                            leading-8

                            text-zinc-300
                        "
                    >
                        I&apos;m currently pursuing my B.Tech in Computer
                        Science and Engineering at IIITDM Jabalpur. Beyond
                        academics, I&apos;ve actively contributed to engineering
                        projects, athletics, student initiatives, and product
                        development experiences that have shaped my approach to
                        problem solving and leadership.
                    </p>

                    <p
                        className="
                            text-base
                            md:text-lg

                            leading-8

                            text-zinc-300
                        "
                    >
                        My interests span backend engineering, cloud-native
                        infrastructure, AI systems, platform engineering and
                        large-scale software architecture. I enjoy exploring how
                        modern systems operate under scale and turning complex
                        ideas into practical solutions that create measurable
                        value.
                    </p>
                </div>

                {/* Philosophy */}

                <div
                    className="
                        mt-12
                        md:mt-16

                        border
                        border-zinc-800

                        rounded-3xl

                        p-6
                        md:p-10

                        bg-zinc-900/20
                    "
                >
                    <p
                        className="
                            text-zinc-500

                            text-xs

                            uppercase

                            tracking-[0.3em]

                        "
                    >
                        Engineering Philosophy
                    </p>

                    <p
                        className="
                            text-xl
                            md:text-3xl

                            leading-relaxed

                            text-zinc-300
                        "
                    >
                        &quot;Build for scale from day one, automate repetitive
                        work, measure everything, and create systems that are
                        easy for both users and engineers to operate.&quot;
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
