import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="flex gap-4 lg:gap-8 items-start h-auto lg:h-[680px]">
      {/* Sidebar Navigation */}
      <div className="hidden lg:flex flex-col justify-center py-18 h-full gap-16 text-gray-500 font-medium text-sm -mx-6">
         <div className="-rotate-90 whitespace-nowrap cursor-pointer hover:text-black transition-colors">Technologies</div>
         <div className="-rotate-90 whitespace-nowrap cursor-pointer hover:text-black transition-colors">Projects</div>
         <div className="-rotate-90 whitespace-nowrap cursor-pointer hover:text-black transition-colors">Commits</div>
         <div className="-rotate-90 whitespace-nowrap cursor-pointer hover:text-black transition-colors">Contact</div>
      </div>

      {/* Main Card Wrapper */}
      <div className="relative w-full max-w-[420px]">
        
        {/* About Me Label (Positioned in the curve area) */}
        <div className="absolute -top-1 left-2 z-20 flex items-center gap-3">
             {/* Icon */}
             <div className="w-5 h-5 grid grid-cols-2 gap-0.5 rotate-45">
                <span className="border-[1.5px] border-black rounded-full w-full h-full"></span>
                <span className="bg-black rounded-full w-full h-full"></span>
                <span className="bg-black rounded-full w-full h-full"></span>
                <span className="border-[1.5px] border-black rounded-full w-full h-full"></span>
             </div>
             <span className="font-bold text-black text-lg tracking-tight">About Me</span>
        </div>

        {/* Purple Card */}
        <div className="w-full h-[580px] bg-[#7E83D4] rounded-[48px] rounded-tl-[120px] overflow-hidden relative pt-12 px-8 pb-10 flex flex-col shadow-2xl mt-8">
             
             {/* Profile Image Section */}
             <div className="relative flex justify-center items-center mt-2">
                  {/* Pink Back Circle */}
                  <div className="absolute w-[260px] h-[260px] bg-[#E0B0FF] rounded-full top-2 left-1/2 -translate-x-1/2"></div>
                  
                  {/* White Ring & Image */}
                  <div className="relative z-10 w-[240px] h-[240px] rounded-full border-[6px] top-2 border-white flex items-center justify-center bg-transparent">
                      <div className="w-[210px] h-[210px] rounded-full overflow-hidden relative bg-gray-200">
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
                 <p className="text-4xl font-light text-white">Im,</p>
                 <h1 className="text-6xl font-bold text-white leading-snug tracking-tight mt-2">
                    Elif <br/> Güre
                 </h1>
             </div>

             {/* Footer Content */}
             <div className="flex justify-between items-end mt-auto">
                 <a href="mailto:elif@example.com" className="flex items-center gap-2 text-white/90 text-sm hover:underline hover:text-white transition-colors pb-2">
                     elif.gure121@gmail.com
                 </a>
             </div>

        </div>
      </div>
    </div>
  );
}
