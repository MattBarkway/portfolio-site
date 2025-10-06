"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  description?: string;
  text: string;
  github_url?: string;
  image?: string;
  url?: string;
};

export default function ProjectDetails({
  title,
  description,
  text,
  github_url,
  image,
  url,
}: Props) {
  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.4 }}
      className="mt-6 rounded-lg border-gray-700 bg-gray-800 p-6 shadow text-white flex flex-col gap-4"
    >
      {/* Optional project image */}
      {image && (
        <img
          src={image}
          alt={`${title} screenshot`}
          className="w-full rounded-lg object-cover"
        />
      )}

      <h3 className="text-2xl font-bold">{title}</h3>

      {description && <p className="text-gray-300 italic">{description}</p>}

      <p className="text-gray-200">{text}</p>

      {/* Links */}
      <div className="flex gap-4 mt-2">
        {github_url && (
          <a
            href={github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1 bg-gray-700 rounded hover:bg-gray-600 text-white text-sm font-medium"
            title="View on GitHub"
          >
            <img src="/github.png" alt="GitHub" className="h-5 w-5" />
            GitHub
          </a>
        )}

        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1 bg-gray-700 rounded hover:bg-gray-600 text-white text-sm font-medium"
            title="View deployed project"
          >
            🔗 Take a look
          </a>
        )}
      </div>
    </motion.div>
  );
}
