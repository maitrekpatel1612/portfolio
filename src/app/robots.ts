import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: "https://maitrekpatel.in/sitemap.xml",
        host: "https://maitrekpatel.in",
    };
}