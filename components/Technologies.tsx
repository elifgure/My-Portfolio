
import Image from "next/image";

const technologies = [
    {
        name: "React",
        icon: "/images/icons/reactt.png",
        description: "JavaScript library for building user interfaces."
    },
    {
        name: "Node.js",
        icon: "/images/icons/nodejs.svg",
        description: "JavaScript runtime built on Chrome's V8."
    },
    {
        name: "TypeScript",
        icon: "/images/icons/Typescript_logo_2020.svg.png",
        description: "Strongly typed superset of JavaScript."
    },    
    {
        name: "Next.js",
        icon: "/images/icons/nextjs.png",
        description: "The React Framework for Production."
    },
    {
        name: "Tailwind CSS",
        icon: "/images/icons/tailwindcss.png",
        description: "Utility-first CSS framework."
    },
  
    {
        name: "MongoDB",
        icon: "/images/icons/mongodb.svg",
        description: "NoSQL database program."
    },
    {
        name: "Firebase",
        icon: "/images/icons/firebasee.png",
        description: "Platform for developing web and mobile apps."
    },
    {
        name: "HTML",
        icon: "/images/icons/htmlll.png",
        description: "Standard markup language for Web pages."
    },
    {
        name: "CSS",
        icon: "/images/icons/csss.png",
        description: "Style sheet language for web presentation."
    },
    {
        name: "JavaScript",
        icon: "/images/icons/js.png",
        description: "High-level, interpreted programming language."
    },
   
    
];

export default function Technologies() {
    return (
        <section id="technologies" className="min-h-screen bg-[#f5f0ff] py-12 lg:py-20 px-4 lg:px-6 font-sans">
            <div className="max-w-[1280px] mx-auto">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black mb-10 lg:mb-16 text-center">
                    Technologies<span className="text-[#7E83D4]">.</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {technologies.map((tech) => (
                        <div key={tech.name} className="bg-[#f5f1fe] border-0.5 border-black/20 rounded-[32px] p-8 flex flex-col gap-6 hover:scale-[1.02] transition-transform duration-300 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)]">
                            <div className="w-16 h-16 relative">
                                <Image
                                    src={tech.icon}
                                    alt={tech.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-black mb-2">{tech.name}</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">{tech.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
