import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Film, Users, DollarSign } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col justify-center mb-24">
        <div className="absolute top-0 right-0 font-mono text-xs text-muted-foreground opacity-30 hidden md:block">
          SCENE: 01<br />
          TAKE: 01<br />
          FRAME: 00:00:00
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="font-oswald text-[12vw] md:text-[8vw] leading-[0.85] font-bold uppercase tracking-tighter mb-6 text-foreground mix-blend-difference">
            Evan<br />
            <span className="text-stroke text-transparent hover:text-primary transition-colors duration-500">Brewer</span>
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16 border-l-4 border-primary pl-6 md:pl-8 ml-2">
            <div className="max-w-xl">
              <p className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed mb-8">
                Director, Writer, and Producer crafting immersive narratives. 
                Co-Founder of <span className="text-foreground font-medium">Bando Productions</span>.
                Specializing in script-to-screen development and large-scale production management.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/projects">
                  <Button size="lg" className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground font-oswald uppercase tracking-widest text-lg px-8 py-6">
                    View Portfolio <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="rounded-none border-border hover:bg-secondary hover:text-secondary-foreground font-oswald uppercase tracking-widest text-lg px-8 py-6">
                    Contact Me
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="hidden md:block mb-2">
              <div className="font-mono text-sm text-primary mb-2">CURRENT STATUS</div>
              <div className="text-lg font-oswald uppercase">OPEN FOR INTERNSHIPS</div>
              <div className="text-sm text-muted-foreground">NETFLIX / PARAMOUNT / A24</div>
            </div>
          </div>
        </motion.div>

        {/* Background Image Element */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40vw] h-[60vh] opacity-20 z-0 hidden lg:block grayscale contrast-125 pointer-events-none">
          <img 
            src="/images/film_set.jpg" 
            alt="Film Set" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-background via-transparent to-transparent"></div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="mb-24">
        <div className="flex items-end justify-between mb-12 border-b border-border pb-4">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground">Selected Works</h2>
          <Link href="/projects">
            <span className="font-mono text-sm text-primary cursor-pointer hover:underline mb-2">VIEW ALL PROJECTS_</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <Link href="/projects">
            <div className="group cursor-pointer">
              <div className="relative aspect-video overflow-hidden mb-4 bg-secondary">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-multiply"></div>
                <img 
                  src="/images/studio.jpg" 
                  alt="Dusty The Cowboy" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 z-20 bg-background/90 px-3 py-1 font-mono text-xs text-primary uppercase">
                  Feature Film
                </div>
              </div>
              <h3 className="text-3xl font-oswald font-bold uppercase mb-1 group-hover:text-primary transition-colors">Dusty The Cowboy</h3>
              <p className="font-mono text-sm text-muted-foreground">1st AD / Executive Producer</p>
            </div>
          </Link>

          {/* Project 2 */}
          <Link href="/projects">
            <div className="group cursor-pointer md:mt-16">
              <div className="relative aspect-video overflow-hidden mb-4 bg-secondary">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-multiply"></div>
                <img 
                  src="/images/bts_production.jpg" 
                  alt="Blood in the Gospel House" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 z-20 bg-background/90 px-3 py-1 font-mono text-xs text-primary uppercase">
                  Horror Short
                </div>
              </div>
              <h3 className="text-3xl font-oswald font-bold uppercase mb-1 group-hover:text-primary transition-colors">Blood in the Gospel House</h3>
              <p className="font-mono text-sm text-muted-foreground">Co-Director / Producer / Writer</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Stats / Skills Section */}
      <section className="mb-24 bg-card border border-border p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          <div className="flex flex-col gap-4">
            <Users className="h-12 w-12 text-primary mb-2" />
            <h3 className="text-2xl font-oswald font-bold uppercase">Leadership</h3>
            <p className="text-muted-foreground leading-relaxed">
              Managed 40+ person crews across multiple departments. 
              Expertise in conflict resolution, team building, and on-set adaptability.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <Film className="h-12 w-12 text-primary mb-2" />
            <h3 className="text-2xl font-oswald font-bold uppercase">Production</h3>
            <p className="text-muted-foreground leading-relaxed">
              End-to-end oversight from script to screen. 
              Proficient in Movie Magic Scheduling, budgeting, and location logistics.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <DollarSign className="h-12 w-12 text-primary mb-2" />
            <h3 className="text-2xl font-oswald font-bold uppercase">Financing</h3>
            <p className="text-muted-foreground leading-relaxed">
              Independently raised full production budgets. 
              Managed investor outreach, crowdfunding strategies, and financial planning.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
