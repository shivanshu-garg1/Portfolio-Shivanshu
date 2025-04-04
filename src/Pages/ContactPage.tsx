import { motion } from "framer-motion";
import { Mail, X, Linkedin, Github } from "lucide-react";
import Link from "next/link";

const contactItems = [
    {
        icon: Mail,
        label: "Email",
        href: "mailto:gargshivanshu000@gmailcom",
        text: "gargshivanshu000@gmail.com",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://linkedin.com/in/shivanshu-garg",
        text: "linkedin.com/in/shivanshu-garg",
    },
    {
        icon: X,
        label: "X",
        href: "https://x.com/Shivanshu_015",
        text: "x.com/Shivanshu_015",
    },
    {
        icon: Github,
        label: "GitHub",
        href: "https://github.com/shivanshu-garg1",
        text: "github.com/shivanshu-garg1",
    },
];

const ContactPage = () => {
    return (
        <section id="contact-me" className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-r from-blue-900 via-black to-gray-900 text-white">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-3xl bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white/20"
            >

                <h2 className="text-5xl font-bold text-blue-400 text-center mb-4 tracking-wide uppercase">
                    Get in Touch
                </h2>
                <p className="text-center text-gray-300 mb-10 text-lg">
                    I'm always open to exciting projects or collaborations. Feel free to drop a message or connect with me!
                </p>


                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {contactItems.map((item, idx) => (
                        <motion.a
                            key={idx}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-4 p-5 bg-white/5 hover:bg-white/10 rounded-xl transition border border-white/20"
                        >
                            <item.icon className="w-6 h-6 text-blue-300" />
                            <span className="text-sm sm:text-base">{item.text}</span>
                        </motion.a>
                    ))}
                </div>


                <div className="mt-12 text-center">
                    <Link
                        href="https://linkedin.com/in/shivanshu-garg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition-all shadow-lg"
                    >
                        Say Hello 👋
                    </Link>

                    
                </div>
            </motion.div>
        </section>
    );
};

export default ContactPage;
