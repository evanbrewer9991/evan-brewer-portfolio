import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: "01",
      title: "Dusty The Cowboy",
      role: "1st AD / Executive Producer",
      type: "Feature Film (Multi-Cam)",
      image: "/images/studio.jpg",
      desc: "Led production on a multicam shoot using an industry-standard sitcom stage. Directed cast and crew flow for a fictional talk show filmed in front of a live studio audience."
    },
    {
      id: "02",
      title: "Blood in the Gospel House",
      role: "Co-Director / Producer",
      type: "Horror Short",
      image: "/images/bts_production.jpg",
      desc: "Led a 40+ person crew from development through post-production. Independently raised the full budget and managed complex practical SFX and stunt coordination."
    },
    {
      id: "03",
      title: "The Bro",
      role: "Co-Director / Writer",
      type: "TV Pilot",
      image: "/images/film_set.jpg",
      desc: "Co-directed a multi-camera TV pilot on a professional sitcom stage. Managed blocking, timing, and coordination across multiple camera units for precise comedic delivery."
    },
    {
      id: "04",
      title: "A Convenient Day To Die",
      role: "Producer / EP",
      type: "Short Film",
      image: "/images/red_camera.jpg",
      desc: "Oversaw all aspects of development and production from concept to completion. Managed financing, casting, crew hiring, and equipment sourcing."
    }
  ];

  return (
    <Layout>
      <div className="mb-16">
        <h1 className="font-oswald text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-4">
          Production <span className="text-primary">Log</span>
        </h1>
        <p className="font-mono text-muted-foreground max-w-xl border-l-2 border-primary pl-4">
          A curated selection of narrative and commercial work.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-24">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-border pt-12"
          >
            {/* Meta Column */}
            <div className="lg:col-span-3 flex flex-col justify-between h-full">
              <div>
                <div className="font-mono text-4xl text-muted-foreground/20 font-bold mb-4">
                  {project.id}
                </div>
                <div className="font-mono text-xs text-primary uppercase tracking-widest mb-2">
                  {project.type}
                </div>
                <div className="font-mono text-sm text-muted-foreground">
                  {project.role}
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-9">
              <div className="relative aspect-video bg-secondary overflow-hidden mb-8 group-hover:shadow-[0_0_30px_rgba(217,37,37,0.15)] transition-shadow duration-500">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                />
                
                {/* Hover Overlay Info */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="bg-background/90 backdrop-blur-sm border border-primary px-6 py-3 flex items-center gap-2">
                    <span className="font-oswald uppercase tracking-widest">View Case Study</span>
                    <ArrowUpRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h2>
                <p className="text-muted-foreground max-w-md leading-relaxed text-lg">
                  {project.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Layout>
  );
}
