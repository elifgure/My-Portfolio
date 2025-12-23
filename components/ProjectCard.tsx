"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type Props = {
    title: string;
    description: string;
    tech: string[];
    image: string;
};

export default function ProjectCard({
    title,
    description,
    tech,
    image,
}: Props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="flex flex-col md:flex-row gap-8 bg-white border border-black/10 rounded-[32px] p-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] transition-shadow duration-300"
            >
                {/* IMAGE PREVIEW */}
                <div
                    className="relative h-64 md:h-auto md:w-1/2 shrink-0 overflow-hidden rounded-2xl bg-gray-100 cursor-pointer group"
                    onClick={() => setIsModalOpen(true)}
                >
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-medium px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            View Architecture
                        </span>
                    </div>
                </div>

                {/* TEXT */}
                <div className="flex flex-col justify-center flex-1">
                    <h3 className="text-3xl font-bold text-black mb-4">{title}</h3>
                    <p className="text-gray-600 font-medium leading-relaxed mb-6">{description}</p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {tech.map((item) => (
                            <span
                                key={item}
                                className="px-4 py-2 bg-black/5 rounded-full text-sm font-semibold text-[#0d2c21] border border-black/5"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* FULL IMAGE MODAL */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div className="relative w-full max-w-5xl max-h-full overflow-auto rounded-xl scrollbar-hide" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 18 18" /></svg>
                        </button>
                        <img
                            src={image}
                            alt={`${title} Architecture`}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
