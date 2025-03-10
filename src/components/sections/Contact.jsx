import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com';
import { useState } from 'react';

export const Contact = () => {

    const [formdata, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
            alert("Message Sent");
            setFormData({name: "", email: "", message: ""});

        }).catch(() => alert("Oops! Something went wrong. Please Try Again."));
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value,
        }));
    };

    return <section id="contact" className="min-h-screen flex items-center justify-center py-20">

        <RevealOnScroll>
            <div className="px-4 w-150">

                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-violet-400 to-purple-700 bg-clip-text text-transparent text-center">Get In Touch</h2>

                <form className="space-y-6" onSubmit={handleSubmit}>

                    <div className="relative">
                        <input
                            type="text"
                            id="name"
                            required
                            value={formdata.name}
                            onChange={(e) => setFormData({...formdata, name: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition duration-300 ease-in-out focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            placeholder="Your Name..."
                        />
                    </div>

                    <div className="relative">
                        <input
                            type="text"
                            id="email"
                            required
                            value={formdata.email}
                            onChange={(e) => setFormData({...formdata, email: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition duration-300 ease-in-out focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            placeholder="example@gmail.com"
                        />
                    </div>

                    <div className="relative">
                        <textarea
                            type="message"
                            id="message"
                            required
                            value={formdata.message}
                            onChange={(e) => setFormData({...formdata, message: e.target.value})}
                            rows={5}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition duration-300 ease-in-out focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            placeholder="Your Message..."
                        />
                    </div>

                    <button type="submit" className="w-full bg-gradient-to-r from-violet-600 to-purple-400 text-white py-3 px-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        Send Message
                    </button>

                </form>
            </div>
        </RevealOnScroll>

    </section>
}