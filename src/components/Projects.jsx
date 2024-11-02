import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: " Simplification Platform",
      description: "A comprehensive tax management platform designed for Indian citizens, featuring tax calculators, AI assistance, and investment recommendations. Built to simplify tax filing and financial planning.",
      tech: ["React", "Node.js", "AI/ML", "MongoDB", "Express", "TailwindCSS"],
      features: [
        "Tax calculators for businesses & individuals",
        "AI-powered tax chatbot",
        "Investment recommendations",
        "Tax calendar & reminders",
        "Community forum",
        "Contract generation system"
      ],
      liveLink: "https://tax-haven-ky52302dx-meharchaithanya1-gmailcoms-projects.vercel.app"
    },
    {
      title: "XOR Encryption & Decryption",
      description: "A secure encryption tool that implements XOR cipher algorithm for text encryption and decryption. Features a user-friendly interface with real-time encryption capabilities.",
      tech: ["React", "JavaScript", "Cryptography", "Binary Operations"],
      features: [
        "Real-time text encryption",
        "Secure XOR implementation",
        "Custom key generation",
        "Binary data handling"
      ],
      liveLink: "https://pmeharchaithanya.github.io/COA-MINOR-PROJECT/"
    },
    {
      title: "Real Time Chat Application",
      description: "A modern chat application enabling instant communication between users. Built with real-time websocket technology for seamless message delivery.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      features: [
        "Real-time messaging",
        "User authentication",
        "Message history",
        "Online status indicators"
      ],
      liveLink: "https://pmeharchaithanya.github.io/real-time-chat-app/"
    },
    {
      title: "E-commerce Website",
      description: "A full-featured e-commerce platform with product management, shopping cart functionality, and secure payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Payment API"],
      features: [
        "Product catalog",
        "Shopping cart system",
        "User authentication",
        "Order management"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">
        Featured Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="rounded-lg overflow-hidden bg-primary-darker border border-white/10 hover:border-white/20 transition-all duration-300"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-white">
                {project.title}
              </h3>
              <p className="mb-4 text-gray-300 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">KEY FEATURES</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm">{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 rounded-full text-xs bg-white/5 text-gray-300 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.liveLink && (
                <div className="flex gap-4 pt-4 border-t border-white/10">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors text-sm flex items-center gap-2"
                  >
                    <span>Live Demo</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
