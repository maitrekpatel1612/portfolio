import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";

import MarkdownRenderer from "@/components/project/MarkdownRenderer";
import TableOfContents from "@/components/project/TableOfContents";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ReadingProgress from "@/components/project/ReadingProgress";

export async function generateStaticParams() {
    return getProjectSlugs().map((slug) => ({
        slug,
    }));
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    let project;

    try {
        project = getProjectBySlug(slug);
    } catch {
        notFound();
    }

    const { metadata, content } = project;

    return (
        <main className="pt-32 pb-24">
            <Navbar />
            <div className="max-w-375 mx-auto px-8 xl:px-12">
                {/* Back Button */}

                <div className="mb-10">
                    <Link
                        href="/"
                        className="
                            inline-flex
                            items-center
                            gap-2
                            text-zinc-400
                            hover:text-white
                            transition
                        "
                    >
                        <ArrowLeft size={18} />
                        Back to Portfolio
                    </Link>
                </div>

                {/* Hero */}

                <section className="mb-24">
                    <div
                        className="
                            relative
                            overflow-hidden
                            rounded-3xl
                            border
                            border-zinc-800
                            mb-12
                            group
                        "
                    >
                        <img
                            src={metadata.coverImage}
                            alt={metadata.title}
                            className="
                                w-full
                                h-[450px]
                                md:h-[550px]
                                object-cover
                                transition-transform
                                duration-700
                                group-hover:scale-105
                            "
                        />

                        <div
                            className="
                                absolute
                                inset-0
                                bg-gradient-to-t
                                from-black/90
                                via-black/40
                                to-transparent
                            "
                        />

                        <div
                            className="
                                absolute
                                bottom-0
                                left-0
                                p-8
                                md:p-12
                                w-full
                            "
                        >
                            <h1
                                className="
                                    text-5xl
                                    md:text-7xl
                                    font-bold
                                    mb-4
                                "
                            >
                                {metadata.title}
                            </h1>

                            <p
                                className="
                                    text-lg
                                    md:text-2xl
                                    text-zinc-300
                                    max-w-4xl
                                "
                            >
                                {metadata.tagline}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-8">
                        {metadata.technologies.map((tech: string) => (
                            <span
                                key={tech}
                                className="
                                        px-4
                                        py-2
                                        rounded-full
                                        border
                                        border-zinc-800
                                        bg-zinc-900/50
                                        text-sm
                                        text-zinc-300
                                    "
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href={metadata.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                px-6
                                py-3
                                rounded-xl
                                border
                                border-zinc-700
                                hover:border-zinc-500
                                transition
                            "
                        >
                            View Source Code
                        </a>

                        <a
                            href={metadata.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                px-6
                                py-3
                                rounded-xl
                                bg-white
                                text-black
                                font-medium
                                hover:opacity-90
                                transition
                            "
                        >
                            Live Demo
                        </a>
                    </div>
                </section>

                {/* Content + TOC */}

                <div
                    className="
                        flex
                        items-start
                        gap-10
                        xl:gap-12
                    "
                >
                    <div
                        className="
                            flex-1
                            min-w-0
                            max-w-[1000px]
                        "
                    >
                        <MarkdownRenderer content={content} />
                    </div>

                    <TableOfContents />
                </div>
            </div>
            <ReadingProgress />
        </main>
    );
}
