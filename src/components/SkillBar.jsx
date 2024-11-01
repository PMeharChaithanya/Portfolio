import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ skill, level }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-white">{skill}</span>
        <span className="text-gray-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
        />
      </div>
    </div>
  );
};

export default SkillBar;
