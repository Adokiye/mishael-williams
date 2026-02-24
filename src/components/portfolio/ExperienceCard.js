import React from 'react';
import { motion } from 'framer-motion';

const ExperienceCard = ({ experience, index }) => {
  const handleClick = () => {
    if (experience.link) {
      window.open(experience.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={handleClick}
      className={`border border-grey-border dark:border-[#2a2f3a] rounded-lg p-8 mb-6 hover:border-grey-text dark:hover:border-[#4b5565] transition-all duration-300 bg-white dark:bg-[#121722] ${
        experience.link ? 'cursor-pointer' : ''
      }`}
    >
      <h3 className="text-2xl font-semibold mb-3 text-black dark:text-[#f3f4f6]">
        {experience.title}
      </h3>
      <p className="text-grey-text dark:text-[#b8c2d1] mb-4 leading-relaxed">
        {experience.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {experience.tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-grey-whitesmoke dark:bg-[#1b2231] border border-grey-border dark:border-[#2a2f3a] rounded-full text-sm text-black dark:text-[#d4d8df]"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-grey-text2 dark:text-[#8a94a4] text-sm">{experience.year}</p>
    </motion.div>
  );
};

export default ExperienceCard;
