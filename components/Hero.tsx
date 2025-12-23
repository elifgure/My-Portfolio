import { ArrowUpRight, Github, Palette, Wrench } from "lucide-react";
import Image from "next/image";
import ProfileCard from "./ProfileCard";

export default function Hero() {
    return (
        <section className="min-h-screen bg-[#F3F4F6] flex justify-center p-4 lg:p-8 font-sans">
            <div className="grid grid-cols-1 lg:grid-cols-[500px_1fr] gap-8 w-full max-w-[1500px]">

                {/* LEFT PANEL */}
                <div className="flex flex-col h-full items-center justify-start mt-22 gap-8">
                    <ProfileCard />
                </div>

                {/* RIGHT PANEL - BENTO GRID */}
                <div className="flex flex-col gap-8 pt-4">

                    {/* HEADER */}
                    <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-black">
                        Software Developer<span className="text-[#7E83D4]">.</span>
                    </h1>

                    {/* BENTO GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">

                        {/* FEATURED CARD (Large) */}
                        <div className="md:row-span-2 relative h-[320px] md:h-full min-h-[320px] rounded-[32px] overflow-hidden bg-white shadow-sm group">
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

                            <div className="absolute bottom-8 left-8 text-black/80 text-white">
                                <p className="font-medium text-lg">Featured Project</p>
                                <h3 className="text-3xl font-bold leading-tight">QR Menu <br /> System</h3>
                            </div>
                        </div>

                        {/* PROJECTS CARD (Green) */}
                        <div className="bg-[#B8EAD9] rounded-[32px] p-8 flex flex-col justify-between h-[240px] relative hover:rotate-1 transition-transform duration-300">
                            <div className="absolute top-6 right-6">
                                <ArrowUpRight className="w-6 h-6 text-black/60" />
                            </div>
                            <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center">
                                <Palette className="w-6 h-6 text-black/70" />
                            </div>
                            <div>
                                <h2 className="text-5xl font-bold text-black tracking-tight">10</h2>
                                <p className="text-black/70 font-medium text-lg pt-1">Projects</p>
                            </div>
                        </div>

                        {/* COMMITS CARD (Purple) */}
                        <div className="bg-[#9F83D4] rounded-[32px] p-8 flex flex-col justify-between h-[240px] relative hover:-rotate-1 transition-transform duration-300">
                            <div className="absolute top-6 right-6">
                                <ArrowUpRight className="w-6 h-6 text-white/60" />
                            </div>
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                                <Github className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-5xl font-bold text-white tracking-tight">200</h2>
                                <p className="text-white/80 font-medium text-lg pt-1">Commits</p>
                            </div>
                        </div>

                        {/* TECHNOLOGIES CARD (Orange/Yellow) */}
                        <div className="bg-[#FFC975] rounded-[32px] p-8 flex flex-col justify-between h-[240px] relative hover:rotate-1 transition-transform duration-300">
                            <div className="absolute top-6 right-6">
                                <ArrowUpRight className="w-6 h-6 text-black/60" />
                            </div>
                            <div>
                                <h2 className="text-5xl font-bold text-black tracking-tight">10</h2>
                                <p className="text-black/70 font-medium text-lg pt-1">Technologies</p>
                                <p className="text-sm text-black/50 mt-2 font-medium">Full Stack</p>
                            </div>

                            {/* Small Pill Tags */}
                            <div className="flex gap-2 mt-auto overflow-hidden">
                                <span className="px-3 py-1 bg-white/30 rounded-full text-xs font-semibold text-black/70">React</span>
                                <span className="px-3 py-1 bg-white/30 rounded-full text-xs font-semibold text-black/70">Next.js</span>
                                <span className="px-3 py-1 bg-white/30 rounded-full text-xs font-semibold text-black/70">TS</span>
                            </div>
                        </div>

                        {/* TOOLS CARD (Blue) */}
                        <div className="bg-[#A0C4FF] rounded-[32px] p-8 flex flex-col justify-between h-[240px] relative hover:-rotate-1 transition-transform duration-300">
                            <div className="absolute top-6 right-6">
                                <ArrowUpRight className="w-6 h-6 text-black/60" />
                            </div>
                            <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center">
                                <Wrench className="w-6 h-6 text-black/70" />
                            </div>
                            <div>
                                <h2 className="text-5xl font-bold text-black tracking-tight">10</h2>
                                <p className="text-black/70 font-medium text-lg pt-1">Tools</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
