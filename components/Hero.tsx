import { ArrowUpRight, Github, Palette, Wrench } from "lucide-react";
import Image from "next/image";
import ProfileCard from "./ProfileCard";

export default function Hero() {
    return (
        <section className="py-12 bg-[#F3F4F6] flex justify-center p-4 lg:p-6 font-sans">
            <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-6 w-full max-w-[1280px]">

                {/* LEFT PANEL */}
                <div className="flex flex-col h-full items-center justify-start mt-16 gap-6">
                    <ProfileCard />
                </div>

                {/* RIGHT PANEL - BENTO GRID */}
                <div className="flex flex-col gap-6 pt-2">

                    {/* HEADER */}
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter text-black">
                        Software Developer<span className="text-[#7E83D4]">.</span>
                    </h1>
                    <p className="text-base text-black">
                        I build modern, responsive web applications using React, Node.js, Next.js and Tailwind CSS.
                    </p>
                    {/* BENTO GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-4xl">

                        {/* FEATURED CARD (Large) */}
                        <div className="md:row-span-2 relative h-[320px] min-h-[220px] rounded-[24px] overflow-hidden bg-white shadow-sm group">
                            <Image
                                src="/images/project-cover.png"
                                alt="Featured Project"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Fallback pattern if image is missing/placeholder */}
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-blue-200 opacity-90 mix-blend-multiply" />

                            <div className="absolute top-6 right-6 w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                                <ArrowUpRight strokeWidth={2.5} />
                            </div>

                            <div className="absolute bottom-6 left-6 text-black/80 text-white">
                                <p className="font-medium text-base">Featured Project</p>
                                <h3 className="text-2xl font-bold leading-tight">QR Menu <br /> System</h3>
                            </div>
                        </div>

                        {/* PROJECTS CARD (Green) */}
                        <div className="bg-[#B8EAD9] rounded-[24px] p-6 flex flex-col justify-between h-[150px] relative hover:rotate-1 transition-transform duration-300">
                            <div className="absolute top-5 right-5">
                                <ArrowUpRight className="w-5 h-5 text-black/60" />
                            </div>
                            <div className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center">
                                <Palette className="w-5 h-5 text-black/70" />
                            </div>
                            <div>
                                <h2 className="text-4xl font-bold text-black tracking-tight">10</h2>
                                <p className="text-black/70 font-medium text-base pt-1">Projects</p>
                            </div>
                        </div>

                        {/* COMMITS CARD (Purple) */}
                        <div className="bg-[#9F83D4] rounded-[24px] p-6 flex flex-col justify-between h-[150px] relative hover:-rotate-1 transition-transform duration-300">
                            <div className="absolute top-5 right-5">
                                <ArrowUpRight className="w-5 h-5 text-white/60" />
                            </div>
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                <Github className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h2 className="text-4xl font-bold text-white tracking-tight">200</h2>
                                <p className="text-white/80 font-medium text-base pt-1">Commits</p>
                            </div>
                        </div>

                        {/* TECHNOLOGIES CARD (Orange/Yellow) */}
                        <div className="bg-[#FFC975] rounded-[24px] p-6 flex flex-col justify-between h-[150px] relative hover:rotate-1 transition-transform duration-300">
                            <div className="absolute top-5 right-5">
                                <ArrowUpRight className="w-5 h-5 text-black/60" />
                            </div>
                            <div>
                                <h2 className="text-4xl font-bold text-black tracking-tight">10</h2>
                                <p className="text-black/70 font-medium text-base pt-1">Technologies</p>
                                <p className="text-xs text-black/50 mt-1 font-medium">Full Stack</p>
                            </div>

                           
                        </div>

                        {/* TOOLS CARD (Blue) */}
                        <div className="bg-[#A0C4FF] rounded-[24px] p-6 flex flex-col justify-between h-[150px] relative hover:-rotate-1 transition-transform duration-300">
                            <div className="absolute top-5 right-5">
                                <ArrowUpRight className="w-5 h-5 text-black/60" />
                            </div>
                            <div className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center">
                                <Wrench className="w-5 h-5 text-black/70" />
                            </div>
                            <div>
                                <h2 className="text-4xl font-bold text-black tracking-tight">10</h2>
                                <p className="text-black/70 font-medium text-base pt-1">Tools</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
