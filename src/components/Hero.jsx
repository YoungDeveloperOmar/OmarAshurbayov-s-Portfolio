import { ArrowDown } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
const HeroComponent = () => {
    const scrollTo = (href) => {
        const element = document.querySelector(href)
        if (element) element.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <main id="home" className="container relative px-8 md:px-12 lg:px-16 mih-h-screen  md:pt-4 flex items-center justify-center overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            <div className="absolute inset-0 bg-linear-to-b from-background via-background/50 to-background pointer-events-none" />
            
            <div className="absolute top-20 left-10 w-72 h-72 bg-[hsl(180_100%_50%_/0.2)] rounded-full blur-3xl animate-glow -z-10" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[hsl(140_100%_50%_/0.2)] rounded-full blur-3xl animate-glow -z-10" style={{ animationDelay: '1s' }} />

        
            <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center z-20 w-full">
                {/* Left */}
                <div className="space-y-8 pl-5 md:pl-12 w-full">
                    <p className="font-mono text-sm md:text-base text-gray-400 flex items-center gap-2 text-nowrap">
                        <span className="text-emerald-400">&gt;</span>
                        <span>
                            console.log(
                            <span className="text-emerald-400">
                            "
                            <TypeAnimation
                                sequence={[
                                'Hello World', 1500, // pause after typing
                                'Welcome Back!', 1500,
                                'Connect With Me!', 1500,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                cursor={false}
                            />
                            "
                            </span>)
                        </span>
                    </p>

                    <div className='space-y-4'>
                        
                    <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white">
                        Hi, I&apos;m
                        <span className="block bg-clip-text text-transparent bg-linear-to-r from-emerald-400 via-teal-300 to-cyan-400">
                            Omar Ashurbayov
                        </span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-300">
                        <span className="text-emerald-400 text-glow-animated">Front-End</span>
                        <span className="mx-2">&amp;</span>
                        <span className="text-cyan-400 text-glow-animated">Software Developer</span>
                    </h2>

                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                        Building <span className="text-white font-semibold">efficient</span>, <span className="text-white font-semibold">scalable</span>, and
                        <span className="text-white font-semibold"> intelligent</span> interfaces for modern applications — connecting
                        software with real-world systems.
                    </p>

                    </div>

                    <div className="flex flex-wrap gap-4 pt-4 pr-4 text-white">
                        <button
                            className="flex-1 min-w-40 px-6 py-3 bg-emerald-400 text-glow-animated text-black text-center
                                rounded-lg font-semibold shadow-lg transition-transform hover:scale-105 cursor-pointer"
                            onClick={() => scrollTo('#projects')}
                        >
                            View My Work
                        </button>

                        <button
                            className="flex-1 min-w-40 px-6 py-3 border-2 border-emerald-500 text-glow-animated text-emerald-400 text-center
                                rounded-lg font-semibold shadow-lg transition-transform hover:scale-105 cursor-pointer"
                            onClick={() => scrollTo('#contact')}
                        >
                            Contact Me
                        </button>
                    </div>

                    <div className="pt-8">
                        <button className="flex items-center font-mono gap-2 text-sm text-gray-400
                             hover:text-emerald-400 transition cursor-pointer"
                            onClick={() => scrollTo("#about")}>
                            <span>Scroll Down</span>
                            <ArrowDown className="h-4 w-4 animate-bounce group-hover:text-primary" />
                        </button>
                    </div>
                </div>

                {/* Right Column */}
                <div className='relative flex justify-center'>
                    <div className='relative'>
                        <div
                        className="absolute -inset-4 bg-gradient-to-r
                                    from-emerald-400/30 to-cyan-400/30
                                    blur-3xl rounded-full animate-glow"
                        />

                        <div
                        className="absolute top-0 right-0 w-40 h-40
                                    border-2 border-emerald-400/40 rounded-2xl
                                    translate-x-6 -translate-y-6 animate-float"
                        />

                        <div
                        className="absolute bottom-0 left-0 w-40 h-40
                                    border-2 border-cyan-400/40 rounded-2xl
                                    -translate-x-3 translate-y-6 animate-float
                                    [animation-delay:1s]"   /* Tailwind arbitrary property for delay */
                        />
                       <div
                        className="absolute -inset-2 
                                    bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 
                                    opacity-20 blur-xl rounded-3xl animate-rotate-slow"
                        />
                        <div className='relative z-10'>
                            <div className='relative group'>
                                {/* Main hero image */}
                                <img src="/assets/images/hero2.jpg" alt="Omar Ashrubayov" className="w-72 h-72 md:w-96 md:h-96 rounded-3xl object-cover border-2 border-primary/60 shadow-2xl transition-transform duration-500 group-hover:scale-105" />
                            </div>
                        </div>
                    </div>

                    <div className='absolute bottom-2 left-1/2 -translate-x-1/2 max-w-[70%] w-fit sm::w-[65%] lg:w-[60%] rounded-xl glass-card animate-fade-in border border-white/10 p-2 shadow-xl z-20' style={{ animationDelay: '0.6s' }}>
                        <div className='flex items-center gap-3'>
                            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                            <div>
                                <p className='text-xs font-mono text-gray-400'>
                                    <span className='text-emerald-400 animate-pulse duration-300 ease-in '>&lt;</span>currently_working_on /<span className='text-emerald-400 text-glow-animated'>&gt;</span>
                                </p>
                                <p className='text-sm font-semibold text-white'> Portfolio &amp; Drone Software</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default HeroComponent