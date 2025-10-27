import { Github, Linkedin, Mail } from 'lucide-react';

const FooterComponent = () => {
    return(
        <footer className="py-8 border-t border-[hsl(220_15%_20%_/0.5)] bg-[hsl(220_20%_6%_/0.5)] backdrop-blur-sm text-[hsl(0_0%_95%)]">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-[hsl(0_0%_60%)] font-mono">
                © 2025 Omar Ashurbayov
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
                <a
                href="https://github.com/YoungDeveloperOmar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[hsl(220_15%_15%_/0.5)] flex items-center justify-center hover:bg-[hsl(180_100%_50%/0.2)] hover:text-[hsl(180_100%_50%)] transition-colors"
                >
                <Github className="h-5 w-5" />
                </a>
                <a
                href="https://www.linkedin.com/in/omar-ashurbayov/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[hsl(220_15%_15%_/0.5)] flex items-center justify-center hover:bg-[hsl(180_100%_50%/0.2)] hover:text-[hsl(180_100%_50%)] transition-colors"
                >
                <Linkedin className="h-5 w-5" />
                </a>
                <a
                href="mailto:omar.ashurbekov11@gmail.com"
                className="w-10 h-10 rounded-lg bg-[hsl(220_15%_15%_/0.5)] flex items-center justify-center hover:bg-[hsl(180_100%_50%/0.2)] hover:text-[hsl(180_100%_50%)] transition-colors"
                >
                <Mail className="h-5 w-5" />
                </a>
            </div>
            </div>
        </div>
        </footer>
    )
}

export default FooterComponent