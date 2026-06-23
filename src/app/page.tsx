
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getAllProjects } from "@/lib/projects";

const projects = getAllProjects();

export default function Home() {
    return (
        <>
            <div className="fixed inset-0 -z-10">
                <div className="absolute top-0 left-1/4 h-125 w-125 rounded-full bg-blue-500/10 blur-[120px]" />

                <div className="absolute bottom-0 right-1/4 h-125 w-125 rounded-full bg-purple-500/10 blur-[120px]" />
            </div>

            <Navbar />

            <main>
                <Hero />
                <About />
                <Experience />
                <Projects projects={projects} />
                <Skills />
                <Contact />
            </main>

            <Footer />
        </>
    );
}
