import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {

    const frontendSkills = [
        "React",
        "TailwindCSS",
        "Javascript",
        "Svelte"
    ];

    const backendSkills = [
        "Node.js",
        "Python",
        "Javascript",
    ];
    
    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll> 
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-violet-400 to-purple-700 bg-clip-text text-transparent text-center ">About Me</h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                A front-end developer passionate about creating clean, responsive, and user-friendly web experiences. With expertise in modern front-end technologies,
                 I focus on building intuitive interfaces that enhance usability and accessibility. Always eager to learn, I strive to bring innovative ideas to life
                  through design and code.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 cursor-pointer">Frontend Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition cursor-pointer">
                                {tech}
                            </span>
                       ) )}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 cursor-pointer">Backend Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition cursor-pointer">
                                {tech}
                            </span>
                       ) )}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                 <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> 🎓 Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-5">
                        <li>
                            <strong>HND in Information Technology</strong> - Esoft Metro Campus (2024-2025)
                        </li>

                        <li>
                            <strong>Diploma In IT</strong> - Esoft Metro Campus (2023-2024)
                        </li>
                    </ul>
                 </div>
    
                 <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> 💼 Work Experiance</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4>Wordpress Developer at Sonfortech Private Limited (2024-Present)</h4>
                                <p>Developed and Maintained website projects </p>
                            </div>

                            <div>
                                <h4>Graphic Designer at Sonfortech Private Limited (2024-Present)</h4>
                                <p>Poster making, Video Editting and Marketting </p>
                            </div>
                        </div>
                 </div>
                </div>

            </div>
        </div>
        </RevealOnScroll>
    </section>;
};