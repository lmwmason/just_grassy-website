"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { TypingEffect } from "@/components/typing-effect";
import { MotionDiv, MotionSection, MotionA } from "@/components/motion";
import { useScroll, useTransform, motion } from "framer-motion";
import { 
  Rocket, 
  Cpu, 
  Layers, 
  Wrench, 
  Terminal, 
  Youtube, 
  MessageSquare, 
  ChevronDown,
  Activity,
  Zap,
  Package,
  ArrowRight,
  Monitor
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen pt-24 pb-12 px-6 sm:px-10 md:px-20 lg:px-40 xl:px-64 bg-background text-foreground transition-colors duration-500 overflow-x-hidden relative">
      {/* Interactive Background Gradient - PINK */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.05] dark:opacity-[0.1] z-0"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, var(--primary) 0%, transparent 40%)`,
          transition: "background 0.2s ease-out"
        }}
      />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-primary z-[60]"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <MotionSection 
          style={{ opacity, scale }}
          className="flex flex-col items-center justify-center text-center space-y-8 py-32 md:py-48 min-h-[90vh]"
        >
          <MotionDiv 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-6 rounded-[2.5rem] overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10 cursor-pointer transition-all duration-500"
          >
            <Image 
              src="/image.png" 
              alt="just_grassy logo" 
              fill 
              className="object-cover"
              priority
            />
          </MotionDiv>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight mb-4">
              hi, i&apos;m <span className="text-primary italic hover:not-italic transition-all cursor-default">just_grassy</span>
            </h1>
            <TypingEffect />
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-4">
            <MotionDiv 
              whileHover={{ y: -8, scale: 1.05 }}
              className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary text-[10px] sm:text-sm font-bold uppercase tracking-widest shadow-lg shadow-primary/5"
            >
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5" /> Embedded Engineer
            </MotionDiv>
            <MotionDiv 
              whileHover={{ y: -8, scale: 1.05 }}
              className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/20 text-[10px] sm:text-sm font-bold uppercase tracking-widest shadow-lg"
            >
              <Rocket className="w-4 h-4 sm:w-5 sm:h-5" /> Future Founder
            </MotionDiv>
          </div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10"
          >
            <ChevronDown className="w-8 h-8 opacity-30 text-primary" />
          </motion.div>
        </MotionSection>

        {/* Stats Section */}
        <MotionSection {...fadeIn} className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 py-20 border-y border-primary/10">
          {[
            { label: "Projects", val: "12+", icon: <Package className="text-primary" /> },
            { label: "Stability", val: "99.9%", icon: <Activity className="text-primary" /> },
            { label: "Response", val: "2ms", icon: <Zap className="text-primary" /> },
            { label: "Uptime", val: "24/7", icon: <Monitor className="text-primary" /> }
          ].map((stat, i) => (
            <MotionDiv 
              key={i}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-2 p-2 sm:p-4"
            >
              <div className="p-2 sm:p-3 rounded-2xl bg-primary/5 border border-primary/10 mb-2">{stat.icon}</div>
              <span className="text-2xl sm:text-3xl font-black">{stat.val}</span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-foreground/40 font-bold">{stat.label}</span>
            </MotionDiv>
          ))}
        </MotionSection>

        {/* About Section */}
        <MotionSection 
          id="about" 
          {...fadeIn}
          className="py-24 sm:py-32 space-y-12 max-w-4xl mx-auto"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic">Building from <span className="text-primary underline decoration-primary/20 underline-offset-8">Scratch</span>.</h2>
            <p className="text-foreground/40 uppercase tracking-[0.3em] text-[10px] sm:text-xs font-bold">mission statement</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 text-base sm:text-lg md:text-xl text-foreground/70 leading-relaxed font-medium">
              <p>
                i study at a <strong className="text-foreground">science high school</strong>, where i push the boundaries of embedded systems.
              </p>
              <p>
                currently, my focus is on <span className="text-primary italic">high-reliability flight tech</span> and autonomous robotics. i design everything: from the circuit board to the aerodynamic frame.
              </p>
            </div>
            <MotionDiv 
              whileHover={{ scale: 1.02 }}
              className="relative aspect-video rounded-3xl bg-primary/5 overflow-hidden border border-primary/10 group shadow-2xl"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
               <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-[10px] sm:text-sm font-mono opacity-40 group-hover:opacity-100 transition-opacity">
                 {`[SYSTEM_INFO]\n> FC_DEBUG: ACTIVE\n> STATUS: OPTIMAL\n> TEMP: 32.4 C\n> LINK: STABLE`}
               </div>
            </MotionDiv>
          </div>
          
          <MotionDiv 
            whileHover={{ x: 20 }}
            className="italic font-mono text-sm sm:text-lg mt-12 border-l-4 border-primary pl-6 sm:pl-8 py-4 bg-primary/5 cursor-default transition-all hover:bg-primary/10 rounded-r-2xl"
          >
            &quot;Hardware is easy. Physics is hard.&quot;
          </MotionDiv>
        </MotionSection>

        {/* Technical Playground */}
        <MotionSection 
          {...fadeIn}
          className="py-24 sm:py-32 space-y-16"
        >
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">Technical <span className="text-primary">Arsenal</span></h2>
            <p className="hidden md:block text-foreground/40 font-mono text-xs opacity-50">CORE_MODULES_LOADED</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: "Design", icon: <Layers className="w-6 h-6" />, items: ["Onshape", "KiCad", "Altium"] },
              { title: "Hardware", icon: <Cpu className="w-6 h-6" />, items: ["STM32", "ESP32", "RPi", "Arduino"] },
              { title: "Tools", icon: <Wrench className="w-6 h-6" />, items: ["CubeIDE", "PIO", "CLion", "VSCode"] },
              { title: "Code", icon: <Terminal className="w-6 h-6" />, items: ["C/C++", "Python", "React", "TS"] }
            ].map((skill, idx) => (
              <MotionDiv 
                key={idx}
                whileHover={{ y: -10, backgroundColor: "var(--card-hover)" }}
                className="space-y-4 sm:space-y-6 p-6 sm:p-8 rounded-[2rem] bg-card border border-primary/5 transition-all duration-500 shadow-sm"
              >
                <div className="p-3 sm:p-4 rounded-2xl bg-background border border-primary/10 w-fit text-primary">
                  {skill.icon}
                </div>
                <h3 className="font-black text-lg sm:text-xl tracking-tight">{skill.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-primary/5 text-primary text-[8px] sm:text-[10px] font-bold uppercase tracking-widest">{item}</span>
                  ))}
                </div>
              </MotionDiv>
            ))}
          </div>
        </MotionSection>

        {/* Projects Section */}
        <MotionSection 
          id="projects" 
          {...fadeIn}
          className="py-24 sm:py-32 space-y-16"
        >
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-right"><span className="text-primary">02.</span> Focus</h2>
            <div className="h-1 w-20 sm:w-24 bg-primary ml-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {[
              { title: "Pseudo-IMU Tech", desc: "advanced sensor fusion for non-traditional motion tracking.", color: "bg-primary/5 border-primary/20" },
              { title: "Extreme-FC", desc: "triple-redundancy flight controller for industrial drones.", color: "bg-primary/10 border-primary/20" },
              { title: "Drone Ecosystem", desc: "IOT enabled drone landing pads and automated battery hubs.", color: "bg-primary/5 border-primary/20" }
            ].map((proj, idx) => (
              <MotionDiv 
                key={idx}
                whileHover={{ x: 10, scale: 1.02 }}
                className={`group p-8 sm:p-10 rounded-[2.5rem] border transition-all duration-500 ${proj.color} cursor-pointer shadow-sm`}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl sm:text-2xl font-black group-hover:text-primary transition-colors">{proj.title}</h3>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 -rotate-45 group-hover:rotate-0 transition-transform text-primary/30" />
                </div>
                <p className="text-foreground/60 text-base sm:text-lg leading-relaxed">{proj.desc}</p>
              </MotionDiv>
            ))}
            
            <MotionDiv 
              whileHover={{ scale: 1.02 }}
              className="group relative p-8 sm:p-10 rounded-[2.5rem] bg-primary/5 border border-primary/20 transition-all duration-500 overflow-hidden cursor-pointer h-full shadow-sm"
            >
              <MotionDiv 
                animate={{ rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 6 }}
                className="absolute right-[5%] bottom-[5%] w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 opacity-20 group-hover:opacity-40 transition-opacity z-0"
              >
                <Image src="/DeliBot-Lab.png" alt="DeliBot logo" fill className="object-contain" />
              </MotionDiv>
              <div className="relative z-10 space-y-4 h-full flex flex-col justify-start">
                <div className="px-4 py-1 rounded-full bg-primary text-white text-[8px] sm:text-[10px] font-black uppercase w-fit">Flagship</div>
                <h3 className="text-2xl sm:text-3xl font-black group-hover:text-primary transition-colors">DeliBot (Delivery)</h3>
                <p className="text-foreground/60 text-base sm:text-lg max-w-[80%]">autonomous last-mile delivery system built from the ground up.</p>
              </div>
            </MotionDiv>
          </div>
        </MotionSection>

        {/* Connect Section */}
        <footer id="connect" className="py-24 sm:py-32 mt-32 border-t border-primary/10 text-center space-y-16">
          <MotionDiv {...fadeIn} className="space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter italic">Let&apos;s <span className="text-primary">Collaborate</span></h2>
            <p className="text-foreground/40 text-base sm:text-xl max-w-2xl mx-auto font-medium leading-relaxed px-4">
              currently looking for startup opportunities and high-tech flight research.
            </p>
          </MotionDiv>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 px-4">
            {[
              { name: "Medium", href: "https://medium.com/@just_grassy", color: "hover:bg-foreground hover:text-background" },
              { name: "YouTube", href: "https://www.youtube.com/@grassy-person", color: "hover:bg-[#FF0000] hover:text-white" },
              { name: "Discord", href: "https://discord.gg/p9UcFdbx", color: "hover:bg-[#5865F2] hover:text-white" }
            ].map((link, i) => (
              <MotionA 
                key={i}
                href={link.href}
                target="_blank"
                whileHover={{ y: -10, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tighter px-4 sm:px-6 py-2 rounded-2xl transition-all duration-300 border border-transparent hover:border-primary/20 ${link.color}`}
              >
                {link.name}.
              </MotionA>
            ))}
          </div>
          
          <div className="pt-24 sm:pt-32 flex flex-col items-center gap-6">
            <div className="text-[8px] sm:text-[10px] text-foreground/40 uppercase tracking-[0.5em] font-black">just_grassy portfolio</div>
            <div className="flex gap-4">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse" />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary/40 animate-pulse delay-75" />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary/20 animate-pulse delay-150" />
            </div>
            <p className="text-[8px] sm:text-[10px] text-foreground/30 px-4">© {new Date().getFullYear()} DESIGNED & BUILT BY GRASSY. ZERO SHORTCUTS.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
