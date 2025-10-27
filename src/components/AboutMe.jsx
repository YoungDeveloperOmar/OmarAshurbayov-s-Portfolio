import { GraduationCap, Code2, Focus } from 'lucide-react'

var expertiseList = ['Front-End Development', 'Software Development', 'Team Managment' , 'CI/CD Pipelines']

const AboutMeComponent = () => {
    console.log(window.innerWidth);

    return(
        <section id="about" className="py-20 mt-10 relative bg-[hsl(220_15%_15%_/0.3)]">
            {/* <div className="absolute inset-3 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[20px_20px]" />
            <div className="absolute inset-3 bg-linear-to-b from-background via-background/50 to-background" /> */}
        
            <div className="container mx-auto px-4">
                <div className="mx-auto md:mx-20 space-y-12">
                    <div className="space-y-2" >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                           <span className="text-primary font-mono">#</span>
                            <span className="gradient-text">about</span>-me
                        </h2>
                        <div className="h-1 w-32 bg-linear-to-r gradient-bar rounded-full" />
                    </div>
                </div>
                            
                <div className="space-y-6 fade-in-up text-white mt-5 md:mx-20 "> 
                    <div className="relative group">
                        <div className="absolute -inset-1 animate-glow rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity" />
                        {/* First Card View Bio */}
                        <div className="relative  bg-card rounded-lg border glass-card p-8 md:p-10
                            shadow-[0_12px_40px_-12px_hsl(var(--primary)/0.25)]
                            transition duration-500
                            hover:shadow-[0_0_40px_8px_hsl(var(--primary)/0.55),0_0_120px_24px_hsl(var(--primary)/0.25)]
                            hover:ring-1 hover:ring-[hsl(var(--primary)/0.35)] ">                            
                            <p className="text-lg md:text-xl text-foreground leading-relaxed">
                                <span className="gradient-text font-semibold">Computer Science</span> and <span className="gradient-text font-semibold"> Artificial Intelligence</span> co-terminal 
                                student with expertise in{' '}
                                <span className="text-primary font-bold">React</span>,{' '}
                                <span className="text-primary font-bold">JavaScript</span>,{' '}
                                <span className="text-primary font-bold">Python</span>, and{' '}
                                <span className="text-primary font-bold">SQL</span>, complemented by hands-on
                                experience in developing <span className="text-foreground font-semibold">scalable UIs</span> and connecting 
                                software with real-world systems.
                            </p>
                            <p className="text-lg md:text-xl text-foreground leading-relaxed mt-6">
                                Over <span className="gradient-text font-bold text-2xl">160 hours</span> of tutoring
                                experience demonstrates strong <span className="text-foreground font-semibold">communication</span> and{' '}
                                <span className="text-foreground font-semibold">mentorship</span> skills. Seeking opportunities where I can 
                                combine technical excellence with leadership and collaboration.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 md:gap-8 ">
                        <div className="relative group animate-fade-in-up" style={{animationDelay: '0.25s'}}>
                            <div className="absolute -inset-1 bg-linear-to-br from-[hsl(180_100%_50%_/0.2)] 
                            to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition blur-xl" />
                            {/* Card View  1*/}
                            <div className="relative bg-card rounded-lg border glass-card p-8
                                shadow-[0_12px_40px_-12px_hsl(var(--primary)/0.25)]
                                transition duration-300
                                hover:shadow-[0_0_40px_8px_hsl(var(--primary)/0.55),0_0_120px_24px_hsl(var(--primary)/0.25)]
                                hover:ring-1 hover:ring-[hsl(var(--primary)/0.35)] hover:-translate-y-2"> 

                                <div className="space-y-6">
                                    <div className="w-16 h-16 rounded-xl bg-linear-to-br from-[hsl(180_100%_50%_/0.2)] to-[hsl(180_100%_50%_/0.1)] 
                                    flex items-center justify-center group-hover:scale-110 transition duration-300">
                                        <GraduationCap className="h-8 w-8 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl mb-4 text-[hsl(0_0%_95%)]">
                                            Education
                                        </h3>
                                   
                                        <div>
                                            <p className="text-base text-[hsl(0_0%_95%)] font-medium text-nowrap">
                                                B.S. in Computer Science
                                            </p>
                                            <p className="text-sm text-glow-animated text-emerald-400 font-mono font-semibold mt-1">Expected 2027</p>
                                        </div>

                                        <div className="mt-5">
                                             <p className="text-base text-[hsl(0_0%_95%)] font-medium text-wrap">
                                                M.S. in Artificial   Intelligence
                                            </p>
                                            <p className="text-sm text-emerald-400 text-glow-animated font-mono font-semibold mt-1">Expected 2027</p>
                                        </div>
                                     </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative group animate-fade-in-up" style={{animationDelay: '0.25s'}}>
                            <div className="absolute -inset-1 bg-linear-to-br from-[hsl(180_100%_50%_/0.2)] 
                                to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition blur-xl" />
                            {/* Card View  2*/}
                            <div className="relative bg-card rounded-lg border glass-card p-8 md:p-8
                                shadow-[0_12px_40px_-12px_hsl(var(--primary)/0.25)]
                                transition duration-300
                                hover:shadow-[0_0_40px_8px_hsl(var(--primary)/0.55),0_0_120px_24px_hsl(var(--primary)/0.25)]
                                hover:ring-1 hover:ring-[hsl(var(--primary)/0.35)] hover:-translate-y-2"> 

                                <div className="space-y-6">
                                    <div className="w-16 h-16 rounded-xl bg-linear-to-br from-[hsl(140_100%_50%_/0.2)] to-[hsl(140_100%_50%_/0.1)] flex items-center justify-center group-hover:scale-110 transition duration-300">
                                        <Code2 className="w-8 h-8 text-secondary" />
                                    </div>

                                    <div >
                                        <h3 className="font-bold mb-4 text-xl text-[hsl(0_0%_95%)]">Expertise</h3>
                                        <ul className="text-[hsl(0_0%_95%)] space-y-2 text-base">
                                            <li className="flex items-center gap-2 ">
                                                <span className="w-2 h-2 rounded-full bg-[hsl(140_100%_50%)] animate-pulse duration-300 ease-in" />
                                                Front-End Development
                                            </li>
                                            <li className="flex items-center gap-2 ">
                                                <span className="w-2 h-2 rounded-full bg-[hsl(140_100%_50%)] animate-pulse duration-300 ease-in" />
                                                Software Development
                                            </li>
                                            <li className="flex items-center gap-2 ">
                                                <span className="w-2 h-2 rounded-full bg-[hsl(140_100%_50%)] animate-pulse duration-300 ease-in" />
                                                CI/CD Pipelines
                                            </li>
                                            <li className="flex items-center gap-2 ">
                                                <span className="w-2 h-2 rounded-full bg-[hsl(140_100%_50%)] animate-pulse duration-300 ease-in" />
                                                Team Managment
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="relative group animate-fade-in-up" style={{animationDelay: '0.25s'}}>
                        <div className="absolute -inset-1 bg-linear-to-br from-[hsl(180_100%_50%_/0.2)] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition blur-xl" />
                        {/* Card View  3*/}
                        <div className="relative glass-card bg-card rounded-lg border glass-card p-8 md:p-8
                            shadow-[0_12px_40px_-12px_hsl(var(--primary)/0.25)]
                            transition duration-300
                            hover:shadow-[0_0_40px_8px_hsl(var(--primary)/0.55),0_0_120px_24px_hsl(var(--primary)/0.25)]
                            hover:ring-1 hover:ring-[hsl(var(--primary)/0.35)] hover:-translate-y-2"> 

                            <div className="space-y-6">                            
                                <div className = 'w-16 h-16 rounded-xl bg-linear-to-br from-[hsl(180_100%_50%_/0.2)] to-[hsl(180_100%_50%_/0.1)] flex justify-center items-center group-hover:scale-110 duration-300 transition'>
                                    <Focus className='w-8 h-8 text-primary' />
                                </div>

                                <div className=''>
                                    <h3 className='font-bold text-xl text-[hsl(0_0%_95%)] mb-4'>Current Focus</h3>
                                    <ul className="space-y-2 text-[hsl(0_0%_95%)] text-base">
                                        <li className="flex items-center gap-2 ">
                                            <span className="w-2 h-2 rounded-full bg-[hsl(180_100%_50%)] animate-pulse duration-300 ease-in" />
                                            Drone Software Systems
                                        </li>
                                        <li className="flex items-center gap-2 ">
                                            <span className="w-2 h-2 rounded-full bg-[hsl(180_100%_50%)] animate-pulse duration-300 ease-in" />
                                            Front-End @ Codify
                                        </li>
                                        <li className="flex items-center gap-2 ">
                                            <span className="w-2 h-2 rounded-full bg-[hsl(180_100%_50%)] animate-pulse duration-300 ease-in" />
                                            Website Developemnt
                                        </li>
                                        <li className="flex items-center gap-2 ">
                                            <span className="w-2 h-2 rounded-full bg-[hsl(180_100%_50%)] animate-pulse duration-300 ease-in" />
                                            Artificial Intelligence
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                
            </div>

        </section>
    )
}

export default AboutMeComponent


//  <h1 className='md:text-6xl text-white font-bold'> <span className='gradient-text'>#about</span>-me</h1>
//             <div className="md:grid-rows-2">
//                 <div className="bg-white h-[12vh]">
//                     <h1>assad</h1>
//                 </div>
//             </div>
          