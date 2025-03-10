import { RevealOnScroll } from "../RevealOnScroll";
export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
    <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-violet-400 to-purple-700 bg-clip-text text-transparent text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:= translate-y-1 hover:border-blue-500/30  hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition cursor-pointer">
                    
                    <h3 className="text-xl font-bold mb-2">E-commerce Web Page</h3>

                    <p className="text-gray-400 mb-4">This is a e-commerce webpage, created using HTML and CSS, offers a 
                        smooth and responsive shopping experience. With an intuitive design
                         and easy navigation, it ensures a user-friendly interface for browsing and purchasing products seamlessly.</p>
                    
                        <div className=" flex flex-wrap gap-2 mb-4">
                            {["HTML", "CSS","Javascript"].map((tech,key) =>(
                                 <span 
                                 key={key}
                                 className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all cursor-pointer">
                                     {tech}
                                 </span>

                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="#lankabakers" className="text-blue-400 hover:text-blue-300 transition-colors my-5">
                                View Project → 
                            </a>
                        </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:= translate-y-1 hover:border-blue-500/30  hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition cursor-pointer">
                    
                    <h3 className="text-xl font-bold mb-2">Booksky Web Page</h3>

                    <p className="text-gray-400 mb-4">BookSky is a simple and efficient library system webpage that allows users to add and save book names along with their descriptions. 
                        Designed for easy organization and accessibility, it helps manage book collections seamlessly.</p>
                    
                        <div className=" flex flex-wrap gap-2 mb-4">
                            {["HTML", "CSS","Javascript"].map((tech,key) =>(
                                 <span 
                                 key={key}
                                 className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all cursor-pointer">
                                     {tech}
                                 </span>

                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="#lankabakers" className="text-blue-400 hover:text-blue-300 transition-colors my-5">
                                View Project → 
                            </a>
                        </div>
                </div>
            </div>
        </div>
    </RevealOnScroll>
    </section>
}