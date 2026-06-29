import { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projects";

const BASE_URL = "https://maitrekpatel.in";

export default function sitemap(): MetadataRoute.Sitemap {
    const projects = getAllProjects();

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },

        {
            url: `${BASE_URL}/resume.pdf`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.7,
        },

        ...projects.map((project) => ({
            url: `${BASE_URL}/projects/${project.slug}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.9,
        })),
    ];
}