"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "next/link";

import { FiArrowRight, FiGithub, FiExternalLink } from "react-icons/fi";

import type { Project } from "@/types/project";

interface ProjectsProps {
    projects: Project[];
}

function Projects({ projects }: ProjectsProps) {
    return (
        <section id="projects" className="py-20 md:py-32 px-5 md:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-14 md:mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                        Featured Projects
                    </h2>
                </div>

                <div className="grid gap-6 md:gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {projects.map((project, index) => (
                        <article
                            key={project.slug}
                            className="
                                group
                                flex
                                flex-col
                                overflow-hidden
                                rounded-[28px]
                                border
                                border-white/10
                                bg-white/[0.03]
                                shadow-lg
                                transition-transform
                                duration-300
                                hover:-translate-y-1.5
                                hover:border-white/20
                            "
                        >
                            <div className="relative h-52 md:h-56 overflow-hidden">
                                <Image
                                    src={project.coverImage}
                                    alt={project.title}
                                    fill
                                    priority={index < 2}
                                    loading={index < 2 ? "eager" : "lazy"}
                                    sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 400px"
                                    className="
                                        object-cover
                                        transition-transform
                                        duration-500
                                        group-hover:scale-105
                                    "
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                                <div className="absolute bottom-4 left-4">
                                    <span className="px-3 py-1 rounded-full border border-white/10 bg-black/60 text-[11px] text-zinc-300">
                                        {project.year}
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col flex-1 p-5 md:p-6">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold mb-3">
                                        {project.title}
                                    </h3>

                                    <p className="text-sm md:text-base leading-6 md:leading-7 text-zinc-400">
                                        {project.description}
                                    </p>
                                </div>

                                {project.highlights && (
                                    <div className="flex flex-wrap gap-1.5 mt-5">
                                        {project.highlights
                                            .slice(0, 4)
                                            .map((item) => (
                                                <span
                                                    key={item}
                                                    className="
                                                        px-2.5
                                                        py-1
                                                        rounded-full
                                                        text-[11px]
                                                        border
                                                        border-white/10
                                                        bg-white/[0.04]
                                                        text-zinc-300
                                                    "
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                    </div>
                                )}

                                <div className="flex flex-wrap gap-1.5 mt-4">
                                    {project.technologies
                                        .slice(0, 6)
                                        .map((tech) => (
                                            <span
                                                key={tech}
                                                className="
                                                    px-2.5
                                                    py-1
                                                    rounded-full
                                                    text-[11px]
                                                    md:text-xs
                                                    border
                                                    border-white/10
                                                    bg-white/[0.04]
                                                    text-zinc-400
                                                    transition-colors
                                                    hover:bg-white/[0.08]
                                                    hover:text-zinc-200
                                                "
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                </div>

                                <div className="mt-auto pt-6">
                                    <div className="flex gap-2">
                                        <Link
                                            href={`/projects/${project.slug}`}
                                            prefetch
                                            className="
                                                flex-1
                                                inline-flex
                                                items-center
                                                justify-center
                                                gap-2
                                                h-11
                                                rounded-xl
                                                bg-white
                                                text-black
                                                text-sm
                                                font-medium
                                                transition-opacity
                                                hover:opacity-90
                                            "
                                        >
                                            Case Study
                                            <FiArrowRight />
                                        </Link>

                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="
                                                h-11
                                                w-11
                                                shrink-0
                                                inline-flex
                                                items-center
                                                justify-center
                                                rounded-xl
                                                border
                                                border-white/10
                                                bg-white/[0.04]
                                                hover:bg-white/[0.08]
                                                transition-colors
                                            "
                                        >
                                            <FiGithub />
                                        </a>

                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="
                                                h-11
                                                px-4
                                                shrink-0
                                                inline-flex
                                                items-center
                                                justify-center
                                                gap-2
                                                rounded-xl
                                                border
                                                border-white/10
                                                bg-white/[0.04]
                                                text-sm
                                                hover:bg-white/[0.08]
                                                transition-colors
                                            "
                                        >
                                            Live
                                            <FiExternalLink />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default memo(Projects);
