import "./globals.css";
import type { Metadata } from "next";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const siteUrl = "https://maitrekpatel.in";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),

    title: {
        default: "Maitrek Patel",
        template: "%s | Maitrek Patel",
    },

    description:
        "Full Stack Engineer specializing in Next.js, React, TypeScript, Node.js, AI Systems, RAG Architectures, and Scalable Web Applications. IIITDM Jabalpur.",

    keywords: [
        "Maitrek Patel",
        "Full Stack Engineer",
        "Software Engineer",
        "AI Engineer",
        "Next.js Developer",
        "React Developer",
        "TypeScript Developer",
        "Node.js Developer",
        "GenAI Engineer",
        "RAG Engineer",
        "LangGraph",
        "LangChain",
        "Portfolio",
        "IIITDM Jabalpur",
        "Frontend Engineer",
        "Backend Engineer",
        "System Design",
        "Distributed Systems",
    ],

    authors: [
        {
            name: "Maitrek Patel",
            url: siteUrl,
        },
    ],

    creator: "Maitrek Patel",
    publisher: "Maitrek Patel",

    category: "Technology",

    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    alternates: {
        canonical: siteUrl,
    },

    openGraph: {
        title: "Maitrek Patel",
        description:
            "Full Stack Engineer building scalable web applications, AI systems, and modern digital experiences.",
        url: siteUrl,
        siteName: "Maitrek Patel",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Maitrek Patel Portfolio",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Maitrek Patel",
        description: "Full Stack Engineer | AI Engineer | IIITDM Jabalpur",
        images: ["/og-image.png"],
        creator: "@MaitrekP97201",
    },

    icons: {
        icon: [
            {
                url: "/icon.png",
                sizes: "32x32",
                type: "image/png",
            },
            {
                url: "/icon.png",
                sizes: "192x192",
                type: "image/png",
            },
        ],
        apple: [
            {
                url: "/icon.png",
                sizes: "180x180",
                type: "image/png",
            },
        ],
        shortcut: "/icon.png",
    },

    manifest: "/site.webmanifest",

    verification: {
        google: "QB7ZQEfcA_aHDRb1FuHTGCIdMu10t3bCHkzIK_3AtV0",
    },

    applicationName: "Maitrek Patel Portfolio",

    referrer: "origin-when-cross-origin",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <GoogleAnalytics />
            </head>
            <body>{children}</body>
        </html>
    );
}
