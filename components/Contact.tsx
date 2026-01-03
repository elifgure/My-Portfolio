import { Mail, Phone, ExternalLink, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return (
        <section id="contact" className="min-h-screen bg-[#fff0f5] py-20 px-4 lg:px-8 font-sans flex items-center justify-center">
            <div className="max-w-[1200px] w-full mx-auto">
                <div className="flex flex-col items-center gap-16">
                    {/* Header */}
                    <div className="text-center">
                        <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-black mb-6">
                            Lets Talk<span className="text-[#ff6b6b]">.</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-2xl mx-auto">
                            Got a project in mind? Lets turn your ideas into reality.
                        </p>
                    </div>

                    {/* Contact Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">

                        {/* Contact Info Card */}
                        <div className="bg-white rounded-[40px] p-10 md:p-14 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] flex flex-col justify-between gap-12 group hover:-translate-y-2 transition-transform duration-500">
                            <div className="space-y-8">
                                <div className="space-y-2">
                                    <p className="text-gray-500 font-bold uppercase tracking-wider text-sm">Contact Details</p>
                                    <h3 className="text-4xl font-bold text-black">Elif Güre</h3>
                                </div>
                                <div className="space-y-6">
                                    <a href="mailto:elif.gure121@gmail.com" className="flex items-center gap-4 group/item">
                                        <div className="w-12 h-12 bg-[#ffe4e6] rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform">
                                            <Mail className="w-6 h-6 text-[#ff6b6b]" />
                                        </div>
                                        <span className="text-xl md:text-2xl font-medium text-gray-800 group-hover/item:text-[#ff6b6b] transition-colors">elif.gure121@gmail.com</span>
                                    </a>

                                    <div className="flex items-center gap-4 group/item">
                                        <div className="w-12 h-12 bg-[#e0f2fe] rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform">
                                            <Phone className="w-6 h-6 text-[#0ea5e9]" />
                                        </div>
                                        <span className="text-xl md:text-2xl font-medium text-gray-800">+90 553 113 9145</span>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-gray-100">
                                <p className="text-gray-400 font-medium">Available for freelance opportunities</p>
                            </div>
                        </div>

                        {/* Socials Card */}
                        <div className="bg-[#1a1a1a] rounded-[40px] p-10 md:p-14 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] flex flex-col justify-between gap-12 text-white group hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden">
                            {/* Decorative Background */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                            <div className="space-y-2 relative z-10">
                                <p className="text-white/60 font-bold uppercase tracking-wider text-sm">Social Profiles</p>
                                <h3 className="text-4xl font-bold">Connect with me</h3>
                            </div>

                            <div className="flex flex-col gap-4 relative z-10">
                                <Link
                                    href="https://www.linkedin.com/in/elif-g%C3%BCre-3b34111b0/"
                                    target="_blank"
                                    className="flex items-center justify-between bg-white/10 p-6 rounded-3xl hover:bg-white/20 transition-all group/link"
                                >
                                    <div className="flex items-center gap-4">
                                        <Linkedin className="w-8 h-8 text-white" />
                                        <span className="text-xl font-bold">LinkedIn</span>
                                    </div>
                                    <ExternalLink className="w-6 h-6 text-white/50 group-hover/link:text-white group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all" />
                                </Link>

                                <Link
                                    href="https://github.com/elifgure"
                                    target="_blank"
                                    className="flex items-center justify-between bg-white/10 p-6 rounded-3xl hover:bg-white/20 transition-all group/link"
                                >
                                    <div className="flex items-center gap-4">
                                        <Github className="w-8 h-8 text-white" />
                                        <span className="text-xl font-bold">GitHub</span>
                                    </div>
                                    <ExternalLink className="w-6 h-6 text-white/50 group-hover/link:text-white group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all" />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
