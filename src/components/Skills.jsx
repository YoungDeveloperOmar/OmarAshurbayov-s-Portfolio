
import {ReactOriginal, JavascriptOriginal, PythonOriginal
    , MysqlOriginal, COriginal, Html5Original, TailwindcssOriginal
    ,   GitOriginal, GithubactionsOriginal
} from 'devicons-react'

import {Database} from 'lucide-react'
import { useState } from 'react';

const SkillsComponent = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const skills = [
    { name: 'React', icon: <ReactOriginal size={64} className='text-[hsl(180_100%_50%)] group-hover:scale-125 transition-transform duration-300 filter group-hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]' />, category: 'Frontend' },
    { name: 'JavaScript', icon: <JavascriptOriginal size={64} className='text-[hsl(180_100%_50%)] group-hover:scale-125 transition-transform duration-300 filter group-hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]' />, category: 'Backend' },
    { name: 'Python', icon: <PythonOriginal size={64} className='text-[hsl(180_100%_50%)] group-hover:scale-125 transition-transform duration-300 filter group-hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]' />, category: 'Backend' },
    { name: 'SQL', icon: <Database size={64} strokeWidth={1.5} className='text-[hsl(180_100%_50%)] group-hover:scale-125 transition-transform duration-300 filter group-hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]' />, category: 'Backend' },
    { name: 'C', icon: <COriginal size={64} className='text-[hsl(180_100%_50%)] group-hover:scale-125 transition-transform duration-300 filter group-hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]' />, category: 'Backend' },
    { name: 'HTML/CSS', icon: <Html5Original size={64} className='text-[hsl(180_100%_50%)] group-hover:scale-125 transition-transform duration-300 filter group-hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]' />, category: 'Frontend' },
    { name: 'Tailwindcss', icon: <TailwindcssOriginal size={64} className='text-[hsl(180_100%_50%)] group-hover:scale-125 transition-transform duration-300 filter group-hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]' />, category: 'Frontend' },
    { name: 'Git', icon: <GitOriginal size={64} className='text-[hsl(180_100%_50%)] group-hover:scale-125 transition-transform duration-300 filter group-hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]' />, category: 'Tools' },
    { name: 'CI/CD', icon: <GithubactionsOriginal size={64} className='text-[hsl(180_100%_50%)] group-hover:scale-125 transition-transform duration-300 filter group-hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]' />, category: 'Tools' },
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Tools'];

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

    return (
        <section className="py-20 relative bg-[hsl(220_15%_15%_/0.3)]" id="skills">
            <div className="container mx-auto px-4 space-y-4">
                {/* Section Header */}
                <div className='md:mx-20 space-y-12'>
                    <div className=" animate-fade-in-up space-y-2">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                            <span className="text-[hsl(180_100%_50%)] font-mono">#</span>
                            <span className="gradient-text">skills</span>
                        </h2>
                        <div className="h-1 w-32 bg-gradient-to-r from-[hsl(180_100%_50%)] via-[hsl(140_100%_50%)] to-[hsl(180_100%_50%)] rounded-full" />
                    </div>
                </div>
                

                 {/* Categories */}
                <div className="flex flex-wrap justify-center gap-4 mt-5 animate-fade-in-up text-[hsl(0_0%_95%)]" style={{ animationDelay: '0.1s' }}>
                    {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-3 text-sm md:text-base font-mono glass-card hover:border-[hsl(180_100%_50%_/0.6)] hover:shadow-lg hover:shadow-[hsl(180_100%_50%_/0.2)] transition-all duration-300 hover:scale-105 cursor-pointer ${
                        activeCategory === category ? 'border-[hsl(180_100%_50%)] shadow-lg shadow-[hsl(180_100%_50%_/0.3)]' : ''
                        }`}
                    >
                        {category}
                    </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 md:mx-20 mx-auto mt-10">
                    {filteredSkills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                    <div
                        key={index}
                        className="relative group animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.05}s` }}
                    >
                        <div className="absolute -inset-1 bg-gradient-to-br from-[hsl(180_100%_50%_/0.2)] via-[hsl(140_100%_50%/0.2)] to-[hsl(180_100%_50%_/0.2)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
                        <div className="relative glass-card p-8 hover:border-[hsl(180_100%_50%_/0.6)] transition-all duration-300 hover:shadow-2xl hover:shadow-[hsl(180_100%_50%_/0.2)] hover:-translate-y-2 cursor-pointer h-full">
                        <div className="space-y-4 text-center">
                            <div className="flex items-center justify-center"> 
                                {skill.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-[hsl(0_0%_95%)] group-hover:text-[hsl(180_100%_50%)] transition-colors">
                                    {skill.name}
                                </h3>
                                <p className="text-xs text-[hsl(0_0%_60%)] font-mono mt-2 px-2 py-1 bg-[hsl(220_15%_15%/0.5)] rounded inline-block">
                                    {skill.category}
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    );
                    })}
                </div>
            </div>
        </section>
    )
}

export default SkillsComponent