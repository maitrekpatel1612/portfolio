"use client";

import mermaid from "mermaid";
import { useEffect, useRef } from "react";

interface MermaidRendererProps {
    chart: string;
}

export default function MermaidRenderer({ chart }: MermaidRendererProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        mermaid.initialize({
            startOnLoad: false,
            theme: "dark",
            securityLevel: "loose",
        });

        const renderDiagram = async () => {
            if (!ref.current) return;

            try {
                const id = "mermaid-" + Math.random().toString(36).substring(2);

                const { svg } = await mermaid.render(id, chart);

                ref.current.innerHTML = svg;
            } catch (err) {
                console.error("Mermaid render error", err);
            }
        };

        renderDiagram();
    }, [chart]);

    return (
        <div
            className="
                my-10
                overflow-x-auto
                rounded-2xl
                border
                border-zinc-800
                p-6
                bg-zinc-950
            "
            ref={ref}
        />
    );
}
