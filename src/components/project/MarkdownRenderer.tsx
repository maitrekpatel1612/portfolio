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

                max-w-none
                w-full

                mx-auto

                px-4
                sm:px-6
                lg:px-0

                prose-headings:text-white
                prose-headings:font-bold
                prose-headings:scroll-mt-24

                prose-p:text-zinc-300
                prose-p:leading-7
                md:prose-p:leading-8

                prose-img:rounded-xl
                md:prose-img:rounded-2xl

                prose-img:border
                prose-img:border-zinc-800

                prose-pre:border
                prose-pre:border-zinc-800
                prose-pre:rounded-xl
                prose-pre:overflow-x-auto

                prose-code:break-words

                prose-blockquote:border-l-blue-500
                prose-blockquote:pl-4

                prose-ul:text-zinc-300
                prose-ol:text-zinc-300

                prose-table:block
                prose-table:overflow-x-auto

                prose-hr:border-zinc-800

                text-[15px]
                sm:text-base
                md:text-lg

                [&_h1]:text-3xl
                sm:[&_h1]:text-4xl
                md:[&_h1]:text-5xl

                [&_h1]:font-bold
                [&_h1]:leading-tight
                [&_h1]:mt-10
                [&_h1]:mb-6

                [&_h2]:text-2xl
                sm:[&_h2]:text-3xl
                md:[&_h2]:text-4xl

                [&_h2]:font-bold
                [&_h2]:leading-tight
                [&_h2]:mt-10
                [&_h2]:mb-5

                [&_h3]:text-xl
                sm:[&_h3]:text-2xl
                md:[&_h3]:text-3xl

                [&_h3]:font-semibold
                [&_h3]:leading-tight
                [&_h3]:mt-8
                [&_h3]:mb-4

                [&_p]:my-5

                [&_img]:w-full
                [&_img]:h-auto
                [&_img]:object-cover

                [&_pre]:text-sm
                md:[&_pre]:text-base

                [&_table]:w-full
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
                                    w-full
                                    h-auto

                                    rounded-xl
                                    md:rounded-2xl

                                    border
                                    border-zinc-800

                                    shadow-xl

                                    my-8
                                "
                            />
                        );
                    },

                    code({ className, children }) {
                        const match = /language-(\w+)/.exec(className || "");

                        if (match?.[1] === "mermaid") {
                            return (
                                <div className="my-8 overflow-x-auto">
                                    <MermaidRenderer chart={String(children)} />
                                </div>
                            );
                        }

                        return (
                            <code className={`${className} break-words`}>
                                {children}
                            </code>
                        );
                    },
                }}
            >
                {content}
            </ReactMarkdown>
        </article>
    );
}
