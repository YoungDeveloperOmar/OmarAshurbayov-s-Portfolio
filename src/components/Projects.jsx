import { Github, ExternalLink } from "lucide-react";

const ProjectsComponent = () => {
    const projects = [
    {
      title: 'Drone Control Software',
      description: 'Developed autonomous drone software using C to enhance flight functionality, including navigation algorithms and real-time system control.',
      tech: ['C', 'Embedded Systems', 'Real-Time Processing', 'Hardware Integration'],
      gradient: 'from-[hsl(180_100%_50%_/0.2)] to-[hsl(180_100%_50%_/0.2)]',
      githubLink: 'https://github.com/YoungDeveloperOmar/DroneControl',
      externalLink: 'https://dronecontrol-demo.site',
    },
    {
      title: 'Real Estate Database',
      description: 'Designed and implemented a comprehensive database system for property management using Python and SQL, with version control via GitHub.',
      tech: ['Python', 'SQL', 'Database Design', 'GitHub', 'Data Modeling'],
      gradient: 'from-[hsl(180_100%_50%_/0.2)] to-[hsl(180_100%_50%_/0.2)]',
      githubLink: 'https://github.com/Austin2gitgub/Real-Estate-DB-CS425',
      externalLink: 'https://realestate-demo.site',
    },
    {
      title: 'Codify Front-End',
      description: 'Built responsive React components and improved UX for internal applications, focusing on performance optimization and modern design patterns.',
      tech: ['React', 'JavaScript', 'UI/UX', 'Performance', 'Responsive Design'],
      gradient: 'from-[hsl(180_100%_50%_/0.2)] to-[hsl(180_100%_50%_/0.1)]',
      githubLink: 'https://github.com/YoungDeveloperOmar/CodifyFrontend',
      externalLink: 'https://codify-demo.site',
    },
  ];

  return (
    <section id="projects" className="relative bg-[hsl(220_15%_15%_/0.3)]">
        <div className="container mx-auto px-4">
            {/* Header */}
            <div className="lg:mx-20 space-y-12 ">
                <div className="animate-fade-in-up space-y-2">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                        <span className="text-[hsl(180_100%_50%)] font-mono">#</span>
                        <span className="gradient-text">projects</span>
                    </h2>
                    <div className="h-1 w-32 bg-linear-to-r from-[hsl(180_100%_50%)] via-[hsl(140_100%_50%)] to-[hsl(180_100%_50%)] rounded-full" />
                </div>


                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            {/* Animated gradient background */}
                            <div className={`absolute -inset-1 bg-linear-to-br ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl`} />
                            
                            <div className="relative h-full glass-card overflow-hidden hover:border-[hsl(180_100%_50%_/0.6)] transition-all duration-500 hover:shadow-2xl hover:shadow-hsl(180_100%_50%_/0.2)]/ hover:-translate-y-2">
                            {/* Gradient overlay on hover */}
                            <div className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                            <div className="relative p-8 space-y-6 h-full flex flex-col">
                                {/* Project Header */}
                                <div className="space-y-3">
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="text-2xl font-bold text-[hsl(0_0%_95%)] group-hover:gradient-text transition-all duration-300">
                                    {project.title}
                                    </h3>
                                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[hsl(0_0%_95%)]">
                                    {/* <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-9 w-9 hover:bg-[hsl(180_100%_50%_/0.2)] hover:text-[hsl(180_100%_50%)] transition-all cursor-pointer flex items-center justify-center rounded-xl"
                                    >
                                        <Github className="h-6 w-6" />
                                    </a> */}
                                    {/* <a
                                        href={project.externalLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-9 w-9 hover:bg-[hsl(180_100%_50%_/0.2)] hover:text-[hsl(180_100%_50%)] transition-all flex items-center justify-center cursor-pointer rounded-full"
                                    >
                                        <ExternalLink className="h-6 w-6" />
                                    </a> */}
                                    </div>
                                </div>
                                </div>

                                {/* Project Description */}
                                <p className="text-base text-[hsl(0_0%_95%)] leading-relaxed grow">
                                {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-[hsl(180_100%_50%_/0.1)] cursor-pointer">
                                {project.tech.map((tech, techIndex) => (
                                    <span
                                    key={techIndex}
                                    className="px-3 py-1.5 text-xs font-mono bg-linear-to-br from-[hsl(220_15%_15%)] to-[hsl(220_15%_15%/0.5)] rounded-lg border border-[hsl(180_100%_50%_/0.3)] text-[hsl(0_0%_95%)] hover:border-primary/60 hover:shadow-lg hover:shadow-[hsl(180_100%_50%_/0.2)] transition-all duration-300"
                                    >
                                    {tech}
                                    </span>
                                ))}
                                </div>
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
    </section>
  )
}

export default ProjectsComponent