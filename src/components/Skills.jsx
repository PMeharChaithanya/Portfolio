import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiJavascript, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiGit,
  SiPython,
  SiTensorflow,
  SiScikitlearn,
  SiOpencv,
  SiKeras,
  SiPytorch,
  SiJupyter,
  SiGooglecolab
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
    { name: 'React', icon: SiReact, color: 'text-blue-400' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
    { name: 'Git', icon: SiGit, color: 'text-orange-500' },
    { name: 'Python', icon: SiPython, color: 'text-yellow-300' },
    { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-500' },
    { name: 'Scikit-learn', icon: SiScikitlearn, color: 'text-blue-500' },
    { name: 'OpenCV', icon: SiOpencv, color: 'text-green-400' },
    { name: 'Keras', icon: SiKeras, color: 'text-red-500' },
    { name: 'PyTorch', icon: SiPytorch, color: 'text-orange-600' },
    { name: 'Jupyter', icon: SiJupyter, color: 'text-orange-400' },
    { name: 'Google Colab', icon: SiGooglecolab, color: 'text-yellow-400' }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex flex-col items-center">
                  <skill.icon className={`w-12 h-12 ${skill.color} mb-4`} />
                  <h3 className="text-lg font-medium text-white">{skill.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
