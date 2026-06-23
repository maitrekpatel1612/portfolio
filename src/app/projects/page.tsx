import Link from "next/link";
import Image from "next/image";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";

export default function ProjectsPage() {
    const slugs = getProjectSlugs();

    const projects = slugs.map((slug) => {
        const { metadata } = getProjectBySlug(slug);

        return metadata;
    });

    return (
        <main className="max-w-7xl mx-auto px-6 py-32">
            <h1 className="text-6xl font-bold mb-12">Projects</h1>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="
              border border-zinc-800
              rounded-3xl
              overflow-hidden
              hover:border-zinc-600
              transition
            "
                    >
                        <Image
                            src={project.coverImage}
                            alt={project.title}
                            width={400}
                            height={300}
                            className="w-full h-auto"
                        />

                        <div className="p-6">
                            <h2 className="text-2xl font-semibold">
                                {project.title}
                            </h2>

                            <p className="text-zinc-400 mt-2">
                                {project.tagline}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
