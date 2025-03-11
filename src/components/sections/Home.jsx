import { RevealOnScroll } from "../RevealOnScroll";
import profilePic from "../../assets/profile.jpg"; // Ensure the image is in src/assets/

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
          <RevealOnScroll>  
            <div className="text-center z-10 px-4">
                
                {/* Profile Image */}
                <div className="flex justify-center mb-6">
                    <img 
                        src={profilePic} 
                        alt="Profile Picture" 
                        className="w-32 h-32 rounded-full border-4 border-violet-500 shadow-lg"
                    />
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-purple-400 bg-clip-text text-transparent">
                    Hi, I'm Mohammed Aakif
                </h1>

                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    I'm a passionate front-end developer with a keen eye for design and user experience. I specialize in creating responsive, interactive, and visually appealing web applications using modern technologies.
                </p>

                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-gradient-to-r from-violet-600 to-purple-400 text-white py-3 px-6 rounded font-medium relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                        View Projects
                    </a>

                    <a href="#contact" className="border border-gradient-to-r from-violet-500 to-violet-700 text-white py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] hover:bg-blue-500/10">
                        Contact Me
                    </a>
                </div>
            </div>
          </RevealOnScroll>
        </section>
    );
};

