"use client"

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button"
import { Download, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg mb-8">
            Hi, I'm [Your Name], a passionate MVP developer specializing in Next.js and Supabase. With years of experience in rapid prototyping and agile development, I help startups and businesses bring their ideas to life quickly and efficiently. My expertise lies in creating scalable, user-friendly applications that are ready for market validation.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" asChild>
              <a href="#contact">
                <Calendar className="mr-2 h-4 w-4" /> Book Now
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/path-to-your-resume.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;