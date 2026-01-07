
import { Inbox, Download, Linkedin, Github } from "lucide-react";
import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-start h-auto lg:h-[680px]">
      {/* Sidebar Navigation */}
      {/* Sidebar Navigation - Desktop */}
      <div className="hidden lg:flex flex-col justify-center py-18 h-full gap-16 text-gray-500 font-medium text-sm -mx-6">
        <a href="#technologies" className="-rotate-90 whitespace-nowrap cursor-pointer hover:text-black transition-colors">Technologies</a>
        <a href="#projects" className="-rotate-90 whitespace-nowrap cursor-pointer hover:text-black transition-colors">Projects</a>
        <a href="#tools" className="-rotate-90 whitespace-nowrap cursor-pointer hover:text-black transition-colors">Tools</a>
        <a href="#contact" className="-rotate-90 whitespace-nowrap cursor-pointer hover:text-black transition-colors">Contact</a>
      </div>

      {/* Mobile Navigation */}
      <div className="flex lg:hidden overflow-x-auto gap-6 pb-4 w-full">
        <a href="#technologies" className="text-sm font-medium text-gray-500 hover:text-black whitespace-nowrap">Technologies</a>
        <a href="#projects" className="text-sm font-medium text-gray-500 hover:text-black whitespace-nowrap">Projects</a>
        <a href="#tools" className="text-sm font-medium text-gray-500 hover:text-black whitespace-nowrap">Tools</a>
        <a href="#contact" className="text-sm font-medium text-gray-500 hover:text-black whitespace-nowrap">Contact</a>
      </div>

      {/* Main Card Wrapper */}
      <div className="relative w-full h-full">

        {/* About Me Label (Positioned in the curve area) */}
        <div className="absolute -top-1 left-2 z-20 flex items-center gap-3">
          {/* Icon */}
          <div className="w-6 h-6 grid grid-cols-2 gap-0.5 rotate-45">
            <span className="border-[2px] border-black rounded-full w-full h-full"></span>
            <span className="bg-black rounded-full w-full h-full"></span>
            <span className="bg-black rounded-full w-full h-full"></span>
            <span className="border-[2px] border-black rounded-full w-full h-full"></span>
          </div>
          <span className="font-bold text-black text-xl tracking-tight">About Me</span>
        </div>

        {/* Purple Card */}
        <div className="w-full h-full min-h-[500px] lg:min-h-[640px] bg-[#7E83D4] rounded-[40px] lg:rounded-[56px] lg:rounded-tl-[160px] overflow-hidden relative pt-12 lg:pt-20 px-8 lg:px-12 pb-10 lg:pb-14 flex flex-col shadow-2xl mt-4 lg:mt-8">

          {/* Profile Image Section */}
          <div className="relative flex justify-center items-center mt-2">
            {/* Pink Back Circle */}
            <div className="absolute w-[280px] h-[280px] bg-[#E0B0FF] rounded-full top-2 left-1/2 -translate-x-1/2"></div>

            {/* White Ring & Image */}
            <div className="relative z-10 w-[260px] h-[260px] rounded-full border-[6px] top-2 border-white flex items-center justify-center bg-transparent">
              <div className="w-[230px] h-[230px] rounded-full overflow-hidden relative bg-gray-200">
                <Image
                  src="/images/profile.svg"
                  alt="Profile"
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="relative z-20 mt-8">
            <p className="text-2xl lg:text-4xl font-light text-white">Im,</p>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-snug tracking-tighter mt-1">
              <span className="block">Elif</span>
              <span className="block pl-6">Güre</span>
            </h1>
          </div>

          {/* Footer Content */}
          <div className="flex justify-between items-end mt-auto">
            <a href="mailto:elif@example.com" className="flex items-center gap-2 text-white/90 text-lg hover:underline hover:text-white transition-colors pb-2">
              elif.gure121@gmail.com
              <Inbox className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* CV and Socials (Below Profile Card) */}
        <div className="flex flex-col items-center gap-4 w-full mt-6">
          <button className="w-full bg-[#0f131b] text-white h-[60px] rounded-[30px] flex items-center justify-center gap-3 font-medium text-xl hover:bg-black/80 transition-colors">
            Download CV
            <div className="bg-white/20 p-2 rounded-full">
              <Download className="w-5 h-5" />
            </div>
          </button>

          {/* <div className="flex gap-4">
            <a href="#" className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center border border-black/10 hover:scale-105 transition-transform">
            </a>
            <a href="#" className="w-[60px] h-[60px] bg-black text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform">
              <Github className="w-6 h-6" />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}
