import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";

import MermaidRenderer from "./MermaidRenderer";

import "highlight.js/styles/github-dark.css";

interface Props {
    content: string;
}

function createSlug(text: string) {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
}

export default function MarkdownRenderer({ content }: Props) {
    return (
        <article
            className="
        markdown-content

        prose
        prose-invert
        prose-lg

        max-w-4xl
        mx-auto

        prose-headings:text-white
        prose-headings:font-bold

        prose-p:text-zinc-300
        prose-p:leading-8

        prose-img:rounded-2xl
        prose-img:border
        prose-img:border-zinc-800

        prose-pre:border
        prose-pre:border-zinc-800

        prose-blockquote:border-l-blue-500
    "
        >
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeHighlight]}
                components={{
                    h1({ children }) {
                        const text = String(children);

                        const id = createSlug(text);

                        return <h1 id={id}>{children}</h1>;
                    },

                    h2({ children }) {
                        const text = String(children);

                        const id = createSlug(text);

                        return <h2 id={id}>{children}</h2>;
                    },

                    h3({ children }) {
                        const text = String(children);

                        const id = createSlug(text);

                        return <h3 id={id}>{children}</h3>;
                    },

                    img(props) {
                        return (
                            <img
                                {...props}
                                className="
                                    rounded-2xl
                                    border
                                    border-zinc-800
                                    shadow-xl
                                "
                            />
                        );
                    },

                    code({ className, children }) {
                        const match = /language-(\w+)/.exec(className || "");

                        if (match?.[1] === "mermaid") {
                            return <MermaidRenderer chart={String(children)} />;
                        }

                        return <code className={className}>{children}</code>;
                    },
                }}
            >
                {content}
            </ReactMarkdown>
        </article>
    );
}
