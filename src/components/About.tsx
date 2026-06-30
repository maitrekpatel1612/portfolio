"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Briefcase } from "lucide-react";

import profile from "@/images/profile.png";

const services = [
    "AI Agent Solutions",
    "Complex RAG Knowledge Bases",
    "Full AI SaaS Products",
    "Enterprise AI Applications",
    "AI Workflow Automation",
    "Multi-Agent Systems",
    "MCP Servers",
    "AI Chatbots",
    "Backend APIs",
    "Distributed Systems",
    "Cloud Infrastructure",
    "Microservices",
    "Platform Engineering",
    "Developer Tools",
    "System Design",
    "Performance Optimization",
];

export default function About() {
    return (
        <section id="about" className="py-16 md:py-20 px-6">
            <motion.div
                className="max-w-7xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                {/* Heading */}

                

                {/* Profile */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.7,
                        delay: 0.15,
                    }}
                    className="mt-1"
                >
                    <div className="grid lg:grid-cols-[320px_1fr] gap-16  items-end">
                        {/* LEFT */}

                        <div className="flex flex-col items-center">
                            <div className="relative">
                                <div className="absolute inset-0 rounded-full bg-indigo-500/10 blur-3xl scale-110" />

                                <div className="relative w-80 h-[420px]">
                                    <Image
                                        src={profile}
                                        alt="Maitrek Patel"
                                        fill
                                        priority
                                        className="object-contain object-bottom"
                                    />
                                </div>
                            </div>
                            <div className="mt-0 text-center">
                                <h3 className="mt-5 text-4xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-100 to-zinc-500 bg-clip-text text-transparent">
                                    Maitrek Patel
                                </h3>
                            </div>

                            <p className="mt-2 text-zinc-400">
                                Full Stack Engineer
                            </p>

                            <p className="text-zinc-400">AI Engineer</p>
                        </div>

                        {/* RIGHT */}

                        <div className="space-y-6">
                            {/* Education */}

                            <motion.div
                                whileHover={{
                                    y: -4,
                                }}
                                className="
                                    rounded-3xl
                                    border
                                    border-zinc-800
                                    bg-white/[0.03]
                                    p-7
                                    transition-all
                                    duration-300
                                "
                            >
                                <div className="flex items-start gap-5">
                                    <GraduationCap
                                        size={24}
                                        className="mt-1 text-zinc-500 shrink-0"
                                    />

                                    <div>
                                        <p className="text-sm text-zinc-500">
                                            Education
                                        </p>

                                        <p className="mt-2 text-xl font-semibold text-zinc-100">
                                            B.Tech Computer Science &
                                            Engineering
                                        </p>

                                        <p className="mt-1 text-zinc-400">
                                            IIITDM Jabalpur 2022-26
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Location */}

                            <motion.div
                                whileHover={{
                                    y: -4,
                                }}
                                className="
                                    rounded-3xl
                                    border
                                    border-zinc-800
                                    bg-white/[0.03]
                                    p-7
                                    transition-all
                                    duration-300
                                "
                            >
                                <div className="flex items-start gap-5">
                                    <MapPin
                                        size={24}
                                        className="mt-1 text-zinc-500 shrink-0"
                                    />

                                    <div>
                                        <p className="text-sm text-zinc-500">
                                            Location
                                        </p>

                                        <p className="mt-2 text-xl font-semibold text-zinc-100">
                                            Himmatnagar, India
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Available */}
                            <motion.div
                                whileHover={{
                                    y: -4,
                                }}
                                className="
                                    rounded-3xl
                                    border
                                    border-zinc-800
                                    bg-white/[0.03]
                                    p-7
                                    transition-all
                                    duration-300
                                "
                            >
                                <div className="flex items-start gap-5">
                                    <Briefcase
                                        size={24}
                                        className="mt-1 text-zinc-500 shrink-0"
                                    />

                                    <div>
                                        <p className="text-sm text-zinc-500">
                                            Available For
                                        </p>

                                        <p className="mt-2 text-xl font-semibold text-zinc-100">
                                            Freelance • Full-Time • Contract
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* What I Can Build */}

                <div className="mt-24">
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
                            What I Can Build
                        </h2>
                    </motion.div>

                    <div className="flex flex-wrap gap-4">
                        {services.map((service, index) => (
                            <motion.div
                                key={service}
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.04,
                                }}
                                whileHover={{
                                    y: -4,
                                    scale: 1.03,
                                }}
                                className="
                                    rounded-2xl
                                    border
                                    border-zinc-800

                                    bg-zinc-900/60

                                    px-5
                                    py-3

                                    text-sm
                                    md:text-base

                                    font-large
                                    text-zinc-300

                                    transition-all
                                    duration-300

                                    hover:border-zinc-700
                                    hover:bg-zinc-800/70
                                "
                            >
                                {service}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
