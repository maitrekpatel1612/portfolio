export default function PersonSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://maitrekpatel.in/#person",
        name: "Maitrek Patel",
        givenName: "Maitrek",
        familyName: "Patel",
        url: "https://maitrekpatel.in",
        image: "https://maitrekpatel.in/profile.jpg",
        description:
            "Full Stack Software Engineer specializing in Backend Development, Cloud, Distributed Systems, Next.js, Java, Spring Boot, AWS, and AI-powered applications.",
        jobTitle: "Full Stack Software Engineer",

        alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Indian Institute of Information Technology, Design and Manufacturing, Jabalpur",
        },

        knowsAbout: [
            "Java",
            "Spring Boot",
            "Next.js",
            "React",
            "TypeScript",
            "AWS",
            "Docker",
            "Kubernetes",
            "Redis",
            "PostgreSQL",
            "MongoDB",
            "Artificial Intelligence",
        ],

        sameAs: [
            "https://github.com/maitrekpatel1612",
            "https://www.linkedin.com/in/maitrek-patel-3428a9258/",
            "https://x.com/MaitrekP97201",
            "https://www.instagram.com/maitrekpatel",
            "https://www.youtube.com/@maitrekpatel",
            "https://leetcode.com/u/maitrekpatel1612",
            "https://codeforces.com/profile/maitrekpatel1612",
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema),
            }}
        />
    );
}
