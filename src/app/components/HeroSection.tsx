"use client";
import { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaRobot } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; 
    }
  }, []);

  return (
    <main className="relative w-full h-screen flex items-center justify-center text-white text-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-20">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video/ai-bg.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-cyber-grid -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 -z-5"></div>

      <div className="relative z-10 flex flex-col items-center text-center p-6 ">
        <div className="flex items-center justify-center gap-1 bg-black bg-black/50 px-3 py-1 rounded-2xl">
          <GoDotFill className="text-neonPink w-4 h-4 text-lg animate-pulse" />
          <h4 className="uppercase text-neonCyan text-sm">
            Powered by Panaversity
          </h4>
        </div>

        <h1 className="text-4xl md:text-6xl bg-gradient-to-r from-neonCyan to-neonPink text-transparent bg-clip-text font-extrabold drop-shadow-neon">
          Enterprise AI Agents <br />
          <span className="text-white leading-relaxed">for the Future</span>
        </h1>

        <div className="relative flex items-center bg-black bg-opacity-50 border border-neonCyan px-4 py-3 rounded-lg shadow-md max-w-2xl w-full my-5">
          <FaRobot className="text-neonCyan text-2xl mr-3 animate-bounce" />

          <h5 className="text-lg md:text-xl text-gray-300">
            <TypeAnimation
              sequence={[
                "I'm your AI agent, ready to assist.",
                2000,
                "I can do everything you need.",
                2000,
                "Optimized for speed. Designed for intelligence.",
                2000,
                "Let's build the future together.",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h5>
        </div>

        <div className=" flex flex-col sm:flex-row gap-4">
          <button className="flex items-center gap-x-2 font-semibold bg-neonPink px-6 py-4 rounded-lg text-white shadow-pinkGlow hover:scale-110 transition-transform hover:shadow-xl hover:shadow-neonPink">
            Deploy Your AI Agent <MdOutlineArrowForwardIos />
          </button>
          <button className="font-semibold border border-neonCyan px-6 py-3 rounded-lg text-neonCyan shadow-neon hover:scale-110 transition-transform hover:shadow-xl hover:shadow-neonCyan">
            Watch Demo
          </button>
        </div>
      </div>
    </main>
  );
}



