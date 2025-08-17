'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Sparkles, 
  Globe, 
  Database, 
  Cloud, 
  Layers,
  Zap,
  Cpu,
  Server,
  Shield,
  FileCode
} from 'lucide-react';

const TechStack = () => {
  const technologies = [
    { name: "HTML", icon: Code, color: "from-orange-500 to-red-500" },
    { name: "CSS", icon: Palette, color: "from-blue-500 to-blue-600" },
    { name: "Tailwind", icon: Sparkles, color: "from-cyan-500 to-blue-500" },
    { name: "JavaScript", icon: FileCode, color: "from-yellow-500 to-orange-500" },
    { name: "Next.js", icon: Globe, color: "from-gray-800 to-gray-900" },
    { name: "Python", icon: Cpu, color: "from-blue-600 to-blue-700" },
    { name: "Django", icon: Server, color: "from-green-600 to-green-700" },
    { name: "MySQL", icon: Database, color: "from-blue-500 to-blue-600" },
    { name: "PostgreSQL", icon: Database, color: "from-blue-600 to-blue-700" },
    { name: "Supabase", icon: Cloud, color: "from-green-500 to-green-600" },
    { name: "Bootstrap", icon: Layers, color: "from-purple-500 to-purple-600" },
    { name: "Shadcn", icon: Shield, color: "from-gray-600 to-gray-700" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="pt-40 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Tech Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build modern, scalable, and high-performance web solutions. 
            Our expertise spans the full development stack, from frontend to backend.
          </p>
        </div>

        {/* Technologies Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="group relative"
              variants={itemVariants}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center cursor-pointer group-hover:scale-105"
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {tech.name}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Banner */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your project and see how our technical expertise can bring your vision to life. 
            We're ready to create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-xl hover:bg-gray-100 transition-all duration-300 hover:shadow-lg"
            >
              Start Your Project
            </a>
            <a
              href="https://wa.me/08100098339"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              WhatsApp Chat
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
