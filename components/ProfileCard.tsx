
import { Inbox, Download, Linkedin, Github } from "lucide-react";
import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-start h-auto w-full">
      {/* Sidebar Navigation */}
      {/* Sidebar Navigation - Desktop */}
      <div className="
        hidden lg:flex
        flex-col
        justify-center
        h-full
        gap-16
        text-gray-500
        font-medium
        text-sm
        w-8
        items-center
        text-center
      ">
        <a href="#technologies" className="-rotate-90 whitespace-nowrap hover:text-black transition-colors">
          Technologies
        </a>
        <a href="#projects" className="-rotate-90 whitespace-nowrap hover:text-black transition-colors">
          Projects
        </a>
        <a href="#tools" className="-rotate-90 whitespace-nowrap hover:text-black transition-colors">
          Tools
        </a>
        <a href="#contact" className="-rotate-90 whitespace-nowrap hover:text-black transition-colors">
          Contact
        </a>
      </div>


      {/* Mobile Navigation */}
      <div className="flex lg:hidden overflow-x-auto gap-6 pb-4 w-full">
        <a href="#technologies" className="text-sm font-medium text-gray-500 hover:text-black whitespace-nowrap">Technologies</a>
        <a href="#projects" className="text-sm font-medium text-gray-500 hover:text-black whitespace-nowrap">Projects</a>
        <a href="#tools" className="text-sm font-medium text-gray-500 hover:text-black whitespace-nowrap">Tools</a>
        <a href="#contact" className="text-sm font-medium text-gray-500 hover:text-black whitespace-nowrap">Contact</a>
      </div>

      {/* Main Card Wrapper */}
      <div className="relative w-full h-full mt-4 lg:mt-0">

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
        <div className="w-full h-auto min-h-[auto] sm:min-h-[400px] lg:min-h-[500px] bg-[#7E83D4] rounded-[24px] sm:rounded-[32px] lg:rounded-[42px] lg:rounded-tl-[100px] overflow-hidden relative pt-8 lg:pt-12 px-6 lg:px-8 pb-6 lg:pb-8 flex flex-col shadow-2xl mt-10 lg:mt-6">

          {/* Profile Image Section */}
          <div className="relative flex justify-center items-center mt-2">
            {/* Pink Back Circle */}
            <div className="absolute w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] lg:w-[240px] lg:h-[240px] bg-[#E0B0FF] rounded-full top-2 left-1/2 -translate-x-1/2"></div>

            {/* White Ring & Image */}
            <div className="relative z-10 w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] lg:w-[220px] lg:h-[220px] rounded-full border-[5px] sm:border-[6px] top-2 border-white flex items-center justify-center bg-transparent">
              <div className="w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px] rounded-full overflow-hidden relative bg-gray-200">
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
          <div className="relative z-20 mt-8 sm:mt-12 text-center lg:text-left">
            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-white">I'm,</p>
            <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold text-white leading-snug tracking-tighter mt-1">
              <span className="block">Elif</span>
              <span className="block pl-0 lg:pl-6">Güre</span>
            </h1>
          </div>

          {/* Footer Content */}
          <div className="flex flex-col mt-6 sm:mt-auto gap-4 items-center lg:items-start">
            <a href="mailto:elif.gure121@gmail.com" className="flex items-center gap-2 text-white/90 text-xl hover:underline hover:text-white transition-colors">
              elif.gure121@gmail.com
              <Inbox className="w-6 h-6" />
            </a>
            
            <div className="flex gap-3">
               <a href="https://github.com/elifgure" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors text-white">
                  <Github className="w-6 h-6" />
               </a>
               <a href="https://www.linkedin.com/in/elif-g%C3%BCre-3b34111b0/" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors text-white">
                  <Linkedin className="w-6 h-6" />
               </a>
            </div>
          </div>
        </div>

        {/* CV and Socials (Below Profile Card) */}
        <div className="flex flex-col items-center gap-4 w-full mt-6">
          <a href="/cv/ElifGure_CV.pdf" className="w-full bg-[#0f131b] text-white h-[50px] rounded-[25px] flex items-center justify-center gap-3 font-medium text-lg hover:bg-black/70 transition-colors">
            Download CV
            <div className="bg-white/20 p-2 rounded-full">
              <Download className="w-5 h-5" />
            </div>
          </a>

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
