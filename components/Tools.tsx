import Image from "next/image";


const tools = [
    {
        name: "Visual Studio Code",
        icon: "/images/tools/vscodee.png",
        description: "Code editor"
    },
    {
        name: "Cursor",
        icon: "/images/tools/cursor.jpg",
        description: "AI-powered editor"
    },
    {
        name: "Github Copilot",
        icon: "/images/tools/githubcopilot.png",
        description: "AI-powered editor"
    },
    {
        name: "Antigravity",
        icon: "/images/tools/antigravity.png",
        description: "AI-powered editor"
    },
    {
        name: "ChatGPT",
        icon: "/images/tools/chtgpt.png",
        description: "AI assistant"
    },
    {
        name: "Claude",
        icon: "/images/tools/claude.png",
        description: "AI assistant"
    },
    {
        name: "V0",
        icon: "/images/tools/v0-1.svg",
        description: "UI generator"
    },
    {
        name: "Netlify",
        icon: "/images/tools/netlify.png",
        description: "Static site hosting"
    },
    {
        name: "Vercel",
        icon: "/images/tools/vercel.svg",
        description: "Deployment platform"
    },
    {
        name: "Github",
        icon: "/images/tools/github.png",
        description: "Version control system"
    },
];

export default function Tools() {
    return (
        <section id="tools" className="min-h-screen bg-[#e0ecff] py-12 lg:py-20 px-4 lg:px-6 font-sans">
            <div className="max-w-[1280px] mx-auto">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black mb-6 lg:mb-16 text-center">
                    Tools<span className="text-[#7E83D4]">.</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {tools.map((tool) => (
                        <div key={tool.name} className="bg-[#ecf3ff] border-0.5 border-black/20 rounded-[32px] p-8 flex flex-col gap-6 hover:scale-[1.02] transition-transform duration-300 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)]">
                            <div className="w-16 h-16 relative">
                                <Image
                                    src={tool.icon}
                                    alt={tool.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-black mb-2">{tool.name}</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">{tool.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}