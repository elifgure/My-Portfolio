
import Image from "next/image";

const technologies = [
    {
        name: "HTML",
        icon: "/images/icons/html.png",
        description: "Standard markup language for Web pages."
    },
    {
        name: "CSS",
        icon: "/images/icons/css.webp",
        description: "Style sheet language for web presentation."
    },
    {
        name: "JavaScript",
        icon: "/images/icons/js.jpg",
        description: "High-level, interpreted programming language."
    },
    {
        name: "TypeScript",
        icon: "/images/icons/Typescript_logo_2020.svg.png",
        description: "Strongly typed superset of JavaScript."
    },
    {
        name: "React",
        icon: "/images/icons/react.png",
        description: "JavaScript library for building user interfaces."
    },
    {
        name: "Next.js",
        icon: "/images/icons/nextjs.jpg",
        description: "The React Framework for Production."
    },
    {
        name: "Tailwind CSS",
        icon: "/images/icons/tailwind.png",
        description: "Utility-first CSS framework."
    },
    {
        name: "Node.js",
        icon: "/images/icons/nodejs.png",
        description: "JavaScript runtime built on Chrome's V8."
    },
    {
        name: "MongoDB",
        icon: "/images/icons/mongodb.svg",
        description: "NoSQL database program."
    },
    {
        name: "Firebase",
        icon: "/images/icons/firebase.png",
        description: "Platform for developing web and mobile apps."
    }
];

export default function Technologies() {
    return (
        <section id="technologies" className="min-h-screen bg-[#ffe9c6] py-20 px-4 lg:px-8 font-sans">
            <div className="max-w-[1500px] mx-auto">
                <h2 className="text-6xl font-black tracking-tighter text-black mb-16 text-center">
                    Technologies<span className="text-[#7E83D4]">.</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {technologies.map((tech) => (
                        <div key={tech.name} className="bg-[#f6f5f3] rounded-[32px] p-8 flex flex-col gap-6 hover:scale-[1.02] transition-transform duration-300 shadow-md hover:shadow-md">
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
