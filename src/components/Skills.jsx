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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, -5, 0],
                transition: {
                  duration: 0.3,
                  rotate: {
                    repeat: 0,
                    duration: 0.5
                  }
                }
              }}
              className="p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 
                         flex flex-col items-center gap-2 cursor-pointer transform-gpu"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.5 }
                }}
              >
                <skill.icon className={`text-3xl sm:text-4xl ${skill.color}`} />
              </motion.div>
              <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
