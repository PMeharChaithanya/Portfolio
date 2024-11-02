import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/me.png';

const About = () => {
  return (
    <section id="about" className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-blue-500/5 to-black/0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate AI/ML Engineer and Full Stack Developer with expertise in deep learning and neural networks. My journey in tech has been driven by a fascination with artificial intelligence and its potential to solve complex real-world problems.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Currently pursuing my degree at SRMIST, I've developed a strong foundation in machine learning algorithms, computer vision, and natural language processing. I'm also deeply interested in blockchain technology and its applications in decentralized systems. My diverse skill set spans from training neural networks to building scalable web applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-blue-500/10 rounded-full text-blue-400 text-sm border border-blue-500/20"
              >
                TensorFlow
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-purple-500/10 rounded-full text-purple-400 text-sm border border-purple-500/20"
              >
                PyTorch
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-green-500/10 rounded-full text-green-400 text-sm border border-green-500/20"
              >
                Blockchain
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative w-[200px] sm:w-[250px] h-[200px] sm:h-[250px] mx-auto lg:ml-auto mt-8 lg:mt-0"
          >
            <div className="w-full h-full rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 z-10 rounded-full" />
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-500"
                style={{
                  objectPosition: '50% 20%'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
