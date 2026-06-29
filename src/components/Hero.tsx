"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 pt-32">
            <div className="max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 mb-8">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        <span className="text-sm text-zinc-400">
                            Open to Full Stack & AI Engineering Roles
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.95]">
                        Engineering Products
                        <span className="block bg-linear-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
                            That Scale
                        </span>
                    </h1>

                    <p className="mt-8 max-w-3xl mx-auto text-xl text-zinc-400 leading-relaxed">
                        Full Stack Engineer focused on scalable backend systems,
                        cloud-native infrastructure, distributed architectures,
                        and AI-powered applications.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mt-12">
                        <a
                            href="#projects"
                            className="px-8 py-4 rounded-xl bg-white text-black font-medium hover:opacity-90 transition"
                        >
                            Explore Projects
                        </a>

                        <a
                            href="https://maitrekpatel.in/Maitrek_Patel.pdf"
                            target="_blank"
                            className="px-8 py-4 rounded-xl border border-zinc-700 hover:border-zinc-500 transition"
                        >
                            Resume
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
