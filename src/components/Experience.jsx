import { Briefcase, Calendar } from 'lucide-react'

const ExperienceComponent = () => {
  // Map color names to static Tailwind classes
  const colorMap = {
    primary: {
      from: 'from-primary/30',
      to: 'to-primary/10',
      border: 'border-primary/60',
      text: 'text-primary',
      shadow: 'group-hover:shadow-primary/50',
    },
    secondary: {
      from: 'from-secondary/30',
      to: 'to-secondary/10',
      border: 'border-secondary/60',
      text: 'text-secondary',
      shadow: 'group-hover:shadow-secondary/50',
    },
  };

  return (
    <section id='experience' className="py-20 relative bg-[hsl(220_15%_15%_/0.3)]">
      <div className="container mx-auto px-4">
        <div className="md:mx-20 space-y-12">
          {/* Header */}
          <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-primary font-mono">#</span>
              <span className="gradient-text">experience</span>
            </h2>
            <div className="h-1 w-32 bg-linear-to-br gradient-bar rounded-full" />
          </div>

          {/* Timeline */}
          <div className="space-y-12 relative mt-5">
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-[hsl(180_100%_50%)] via-[hsl(140_100%_50%)] to-[hsl(180_100%_50%)] opacity-40 hidden md:block ml-6 blur-sm" />
            <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full bg-gradient-to-b from-[hsl(180_100%_50%)] via-[hsl(140_100%_50%)] to-[hsl(180_100%_50%)] opacity-60 hidden md:block ml-6" />

            {/* Experience 1: Drone Club */}
            <div className="animate-fade-in-up" style={{ animationDelay: `0s` }}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[hsl(180_100%_50%_/0.2)] via-[hsl(140_100%_50%_/0.2)] to-[hsl(180_100%_50%_/0.2)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                <div className="relative glass-card p-8 md:p-10 hover:border-[hsl(180_100%_50%_/0.6)] hover:shadow-2xl hover:shadow-[hsl(180_100%_50%_/0.2)] transition-all duration-500 md:ml-20 hover:-translate-y-1 rounded-2xl">
                  {/* Enhanced Timeline dot */}
                  <div className={`absolute -left-20 top-10 w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(180_100%_50%_/0.3)] to-[hsl(180_100%_50%_/0.1)] border-2 border-[hsl(180_100%_50%_/0.6)] hidden md:flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg shadow-[hsl(180_100%_50%_/0.5)] transition-all duration-300`}>
                    <Briefcase className={`h-6 w-6 ${colorMap.primary.text}`} />
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                        <h3 className="text-2xl md:text-3xl font-bold text-[hsl(0_0%_95%)]">Software Developer</h3>
                        <div className="flex items-center gap-2 text-sm text-[hsl(0_0%_60%)] px-3 py-1 bg-muted/50 rounded-lg">
                          <Calendar className="h-4 w-4" />
                          <span className="font-mono">Jan 2025 - Present</span>
                        </div>
                      </div>
                      <p className={`text-xl font-bold ${colorMap.primary.text} text-glow`}>Drone Development & Air-sports Organization</p>
                    </div>

                    <p className="text-base md:text-lg text-[hsl(0_0%_95%)] leading-relaxed">
                      Developed software for drone control systems using C, enhancing autonomous flight functionality and system reliability.
                    </p>

                    <div className="flex flex-wrap gap-3 cursor-pointer">
                      <span className="px-4 py-2 text-sm font-mono bg-gradient-to-br from-[hsl(220_15%_15%)]  to-[hsl(220_15%_15%_/0.5)] rounded-lg border border-[hsl(180_100%_50%_/0.3)] text-[hsl(0_0%_95%)] hover:border-[hsl(180_100%_50%_/0.6)] hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
                        C
                      </span>
                      <span className="px-4 py-2 text-sm font-mono bg-gradient-to-br from-[hsl(220_15%_15%)]  to-[hsl(220_15%_15%_/0.5)] rounded-lg border border-[hsl(180_100%_50%_/0.3)] text-[hsl(0_0%_95%)] hover:border-[hsl(180_100%_50%_/0.6)] hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
                        Embedded Systems
                      </span>
                      <span className="px-4 py-2 text-sm font-mono bg-gradient-to-br from-[hsl(220_15%_15%)]  to-[hsl(220_15%_15%_/0.5)] rounded-lg border border-[hsl(180_100%_50%_/0.3)] text-[hsl(0_0%_95%)] hover:border-[hsl(180_100%_50%_/0.6)] hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
                        Real-Time Systems
                      </span>
                      <span className="px-4 py-2 text-sm font-mono bg-gradient-to-br from-[hsl(220_15%_15%)]  to-[hsl(220_15%_15%_/0.5)] rounded-lg border border-[hsl(180_100%_50%_/0.3)] text-[hsl(0_0%_95%)] hover:border-[hsl(180_100%_50%_/0.6)] hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
                        GitHub Actions
                      </span>
                        <span className="px-4 py-2 text-sm font-mono bg-gradient-to-br from-[hsl(220_15%_15%)]  to-[hsl(220_15%_15%_/0.5)] rounded-lg border border-[hsl(180_100%_50%_/0.3)] text-foreground hover:border-[hsl(180_100%_50%_/0.6)] hover:shadow-lg hover:shadow-[hsl(180_100%_50%_/0.2)] transition-all duration-300 hover:scale-105">
                        CI/CD Pipelines
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience 2: Codify */}
            <div className="animate-fade-in-up" style={{ animationDelay: `0.15s` }}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[hsl(180_100%_50%_/0.2)] via-[hsl(140_100%_50%_/0.2)] to-[hsl(180_100%_50%_/0.2)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                <div className="relative glass-card p-8 md:p-10 hover:border-[hsl(180_100%_50%_/0.6)] hover:shadow-2xl hover:shadow-[hsl(180_100%_50%_/0.2)] transition-all duration-500 md:ml-20 hover:-translate-y-1 rounded-2xl">
                  {/* Enhanced Timeline dot */}
                  <div className={`absolute -left-20 top-10 w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(140 100% 50%_/0.3)] to-[hsl(180_100%_50%_/0.1)] border-2 border-[hsl(180_100%_50%_/0.6)] hidden md:flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg shadow-[hsl(180_100%_50%_/0.5)] transition-all duration-300`}>
                    <Briefcase className={`h-6 w-6 ${colorMap.secondary.text}`} />
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                        <h3 className="text-2xl md:text-3xl font-bold text-[hsl(0_0%_95%)]">Front-End Developer</h3>
                        <div className="flex items-center gap-2 text-sm text-[hsl(0_0%_60%)] px-3 py-1 bg-muted/50 rounded-lg">
                          <Calendar className="h-4 w-4" />
                          <span className="font-mono">Jan 2025 - Present</span>
                        </div>
                      </div>
                      <p className={`text-xl font-bold ${colorMap.secondary.text} text-glow`}>Codify</p>
                    </div>

                    <p className="text-base md:text-lg text-[hsl(0_0%_95%)] leading-relaxed">
                      Built responsive front-end components and improved site UX for internal applications, focusing on performance optimization.
                    </p>

                    <div className="flex flex-wrap gap-3 cursor-pointer">
                      <span className="px-4 py-2 text-sm font-mono bg-gradient-to-br from-[hsl(220_15%_15%)]  to-[hsl(220_15%_15%_/0.5)] rounded-lg border border-[hsl(180_100%_50%_/0.3)] text-foreground hoverborder-[hsl(180_100%_50%_/0.6)] hover:shadow-lg hover:shadow-[hsl(180_100%_50%_/0.2)] transition-all duration-300 hover:scale-105">
                        React
                      </span>
                      <span className="px-4 py-2 text-sm font-mono bg-gradient-to-br from-[hsl(220_15%_15%)]  to-[hsl(220_15%_15%_/0.5)]rounded-lg border border-[hsl(180_100%_50%_/0.3)] text-foreground hover:border-[hsl(180_100%_50%_/0.6)] hover:shadow-lg hover:shadow-[hsl(180_100%_50%_/0.2)] transition-all duration-300 hover:scale-105">
                        Tailwindcss
                      </span>
                      <span className="px-4 py-2 text-sm font-mono bg-gradient-to-br from-[hsl(220_15%_15%)]  to-[hsl(220_15%_15%_/0.5)] rounded-lg border border-[hsl(180_100%_50%_/0.3)] text-foreground hover:border-[hsl(180_100%_50%_/0.6)] hover:shadow-lg hover:shadow-[hsl(180_100%_50%_/0.2)] transition-all duration-300 hover:scale-105">
                        UI/UX Design
                      </span>
                      <span className="px-4 py-2 text-sm font-mono bg-gradient-to-br from-[hsl(220_15%_15%)]  to-[hsl(220_15%_15%_/0.5)] rounded-lg border border-[hsl(180_100%_50%_/0.3)] text-foreground hover:border-[hsl(180_100%_50%_/0.6)] hover:shadow-lg hover:shadow-[hsl(180_100%_50%_/0.2)] transition-all duration-300 hover:scale-105">
                        Performance Optimization
                      </span>
                    </div>
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

export default ExperienceComponent