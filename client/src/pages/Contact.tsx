import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 min-h-[70vh] items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-oswald text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-8">
            Let's <span className="text-stroke text-transparent">Collaborate</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-lg leading-relaxed">
            I am currently available for internships and freelance production roles. 
            Ready to bring leadership, technical skill, and creative vision to your next project.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-secondary flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-mono text-xs text-muted-foreground uppercase mb-1">Email</div>
                <a href="mailto:evanbrewer117@gmail.com" className="font-oswald text-2xl hover:text-primary transition-colors">
                  evanbrewer117@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-secondary flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-mono text-xs text-muted-foreground uppercase mb-1">Phone</div>
                <div className="font-oswald text-2xl">
                  (201) 978-8221
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-secondary flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-mono text-xs text-muted-foreground uppercase mb-1">Base</div>
                <div className="font-oswald text-2xl">
                  Savannah, GA
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card border border-border p-8 md:p-12 relative"
        >
          <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-primary"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-primary"></div>

          <h2 className="font-oswald text-3xl font-bold uppercase mb-8">Send a Message</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase text-muted-foreground">Name</label>
                <Input className="bg-secondary border-border rounded-none h-12 focus:border-primary font-mono" placeholder="ENTER NAME" />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase text-muted-foreground">Email</label>
                <Input className="bg-secondary border-border rounded-none h-12 focus:border-primary font-mono" placeholder="ENTER EMAIL" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="font-mono text-xs uppercase text-muted-foreground">Subject</label>
              <Input className="bg-secondary border-border rounded-none h-12 focus:border-primary font-mono" placeholder="PROJECT INQUIRY" />
            </div>
            
            <div className="space-y-2">
              <label className="font-mono text-xs uppercase text-muted-foreground">Message</label>
              <Textarea className="bg-secondary border-border rounded-none min-h-[150px] focus:border-primary font-mono resize-none" placeholder="TYPE MESSAGE..." />
            </div>

            <Button className="w-full h-14 rounded-none bg-primary hover:bg-primary/90 text-primary-foreground font-oswald uppercase tracking-widest text-lg group">
              Transmit Message <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </motion.div>
      </div>
    </Layout>
  );
}
