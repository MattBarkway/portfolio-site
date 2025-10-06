"use client";

import { motion } from "framer-motion";

type ProjectCardProps = {
  show: boolean;
  title: string;
    description: string;
  onClick: () => void;
};

export default function ProjectCard({
  show,
  title,
                                        description,
  onClick,
}: ProjectCardProps) {
  if (!show) return null;

  return (
    <motion.div
      layout
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="cursor-pointer rounded-xl border border-gray-700 bg-gray-800 p-4 shadow-md text-white hover:bg-gray-700/20"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-300">{description}</p>
    </motion.div>
  );
}
