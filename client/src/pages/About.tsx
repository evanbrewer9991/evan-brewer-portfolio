import Layout from "@/components/Layout";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    "Directing", "Producing", "Screenwriting", "1st AD", 
    "Movie Magic Scheduling", "Budgeting", "Crew Management",
    "Adobe Premiere Pro", "DaVinci Resolve", "RED Cameras"
  ];

  const education = {
    school: "Savannah College of Art and Design (SCAD)",
    degree: "Bachelor of Fine Arts",
    date: "Expected June 2027",
    location: "Savannah, GA"
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="w-full md:w-1/3">
            <div className="aspect-[3/4] bg-secondary relative overflow-hidden border-b-4 border-primary">
              <img 
                src="/images/red_camera.jpg" 
                alt="Evan Brewer" 
                className="w-full h-full object-cover grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h1 className="font-oswald text-4xl font-bold uppercase text-white">Evan Brewer</h1>
                <p className="font-mono text-primary text-sm mt-1">DIRECTOR / PRODUCER</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 flex flex-col justify-center">
            <h2 className="font-oswald text-5xl md:text-7xl font-bold uppercase mb-8 text-foreground">
              The <span className="text-primary">Vision</span>
            </h2>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                I am a multi-hyphenate filmmaker with a passion for building worlds and leading teams. 
                As the Co-Founder of <span className="text-foreground font-bold">Bando Productions</span>, 
                I have cultivated a deep understanding of the entire filmmaking ecosystem—from the initial spark of an idea 
                to the final color grade.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My approach to production is grounded in "Cinematic Brutalism"—stripping away the unnecessary to reveal 
                the raw, authentic core of a story. Whether I'm directing a multi-cam sitcom or producing a horror short, 
                I bring the same level of intensity, precision, and leadership to every frame.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing my BFA at SCAD, I am seeking internship opportunities at major studios where I can 
                apply my entrepreneurial spirit and technical expertise to large-scale productions.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <h3 className="font-oswald text-2xl font-bold uppercase mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-primary block"></span>
              Technical Arsenal
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge key={skill} variant="outline" className="rounded-none border-border px-4 py-2 font-mono text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors cursor-default">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-oswald text-2xl font-bold uppercase mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-primary block"></span>
              Education
            </h3>
            <div className="border-l-2 border-border pl-6 py-2">
              <h4 className="font-bold text-xl text-foreground">{education.school}</h4>
              <p className="text-primary font-mono mt-1">{education.degree}</p>
              <div className="flex justify-between mt-4 text-sm text-muted-foreground font-mono">
                <span>{education.location}</span>
                <span>{education.date}</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-border" />

        <div>
          <h3 className="font-oswald text-2xl font-bold uppercase mb-8">Experience Highlights</h3>
          
          <div className="space-y-8">
            <div className="group">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">Bando Productions</h4>
                <span className="font-mono text-sm text-muted-foreground">Apr 2025 - Present</span>
              </div>
              <p className="text-primary font-mono text-sm mb-3">CO-FOUNDER & PRODUCER</p>
              <p className="text-muted-foreground max-w-3xl">
                Lead a full-service indie production company specializing in script-to-screen development. 
                Oversee creative development, investor outreach, budgeting, and physical production across multiple projects.
              </p>
            </div>

            <div className="group">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">Goblin Cowboy</h4>
                <span className="font-mono text-sm text-muted-foreground">Jun 2025 - Nov 2025</span>
              </div>
              <p className="text-primary font-mono text-sm mb-3">1ST AD / EXECUTIVE PRODUCER</p>
              <p className="text-muted-foreground max-w-3xl">
                Led production on "Dusty The Cowboy", a multi-cam feature filmed with a live studio audience. 
                Coordinated switcher booth cues, lighting, and sound for seamless live execution.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}
